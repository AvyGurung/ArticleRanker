function LoadArt1(){
    var output = document.getElementById('output1');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/u7xvi";
    //online source ^
    var url ="../data/article-1.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){

            var jarticle1 = JSON.parse(ajaxhttp.responseText);
            console.log(jarticle1);
            console.log(ajaxhttp);

            var output = document.getElementById('output1');
            output.innerHTML = jarticle1.title
            + '<BR>' + '<BR>' + jarticle1.body[0].model.text
            + '<BR>' + '<BR>' + jarticle1.body[1].model.text
            + '<BR>' + '<BR>' + jarticle1.body[2].model.url
            + '<BR>' + '<BR>' + jarticle1.body[3].model.text
            + '<BR>' + '<BR>' + jarticle1.body[4].model.text
            + '<BR>' + '<BR>' + jarticle1.body[5].model.items[0]
            + '<BR>' + '<BR>' + jarticle1.body[5].model.items[1]
            ;
                
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 1"
    btnarticle1h.disabled = false;
}

function HideArt1(){
    var output = document.getElementById('output1');
    output.innerHTML = "Article 1 goes here"
    btnarticle1h.disabled = true;
}


