function Carousel(option){

    var a = option;
    var arrayElem = a.fetchCards();

    function SingleItem(item) {
        return `
        <div class="singleItem">
        <div>
        <img src="${item.image}"></img>
        </div>
        <div>
        <p> titolo: ${item.title}</p>
        <p> tipo: ${item.type}</p>
        </div>
        </div>`
    }

    document.getElementById(a.container).innerHTML = 
    `
     <div id="Carou">
     <div class="header"> 
     <h4 class="title">${a.title}</h4>
     <h5 class="subtitile"> ${a.subtitle} </h5> 
     </div>
     <button onclick="prev()" class="btn"> < </button>
     <div id="items">
     ${arrayElem.map(SingleItem).join('')}
     </div>
     <button onclick="next()" class="btn"> > </button>
     </div>`

    

     slide(a.container)
        
    
        
}

//BUTTONS
function Visbuttons(){
    var container = document.getElementById('#Carou') || document.body;
    var btnArr = container.querySelectorAll('.btn');
    for(var i = 0 ; i < btnArr.length; i++ )  {
        btnArr[i].style.opacity = '1'; 
    }
}

//slider
function slide(containerID){
    var container = document.getElementById(containerID) || document.body;
    var slides = container.querySelectorAll('.singleItem');

    for(var i = 0 ; i < slides.length; i++) {
        if(i>5){
            slides[i].style.display = 'none';
        }
    }
}

function next(){
    var container = document.getElementById(containerID) || document.body;
    var slides = container.querySelectorAll('.singleItem');

    for(var i = 5 ; i < (i+=5); i++) {
        slides[i].style.display = 'inline-block';
    }
}


