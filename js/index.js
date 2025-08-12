








function fetchProductData() {
  return axios.get('https://fakestoreapi.com/products')
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

 const description = document.createElement("p");
  description.className = "description";  
  description.textContent = product.description;
  card.appendChild(description);


  const rating = document.createElement("p");
  rating.textContent = `Rating: ${product.rating?.rate || 'N/A'}`;
  card.appendChild(rating);

  return card;
}




function displayAllProducts(filterCategory = "all") {
  const cardsContainer = document.querySelector(".cardHome");
  cardsContainer.innerHTML = "";

  fetchProductData().then(products => {
    const filtered = products.filter(p => filterCategory === "all" || p.category === filterCategory);
    const limited = filtered.slice(0, 6);  // Take only the first 6 products
    cardsContainer.append(...limited.map(createCard));
  });
}

function filteringCategories() {
      const categoryMake = document.getElementById("Categories");

      fetchProductData().then(products => {
        const uniqueCategories = [...new Set(products.map(p => p.category))];
        uniqueCategories.forEach(category => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category;
          categoryMake.appendChild(option);
        });
      });

      categoryMake.addEventListener("change", e => displayAllProducts(e.target.value));
    }

    displayAllProducts();
    filteringCategories();


 