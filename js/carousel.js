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
        </div>
        </div>`
    }
    document.getElementById(a.container).innerHTML = 
    `
     <div class="header"> 
     <h4 class="title">${a.title}</h4>
     <h5 class="subtitile"> ${a.subtitle} </h5> 
     </div>
     <button> < </button>
     <div id="items">
     ${arrayElem.map(SingleItem).join('')}
     </div>
     <button> > </button>`

    
     
}

