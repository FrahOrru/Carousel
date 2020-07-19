function Carousel(option){
    var a = option;
    var d = document.getElementById(a.container);

    var tag = document.createElement("div");
    tag.setAttribute('id', "item")
    d.appendChild(tag);

    var e = document.getElementById("item");
    var title = document.createElement("h4");
    var text = document.createTextNode(a.title);
    e.appendChild(title);
    title.appendChild(text);

    var subtitle = document.createElement("h5");
    var textsub = document.createTextNode(a.subtitle);
    e.appendChild(subtitle);
    subtitle.appendChild(textsub);
    
  
    
    

}