function LoadArt5(){
    var output = document.getElementById('output5');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/w0vu6"; 
    //online source ^
    var url ="../data/article-5.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){

            var jarticle5 = JSON.parse(ajaxhttp.responseText);
            console.log(jarticle5);
            console.log(ajaxhttp);

            var output = document.getElementById('output5');
            output.innerHTML = jarticle5.title
            + '<BR>' + '<BR>' + jarticle5.body[0].model.text
            + '<BR>' + '<BR>' + jarticle5.body[1].model.url
            + '<BR>' + '<BR>' + jarticle5.body[2].model.url
            + '<BR>' + '<BR>' + jarticle5.body[3].model.text
            ;
            
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 5"
    btnarticle5h.disabled = false;
}

function HideArt5(){
    var output = document.getElementById('output5');
    output.innerHTML = "Article 5 goes here"
    btnarticle5h.disabled = true;
}

