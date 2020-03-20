function LoadArt3(){
    var output = document.getElementById('output3');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/19jf9q"; 
    //online source ^
    var url ="data/article-3.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        try{

            var jarticle3 = JSON.parse(ajaxhttp.responseText);
            console.log(jarticle3);

            output.innerHTML = jarticle3.title
            + '<BR>' + '<BR>' + jarticle3.body[0].model.text
            + '<BR>' + '<BR>' + jarticle3.body[1].model.text
            + '<BR>' + '<BR>' + jarticle3.body[2].model.text
            + '<BR>' + '<BR>' + jarticle3.body[3].model.text
            + '<BR>' + '<BR>' + jarticle3.body[4].model.text
            + '<BR>' + '<BR>' + jarticle3.body[5].model.text
            + '<BR>' + '<BR>' + jarticle3.body[6].model.text
            + '<BR>' + '<BR>' + jarticle3.body[7].model.text
            + '<BR>' + '<BR>' + jarticle3.body[8].model.text
            ;
            
        } catch (e) {
            console.warn("couldn't load ratings ");
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 3"
    btnarticle3h.disabled = false;
}

function HideArt3(){
    var output = document.getElementById('output3');
    output.innerHTML = "Article 3 goes here"
    btnarticle3h.disabled = true;
}

function LoadRating3(){
    var output = document.getElementById('ratingOutput3');
    var ajaxhttp = new XMLHttpRequest()
    var url ="data/rating.json"

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
            var jratings = JSON.parse(ajaxhttp.responseText);

            console.log(jratings);

            output.innerHTML = jratings.body[2].rating;
        } 
    };
    ajaxhttp.send(null);
}

