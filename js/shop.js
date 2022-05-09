// general variables
let products;
let wrapper = " ";
let eyecase = " ";
let facecase = " ";
let lipcase = " ";
let nailscase = " ";
let skincase = " ";

//images
let eyeProducts = [
  "../images/eyeproducts/img1.jpg",
  "../images/eyeproducts/img10.jpg",
  "../images/eyeproducts/img11.jpeg",
  "../images/eyeproducts/img12.jfif",
  "../images/eyeproducts/img13.jpg",
  "../images/eyeproducts/img14.jpg",
  "../images/eyeproducts/img15.jpg",
  "../images/eyeproducts/img16.jpg",
  "../images/eyeproducts/img17.jpg",
  "../images/eyeproducts/img18.jfif",
  "../images/eyeproducts/img19.jfif",
  "../images/eyeproducts/img2.jpg",
  "../images/eyeproducts/img20.jfif",
  "../images/eyeproducts/img21.jfif",
  "../images/eyeproducts/img22.jfif",
  "../images/eyeproducts/img23.jfif",
  "../images/eyeproducts/img24.jfif",
  "../images/eyeproducts/img25.jfif",
  "../images/eyeproducts/img26.jfif",
  "../images/eyeproducts/img27.jfif",
  "../images/eyeproducts/img28.jfif",
  "../images/eyeproducts/img29.jfif",
  "../images/eyeproducts/img3.jpg",
  "../images/eyeproducts/img30.jfif",
  "../images/eyeproducts/img31.jfif",
  "../images/eyeproducts/img32.jfif",
  "../images/eyeproducts/img33.jfif",
  "../images/eyeproducts/img34.jfif",
  "../images/eyeproducts/img35.jfif",
  "../images/eyeproducts/img36.jfif",
  "../images/eyeproducts/img37.jpg",
  "../images/eyeproducts/img4.jfif",
  "../images/eyeproducts/img5.webp",
  "../images/eyeproducts/img6.jpg",
  "../images/eyeproducts/img7.jpg",
  "../images/eyeproducts/img8.jpg",
  "../images/eyeproducts/img9.jpg",
];
let faceProducts = [
  "../images/faceproducts/img100.jfif",
  "../images/faceproducts/img101.jfif",
  "../images/faceproducts/img38.jpg",
  "../images/faceproducts/img39.jpg",
  "../images/faceproducts/img40.jpg",
  "../images/faceproducts/img41.jpg",
  "../images/faceproducts/img42.jpg",
  "../images/faceproducts/img43.png",
  "../images/faceproducts/img44.jpg",
  "../images/faceproducts/img45.jfif",
  "../images/faceproducts/img46.jpg",
  "../images/faceproducts/img47.jpg",
  "../images/faceproducts/img48.jpg",
  "../images/faceproducts/img49.jpg",
  "../images/faceproducts/img50.png",
  "../images/faceproducts/img51.jpg",
  "../images/faceproducts/img52.jpg",
  "../images/faceproducts/img53.jpg",
  "../images/faceproducts/img54.jpg",
  "../images/faceproducts/img55.webp",
  "../images/faceproducts/img56.jpg",
  "../images/faceproducts/img57.jpg",
  "../images/faceproducts/img58.webp",
  "../images/faceproducts/img59.jpg",
  "../images/faceproducts/img60.jpg",
  "../images/faceproducts/img61.jfif",
  "../images/faceproducts/img62.webp",
  "../images/faceproducts/img63.jpg",
  "../images/faceproducts/img64.jpg",
  "../images/faceproducts/img65.jpg",
  "../images/faceproducts/img66.png",
  "../images/faceproducts/img67.webp",
  "../images/faceproducts/img68.jpg",
  "../images/faceproducts/img69.jpg",
  "../images/faceproducts/img70.webp",
  "../images/faceproducts/img71.jfif",
  "../images/faceproducts/img72.jfif",
  "../images/faceproducts/img73.jfif",
  "../images/faceproducts/img74.png",
  "../images/faceproducts/img75.jfif",
  "../images/faceproducts/img76.webp",
  "../images/faceproducts/img77.jfif",
  "../images/faceproducts/img78.jfif",
  "../images/faceproducts/img79.jfif",
  "../images/faceproducts/img80.jfif",
  "../images/faceproducts/img81.jfif",
  "../images/faceproducts/img82.jfif",
  "../images/faceproducts/img83.jfif",
  "../images/faceproducts/img84.jfif",
  "../images/faceproducts/img85.jfif",
  "../images/faceproducts/img86.jfif",
  "../images/faceproducts/img87.jfif",
  "../images/faceproducts/img88.jfif",
  "../images/faceproducts/img89.jfif",
];
let lipProducts = [
  "../images/lipsproducts/img102.jpg",
  "../images/lipsproducts/img103.jpg",
  "../images/lipsproducts/img104.png",
  "../images/lipsproducts/img105.jpg",
  "../images/lipsproducts/img106.jpg",
  "../images/lipsproducts/img107.png",
  "../images/lipsproducts/img108.jpg",
  "../images/lipsproducts/img109.jpg",
  "../images/lipsproducts/img110.jpg",
  "../images/lipsproducts/img111.jpg",
  "../images/lipsproducts/img112.jfif",
  "../images/lipsproducts/img113.jfif",
  "../images/lipsproducts/img114.jfif",
  "../images/lipsproducts/img115.jfif",
  "../images/lipsproducts/img116.jfif",
  "../images/lipsproducts/img117.jfif",
  "../images/lipsproducts/img118.jfif",
  "../images/lipsproducts/img119.jfif",
  "../images/lipsproducts/img120.jfif",
  "../images/lipsproducts/img121.jfif",
  "../images/lipsproducts/img122.jfif",
  "../images/lipsproducts/img123.jfif",
  "../images/lipsproducts/img124.jfif",
  "../images/lipsproducts/img125.jfif",
  "../images/lipsproducts/img126.jfif",
  "../images/lipsproducts/img127.jfif",
  "../images/lipsproducts/img129.jpg",
  "../images/lipsproducts/img130.jpeg",
  "../images/lipsproducts/img131.jpg",
  "../images/lipsproducts/img132.jfif",
];
let nailsProducts = [
  "../images/nailsproducts/img133.jpg",
  "../images/nailsproducts/img143.png",
  "../images/nailsproducts/img153.jpg",
  "../images/nailsproducts/img134.jpg",
  "../images/nailsproducts/img144.jpg",
  "../images/nailsproducts/img154.jpg",
  "../images/nailsproducts/img135.jpg",
  "../images/nailsproducts/img145.jpg",
  "../images/nailsproducts/img155.jpg",
  "../images/nailsproducts/img136.jpg",
  "../images/nailsproducts/img146.jpg",
  "../images/nailsproducts/img156.jfif",
  "../images/nailsproducts/img137.jpg",
  "../images/nailsproducts/img147.jpg",
  "../images/nailsproducts/img157.jpg",
  "../images/nailsproducts/img138.jpg",
  "../images/nailsproducts/img148.jfif",
  "../images/nailsproducts/img158.jfif",
  "../images/nailsproducts/img139.jpeg",
  "../images/nailsproducts/img149.gif",
  "../images/nailsproducts/img159.jpg",
  "../images/nailsproducts/img140.jpg",
  "../images/nailsproducts/img150.jpg",
  "../images/nailsproducts/img160.jpg",
  "../images/nailsproducts/img141.jpg",
  "../images/nailsproducts/img151.jfif",
  "../images/nailsproducts/img161.jpg",
  "../images/nailsproducts/img142.jpg",
  "../images/nailsproducts/img152.jpg",
  "../images/nailsproducts/img162.jpg",
  "../images/nailsproducts/img163.jpeg",
];
let skinProducts = [
  "../images/skinproducts/img164.jfif",
  "../images/skinproducts/img175.jfif",
  "../images/skinproducts/img185.jfif",
  "../images/skinproducts/img165.jfif",
  "../images/skinproducts/img176.jfif",
  "../images/skinproducts/img186.jfif",
  "../images/skinproducts/img166.jfif",
  "../images/skinproducts/img177.jfif",
  "../images/skinproducts/img187.jfif",
  "../images/skinproducts/img167.jfif",
  "../images/skinproducts/img178.jfif",
  "../images/skinproducts/img188.jfif",
  "../images/skinproducts/img168.jfif",
  "../images/skinproducts/img179.jfif",
  "../images/skinproducts/img189.jfif",
  "../images/skinproducts/img169.jfif",
  "../images/skinproducts/img180.jfif",
  "../images/skinproducts/img190.jfif",
  "../images/skinproducts/img170.jfif",
  "../images/skinproducts/img181.jfif",
  "../images/skinproducts/img191.jfif",
  "../images/skinproducts/img171.jfif",
  "../images/skinproducts/img182.jfif",
  "../images/skinproducts/img192.jfif",
  "../images/skinproducts/img172.jfif",
  "../images/skinproducts/img183.jfif",
  "../images/skinproducts/img193.jfif",
  "../images/skinproducts/img173.jfif",
  "../images/skinproducts/img184.jfif",
  "../images/skinproducts/img194.jfif",
  "../images/skinproducts/img174.jfif",
  "../images/skinproducts/img195.jfif",
];
let productsImages = [
  ...eyeProducts,
  ...faceProducts,
  ...lipProducts,
  ...nailsProducts,
  ...skinProducts,
];

