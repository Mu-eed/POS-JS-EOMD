let checkout = JSON.parse(localStorage.getItem('cards'));
console.log(checkout)
let tbody = document.querySelector('tbody')
Object.cards(checkout).forEach((item) => {
  if(checkout[item]){
    tbody.innerHTML +=
    `
    <tr>
    <th>${parseInt([item]) + 1}</th>
    <td><img src='${checkout[item].image}'></td>
    <td>${checkout[item].name}</td>
    <td>${checkout[item].price}</td>
    <td>${checkout[item].amount}</td>
    </tr>
    `
  }
})