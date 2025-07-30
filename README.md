Instructions for running the front-end project

waxuu ka kooban yahay 5 pages 


home page :   First Impressions Matter! ✅ Hero Banner: Large cinematic image or video of a well-dressed traveler in a city, desert, or mountains. ✅ Tagline: "Wear the Journey. Live the Adventure." ✅ Call to Action Buttons: "Shop Now" & "Explore Collections". ✅ Trending Products Section: Displays best-selling & new arrivals dynamically.


product-dedails :  Make It Stand Out! ✅ Large Product Image Gallery: Zoom-in effect when hovered. ✅ Product Details Section: Material & Sustainability Info – Eco-friendly options highlighted. Size Selector & Fit Guide – Users choose sizes with a size chart reference. Customer Reviews – Displays star ratings & fake user reviews from API. ✅ “Add to Cart” Button: Smooth animation + confirmation message.


<!-- FILTERS SECTION (for Product Listing) -->
<!-- 
  Purpose:
  - Allow users to filter products by category.
  - Allow users to sort products by price, new arrivals, or bestseller status.
  
  JS Responsibilities:
  - Listen for 'change' events on #categoryFilter and #sortFilter dropdowns.
  - On change, fetch or filter the product data accordingly.
  - Trigger the product listing to update based on the selected filters/sort.
-->
<section id="filters">
  <label for="categoryFilter">Filter by Category:</label>
  <select id="categoryFilter">
    <option value="">All</option> <!-- Show all categories -->
    <option value="shirts">Shirts</option>
    <option value="jackets">Jackets</option>
    <option value="accessories">Accessories</option>
    <option value="shoes">Shoes</option>
    <option value="pants">Pants</option>
  </select>

  <label for="sortFilter">Sort by:</label>
  <select id="sortFilter">
    <option value="">Default</option> <!-- No specific sort -->
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
    <option value="new">New Arrivals</option>
    <option value="bestseller">Bestsellers</option>
  </select>
</section>

<!-- PRODUCT LISTING GRID -->
<!-- 
  Purpose:
  - Display all products in a grid layout.
  - Each product card shows image, name, price, rating, and SALE tag if discounted.
  - Provide hover effect to show quick preview.
  - Clicking on a product opens detailed product view.

  JS Responsibilities:
  - Render product cards dynamically inside #product-grid using fetched API data.
  - Apply filtering & sorting results here.
  - Add hover event listeners for quick preview.
  - Add click event listeners to open product details.
-->
<section id="product-listing">
  <div id="product-grid">
    <!-- Product cards will be dynamically injected here by JS -->
  </div>
</section>

<!-- PRODUCT DETAIL SECTION (hidden by default) -->
<!-- 
  Purpose:
  - Show detailed information about a selected product.
  - Large product image with zoom on hover.
  - Thumbnail images that update the main image on click.
  - Display product title, price, and material & sustainability info (highlight eco-friendly products).
  - Size selector with dynamically populated sizes.
  - Link to size fit guide.
  - Display customer reviews with star ratings, loaded from API or JSON.
  - "Add to Cart" button with smooth animation and confirmation message.
  
  JS Responsibilities:
  - Populate all the above details dynamically when a product is selected.
  - Handle image zoom effect on hover for main product image.
  - Handle thumbnail image clicks to update main image.
  - Populate size options based on product data.
  - Load and render customer reviews inside #reviews-list.
  - Show/hide the product detail section and product listing accordingly.
  - Handle Add to Cart button click and show confirmation message.
-->
<section id="product-detail" style="display:none;">
  <div class="product-gallery">
    <img id="main-product-image" src="" alt="Product Image" />
    <div id="thumbnail-images">
      <!-- Thumbnails will be dynamically inserted here -->
    </div>
  </div>
  
  <div class="product-info">
    <h2 id="product-title">Product Title</h2>
    <p id="product-price">$0.00</p>
    
    <p id="product-material-info">
      <strong>Material & Sustainability Info:</strong> 
      <span id="material-text">Eco-friendly options highlighted here.</span>
    </p>
    
    <div id="size-selector">
      <label for="size-select">Select Size:</label>
      <select id="size-select">
        <option value="">Choose size</option>
        <!-- Size options will be dynamically populated here -->
      </select>
      <a href="#" id="fit-guide-link">Fit Guide</a>
    </div>

    <div id="customer-reviews">
      <h3>Customer Reviews</h3>
      <div id="reviews-list">
        <!-- Customer reviews with star ratings inserted here -->
      </div>
    </div>

    <button id="add-to-cart-btn">Add to Cart</button>
    <p id="add-to-cart-confirmation" style="display:none;">Added to cart!</p>
  </div>
</section>


page product listing page  : rowsing Experience ✅ Grid-Based Product Layout Displays product images, names, prices, and ratings. Uses https://fakeapi.platzi.com/ GET request to fetch & display data. ✅ Filtering & Sorting: Filter by category (shirts, jackets, accessories, shoes, pants). Sort by price (low to high, high to low), new arrivals, and bestsellers. ✅ Hover Effects: Show quick product preview when hovering. Highlight discounted items with a small "SALE" tag.

contact page : Simple form + social media links.


about page : The story behind "Nomad Fits" and the brand philosophy.