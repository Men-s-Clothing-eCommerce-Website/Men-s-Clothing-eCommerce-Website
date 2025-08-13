// Fetch products (same as before)
function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}

// Create a product card for categories (modified name)
function createCategoryCard(product) {
  const cardCategory = document.createElement("div");
  cardCategory.className = "card-category"; // changed class name

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  cardCategory.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.title;
  cardCategory.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  cardCategory.appendChild(price);

  return cardCategory;
}

// Display 4 products from different categories
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

// Initial homepage load
displayHomeCategories();











// --- Second block remains exactly the same ---

function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return [];
    });
}

// Create a product card
function createCard(product) {
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
  rating.textContent = `Rating: ${product.rating?.rate || 'N/A'}`;
  card.appendChild(rating);

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

// Display products (limit 6 for homepage)
function displayAllProducts(category = "all", price = "all", featured = "all", limit = 6) {
  const cardsContainer = document.querySelector(".cardHome");

  fetchProductData().then(products => {
    const productsWithFeatured = products.map((p, i) => ({
      ...p,
      featured: i % 3 === 0 ? "new" : (i % 3 === 1 ? "best" : "")
    }));

    let filtered = productsWithFeatured
      .filter(p => category === "all" || p.category === category)
      .filter(p => featured === "all" || p.featured === featured);

    if (price === "low") filtered.sort((a, b) => a.price - b.price);
    if (price === "high") filtered.sort((a, b) => b.price - a.price);

    if (limit) filtered = filtered.slice(0, limit);

    cardsContainer.innerHTML = "";
    cardsContainer.append(...filtered.map(createCard));
  });
}

function filteringCategories() {
  const categories = document.getElementById("Categories");

  fetchProductData().then(products => {
    [...new Set(products.map(p => p.category))].forEach(c => {
      const option = document.createElement("option");
      option.value = c;
      option.textContent = c;
      categories.appendChild(option);
    });
  });
}

["Categories", "Price", "featured"].forEach(id => {
  document.getElementById(id).addEventListener("change", () => {
    const category = document.getElementById("Categories").value;
    const price = document.getElementById("Price").value;
    const featured = document.getElementById("featured").value;

    displayAllProducts(category, price, featured, null);
  });
});

filteringCategories();
displayAllProducts();
