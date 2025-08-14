// Fetch all products
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

// Display all products with filters
function displayAllProducts(category = "all", price = "all", featured = "all") {
  const cardsContainer = document.querySelector(".cards");

  fetchProductData().then(products => {
    // Add demo featured property dynamically
    const productsWithFeatured = products.map((p, i) => ({
      ...p,
      featured: i % 3 === 0 ? "new" : (i % 3 === 1 ? "best" : "")
    }));

    // Filter products
    let filtered = productsWithFeatured
      .filter(p => category === "all" || p.category === category)
      .filter(p => featured === "all" || p.featured === featured);

    // Sort by price
    if (price === "low") filtered.sort((a, b) => a.price - b.price);
    if (price === "high") filtered.sort((a, b) => b.price - a.price);

    // Render cards
    cardsContainer.innerHTML = "";
    cardsContainer.append(...filtered.map(createCard));
  });
}

// Populate category dropdown
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

// Event listeners for filters
["Categories", "Price", "featured"].forEach(id => {
  document.getElementById(id).addEventListener("change", () => {
    const category = document.getElementById("Categories").value;
    const price = document.getElementById("Price").value;
    const featured = document.getElementById("featured").value;
    displayAllProducts(category, price, featured);
  });
});

// Initial load
filteringCategories();
displayAllProducts();


document.addEventListener("scroll", () => {
  const btn = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});