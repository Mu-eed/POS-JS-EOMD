let controllers = JSON.parse(localStorage.getItem('cards'));

//     JSON.parse(localStorage.getItem('controllers')) : [
//         {
//             id:1,
//             name: "SCUF Impact Cherry Blossom",
//             price: 3000,
//             img: "https://i.postimg.cc/L5G4xyzV/scuf-impact-cb.webp",
//         },
//         {
//             id: 2,
//             name: "SCUF Impact Energon",
//             price: 3000,
//             img: "https://i.postimg.cc/g0Kv1hth/ps4-scuf-custom-impact-energon.webp", 
//         },
//         {
//             id: 3,
//             name: "SCUF Impact Nebula",
//             price: 2670,
//             img: "https://i.postimg.cc/0yRDQnLm/ps4-scuf-custom-impact-nebula-2.jpg",
//         },
//         {
//             id: 4,
//             name: "SCUF Impact Atlanta FaZe",
//             price: 3350,
//             img: "https://i.postimg.cc/HnTWRJKr/atlantafaze.webp", 
//         },
//         {
//             id: 5,
//             name: "SCUF Impact COD League",
//             price: 2500,
//             img: "https://i.postimg.cc/dVf2FvJs/ps4-scuf-custom-impact-league-cdl.webp",
//         },
//         {
//             id: 6,
//             name: "SCUF Impact Dr. Disrespect",
//             price: 2725,
//             img: "https://i.postimg.cc/fyssSb0j/dsirespct.webp",
//         },
// ];
console.log(controllers);
controllers.forEach((item) => {
    document.querySelector("tbody").innerHTML +=
    ` <tr>
        <th scope="row">1</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><a href="#" class="btn btn-info-edit">Edit</a></td>
        <td><a href="#" class="btn btn-dark-delete">Delete</a></td>
      </tr>
     `
});