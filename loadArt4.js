function LoadArt4(){
    var output = document.getElementById('output4');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/s9uq6"; 
    //online source ^
    var url ="data/article-4.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        try{

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
            
        } catch (e) {
            console.warn("couldn't load ratings ");
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 4"
    btnarticle4h.disabled = false;
}

function HideArt4(){
    var output = document.getElementById('output4');
    output.innerHTML = "Article 4 goes here"
    btnarticle4h.disabled = true;
}

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
        } 
    };
    ajaxhttp.send(null);
}

