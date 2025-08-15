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
  container.className = "container";

  const imgDiv = document.createElement("div");
  imgDiv.className = "product-image";
  const img = document.createElement("img");
  img.src = product.image || "placeholder.jpg";
  img.alt = product.title || "Product image";
  imgDiv.appendChild(img);
  container.appendChild(imgDiv);


  const productdetailsdiv = document.createElement("div")
  productdetailsdiv.className =  "productdetailsdiv"
  container.appendChild(productdetailsdiv)



  const title = document.createElement("h2");
  title.textContent = product.title;
 productdetailsdiv.appendChild(title);

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = `$${product.price.toFixed(2)}`;
  productdetailsdiv.appendChild(price);


  const titledescription = document.createElement("h3")
   titledescription.textContent = "Description"
   productdetailsdiv.appendChild(titledescription)
   


  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;
  productdetailsdiv.appendChild(description);

const rating = document.createElement("p");
  const rate = Math.round(product.rating?.rate || 0);
  rating.textContent = "★".repeat(rate) + "☆".repeat(5 - rate) + ` (${product.rating?.rate?.toFixed(1) || "N/A"})`;
productdetailsdiv.appendChild(rating);


   const quantity = document.createElement("div")
   quantity.className = "quantity"
   productdetailsdiv.appendChild(quantity)


  const quantitytitle = document.createElement("h3")
  quantitytitle.textContent = "Quantity"
  quantity.appendChild( quantitytitle)

  

  const numberdiv = document.createElement("div")
  numberdiv.className = "numberdiv"
  quantity.appendChild(numberdiv)



  const minus = document.createElement("button")
  minus.textContent = "-"
  numberdiv.appendChild(minus)

  let count = 1
 
const number = document.createElement("span")
   number.textContent = count
   numberdiv.appendChild(number) 

  const plus = document.createElement("button")
  plus.textContent = "+"
  numberdiv.appendChild(plus)

  
  

   minus.addEventListener("click",()=> {
   count--
    number.textContent = count
   })
   
    plus.addEventListener("click",()=> {
   count++
    number.textContent = count
   })

  
   

  const btn = document.createElement("button");
  btn.id = "add-to-cart-btn";
  btn.textContent = "Add to Cart";

  btn.addEventListener("click", () => {
    alert(`Added "${product.title}" to cart! (number of products: ${count} product)`);
    location.assign("all-products.html");
  });
  productdetailsdiv.appendChild(btn);

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