// get all products
let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/data-qCQywuomLnQLtY2ckR3sL.json");
xhr.onload = function () {
  products = JSON.parse(this.response);
  document.querySelector(".data .row").innerHTML = `
  <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  `;
  setTimeout(() => {
    products.slice(0, 45).map((product) => {
      wrapper += `
      <div id=${
        product.id
      } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6  ">
      <img src=${
        productsImages[Math.floor(Math.random() * productsImages.length)]
      } class=" " maxwidth='100px' alt="productpicture">
      <div class="card-body">
      <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
      Product Code : ${product.productCode}</h5>
      <p class="card-text">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
      Price : ${product.price}</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
              Product Type : Products</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
              Avaliable Colors : ${
                product.avaliableColor
                  ? product.avaliableColor
                  : "no avaliable colors"
              }</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>

              ${product.reviewNumber} Reviews</p>
                  <button type="button" onclick="product(${
                    product.id
                  })" class="btn ">Add To Cart</button>
            </div>
          </div>
              `;
      document.getElementsByClassName("card")[0].classList.remove("hid");
      document.getElementsByClassName("all")[0].classList.remove("hid");
      document.getElementsByClassName("navbar")[0].classList.remove("hid");
      document.getElementsByClassName("footer")[0].classList.remove("hid");
      document.getElementsByClassName("pagination")[0].classList.remove("hid");
      document.querySelector(".data .row").innerHTML = wrapper;
    });
  }, 2000);
  products.filter((product) => {
    switch (product.productType) {
      case 1:
        eyecase += `
          <div id=${
            product.id
          } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 " >
          <img src=${
            eyeProducts[Math.floor(Math.random() * eyeProducts.length)]
          } class=" " maxwidth='100px' alt="productpicture">
          <div class="card-body">
            <h5 class="card-title">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
            Product Code : ${product.productCode}</h5>
            <p class="card-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
            Price : ${product.price}</p>
            <p class="card-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
            Product Type : Eye Products</p>
            <p class="card-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
            Avaliable Colors : ${
              product.avaliableColor
                ? product.avaliableColor
                : "no avaliable colors"
            }</p>
            <p class="card-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
            ${product.reviewNumber} Reviews</p>
                <button type="button" onclick="product(${
                  product.id
                })" class="btn ">Add To Cart</button>
          </div>
        </div>
            `;
        break;
      case 2:
        facecase += `
              <div id=${
                product.id
              } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
              <img src=${
                faceProducts[Math.floor(Math.random() * faceProducts.length)]
              } class=" " maxwidth='100px' alt="productpicture">
              <div class="card-body">
                <h5 class="card-title">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
                Product Code : ${product.productCode}</h5>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                Price : ${product.price}</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
                Product Type : Face Products</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                Avaliable Colors : ${
                  product.avaliableColor
                    ? product.avaliableColor
                    : "no avaliable colors"
                }</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
                ${product.reviewNumber} Reviews</p>
                    <button type="button" onclick="product(${
                      product.id
                    })" class="btn ">Add To Cart</button>
              </div>
            </div>
                `;
        break;
      case 3:
        lipcase += `
              <div id=${
                product.id
              } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <img src=${
                lipProducts[Math.floor(Math.random() * lipProducts.length)]
              } class=" " maxwidth='100px' alt="productpicture">
              <div class="card-body">
                <h5 class="card-title">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
                Product Code : ${product.productCode}</h5>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                Price : ${product.price}</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
                Product Type : Lips Products</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                Avaliable Colors : ${
                  product.avaliableColor
                    ? product.avaliableColor
                    : "no avaliable colors"
                }</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
                ${product.reviewNumber} Reviews</p>
                    <button type="button" onclick="product(${
                      product.id
                    })" class="btn ">Add To Cart</button>
              </div>
            </div>
                `;
        break;
      case 4:
        nailscase += `
              <div id=${
                product.id
              } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
              <img src=${
                nailsProducts[Math.floor(Math.random() * nailsProducts.length)]
              } class=" " maxwidth='100px' alt="productpicture">
              <div class="card-body">
                <h5 class="card-title">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
                Product Code : ${product.productCode}</h5>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                Price : ${product.price}</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
                Product Type : Nails Products</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                Avaliable Colors : ${
                  product.avaliableColor
                    ? product.avaliableColor
                    : "no avaliable colors"
                }</p>
                <p class="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
                ${product.reviewNumber} Reviews</p>
                    <button type="button" onclick="product(${
                      product.id
                    })" class="btn ">Add To Cart</button>
              </div>
            </div>
                `;
        break;
      case 5:
        skincase += `
                  <div id=${
                    product.id
                  } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                  <img src=${
                    skinProducts[
                      Math.floor(Math.random() * skinProducts.length)
                    ]
                  } class=" " maxwidth='100px' alt="productpicture">
                  <div class="card-body">
                    <h5 class="card-title">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
                    Product Code : ${product.productCode}</h5>
                    <p class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
                    Price : ${product.price}</p>
                    <p class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
                    Product Type : Skincare Products</p>
                    <p class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                    Avaliable Colors : ${
                      product.avaliableColor
                        ? product.avaliableColor
                        : "no avaliable colors"
                    }</p>
                    <p class="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                    ${product.reviewNumber} Reviews</p>
                        <button type="button" onclick="product(${
                          product.id
                        })" class="btn ">Add To Cart</button>
                  </div>
                </div>
                    `;
        break;
    }
  });
};
xhr.send();

