
var output = document.getElementById('output2');
var ajaxhttp = new XMLHttpRequest();
//var url ="https://api.myjson.com/bins/u7xvi";
var url ="../data/article-2.json";

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type","application/json");
ajaxhttp.onreadystatechange = function (){
    if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){

        var jarticle2 = JSON.parse(ajaxhttp.responseText);
        console.log(jarticle2);
        console.log(ajaxhttp);

        var output = document.getElementById('output2');
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