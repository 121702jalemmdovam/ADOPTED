// const product = document.getElementById("Apiproducts");

// function getPro() {
//     axios.get('https://dummyjson.com/products')
//         .then(res => {
//             db = res.data;
//             console.log(db);
//             db.map((item) => {
//                 let card = document.createElement('div');
//                 card.className = "cardBox";
//                 card.innerHTML = `
//                     <img src="${item.image}" alt="${item.title}">
//                     <h2>${item.title}</h2>
//                     <p>${item.description}</p>
//                     <p>${item.price} $</p>
//                     </div>
//                     <button onclick="addToCart(${item.id})">Add to cart</button>
//                 `;
//                 product.appendChild(card);
//             });
//         });
// }
// window.onload = () => {
//     getPro();
// };