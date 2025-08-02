function fetchProductData() {
  return axios.get("https://api.escuelajs.co/api/v1/products")
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

  const img = document.createElement("img");
  img.src = product.images[0] || '';
  img.alt = product.title;
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.title;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  const rating = document.createElement("p");
  rating.textContent = `Rating:`;
  card.appendChild(rating);

  return card;
}


/*function fetchCategoriesData() {
  return axios.get("https://api.escuelajs.co/api/v1/categories")
    .then(response => {
      console.log("Categories:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Categories fetch error:", error);
      return [];
    });
}
*/







function displayAllProducts() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  fetchProductData().then((products) => {
    products.forEach((product) => {
      cardsContainer.append(createCard(product));  
    });
  });
}

displayAllProducts();