// send specidic product
function product(id) {
  localStorage.clear();
  products.filter((item) => {
    item.id === id ? localStorage.setItem("item", JSON.stringify(item)) : null;
  });
  localStorage.setItem(
    "imgeItem",
    document.getElementById(id.toString()).firstElementChild.getAttribute("src")
  );
  location.href = "../home/product.html";
}

// handler functions
function removeActive(event) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  event.target.classList.add("active");
}

function allProducts(event) {
  document.querySelector(".front .row ").innerHTML = `
  <div class=" col-lg-8 col-md-12 col-sm-12">
        <h3>Shop All</h3>
        <p>Everything you need is here! From scalp to ends, we have a great collection.</p>
      </div>
    <div class="col-lg-4 col-md-12 col-sm-12 bg-img">
    </div>
`;
  document.querySelector(".data .row").innerHTML = wrapper;
  location.hash = "#";
  removeActive(event);
}

function eye(event) {
  document.querySelector(".front .row ").innerHTML = `
      <div class=" col-lg-8 col-md-12 col-sm-12">
        <h3>Eye Collection</h3>
        <p>Everything you need is here!we have a great collection.</p>
      </div>
    <div class="col-lg-4 col-md-12 col-sm-12 eye-img">
    </div>
    
  `;
  document.querySelector(".data .row").innerHTML = eyecase;
  location.hash = "EyeProducts";
  removeActive(event);
}

