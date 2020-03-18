let article1 = 
                `[
                    {
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "body": [
                        {
                            "type": "heading",
                            "model": {
                            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            }
                        },
                        {
                            "type": "paragraph",
                            "model": {
                            "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                            }
                        },
                        {
                            "type": "image",
                            "model": {
                            "url": "https://picsum.photos/640/420/?random",
                            "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                            "height": "420",
                            "width": "640"
                            }
                        },
                        {
                            "type": "paragraph",
                            "model": {
                            "text": "Nulla tortor nunc, posuere eu purus eget, ultricies ullamcorper sapien. Duis viverra lectus eget dolor gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce molestie, odio at mattis auctor, mauris lectus luctus risus, eget pulvinar tortor erat a est."
                            }
                        },
                        {
                            "type": "paragraph",
                            "model": {
                            "text": "Mauris accumsan maximus enim, eleifend consectetur turpis molestie malesuada. Proin vulputate dui non mattis venenatis. Nam ornare sapien eget nibh placerat, faucibus dapibus lacus consectetur."
                            }
                        },
                        {
                            "type": "list",
                            "model": {
                            "type": "unordered",
                            "items": [
                                "Vestibulum viverra viverra ullamcorper",
                                "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                            ]
                            }
                        }
                        ]
                    }
                    
                ]`
                console.log(JSON.parse(article1))


var myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    title: 'title',
    body: 'cors',
    text: '',
    cache: 'default'};

    let myRequest = new Request('./data/article-1.json')

    let checkFetch = function(response){
        if (!response.ok) {
            throw Error (response.statusText + " - " + response.url);
        }
    }
    fetch(myRequest)
        .then(checkFetch)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data.articles);
        })     
        .catch(function(err){
            console.log("Error");
            console.log(err);
        });

