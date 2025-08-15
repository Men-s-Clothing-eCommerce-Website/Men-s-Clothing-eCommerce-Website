
function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}


function createCategoryCard(product) {
  const cardCategory = document.createElement("div");
  cardCategory.className = "card-category"; 

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  cardCategory.appendChild(img);

 
  const category = document.createElement("p");
  category.textContent = product.category
  cardCategory.appendChild(category);


  const name = document.createElement("h3");
  name.textContent = product.title;
  cardCategory.appendChild(name);

  


  return cardCategory;
}


function displayHomeCategories(limit = 4) {
  const cardsContainer = document.querySelector(".cardss");

  fetchProductData().then(products => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    const homeProducts = [];

    for (let i = 0; i < limit && i < uniqueCategories.length; i++) {
      const category = uniqueCategories[i];
      const productInCategory = products.find(p => p.category === category);
      if (productInCategory) homeProducts.push(productInCategory);
    }

    cardsContainer.innerHTML = "";
    cardsContainer.append(...homeProducts.map(createCategoryCard)); // use new function
  });
}


displayHomeCategories();







function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}


function createCardHome(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.addEventListener("click", () => {
    location.assign(`products-details.html?id=${product.id}`);
  });

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.title;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = product.description;
  card.appendChild(description);

const rating = document.createElement("p");
  const rate = Math.round(product.rating?.rate || 0);
  rating.textContent = "★".repeat(rate) + "☆".repeat(5 - rate) + ` (${product.rating?.rate?.toFixed(1) || "N/A"})`;
  card.appendChild(rating)

  const category = document.createElement("p");
  category.textContent = `Category: ${product.category || 'N/A'}`;
  card.appendChild(category);

  const quickPreview = document.createElement("button");
  quickPreview.className = "quick-preview";
  quickPreview.textContent = "Quick View";
  quickPreview.style.display = "none";
  card.appendChild(quickPreview);

  card.addEventListener("mouseenter", () => {
    quickPreview.style.display = "block";
  });
  card.addEventListener("mouseleave", () => {
    quickPreview.style.display = "none";
  });

  return card;
}

function displayAllProducts(limit = 6) {
  const cardsContainer = document.querySelector(".cardHome");

  fetchProductData().then(products => {
    let displayed = limit ? products.slice(0, limit) : products;
    cardsContainer.innerHTML = "";
    cardsContainer.append(...displayed.map(createCardHome));
  });
}

displayAllProducts();