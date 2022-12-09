    
    let controllers = JSON.parse(localStorage.getItem('cards')) ?
    JSON.parse(localStorage.getItem('cards')) : localStorage.setItem('cards', 
    JSON.stringify([
        {
            id:1,
            name: "SCUF Impact Cherry Blossom",
            price: 3000,
            img: "https://i.postimg.cc/L5G4xyzV/scuf-impact-cb.webp",
        },
        {
            id: 2,
            name: "SCUF Impact Energon",
            price: 3000,
            img: "https://i.postimg.cc/g0Kv1hth/ps4-scuf-custom-impact-energon.webp", 
        },
        {
            id: 3,
            name: "SCUF Impact Nebula",
            price: 2670,
            img: "https://i.postimg.cc/0yRDQnLm/ps4-scuf-custom-impact-nebula-2.jpg",
        },
        {
            id: 4,
            name: "SCUF Impact Atlanta FaZe",
            price: 3350,
            img: "https://i.postimg.cc/HnTWRJKr/atlantafaze.webp", 
        },
        {
            id: 5,
            name: "SCUF Impact COD League",
            price: 2500,
            img: "https://i.postimg.cc/dVf2FvJs/ps4-scuf-custom-impact-league-cdl.webp",
        },
        {
            id: 6,
            name: "SCUF Impact Dr. Disrespect",
            price: 2725,
            img: "https://i.postimg.cc/fyssSb0j/dsirespct.webp",
        },
])
    ) ;
function display(){
    controllers.forEach((item)=>{
       document.querySelector('#cards').innerHTML +=
        `
        <div class="col">
        <div class="card shadow-sm"> 
        <img src="${item.img}">
        <div class="card-body">
        <h4 class="card-text">${item.name}</h4>
        <h5 class="card-text">R${item.price}</h5>
        <div class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-sm btn-primary">Checkout</button>
        </div>
        </div>
        </div>
        </div>`
    })
}
display();