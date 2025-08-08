function fetchProductData(id) {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return null;
    });
}

function createProductDetails(product) {
  const container = document.createElement("div");
  container.className = "product-details-container";

  const imgDiv = document.createElement("div");
  imgDiv.className = "product-image";
  const img = document.createElement("img");
  img.src = product.images?.[0] || "";
  img.alt = product.title;
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