function face(event) {
  document.querySelector(".front .row ").innerHTML = `
      <div class=" col-lg-8 col-md-12 col-sm-12">
        <h3>Face Collection</h3>
        <p>Everything you need is here!we have a great collection.</p>
      </div>
    <div class="col-lg-4 col-md-12 col-sm-12 face-img">
    </div>
    
  `;
  document.querySelector(".data .row").innerHTML = facecase;
  location.hash = "FaceProducts";
  removeActive(event);
}

function lip(event) {
  document.querySelector(".front .row ").innerHTML = `
  <div class=" col-lg-8 col-md-12 col-sm-12">
    <h3>Lip Collection</h3>
    <p>Everything you need is here!we have a great collection.</p>
  </div>
<div class="col-lg-4 col-md-12 col-sm-12 lip-img">
</div>
`;
  document.querySelector(".data .row").innerHTML = lipcase;
  location.hash = "LipProducts";
  removeActive(event);
}

function nails(event) {
  document.querySelector(".front .row ").innerHTML = `
  <div class=" col-lg-8 col-md-12 col-sm-12">
    <h3>Nails Collection</h3>
    <p>Everything you need is here!we have a great collection.</p>
  </div>
<div class="col-lg-4 col-md-12 col-sm-12 nail-img">
</div>
`;
  document.querySelector(".data .row").innerHTML = nailscase;
  location.hash = "NailsProducts";
  removeActive(event);
}

