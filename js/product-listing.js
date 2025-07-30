
function fetchProducts() {
  return axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=40")
    .then(response => {
  console.log("response", response.data);
  return response.data;
    })
    .catch(error => {
      console.log("error", error)
    });
}




// <div class="product-card">
//       <img src="{image}" alt="{name}" />
//       <div class="product-info">
//         <h3 class="product-name">{name}</h3>
//         <p class="price">${price}</p>
//         <p class="rating">Rating: {rating}</p>
//         <span class="sale-tag">SALE</span>
//       </div>
//     </div>


function createproduct(product) {
  console.log("Creating card for:", productdata);


const productCard = document.createElement("div")
productCard.className =""product-card"

 const img = document.createElement("img");
  img.src = productdata.imagel;
  img.alt = productdata.name
  productCard.append(img);

const productInfo = ducument.createElement("div"
productInfo.className =  "product-info"
productCard.append(productInfo)

const productName = ducument.createElement(h3)
productName.className = "product-name"
productName.textContent = productdata.productName
productInfo.append(productName)


const price = ducument.createElement(p)
price.className = "price"
price.textContent = productdata.price
productInfo.append(price)

const rating = ducument.createElement(p)
rating.className = "Rating"
ratinge.textContent = productdata.rating
productInfo.append(rating)

const saleTag =ducument.createElement(span)
saleTag.className = "sale-tag"
saleTag.textContent = productdata.saleTag
productInfo.append(saleTag)


return card

}


function displayproducts(){      
        
    const Container = document.querySelector(".products")
        cardsContainer.innerHTML = ""
       fetchProducts().then((currentproduct) =>
        cardsContainer.append(createproduct(currentproduct)))
       fetchProducts().then((products)=>{
                following.map((user)=>{
                       cardsContainer.append(createUsercard(user))

                })
        })
}





