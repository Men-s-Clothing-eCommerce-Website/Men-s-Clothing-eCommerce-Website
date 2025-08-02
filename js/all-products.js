function fetchProductData() {
  return axios.get("https://api.escuelajs.co/api/v1/products")
    .then(response => {
      console.log("response", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}

function createCard(product) {
  const card = document.createElement("div");
  card.className = "card"

  const img = document.createElement("img")
  img.src = product.images
  img.alt = product.title
  card.appendChild(img)

  const name = document.createElement("h3");
  name.textContent = product.title;
  card.appendChild(name)

  const price = document.createElement("p")
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  const rating = document.createElement("p");
  rating.textContent = `Rating: ★★★★☆`; 
  card.appendChild(rating);

  return card;
}



/*function fetchcategoriesData() {
        return axios.get("https://api.escuelajs.co/api/v1/categories")
        .then((response) => {
                return response.data
                })
        .catch((error) => {
                console.log(error)
        })
  }
*/


function displayProducts() {
  const productsContainer = document.querySelector('.cards');
  productsContainer.innerHTML = '';

  fetchProductData().then(products => {
    const cards = products.map(product => createCard(product));

  
    

displayProducts();