function skin(event) {
  document.querySelector(".front .row ").innerHTML = `
  <div class=" col-lg-8 col-md-12 col-sm-12">
    <h3>Skin Care Collection</h3>
    <p>Everything you need is here!we have a great collection.</p>
  </div>
<div class="col-lg-4 col-md-12 col-sm-12 skin-img">
</div>
`;
  document.querySelector(".data .row").innerHTML = skincase;
  location.hash = "SkinProducts";
  removeActive(event);
}

function firstNext() {
  document.querySelector(".data .row").innerHTML = " ";
  products.slice(46, 70).map((product) => {
    wrapper += `
      <div id=${
        product.id
      } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6  ">
      <img src=${
        productsImages[Math.floor(Math.random() * productsImages.length)]
      } class=" " maxwidth='100px' alt="productpicture">
      <div class="card-body">
      <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
      Product Code : ${product.productCode}</h5>
      <p class="card-text">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
      Price : ${product.price}</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
              Product Type : Products</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
              Avaliable Colors : ${
                product.avaliableColor
                  ? product.avaliableColor
                  : "no avaliable colors"
              }</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>

              ${product.reviewNumber} Reviews</p>
                  <button type="button" onclick="product(${
                    product.id
                  })" class="btn ">Add To Cart</button>
            </div>
          </div>
              `;
    document.querySelector(".data .row").innerHTML = wrapper;
  });
}

function secNext() {
  document.querySelector(".data .row").innerHTML = " ";
  products.slice(70, 120).map((product) => {
    wrapper += `
      <div id=${
        product.id
      } class="card hover-shadow col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6  ">
      <img src=${
        productsImages[Math.floor(Math.random() * productsImages.length)]
      } class=" " maxwidth='100px' alt="productpicture">
      <div class="card-body">
      <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upc" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
</svg>
      Product Code : ${product.productCode}</h5>
      <p class="card-text">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg>
      Price : ${product.price}</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>
              Product Type : Products</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
              Avaliable Colors : ${
                product.avaliableColor
                  ? product.avaliableColor
                  : "no avaliable colors"
              }</p>
              <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>

              ${product.reviewNumber} Reviews</p>
                  <button type="button" onclick="product(${
                    product.id
                  })" class="btn ">Add To Cart</button>
            </div>
          </div>
              `;
    document.querySelector(".data .row").innerHTML = wrapper;
  });
}
