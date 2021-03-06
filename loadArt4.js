var NumPass4 = 0; //this variable is later used to keep track of the current article rating for article 4

//this function loads the json file data once the user has clicked the view button.
//the result is displayed in the table.
function LoadArt4(){
    var output = document.getElementById('output4');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/s9uq6"; 
    //online source ^
    var url ="data/article-4.json";
    //commenting out the current url and uncommenting the first one will use an online json source.
    //the load time is much slower though.

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {

            var jarticle4 = JSON.parse(ajaxhttp.responseText);
            console.log(jarticle4);

            output.innerHTML = jarticle4.title
            + '<BR>' + '<BR>' + jarticle4.body[0].model.text
            + '<BR>' + '<BR>' + jarticle4.body[1].model.text
            + '<BR>' + '<BR>' + jarticle4.body[2].model.items[0]
            + '<BR>' + '<BR>' + jarticle4.body[2].model.items[1]
            + '<BR>' + '<BR>' + jarticle4.body[2].model.items[2]
            + '<BR>' + '<BR>' + jarticle4.body[2].model.items[3]
            + '<BR>' + '<BR>' + jarticle4.body[3].model.text
            + '<BR>' + '<BR>' + jarticle4.body[4].model.items[0]
            + '<BR>' + '<BR>' + jarticle4.body[4].model.items[1]
            + '<BR>' + '<BR>' + jarticle4.body[5].model.text
            ;
            
        } 
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 4"
    btnarticle4h.disabled = false;
    Page=4;
}

//this function hides the article.
//allows user to hide articles they do not want to see.
function HideArt4(){
    var output = document.getElementById('output4');
    output.innerHTML = "Maecenas venenatis lorem ut erat dictum, sed varius est porta"
    btnarticle4h.disabled = true;
}

//I created a seperate json file to store the initial readings.
//this function loads the rating of the article using that file as a source.
function LoadRating4(){
    var output = document.getElementById('ratingOutput4');
    var ajaxhttp = new XMLHttpRequest()
    var url ="data/rating.json"

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
            var jratings = JSON.parse(ajaxhttp.responseText);

            console.log(jratings);

            output.innerHTML = jratings.body[3].rating;
            
            NumPass4 = jratings.body[3].rating;
        } 
    };
    ajaxhttp.send(null);
}

//this function updates the current article rating.
//The POST does not work how it should be.
//Might be able to get it working if I have more time.
function UpdateArt4(){
    var newRate = document.getElementById("rating4").value;
    console.log(newRate); 
    if (newRate > 5 || newRate < 0){
        alert("Please rate between 0 to 5");
        return;
    } else if(newRate == ""){
        var newRate = NumPass4;
        console.log(newRate);
    } else {
        console.log(newRate);
        var output = document.getElementById('ratingOutput4');
        var xhr = new XMLHttpRequest();
        var url = "receive.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
        var data = JSON.stringify({newRate});
        xhr.send(data);
        output.innerHTML = newRate;
        console.log(newRate);
    }
}

