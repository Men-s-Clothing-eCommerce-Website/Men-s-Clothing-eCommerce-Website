function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log("Products:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}


function createCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.addEventListener("click", () => {
    location.assign(`product-details.html?id=${product.id}`);
  });

  const img = document.createElement("img");
  img.src = product.image || '';
  img.alt = product.title;
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.title;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${product.rating?.rate || 'N/A'}`;
  card.appendChild(rating);

  return card;
}





function displayAllProducts() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  fetchProductData().then((products) => {
    const cards = products.map(product => createCard(product));
    cardsContainer.append(...cards);
  });
}

displayAllProducts();


 /*document.getElementById("Categories")
 document.getElementById("featured")
 document.getElementById("Price")

 function filteringCategories =  (products) { 

 const products = fetchProductData.filter((Categories) => {

  if (Categories.toLowerCase() === "products") {
    else 
  }

 })

 }
 */