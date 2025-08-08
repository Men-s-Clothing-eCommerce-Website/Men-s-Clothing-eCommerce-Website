

function fetchProductData(id) {
  return axios.get(https://fakestoreapi.com/products/${id})
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error:", error);
      return null;
    });
}

 function ProductDetails(PRODUCT) {
   const Container = document.createElement("div")
    Container.class name "product-details-container"
    
  const img = document.createElement("img");
  img.src = product.image || '';
  img.alt = product.title;
  container.appendChild(img);
 
  const name = document.createElement("h3");
  name.textContent = product.title;
  container.appendChild(name);

const rating = document.createElement("p");
  rating.textContent = `Rating: ${product.rating?.rate || 'N/A'}`;
  container.appendChild(rating);
 
const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  container.appendChild(price);


const description = document.createElement("h3");
  description.textContent = product.title;
  container.appendChild(description);


 return container



let params = new URLSearchParams(document.location.search);
const productid =  params.get("id");
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




fetchProductData (productid) 