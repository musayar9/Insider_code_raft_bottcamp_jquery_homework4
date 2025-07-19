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
             // position: relative;
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
            
            .container {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              max-width:1120px;
              width: var(--view-width);
              position:relative
              
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
              /* grid-template-columns: repeat(4, 1fr); */
              gap: 2rem;
            }
            
            /* kard stili */
            
            .product-card {
              width: var(--view-width);
              max-width: 350px;
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
            
            .product-image .product-rating {
              position: absolute;
              bottom: 1rem;
              left: 1rem;
              background-color: var(--grey-200);
              opacity: 0.7;
              border: 1px solid var(--primary-50);
              padding: 0.625rem;
              border-radius: var(--borderRadius-50);
              box-shadow: var(--shadow-3);
              height:max-content;
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
            
            .price-btn {
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
            
            .price-btn-hover {
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
            display: flex !important; 
            gap: 1rem;
              width: var(--view-width);
              max-width: 1120px;
              background-color: var(--white);
              box-shadow: var(--shadow-1);
              border-radius: var(--borderRadius-50);/
            }
             .slider .product-card {
              margin: 1rem 0.4rem;
            }
            
             .slider .product-image {
              height: 100px;
              overflow: hidden;
              position: relative;
            
            }
            
            .slider .product-info h3{
              height: 1.8rem;
              font-size: 0.875rem;
            
            }
            .slider .product-info{
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
              transform: translate(-50%);
            }
            
            .slick-prev {
              left: 30px;
            }
            .slick-next {
              right: 15px;
            }
            
            .slider button {
              background-color: var(--primary-50);
            }
            
            @media screen and (min-width: 768px) {
              .product-list {
                grid-template-columns: repeat(2, 1fr);
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
     <div class="container">
    
        <h2 class="title">E-Commerce</h2>
        <div class="loading-spinner" id="loading">
        <div class="spinner-animation"></div>
        <p>Loading...</p>
        </div>
        
        <div class="slider"></div>
        
        <div class="product-list"></div>
    </div>
    `);

    const loading = $("#loading");

    function hideLoading() {
      loading.hide();
    }
    function showLoading() {
      loading.show();
    }

    fetchRandomUser();
    function fetchRandomUser() {
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
          console.log("product", products);
          let productsData = "";
          if (products && products.length > 0) {
            products.forEach(function (product) {
              productsData += `
                    <div class="product-card">
                         <div class="product-image">
                            <img src="${product.image}" alt="${product.title}"/>
                            <div class="product-rating"><i class="fa-solid fa-star"></i> <span>${product.rating.rate}</span></div>
                         </div>
                         <div class="product-info">
                            <h3>${product.title}</h3>
                            <p class="price-text">${product.price} TL</p>
                            <p class="product-view-detail" data-id=${product.id}>
                            <i class="fa-solid fa-eye"></i><span>View Detail</span>
                            </p>
                             <button class="price-btn">Add basket</button>
                         </div>
                       
                    </div>
            `;
            });
            $(".product-list").append(productsData);
             $(".product-card").each(function (index) {
              $(this)
                .delay(100 * index)
                .fadeIn(200)
                .css("transform", "0.3s ease-in-out all");
            });

            $(".product-card").hover(function () {
              $(this).toggleClass("product-card-hover");
            });

            $(".price-btn").hover(
              function () {
                $(this).fadeTo("fast", "0.7").addClass("price-btn-hover");
              },
              function () {
                $(this).fadeTo("fast", "1").removeClass("price-btn-hover")
              }
            );
            
            // Clone Property
            const cloneProduct = $(".product-card").clone()
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
            
            })
            
            
            
          }
        },
        error: function (xhr, status, error) {
          hideLoading();
          errorMessage(xhr);
        },
      });
    }
  } catch (err) {
    console.error("Hata", err);
  }
})();
