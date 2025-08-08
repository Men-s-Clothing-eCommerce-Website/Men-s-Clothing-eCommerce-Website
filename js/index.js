function fetchCategoriesData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => {
      const categories = response.data.slice(0, 4);  
      console.log("Categories:", categories);
      return categories;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}


function createCategoryCard(category) {
  const card = document.createElement("div");
  card.className = "category-card";

  const img = document.createElement("img");
  img.src = category.image || '';
  img.alt = category.name;
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = category.name;
  card.appendChild(name);

  return card;
}


function displayCategories() {
  const container = document.querySelector(".Categories");
  if (!container) {
    console.error("Container element '.Categories' not found.");
    return;
  }

  container.innerHTML = "";

  fetchCategoriesData().then((categories) => {
    const cards = categories.map(category => createCategoryCard(category));
    container.append(...cards);
  });
}

displayCategories();









function fetchProductData() {
   return axios.get('https://fakestoreapi.com/products')
    .then(response => {
      const categories = response.data.slice(0,6);  
      console.log("Categories:", categories);
      return categories;
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
    location.assign(`products-details.html?id=${product.id}`);
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

 