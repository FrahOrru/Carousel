var contatPage = 0;
var partenza = 5;
var incremento = 5;

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
     <button onclick="prev('${a.container}')" class="btn"> < </button>
     <div id="items">
     ${arrayElem.map(SingleItem).join('')}
     </div>
     <button onclick="next('${a.container}')" class="btn"> > </button>
     </div>
    `
    slide(a.container);
}

//BUTTONS

function next(id){
    var container = document.getElementById(id);
    var slides = container.querySelectorAll('.singleItem');
    if(partenza<=slides.length)
    {
        partenza += incremento;
        slide(id);
    }
}

function prev(id){
    if(partenza>5)
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
    for(i=0;i<(partenza-5);i++){
        vettore[i].style.display = 'none';
    }
    for(i=(partenza-5); i < partenza;i++){
        vettore[i].style.display='inline-block';
    }
}