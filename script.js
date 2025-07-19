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
    
    



    $("body").html(`
      <h2 class="title">E-Commerce</h2>
      
    `);

   


  } catch (err) {
    console.error("Hata", err);
   
  }
})();
