var NumPass2 = 0; //this variable is later used to keep track of the current article rating for article 2

//this function loads the json file data once the user has clicked the view button.
//the result is displayed in the table.
function LoadArt2(){
    var output = document.getElementById('output2');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/1enr2m"; 
    //online source ^
    var url ="data/article-2.json";
    //commenting out the current url and uncommenting the first one will use an online json source.
    //the load time is much slower though.

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
            var jarticle2 = JSON.parse(ajaxhttp.responseText);
            console.log(jarticle2);

            output.innerHTML = jarticle2.title
            + '<BR>' + '<BR>' + jarticle2.body[0].model.text
            + '<BR>' + '<BR>' + jarticle2.body[1].model.url
            + '<BR>' + '<BR>' + jarticle2.body[2].model.text
            + '<BR>' + '<BR>' + jarticle2.body[3].model.text
            + '<BR>' + '<BR>' + jarticle2.body[4].model.url
            + '<BR>' + '<BR>' + jarticle2.body[5].model.text
            + '<BR>' + '<BR>' + jarticle2.body[6].model.url
            + '<BR>' + '<BR>' + jarticle2.body[7].model.text
            ;
            
        } 
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 2"
    btnarticle2h.disabled = false;
}

//this function hides the article.
//allows user to hide articles they do not want to see.
function HideArt2(){
    var output = document.getElementById('output2');
    output.innerHTML = "Article 2 goes here"
    btnarticle2h.disabled = true;
}

//I created a seperate json file to store the initial readings.
//this function loads the rating of the article using that file as a source.
function LoadRating2(){
    var output = document.getElementById('ratingOutput2');
    var ajaxhttp = new XMLHttpRequest()
    var url ="data/rating.json"

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
            var jratings = JSON.parse(ajaxhttp.responseText);

            console.log(jratings);

            output.innerHTML = jratings.body[1].rating;
            
            NumPass2 = jratings.body[1].rating;
        } 
    };
    ajaxhttp.send(null);
}

//this function updates the current article rating.
//The POST does not work how it should be.
//Might be able to get it working if I have more time.
function UpdateArt2(){
    var newRate = document.getElementById("rating2").value;
    console.log(newRate); 
    if (newRate > 5 || newRate < 0){
        alert("Please rate between 0 to 5");
        return;
    } else if(newRate == ""){
        var newRate = NumPass2;
        console.log(newRate);
    } else {
        console.log(newRate);
        var output = document.getElementById('ratingOutput2');
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

