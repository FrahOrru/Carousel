function Carousel(option){
    var a = option;
    var d = document.getElementById(a.container);

    //title and subtitle carousel
    var title = document.createElement("h4");
    var text = document.createTextNode(a.title);
    d.appendChild(title);
    title.appendChild(text);

    var subtitle = document.createElement("h5");
    var textsub = document.createTextNode(a.subtitle);
    d.appendChild(subtitle);
    subtitle.appendChild(textsub);

    //single item
    var arrayElem = a.fetchCards();
 
    arrayElem.forEach(element => {

        var tag = document.createElement("div");
        tag.setAttribute('id', "item")
        d.appendChild(tag);

        var e = document.getElementById("item");

        var picture = document.createElement("img")
        picture.setAttribute('src', element.image)
        e.appendChild(picture);

        // var content = document.createElement("div");
        // tag.setAttribute('id', "content")
        // e.appendChild(content);

        // var f = document.getElementById("content");

        var title = document.createTextNode(element.title);
        e.appendChild(title);

    });
   
  
        
  
     
}

