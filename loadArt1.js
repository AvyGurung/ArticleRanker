//function btn_Article1(){

    var output = document.getElementById('output');
    var ajaxhttp = new XMLHttpRequest();
    //var url ="https://api.myjson.com/bins/u7xvi";
    var url ="../data/article-1.json";

    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type","application/json");
    ajaxhttp.onreadystatechange = function (){
        if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){

            var jcontent = JSON.parse(ajaxhttp.responseText);
            console.log(jcontent);
            console.log(ajaxhttp);

            var output = document.getElementById('output');
            output.innerHTML = jcontent.title
            + '<BR>' + '<BR>' + jcontent.body[0].model.text
            + '<BR>' + '<BR>' + jcontent.body[1].model.text
            + '<BR>' + '<BR>' + jcontent.body[2].model.url
            + '<BR>' + '<BR>' + jcontent.body[3].model.text
            + '<BR>' + '<BR>' + jcontent.body[4].model.text
            + '<BR>' + '<BR>' + jcontent.body[5].model.items[0]
            + '<BR>' + '<BR>' + jcontent.body[5].model.items[1]
            ;
            
        }
    }
    ajaxhttp.send(null);

    output.innerHTML = "Loading article 1"
//}

