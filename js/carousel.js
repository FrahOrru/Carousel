var contatPage = 0;
var partenza = 5;
var incremento = 5;

function Carousel(option){
    var a = option;
    var arrayElem = a.fetchCards();

    //single item cration
    function SingleItem(item) {
        return `
        <div class="singleItem">
        <div>
        <img src="${item.image}"></img>
        </div>
        <div>
        <p> Titolo: ${item.title}</p>
        <p> Tipo: ${item.type}</p>
        </div>
        </div>`
    }
    

    //carousel body
    document.getElementById(a.container).innerHTML = 
    `
     <div id="Carou">
     <div class="header"> 
     <h4 class="title">${a.title}</h4>
     <h5 class="subtitile"> ${a.subtitle} </h5> 
     </div>
     <button onclick="prev('${a.container}')" class="btn"> < </button>
     <div id="items">
     ${arrayElem.map(SingleItem).join('')} 
     </div>
     <button onclick="next('${a.container}')" class="btn"> > </button>
     </div>
    `
    slide(a.container);
}


//prev and next function for buttons 

function next(id){
    var container = document.getElementById(id);
    var slides = container.querySelectorAll('.singleItem');
    if(partenza<slides.length)
    {
        partenza += incremento;
        slide(id);
    }
}

function prev(id){
    if(partenza>incremento)
    {
        partenza-= incremento;
        slide(id);
    }
}


//slider

function slide(containerID){
    var container = document.getElementById(containerID);
    var slides = container.querySelectorAll('.singleItem');
    
    ciclo(partenza,slides.length,slides);
}

function ciclo(partenza, arrivo, vettore){
    for(i = partenza ; i < arrivo; i++){
        vettore[i].style.display = 'none';
    };
    for(i=0;i<(partenza-incremento);i++){
        vettore[i].style.display = 'none';
    }
    for(i=(partenza-incremento); i < partenza;i++){
        vettore[i].style.display='inline-block';
    }
}