(async function () {
  // 1. Stil ve script yükleyici
  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // 2. jQuery ve Slick Slider'ı sırayla yükle
  try {
    if (typeof jQuery === "undefined") {
      await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
    }

    await loadCSS(
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    );
    await loadCSS(
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
    );
    await loadScript(
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    );
    await loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"
    );
    // Fancy Box
    await loadCSS(
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.css"
    );
    await loadScript(
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.umd.js"
    );
    $("head").append(`
      <style>
      /* Reset and Box Sizing */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root Font Size */
html {
  font-size: 16px;
}

/* CSS Variables */
:root {
  /* Grey Colors */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;

  /* Primary Colors */
  --primary-50: #a29dff;
  --primary-100: #645cff;
  --primary-200: #4f39f6;

  /* Green Colors*/
  --green-50: #00d492;
  --green-100: #00bc7d;
  --green-200: rgba(48, 209, 88, 0.24);
  --green-300: rgba(42, 173, 75, 0.2);
  --green-400: #30d158; /* DÜZELTİLDİ */

  /* Red Colors*/
  --red-50: #ff637e;
  --red-100: #ff2056;
  --red-200: rgba(255, 59, 48, 0.2);
  --red-300: #ff3b30;

  /* Base Colors */
  --black: #222;
  --white: #ffffff;

  /* Layout */
  --backgroundColor: var(--grey-50);
  --borderRadius-50: 0.6rem;
  --borderRadius-100: 1rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 900px;
  --view-width: 90vw;

  /* Shadows */
  --shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
}

/* Base Body */
body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: var(--textColor, var(--grey-700));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Typography */
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-weight: 600;
  font-size: 3rem;
  padding: 1rem;
  color: var(--grey-600);
  text-align: center;
  margin-top: 2rem;
}

ul {
  list-style: none;
}

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-200);
    padding: 1rem 2rem;
    color: white;
    transition: all 0.3s;
    transform: var(--transition);
    border-bottom: 1px solid var(--grey-300);
    /* position: fixed; */
    width: 100%;
    z-index: 1;
  }
  
  .navbar-title {
    color: var(--grey-600);
    font-size: 2rem;
    font-weight: 600;
  }
  
  .navbar-title span {
    color: var(--primary-100);
  
  }
  
  .navbar-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--grey-600);
  transition: var(--transition);
  cursor: pointer;
}

.navbar-links p:hover {
  transform: scale(1.05);
  font-weight: 600;
}
  .search-product {
    width: 600px;
    position: relative;
  }
  
  .input-product {
    width: 100%;
    padding: 0.675rem;
    border: none;
    border-radius: var(--borderRadius-50);
    box-shadow: var(--shadow-1);
    outline: none;
    background-color:var(--white);
    color: var(--grey-500);
  }
  .input-product:focus {
    border: 1px solid var(--primary-50);
  }
  .fa-basket-shopping {
    color: var(--primary-100);
  }
  .input-product::placeholder{
color: var(--grey-500);
}

  .search-result-product {
    display: none;
    position: absolute;
    background-color: var(--white);
    width: 100%;
    border-radius: var(--borderRadius-50);
    margin-top: 1rem;
    color: black;
    padding: 0.675rem;
    box-shadow: var(--shadow-2);
  }
  
  .loading-search {
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary-100);
}
  .search-product-item {
    display: flex;
    align-items: start;
    gap: 0.4rem;
  }
  .search-product-item img{
  width: 4rem;
  height: 4rem;
  border-radius: var(--borderRadius-50);
  background-color: var(--grey-300);
  padding: 0.4rem;
  
  }
  
  .search-item-content h4{
  color: var(--grey-600);font-weight: 500;
  padding-bottom: 0.3rem;
  
  }
  
  .search-item-content .product-category{
  width: max-content;
  
  }
  
  .page-title{
  align-content: flex-start;
  display: none;
  
  
  }
  h1{
    font-size: 4rem;
    font-weight: 600;
  }
  
  h1 span{
  color: var(--primary-100);
  }
  
  .page-title p{
  /* padding-left: 1rem; */
  /* left: 5rem; */
  font-size: 1.5rem;
  
  }

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* max-width:1120px; */
  width: var(--view-width);
  gap:3rem;
}

.container-layout {
  display: grid;
  gap: 1rem;
}

.products-wrapper {
  grid-column: 1 / -1;
 
}



.product-basket, .favorite-content {
  grid-column: 1 / -1;
  width: 100%;
  background-color: white;
  height: fit-content;
  overflow-y: auto;
  padding: 0.675rem;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
}

.favorite-content {
  margin-top: 1rem;
}

.product-basket .basket-header,
.favorite-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.basket-header h3,
.favorite-header h3 {
  font-weight: 500;
  font-size: 1.5rem;
}

.basket-header .fa-basket-shopping,
.favorite-header .fa-heart {
  font-size: 1.5rem;
}

.fa-heart {
  color: var(--red-100);
}


.empty-basket-list, .empty-favorite-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 25vh;
}
.empty-basket-list .fa-basket-shopping,
.empty-favorite-list .fa-heart {
  font-size: 3rem;
}

.empty-basket-list p,
.empty-favorite-list p {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--grey-500);
}

.emptyToBasket,
.emptyToFavorite {
  
  border-radius: var(--borderRadius-50);
  color: var(--white);
  padding: 0.55rem;
  border: none;
  font-size: 0.75rem;
  width: 100%;
  transition: (--transition);
  cursor: pointer;
}
.emptyToBasket{
background: linear-gradient(45deg, var(--red-50), var(--red-100));

}

.emptyToFavorite {
  background: linear-gradient(45deg, var(--primary-50), var(--primary-100));
}
.emptyToFavorite:hover {
  background: linear-gradient(45deg, var(--primary-100), var(--primary-200));
  transform: translateY(4px);
  box-shadow: var(--shadow-2);
}

.emptyToBasket:hover {
  background: linear-gradient(45deg, var(--red-100), var(--red-50));
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}
/* Loading Spinner */
.loading-spinner {
  display: none;
  color: var(--primary-100);
  font-size: 1rem;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner-animation {
  border: 5px solid var(--grey-100);
  border-top: 5px solid var(--primary-100);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-spinner p {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
}
/* Loading spin animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.product-list {
  display: grid;
  gap: 1rem; 
  margin-top: 1rem;
}

/* kard stili */

.product-card {
  width: var(--view-width);
  max-width: 370px;
  border: 0.001rem solid var(--grey-300);
  border-radius: var(--borderRadius-100);
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: 0.3s;
  margin: 15px auto;
  cursor: pointer;
}

.product-card-hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-4);
}

/* ürün görseli */
.product-image {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: center;
  transition: all 0.5s;
  border-top-left-radius: var(--borderRadius-100);
  border-top-right-radius: var(--borderRadius-100);
  transform: var(--transition);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-rating {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: var(--grey-200);
  height: max-content;
  opacity: 0.7;
  border: 1px solid var(--primary-50);
  padding: 0.625rem;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-3);
}

.fa-star {
  color: orange;
}
.product-rating {
  color: var(--grey-700);
  font-weight: 600;
  font-size: var(--small-text);
}

/* ürün bilgileri */
.product-info {
  padding: 0.825rem 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.product-info h3 {
  font-weight: 600;
  color: var(--grey-600);
  height: 2rem;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  max-width: 100%;
  font-size: 1rem;
  color: var(--grey-700);
  font-weight: 500;
}

.product-info .product-price-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-text {
  font-size: var(--normal-text);
  font-weight: bold;
  color: var(--grey-600);
}

.addToBasket {
  margin-top: 0.5rem;
  padding: 0.625rem;
  background: linear-gradient(45deg, var(--primary-50), var(--primary-100));
  border-radius: var(--borderRadius-50);
  border: none;
  color: var(--white);
  cursor: pointer;
  font-size: var(--small-text);
  transition: var(--transition);
}

.addToBasket-hover {
  background: linear-gradient(45deg, var(--primary-100), var(--primary-200));
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}

.product-view-detail {
  color: var(--primary-100);
  transition: var(--transition);
}
.product-view-detail:hover {
  transform: scale(1.05);
}
.product-view-detail span {
  padding-left: 0.2rem;
}

/* Slider Style */
.slider {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: min-content;
  background-color: var(--white);
  box-shadow: var(--shadow-1);
  border-radius: var(--borderRadius-50);
  
}
.slider .product-card {
  margin: 1rem 0.4rem;
}

.slider .product-image {
  height: 100px;
  overflow: hidden;
  position: relative;
}

.slider .product-image .product-rating {
  font-size: 0.675rem;
  padding: 0.575rem;
}


.slider .product-info h3 {
  height: 1.8rem;
  font-size: 0.875rem;
}
.slider .product-info {
  gap: 0.4rem;
}

.slick-prev,
.slick-next {
  /* background-color: var(--primary-50); */
  color: white;
  border-radius: 50%;
  z-index: 10;
  position: absolute;
  top: 45%;
  /* transform: translate(-50%); */
}

.slick-prev {
  left: 30px;
}
.slick-next {
  right: 20px;
}

.slider button.slick-next,
.slider button.slick-prev {
  background-color: var(--primary-50);
}

.product-detail {
  width: var(--view-width);
  max-width: 500px;
  border-radius: var(--borderRadius-50);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.product-detail-image {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.product-detail-image img {
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: center;
  box-shadow: var(--shadow-2);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--grey-300);
}

.product-detail-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 0.5rem;
}

.product-detail-info h3 {
  font-weight: 500;
  color: var(--grey-6000);
}

.category-rating-field {
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.product-category {
  background-color: var(--primary-50);
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  border-radius: var(--borderRadius-50);
  color: var(--white);
}
.product-detail-info .price-text {
  font-size: 2rem;
  text-align: end;
}

.rating {
  font-size: 1.2rem;
}
.rating .rating-count {
  color: var(--grey-400);
  padding-left: 0.3rem;
  font-size: 1rem;
}

.product-description {
  font-size: 0.875rem;
  color: var(--grey-500);
}


.productInBasket {
  margin-top: 0.5rem;
  padding: 0.625rem;
  background: linear-gradient(45deg, var(--red-50), var(--red-100));
  border-radius: var(--borderRadius-50);
  border: none;
  color: var(--white);
  cursor: pointer;
  font-size: var(--small-text);
  transition: var(--transition);
}
.productInBasket:disabled{
opacity: 0.4;
cursor: not-allowed;
}
.basket-list, .favorite-list {
  display: flex;
  flex-direction: column;
  height: min-content;
}

.basket-list .product-card, .favorite-list .product-card {
  width: 100%;
  height: 120px;
  overflow: auto;
  display: flex;
  align-items: center;
  margin: 1px auto;
  background: none;
  border: none;
  /* border-bottom: 1px solid var(--grey-400); */
  box-shadow: none;
  border-radius: none;
  position: relative;
  display: flex;
  gap: 0.1rem;
  align-items: center;
}

.basket-list .product-image, .favorite-list .product-image {
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  overflow: hidden;
  position: relative;
}

.basket-list .product-image img, .favorite-list .product-image img {
  width: 4rem;
  height: 4rem;
  padding: 0.3rem;
  object-fit: center;
  transition: all 0.5s;
  border-radius: var(--borderRadius-50);
  border: 1px solid var(--grey-400);
  box-shadow: var(--shadow-3);
  transform: var(--transition);
}

.basket-list .product-rating, .favorite-list .product-rating {
  display: none;
}

.basket-list .product-info, .favorite-list .product-info {
  padding: 0.625rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex-grow: 1;
}

.basket-list .product-info h3 , .favorite-list .product-info h3{
  font-weight: 600;
  color: var(--grey-600);
  height: 2rem;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  max-width: 100%;
  font-size: 1rem;
  color: var(--grey-700);
  font-weight: 500;
}

.basket-list .addToBasket, .favorite-list .addToBasket {
  font-size: 0.675rem;
  width: max-content;
  position: absolute;
  right: 1rem;
  top: 4rem;
}



/* Success Message */

.message {
  position: fixed;
  top: 5rem;
  right: 2rem;
  padding: 0.625rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  border-radius: var(--borderRadius-50);
  box-shadow: var(--shadow-2);
  z-index:1;
}

.success-message {
  background-color: var(--green-200);
  color: var(--green-100);
  border: 2px solid var(--green-300);
}

.fa-check,
.fa-triangle-exclamation {
  padding-right: 0.8rem;
}

/* Error Message */
.error-message {
  background-color: var(--red-200);
  border: 1px solid var(--red-300);
  color: var(--grey-700);
}
.product-head,
.slider-head {
  font-weight: 500;
  color: var(--grey-600);
  font-size: 2rem;
    display: none;
}

.slider-head {
  margin-bottom: 1rem;
}
.product-head {
  margin-top: 2rem;
  margin-bottom: -0.5rem;
}

.countSumTotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid var(--grey-100);
  color: var(grey-600);
  font-weight: 500;
}
.sumTotal {
  font-weight: 600;
  color: var(--primary-100);
}

.favorite-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--white);
  transition: var(--transition);
  cursor: pointer;
}

.favorite-btn .fa-heart {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--grey-300);
  padding: 0.5rem;
  font-size: 1rem;
  color: var(--grey-300);
}

.favorite-btn:hover,
.favorite-btn .fa-heart:hover {
  color: var(--red-100);
  transform: translateY(-2px);
}
.favorite-btn .fa-heart:hover {
  border: 1px solid var(--red-100);
}

.favorite-btn .fa-heart.active {
  border: 1px solid var(--red-100);
  color: var(--red-100);
}
@media screen and (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .container-layout {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .products-wrapper {
    grid-column: 1 / span 3;
  }

  .basketAndFavorite {
    margin-top: 2.8rem;
    grid-column: 4 / span 1;
    display: none;

    /* height: 200px; */
  }
}

@media screen and (min-width: 992px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

       </style>
    `);

    $("body").html(`
    
    <!-- Navbar -->
          <header class="navbar">
                 <p class="navbar-title"> Shop<span>Sayar</span></p> 
           <!-- Product search input area -->
                 <div class="search-product">
                     <input placeholder="Search product product for ID" type="text" id="product-input" class="input-product"/>
                     <div class="search-result-product">
                        <p class="loading-search">Loading....</p>
                        <!-- Search results will be displayed here -->
                         <div class="search-result"></div>
                     </div>
                 </div>
                   <div class="navbar-links">
              <p> <i class="fa-solid fa-basket-shopping"></i> Basket </p>
              <p> <i class="fa-solid fa-heart"></i>  Favorite </p>

        </div>
          </header>
           <div class="container">
          
               <div class="page-title">
                   <h1>Shop<span>Sayar</span></h1>
                   <p>Elevate Your Everyday with Shop Sayar </p>
              </div>
                <!-- Loading spinner shown while products are loading -->
              <div class="loading-spinner" id="loading">
                 <div class="spinner-animation"></div>
                 <p>Loading...</p>
              </div>
              
              <div class="container-layout">
                <div class="products-wrapper">
                   <!--  Slider area -->
                  <h2 class="slider-head">Most Purchased Products</h2>
                   <div class="slider"></div>
                      <!-- Error message area -->
                    <div id="error-message-content"></div>
                     <!-- Product list section -->
                    <h2 class="product-head">Product List</h2>
                   <div class="product-list"></div>
                </div>
                
        <!-- Basket and Favorite section -->
                <div class="basketAndFavorite">
                 <!-- Basket area -->
                <div  id="product-basket"  class="product-basket">
                    <div class="basket-header">
                        <h3>My Basket</h3>
                        <i class="fa-solid fa-basket-shopping"></i>
                    </div>

                    <div class="empty-basket-list">
                        <i class="fa-solid fa-basket-shopping"></i>
                        <p>Your basket is empty</p>
                    </div>


                    <div class="basket-list">

                    </div>
                    <div class="countSumTotal">
                        <p class="sumTotalHead">Total Price:</p>
                        <p class="sumTotal">0</p>
                    </div>
                    <button class="emptyToBasket">Empty Basket</button>
                </div>
     <!-- Favorite area -->
                <div class="favorite-content">
                    <div class="favorite-header">
                        <h3>My Favorites</h3>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="empty-favorite-list">
                        <i class="fa-solid fa-heart"></i>
                        <p>Your favorite is empty</p>
                    </div>
                    <div class="favorite-list"></div>

                    <button class="emptyToFavorite">Empty Favorite</button>
                </div>

            </div>
              </div>
              
       
    </div>
    `);
    const loading = $("#loading");
    const basketAndFavorite = $(".basketAndFavorite"); $(".emptyToBasket").hide();
    $(".emptyToFavorite").hide();
    $(".countSumTotal").hide();
    
    let basketProducts = localStorage.getItem("basketProducts")
      ? JSON.parse(localStorage.getItem("basketProducts"))
      : [];
  // loading animaiton con 
    let cloneProduct = null; 
    function hideLoading() {
      loading.hide();
      basketAndFavorite.show();
      $(".page-title").show();
      $(".slider-head").show();
      $(".product-head").show();
    }
    function showLoading() {
      loading.show();
      basketAndFavorite.hide();
      $(".page-title").hide();
      $(".slider-head").hide();
      $(".product-head").hide();
    }
    function removeLocalStorage() {
      localStorage.removeItem("basketProducts");
      basketProducts = [];
    }
    // Debounce fonksiyonu
    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    }
  // Function to  the success message toastify
    function successMessageToastify(message) {
      const div = $("<div></div>");
      const icons = $("<i></i>").addClass("fa-solid fa-check");
      div
        .addClass("message success-message")
        .hide()
        .text(message)
        .prependTo(".product-list")
        .fadeIn(500);

      icons.prependTo(".success-message");
      setTimeout(function () {
        $(".success-message").fadeOut(500, function () {
          $(this).remove();
        });
      }, 1000);
    }
    // Function to hide the success message
    function successMessageHide() {
      $(".success-message").hide();
    }
    // Function to  the error message toastify
    function errorMessageToastify(message) {
      $("#error-message-content")
        .addClass("message error-message")
        .text(message)
        .fadeIn(500);
      const errorIcons = $("<i></i>").addClass(
        "fa-solid fa-triangle-exclamation"
      );

      errorIcons.prependTo(".error-message");
      setTimeout(function () {
        $("#error-message-content").fadeOut(500, function () {
          $(this).hide();
        });
      }, 2000);
    }
    // Function to check for error messages
    function errorMessage(xhr) {
      if (xhr.status === 404) {
        errorMsg = "404 Not Found";
      } else if (xhr.status === 500) {
        errorMsg = "500 Internal Server Error";
      } else {
        errorMsg = "Bir hata oluştu";
      }
      errorMessageToastify(errorMsg);
    }

   
    //  fetching product details based on ID using the search input.
    $("#product-input").on(
      "input",
      debounce(function () {
        const searchValue = $(this).val().trim();
        $(this).focus().next().show();
        if (searchValue !== "" && Number(searchValue)) {
          $.ajax({
            url: `https://fakestoreapi.com/products/${searchValue}`,
            method: "GET",
            dataType: "json",
            timeout: 10000,
            beforeSend: function () {
              // showLoading();
              $(".loading-search").show();
              $(".search-result").empty();
            },
            success: function (product) {
              if (product) {
                $(".loading-search").hide();
                let searchProduct = "";
                searchProduct = `
              <div class="search-product-item">
              <img src=${product.image} alt=${product.title} class="search-img"/>
              <div class="search-item-content">
              <h4>${product.title}</h4>
          
              <p class="price-text">${product.price}$</p>
              </div>
              </div>
              `;
                $(".search-result").append(searchProduct);
              }
            },
            error: function (xhr, status, error) {
              errorMessage(xhr);
            },
          });
        } else {
          $(this).focus().next().hide();
        }
      }, 500)
    );
// Fetch Products
    fetchProducts() 
     function fetchProducts() {
      $.ajax({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
        dataType: "json",
        timeout: 10000,
        beforeSend: function () {
          showLoading();
        },
        success: function (products) {
          hideLoading();
          
          let productsData = "";
          if (products && products.length > 0) {
            products.forEach(function (product) {
              productsData += `
                    <div class="product-card" data-id="${product.id}">
                         <div class="product-image">
                            <img src="${product.image}" alt="${product.title}"/>
                            <div class="product-rating"><i class="fa-solid fa-star"></i> <span>${product.rating.rate}</span></div>
                           <button class="favorite-btn">
                              <i class="fa-solid fa-heart"> </i>
                              </button>   
                         </div>
                         <div class="product-info">
                            <h3>${product.title}</h3>
                            <p class="price-text">${product.price} $</p>
                            <p class="product-view-detail" data-id=${product.id}>
                            <i class="fa-solid fa-eye"></i><span>View Detail</span>
                            </p>
                             <button class="addToBasket">Add basket</button>
                         </div>
                       
                    </div>
            `;
            });
            $(".product-list").append(productsData); 
            // "Entry animation added to product cards."
            $(".product-card").each(function (index) {
              $(this)
                .delay(100 * index)
                .fadeIn(200)
                .css("transform", "0.3s ease-in-out all");
            });

            $(".product-card").hover(function () {
              $(this).toggleClass("product-card-hover");
            });

            $(".addToBasket").hover(
              function () {
                $(this).fadeTo("fast", "0.7").addClass("addToBasket-hover");
              },
              function () {
                $(this).fadeTo("fast", "1").removeClass("addToBasket-hover");
              }
            );
            // "View product details by ID."
            $(".product-view-detail").click(function () {
              const productId = $(this).data("id");
              fetchDetailProduct(productId);
            });
//"Configuration of adding product to basket and cloning product card."
            $(".product-card").on("click", ".addToBasket", function (e) {
              const productId = $(this).closest(".product-card").data("id");

              const findProduct = products.find((p) => p.id === productId);

              const cloneElement = $(this).closest(".product-card").clone(true);
              $(".empty-basket-list").hide();
              $(".emptyToBasket").show();
              $(".countSumTotal").show();
              cloneElement.find(".addToBasket").remove();
              cloneElement.find(".favorite-btn").remove();
              successMessageToastify("Product added to basket");
              $(".basket-list").addBasketProduct({
                product: findProduct,
                element: cloneElement,
              });

              $(this)
                .removeClass("addToBasket")
                .addClass("productInBasket")
                .attr("disabled", true)
                .text("Product is in the basket");
            });
          // "Clear basket button."
            $(".emptyToBasket").click(function () {
              $(".basket-list").empty();
              $(".empty-basket-list").show();
              $(this).hide();
              removeLocalStorage();
              successMessageToastify("Your cart is now empty");
              $(".countSumTotal").hide();
              $(".sumTotal").text = "0,00$";
              $(".productInBasket")
                .removeClass("productInBasket")
                .attr("disabled", false)
                .addClass("addToBasket")
                .text("Add basket");
            }); 
          //  Add to favorites button.
            $(".product-card").on("click", ".favorite-btn", function (e) {
               
          
              const cloneFavorite = $(this)
                .closest(".product-card")
                .clone(true);
              cloneFavorite.find(".favorite-btn").remove();
              cloneFavorite.find(".addToBasket").remove();
              cloneFavorite.find(".product-rating").remove();
              $(".empty-favorite-list").hide();
              $(".emptyToFavorite").show();

              $(this).find(".fa-heart").addClass("active");
              $(".favorite-list").append(cloneFavorite);
              successMessageToastify("Product added to favorite");
            });
           // Clear favorite button.
            $(".emptyToFavorite").click(function () {
              $(".favorite-list").empty();
              $(".empty-favorite-list").show();
              $(this).hide();
              $(".favorite-btn").find(".fa-heart").removeClass("active");
              successMessageToastify("Your favorite field is now empty");
            });

            // Clone Property
            cloneProduct = $(".product-card").clone(true);
            cloneProduct.find(".addToBasket").remove();
            cloneProduct.find(".favorite-btn").remove();
            $(".slider").append(cloneProduct);

            $(".slider").slick({
              autoplay: true,
              autoplaySpeed: 3000,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 1,
              prevArrow: '<button class="slick-prev">Previous</button>',
              nextArrow: '<button class="slick-next">Next</button>',
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            });
          }
        },
        error: function (xhr, status, error) {
          hideLoading();
          errorMessage(xhr);
          successMessageHide();
        },
      });
    }

    // Open  Detail Modal
    function fetchDetailProduct(productId) {
      $.ajax({
        url: `https://fakestoreapi.com/products/${productId}`,
        method: "GET",
        dataType: "json",
        timeout: 10000,
  
        success: function (product) {
          if (product) {
            hideLoading();
            console.log("product", product);

            Fancybox.show([
              {
                html: ` <div class="product-detail">
                              <div class="product-detail-image">
                                 <img src="${product.image}" alt="${product.title}" />
                                 </div>
                                 <div class="product-detail-info">
                                 <h3>${product.title}</h3>
                                 <div class="category-rating-field">
                                 <p class="rating"><i class="fa-solid fa-star"></i> <span class="rating-rate">${product.rating.rate}</span><span class="rating-count">(${product.rating.count})</span></p>
                                 <p class="product-category">${product.category}</p>
                              </div>
                              <p class="product-description">${product.description}</p>
                              <p class="price-text">${product.price} $</p>
                              
                         </div>
                 </div>`,
              },
            ]);

            $("body").on("mouseenter", ".addToBasket", function () {
              $(this).fadeTo("fast", 0.7).addClass("addToBasket-hover");
            });
            $("body").on("mouseleave", ".addToBasket", function () {
              $(this).fadeTo("fast", 1).removeClass("addToBasket-hover");
            });
          }
        },
      });
    }

    // Plugin - A custom jQuery plugin was created here to add products to the basket.
    (function ($) {
      $.fn.addBasketProduct = function (options) {
        const settings = $.extend(
          {
            product: null,
            element: null,
          },
          options
        );

        if (!settings.product || !settings.element) {
          console.log("Product ve element gerekli!");
          return this;
        }

        basketProducts.push(settings.product);
        localStorage.setItem("basketProducts", JSON.stringify(basketProducts));

        $(".basket-list").append(settings.element);
        const total = basketProducts.reduce((sum, item) => {
          return sum + (parseFloat(item.price) || 0);
        }, 0);

        $(".sumTotal").text(total.toFixed(2) + " $");

        return this;
      };
    })(jQuery);
  } catch (err) {
    console.error("Hata", err);
    errorMessageToastify("Bir hata oluştu");
  }
})();
