function LoadArt2(){
    var output = document.getElementById('output2');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/1enr2m"; 
    //online source ^
    var url ="data/article-2.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        try{
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
            
        } catch (e) {
            console.warn("couldn't load ratings ");
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 2"
    btnarticle2h.disabled = false;
}

function HideArt2(){
    var output = document.getElementById('output2');
    output.innerHTML = "Article 2 goes here"
    btnarticle2h.disabled = true;
}

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
        } 
    };
    ajaxhttp.send(null);
}

