//this file does nothing
//planning on recalling this function to optimise my code if I have time
        var rat = 0;
        function FirstRat(){
            rat = 0;
        }
        function FirstRat(){
            rat = 1;
        }
        function FirstRat(){
            rat = 2;
        }
        function FirstRat(){
            rat = 3;
        }
        function FirstRat(){
            rat = 4;
        }
        

        function LoadRating (){
            console.log(rat);
            var output = document.getElementById('ratingOutput');
            var ajaxhttp = new XMLHttpRequest()
            var url ="data/rating.json"

            ajaxhttp.open("GET", url, true);
            ajaxhttp.setRequestHeader("content-type","application/json");
            ajaxhttp.onreadystatechange = function (){
                if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
                    var jratings = JSON.parse(ajaxhttp.responseText);
                    console.log(jratings);

                    output.innerHTML = jratings.body[rat].rating;
                } 
            };
            ajaxhttp.send(null);
        }

