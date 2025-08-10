function fetchProductData(id) {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return response.data;
    });
}

function createProductDetails(product) {
  const container = document.createElement("div");
  container.className = "product-details-container";

  const imgDiv = document.createElement("div");
  imgDiv.className = "product-image";
  const img = document.createElement("img");
  img.src = product.image || "placeholder.jpg";
  img.alt = product.title || "Product image";
  imgDiv.appendChild(img);
  container.appendChild(imgDiv);

  const title = document.createElement("h2");
  title.textContent = product.title;
  container.appendChild(title);

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = `$${product.price.toFixed(2)}`;
  container.appendChild(price);

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;
  container.appendChild(description);

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${product.rating?.rate || 'N/A'}`;
  container.appendChild(rating);

  const btn = document.createElement("button");
  btn.id = "add-to-cart-btn";
  btn.textContent = "Add to Cart";
  btn.addEventListener("click", () => {
    alert(`Added "${product.title}" to cart! (Functionality not implemented)`);
  });
  container.appendChild(btn);

  return container;
}

const params = new URLSearchParams(window.location.search);
const productid = params.get("id");

const container = document.getElementById("product-container");
container.textContent = "Loading product...";

if (!productid) {
  container.textContent = "No product ID provided.";
} else {
  fetchProductData(productid).then(product => {
    if (!product) {
      container.textContent = "Failed to load product.";
      return;
    }
    container.innerHTML = "";
    const details = createProductDetails(product);
    container.appendChild(details);
  });
}
