// navbar js
window.addEventListener("scroll",()=>{
  const navs = document.getElementById("navBar")
  const nav = document.querySelector("nav")
  const dropdown  = document.getElementById("dropdown")
  const home  = document.getElementById("home")
  const logo = document.getElementById("logo")
  const cartBag = document.getElementById("Drop_cart")
  
  if(window.scrollY > 800){
    nav.style.position = "sticky"
    navs.style.backgroundColor = "white"
    navs.style.color  = "black"
    nav.style.width = "100%"
    dropdown.style.color = "black"
    logo.style.color = "black"
    home.style.color = "black"
    cartBag.style.color = "black"
    

    
  }
  else if(window.scrollY == 0){
    nav.style.position = "absolute"
    nav.style.width = "80%"
    navs.style.backgroundColor = "transparent"
    navs.style.color  = "white"
    dropdown.style.color = "white"
    logo.style.color = "white"
    home.style.color = "white"
    cartBag.style.color = "white"






  }
})

// navbar responsive js=====================
document.getElementById("toogle").addEventListener("click",()=>{
  document.getElementById("nav_ul").classList.toggle("show")
})
// experiens part js
let exp = document.getElementById("experience");

document.getElementById("exp_pointer").addEventListener("mouseenter", () => {
  let nums = 0;

  let intervalId = setInterval(() => {
    nums++;
    exp.innerText = nums;

    if (nums >= 115) {
      clearInterval(intervalId);
    }
  }, 60);
});
// navbar buttons js
let navigation = document.getElementById("Navigation_js");
let about = document.getElementById("about");
let slideContent = document.getElementById("slide_content");
about.addEventListener("click", () => {
  slideContent.innerHTML = `
    <div class = "aboutSection">
    <p>home > about us > </p>
    <h1 class = "about_section">About us</h1>
    </div>
    `;
});
let blog = document.getElementById("blog");
blog.addEventListener("click", () => {
  slideContent.innerHTML = `
    <div class = "aboutSection">
    <p>home > blog > </p>
    <h1 class = "about_section">blog</h1>
    </div>
    `;
  navigation.innerHTML = `
<div class="blogs">
        <div class="container">
          <div class="row">
            <div class="blog_heading text-center">
              <p>blog</p>
              <h1>recent blog</h1>
            </div>
            <div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img1">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i> 23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img2">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i> 23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img3">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i> 23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img4">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i> 23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img5">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i>23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div><div class="col-lg-6">
              <div class="blog1">
                <div class="blog_img6">
                   <a href="#"></a>
                </div>
                <div class="blog_content">
                  <p class="mb-3"><i class="fa-solid fa-calendar-days"></i>23 april 2021</p>
                  <h5 class="mb-4">the recipe from winemaker's restaurant</h5>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <a href="*">continue<i class=" mx-2 fs-5 fa-solid fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
});

let products = document.getElementById("products");
products.addEventListener("click", () => {
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > products > </p>
  <h1 class = "about_section">products</h1>
  </div>
  `;
  navigation.innerHTML = `
  <div class="container">
<div class="row">
<div class="col-md-9">

    <div class="products_js text-center">
          <div class="container">
            <div class="row">
              <div class="heading_product">
                <p class="since_p">our delightful offerings</p>
                <h1>tastefully your's</h1>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-1.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>

                <div class="details">
                  <span class="text-light p-1 px-3 sales">sale</span>
                  <p class="since_p">brandy</p>
                  <h4>bacardi 151</h4>
                  <p><span class="sale_price">$69.00</span> $49.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-2.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <span class="text-light py-1 px-3 d-inline-block bg-warning sales"
                    >best seller</span
                  >
                  <p class="since_p">gin</p>
                  <h4>Jim Beam Kentucky Straight</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-3.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <span class="text-light py-1 bg-success px-3 d-inline-block sales"
                    >new arrivals</span
                  >
                  <p class="since_p">rum</p>
                  <h4>Citadelle</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-4.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">rum</p>
                  <h4>The Glenlivet</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-5.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">whisky</p>
                  <h4>black label</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-6.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">tequila</p>
                  <h4>macallan</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-7.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">vodka</p>
                  <h4>old monk</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-8.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">whisky</p>
                  <h4>Jameson Irish Whiskey</h4>
                  <p>$69.00</p>
                </div>
              </div>
               <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-9.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  <p class="since_p">whisky</p>
                  <h4>Screwball</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-10.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  <p class="since_p">whisky</p>
                  <h4>Screwball</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-11.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  
                  <p class="since_p">whisky</p>
                  <h4>McClelland's</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4 col-md-6">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-12.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                 
                  
                  <p class="since_p">whisky</p>
                  <h4>Plantation</h4>
                  <p>$69.00</p>
                </div>
              </div>
            </div>

            <div class="products_page">
        <a href="">
          &lt;
        </a>
        <a href="" class="products_page_sp">
          1
        </a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">
          &gt;
        </a>
      </div>
          </div>
        </div>
        </div> 
        <div class="col-md-3">
        <div class="trial">
        <h4>product type</h4>
        <ul class="product_type">
          <li>
            <a href="" class="text-start">Brandy</a>
            <span class="product_type_spans text-end"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href=""> gin</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">rum</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">tequila</a
            ><span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">vodka </a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">whisky</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
        </ul>
      </div>
      
      <div class = "blogings">
       <h4>recent blogs</h4>
          <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_1.jpg.webp" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
              <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_2.jpg" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
              <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_3.jpg" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
        </div>
</div> 
<div>
</div>
  `;
});

// single product navigation =================================

document.getElementById("single_product").addEventListener("click", () => {
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > products >product single</p>
  <h1 class = "about_section">products single</h1>
  </div>
  `;
  navigation.innerHTML = `
  <div class="Single_product">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="./Images/prod-1.jpg.webp" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-6 mt-5">
            <div class="Single_product_content">
              <h3>Bacardi 151 Degree</h3>
              <div class="Single_caption">
                <div class="Star5">
                  <a href="/" class="me-2">5.0 </a>
                  <a href="/">
                    <i class="fa-solid fa-star"></i>

                    <i class="fa-solid fa-star"></i>

                    <i class="fa-solid fa-star"></i>

                    <i class="fa-solid fa-star"></i>

                    <i class="fa-solid fa-star"></i>
                  </a>
                </div>
                <p class="mt-3 mx-4">
                  100 <span class="opacity-50">Rating</span>
                </p>
                <p class="mt-3 mx-4">
                  500 <span class="opacity-50">Sold</span>
                </p>
              </div>
              <h3>$120.00</h3>
              <p class="opacity-75">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p class="opacity-75">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
              <div class="Quantity">
                <p class="mx-4 Count" onclick="minusHandler()" role="button">-</p>
                <p class="Count px-5" id="count">1</p>
                <p class="mx-4 Count" onclick="plusHandler()" role="button">+</p>
              </div>
              <p>80 piece available</p>
              <div class="Single_product_btn">
                <button class="single_btn rounded toCheckout">Add To Cart</button>
                <button class="single_btn rounded toCheckout">buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="Discription">
          <button class="Description_btn" id="DescriptionHandler">
            Description
          </button>
          <button class="Description_btn" id="Manufaturer">
            manufaturer
          </button>
          <button class="Description_btn" id="Review">reviews</button>
          <div class="Description_content bg-light" id="Description_content">
            <h3>bacardi 151 degree</h3>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </div>

          
        </div>
        </div>
      </div>
    </div>
  `;

  // add to cart btn to checkout proocess js ============


let toCheckout = document.getElementsByClassName("toCheckout") 
for (const ele of toCheckout) {
  ele.addEventListener("click",()=>{
    slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > cart</p>
  <h1 class = "about_section">my cart</h1>
  </div>
  `;
  navigation.innerHTML = ` <div class="cart">
      <div class="container">
        <div class="Cart_head">
          <h4>product</h4>
          <div class="d-flex">
            <h4 class="mx-4">price</h4>
            <h4 class="mx-4">quantity</h4>
            <h4 class="mx-4">total</h4>
          </div>
        </div>
        <div class="cart_list">
          <div class="Cart_items" id="cart_item">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity"
                value="2"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item1">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity1"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete1" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item2">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity2"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete2" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item3">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity3"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete3" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item4">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity4"
                value="3"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete4" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-7"></div>
          <div class="col-md-5">
            <div class="Cart_check">
              <h4>cart total</h4>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>subtotal</span><span>$20.60</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>Delivery</span><span>$0.00</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>discount</span><span>$3.00</span>
              </p>
              <hr />
              <p class="d-flex justify-content-between my-4 align-items-center">
                <span class="fs-5">total</span><span class="bold">$17.60</span>
              </p>
            </div>
            <button class="checkout_btn rounded" id="checkoutProcess">
              procced To checkout
            </button>
          </div>
        </div>
      </div>
    </div>`;
      


    
  // cart js first part ==================================
  let quantity = document.getElementById("quantity");
  quantity.addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[0];
    let total = document.getElementsByClassName("total")[0];
    total.innerText = Math.round(44.99 * e.target.value);
  });

  document.getElementById("quantity1").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[1];
    let total = document.getElementsByClassName("total")[1];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity2").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[2];
    let total = document.getElementsByClassName("total")[2];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity3").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[3];
    let total = document.getElementsByClassName("total")[3];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity4").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[4];
    let total = document.getElementsByClassName("total")[4];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("Delete").addEventListener("click", () => {
    document.getElementById("cart_item").style.display = "none";
  });
  document.getElementById("Delete1").addEventListener("click", () => {
    document.getElementById("cart_item1").style.display = "none";
  });
  document.getElementById("Delete2").addEventListener("click", () => {
    document.getElementById("cart_item2").style.display = "none";
  });
  document.getElementById("Delete3").addEventListener("click", () => {
    document.getElementById("cart_item3").style.display = "none";
  });
  document.getElementById("Delete4").addEventListener("click", () => {
    document.getElementById("cart_item4").style.display = "none";
  });

  document.getElementById("checkoutProcess").addEventListener("click", () => {
    slideContent.innerHTML = 
    `<div class = "aboutSection">
  <p>home > Checkout</p>
  <h1 class = "about_section">checkout</h1>
  </div>`;
    navigation.innerHTML = `<div class="checkout">
      <div class="container">
        <div class="row">
          <form class="forms row" id="forms">
            <h4 class="my-5">Billing Details</h4>
                <div class=" col-md-6">
              <h6>first name</h6>
              
                <input type="text" class="w-100" id="first_name" />
                <h6 class="text-danger" id="firstName"></h6>
              </div>
              <div class="  col-md-6">

                  <h6>last name</h6>
                  
                  <input type="text" class="w-100" id="last_name"/>
                  <h6 class="text-danger" id="lastName"></h6>
              </div>
            <div class="col-md-12">
               
                    <h6>State / Country</h6>
                        
                    <input type="text" class="w-100" id="State" />
                    <h6 class="text-danger" id="stateError"></h6>

            </div>
                <div class="col-md-6">

                    <h6>Street Address</h6>
                    
                  <input type="text" placeholder="house number and street name" class="w-100" id="street-address1" />
                  <h6 class="text-danger" id="streetError1"></h6>
                </div>
                <div class="col-md-6">
                    <h6> street address</h6>
                    
                    <input
                      type="text"
                      placeholder="Apartment,Suite,unit etc;(optional)"
                      class="w-100"
                      id="street-address2" />
                      <h6 class="text-danger" id="streetError2"></h6>

                </div>
                <div class="col-md-6">

                    <h6> town/city</h6>
                    
                    <input type="text" class="w-100" id="town"/>
                    <h6 class="text-danger" id="townError"></h6>
                </div>
                <div class="col-md-6">

                    <h6> Postcode / ZIP *</h6>
                    
                    <input type="number" class="w-100" id="postcode"/>
                    <h6 class="text-danger" id="postcodeError"></h6>
                </div>
              <div class="col-md-6">
                <h6>phone</h6>
              <input type="number" class="w-100" />
              </div>
              <div class="col-md-6">
                <h6>Email Address</h6>
              <input type="email " class="w-100" />
              </div>
              <div class="col-md-7">
                <div class="radio">
                    <input type="radio" class="mb-4 me-2">
                    <h6>create an account</h6>
                    <input type="radio" class="ms-5 mb-4 me-2">
                    <h6>Ship to different address</h6>
                    
                </div>
              </div>
              <div class="col-md-5 text-end">
                <button class="checkout_btn w-50" type="submit">submit</button>
              </div>
              <div class="container">
                  <div class="row">
              <div class="col-md-6">
                <div class="Cart_check">
                  <h4>cart total</h4>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>subtotal</span><span>$20.60</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>Delivery</span><span>$0.00</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>discount</span><span>$3.00</span>
                  </p>
                  <hr />
                  <p class="d-flex justify-content-between my-4 align-items-center">
                      <span class="fs-5">total</span
                    ><span class="bold">$17.60</span>
                  </p>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="Cart_check">
                    <h4>payment method</h4>
                      <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">direct bank transfer</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">check payment  </p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">paypal</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="checkbox" class="mx-2"> I have read and accept the terms and conditions</p>
                    </p>
                    
                <button class="checkout_btn rounded w-100 me-0 m-0" id="orderPlaced">place an order</button>
                  </div>
              </div>
            </div>
        </div>
    </form>
    </div>
      </div>
    </div>`;
  })
  
  })
  
}


  let count = document.getElementById("count");

  // desription access
  let desContent = document.getElementById("Description_content");
  console.log(desContent);
  let DescriptionHandler = document
    .getElementById("DescriptionHandler")
    .addEventListener("click", () => {
      document.getElementById("DescriptionHandler").style.background =
        "#b7472a";
      document.getElementById("DescriptionHandler").style.color = "white";
      // other btn color change

      document.getElementById("Manufaturer").style.background =
        " rgb(0 0 0 / 5%)";
      document.getElementById("Manufaturer").style.color = "black";

      document.getElementById("Review").style.background = "rgb(0 0 0 / 5%)";
      document.getElementById("Review").style.color = "black";
      desContent.innerHTML = `<div class="Description_content bg-light" id="Description_content">
    <h3>bacardi 151 degree</h3>
    On her way she met a copy. The copy warned the Little Blind Text,
    that where it came from it would have been rewritten a thousand
    times and everything that was left from its origin would be the word
    "and" and the Little Blind Text should turn around and return to its
    own, safe country. But nothing the copy said could convince her and
    so it didn’t take long until a few insidious Copy Writers ambushed
    her, made her drunk with Longe and Parole and dragged her into their
    agency, where they abused her for their.
  </div>`;
    });
  let Manufaturer = document
    .getElementById("Manufaturer")
    .addEventListener("click", () => {
      document.getElementById("Manufaturer").style.background = "#b7472a";
      document.getElementById("Manufaturer").style.color = "white";
      // other btn color change

      document.getElementById("DescriptionHandler").style.background =
        " rgb(0 0 0 / 5%)";
      document.getElementById("DescriptionHandler").style.color = "black";

      document.getElementById("Review").style.background = "rgb(0 0 0 / 5%)";
      document.getElementById("Review").style.color = "black";
      desContent.innerHTML = `<div class="Description_content bg-light" id="Description_content">
    <h3>Manufactured By Liquor Store</h3>
    On her way she met a copy. The copy warned the Little Blind Text,
    that where it came from it would have been rewritten a thousand
    times and everything that was left from its origin would be the word
    "and" and the Little Blind Text should turn around and return to its
    own, safe country. But nothing the copy said could convince her and
    so it didn’t take long until a few insidious Copy Writers ambushed
    her, made her drunk with Longe and Parole and dragged her into their
    agency, where they abused her for their.
  </div>`;
    });
  let Review = document
    .getElementById("Review")
    .addEventListener("click", () => {
      // btn color change
      document.getElementById("Review").style.background = "#b7472a";
      document.getElementById("Review").style.color = "white";
      // other btn color change
      document.getElementById("Manufaturer").style.background =
        " rgb(0 0 0 / 5%)";
      document.getElementById("Manufaturer").style.color = "black";
      document.getElementById("DescriptionHandler").style.background =
        " rgb(0 0 0 / 5%)";
      document.getElementById("DescriptionHandler").style.color = "black";

      desContent.innerHTML = `<div class="row">
      <div class="col-md-7">
      <div class="reviews">
        <h2 class="text-dark">23 reviews</h2>
        <div class="review-profile">
          <img
            src="./Images/person_1.jpg.webp"
            class="img-fluid"
            alt=""
          />
          <div class="review-name">
            <div class="d-flex justify-content-between">
              <h4 class="text-start mt-2">jacob web</h4>
              <p class="text-end opacity-50">25/04/2021</p>
            </div>
            <div class="Star5">
              <a href="/">
                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>
              </a>
            </div>
            <p class="opacity-75 pt-5" >
              When she reached the first hills of the Italic Mountains,
              she had a last view back on the skyline of her hometown
              Bookmarksgrov
            </p>
          </div>
        </div>
        <div class="review-profile">
          <img
            src="./Images/person_2.jpg.webp"
            class="img-fluid"
            alt=""
          />
          <div class="review-name">
            <div class="d-flex justify-content-between">
              <h4 class="text-start mt-2">jacob web</h4>
              <p class="text-end opacity-50">25/04/2021</p>
            </div>
            <div class="Star5">
              <a href="/">
                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>
              </a>
            </div>
            <p class="opacity-75 pt-5" >
              When she reached the first hills of the Italic Mountains,
              she had a last view back on the skyline of her hometown
              Bookmarksgrov
            </p>
          </div>
        </div>
        <div class="review-profile">
          <img
            src="./Images/person_3.jpg.webp"
            class="img-fluid"
            alt=""
          />
          <div class="review-name">
            <div class="d-flex justify-content-between">
              <h4 class="text-start mt-2">jacob web</h4>
              <p class="text-end opacity-50">25/04/2021</p>
            </div>
            <div class="Star5">
              <a href="/">
                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>

                <i class="fa-solid fa-star"></i>
              </a>
            </div>
            <p class="opacity-75 pt-5" >
              When she reached the first hills of the Italic Mountains,
              she had a last view back on the skyline of her hometown
              Bookmarksgrov
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="Give my-2 ms-5">
        <h2 class="text-dark">give a review</h2>
        <div class="Give-star">
          <div class="Star5 mt-4">
            <a href="/" class="text-start me-5">
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>
              (98%)
            </a>
            <p class="text-end ms-5 mt-3 text-dark opacity-50">20 reviews</p>
          </div>
          <div class="Star5 mt-1">
            <a href="/" class="text-start me-5">
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>
              (98%)
            </a>
            <p class="text-end ms-5 mt-3 text-dark opacity-50">20 reviews</p>
          </div>
          <div class="Star5 mt-1">
            <a href="/" class="text-start me-5">
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>
              (98%)
            </a>
            <p class="text-end ms-5 mt-3 text-dark opacity-50">20 reviews</p>
          </div>
          <div class="Star5 mt-1">
            <a href="/" class="text-start me-5">
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>
              (98%)
            </a>
            <p class="text-end ms-5 mt-3 text-dark opacity-50">20 reviews</p>
          </div>
          <div class="Star5 mt-1">
            <a href="/" class="text-start me-5">
              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>

              <i class="fa-solid fa-star"></i>
              (98%)
            </a>
            <p class="text-end ms-5 mt-3 text-dark opacity-50">20 reviews</p>
          </div>
            </div>
        </div>
      </div>
    </div>`;
  
    });
});
// single_product count js
const minusHandler = () => {
  count.innerText--;
  if (count.innerText < 0) {
    count.innerText = 0;
  }
};
const plusHandler = () => {
  count.innerText++;
};



// ==========cart product js=====================
document.getElementById("cart").addEventListener("click", () => {
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > cart</p>
  <h1 class = "about_section">my cart</h1>
  </div>
  `;
  navigation.innerHTML = ` <div class="cart">
      <div class="container">
        <div class="Cart_head">
          <h4>product</h4>
          <div class="d-flex">
            <h4 class="mx-4">price</h4>
            <h4 class="mx-4">quantity</h4>
            <h4 class="mx-4">total</h4>
          </div>
        </div>
        <div class="cart_list">
          <div class="Cart_items" id="cart_item">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity"
                value="2"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item1">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity1"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete1" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item2">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity2"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete2" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item3">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity3"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete3" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item4">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity4"
                value="3"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete4" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-7"></div>
          <div class="col-md-5">
            <div class="Cart_check">
              <h4>cart total</h4>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>subtotal</span><span>$20.60</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>Delivery</span><span>$0.00</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>discount</span><span>$3.00</span>
              </p>
              <hr />
              <p class="d-flex justify-content-between my-4 align-items-center">
                <span class="fs-5">total</span><span class="bold">$17.60</span>
              </p>
            </div>
            <button class="checkout_btn rounded" id="checkoutProcess">
              procced To checkout
            </button>
          </div>
        </div>
      </div>
    </div>`;

  // cart js first part ==================================
  let quantity = document.getElementById("quantity");
  quantity.addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[0];
    let total = document.getElementsByClassName("total")[0];
    total.innerText = Math.round(44.99 * e.target.value),"$";
  });

  document.getElementById("quantity1").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[1];
    let total = document.getElementsByClassName("total")[1];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity2").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[2];
    let total = document.getElementsByClassName("total")[2];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity3").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[3];
    let total = document.getElementsByClassName("total")[3];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity4").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[4];
    let total = document.getElementsByClassName("total")[4];
    total.innerText = Math.round(44.99 * e.target.value),$;
  });
  document.getElementById("Delete").addEventListener("click", () => {
    document.getElementById("cart_item").style.display = "none";
  });
  document.getElementById("Delete1").addEventListener("click", () => {
    document.getElementById("cart_item1").style.display = "none";
  });
  document.getElementById("Delete2").addEventListener("click", () => {
    document.getElementById("cart_item2").style.display = "none";
  });
  document.getElementById("Delete3").addEventListener("click", () => {
    document.getElementById("cart_item3").style.display = "none";
  });
  document.getElementById("Delete4").addEventListener("click", () => {
    document.getElementById("cart_item4").style.display = "none";
  });

  document.getElementById("checkoutProcess").addEventListener("click", () => {
    slideContent.innerHTML = 
    `<div class = "aboutSection">
  <p>home > Checkout</p>
  <h1 class = "about_section">checkout</h1>
  </div>`;
    navigation.innerHTML = `<div class="checkout">
      <div class="container">
        <div class="row">
          <form class="forms row" id="forms">
            <h4 class="my-5">Billing Details</h4>
                <div class=" col-md-6">
              <h6>first name</h6>
              
                <input type="text" class="w-100" id="first_name" />
                <h6 class="text-danger" id="firstName"></h6>
              </div>
              <div class="  col-md-6">

                  <h6>last name</h6>
                  
                  <input type="text" class="w-100" id="last_name"/>
                  <h6 class="text-danger" id="lastName"></h6>
              </div>
            <div class="col-md-12">
               
                    <h6>State / Country</h6>
                        
                    <input type="text" class="w-100" id="State" />
                    <h6 class="text-danger" id="stateError"></h6>

            </div>
                <div class="col-md-6">

                    <h6>Street Address</h6>
                    
                  <input type="text" placeholder="house number and street name" class="w-100" id="street-address1" />
                  <h6 class="text-danger" id="streetError1"></h6>
                </div>
                <div class="col-md-6">
                    <h6> street address</h6>
                    
                    <input
                      type="text"
                      placeholder="Apartment,Suite,unit etc;(optional)"
                      class="w-100"
                      id="street-address2" />
                      <h6 class="text-danger" id="streetError2"></h6>

                </div>
                <div class="col-md-6">

                    <h6> town/city</h6>
                    
                    <input type="text" class="w-100" id="town"/>
                    <h6 class="text-danger" id="townError"></h6>
                </div>
                <div class="col-md-6">

                    <h6> Postcode / ZIP *</h6>
                    
                    <input type="number" class="w-100" id="postcode"/>
                    <h6 class="text-danger" id="postcodeError"></h6>
                </div>
              <div class="col-md-6">
                <h6>phone</h6>
              <input type="number" class="w-100" />
              </div>
              <div class="col-md-6">
                <h6>Email Address</h6>
              <input type="email " class="w-100" />
              </div>
              <div class="col-md-7">
                <div class="radio">
                    <input type="radio" class="mb-4 me-2">
                    <h6>create an account</h6>
                    <input type="radio" class="ms-5 mb-4 me-2">
                    <h6>Ship to different address</h6>
                    
                </div>
              </div>
              <div class="col-md-5 text-end">
                <button class="checkout_btn w-50" type="submit">submit</button>
              </div>
              <div class="container">
                  <div class="row">
              <div class="col-md-6">
                <div class="Cart_check">
                  <h4>cart total</h4>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>subtotal</span><span>$20.60</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>Delivery</span><span>$0.00</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>discount</span><span>$3.00</span>
                  </p>
                  <hr />
                  <p class="d-flex justify-content-between my-4 align-items-center">
                      <span class="fs-5">total</span
                    ><span class="bold">$17.60</span>
                  </p>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="Cart_check">
                    <h4>payment method</h4>
                      <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">direct bank transfer</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">check payment  </p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">paypal</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="checkbox" class="mx-2"> I have read and accept the terms and conditions</p>
                    </p>
                    
                <button class="checkout_btn rounded w-100 me-0 m-0" type="submit" id="orderPlaced">place an order</button>
                  </div>
              </div>
            </div>
        </div>
    </form>
    </div>
      </div>
    </div>`;
  });
  // cehck out js
  let formHandle = document.getElementById("forms");
  formHandle.addEventListener("submit", (e) => {
    let flag = true;
    e.preventDefault();
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name");
    let State = document.getElementById("first_name").value;
    let streetAddress1 = document.getElementById("street-address1").value;
    let streetAddress2 = document.getElementById("street-address2").value;
    let town = document.getElementById("town").value;
    let postcode = document.getElementById("postcode").value;

    // error variables
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let stateError = document.getElementById("stateError");
    let streetError1 = document.getElementById("streetError1");
    let streetError2 = document.getElementById("streetError2");
    let townError = document.getElementById("townError");
    let postcodeError = document.getElementById("postcodeError");

    if (first_name.length < 3) {
      firstName.innerText = "please Enter Your First Name";
      flag = false;
    }
    if (!isNaN(first_name)) {
      firstName.innerText = "please fill only character";
      flag = false;
    }
    if (last_name.value == "") {
      lastName.innerText = "please Enter Your last Name";
      flag = false;
    }
    if (!isNaN(last_name)) {
      lastName.innerText = "please fill only character";
      flag = false;
    }
    if (State == "") {
      stateError.innerText = "Please Fill This Input Field";
      flag = false;
    }
    if (streetAddress1.length < 4) {
      streetError1.innerText = "Please Fill This Input Field";
      flag = false;
    }
    if (streetAddress2.length < 4) {
      streetError2.innerText = "Please Fill This Input Field";
      flag = false;
    }
    if (postcode == "") {
      postcodeError.innerText = "Please Fill This Input Field";
      flag = false;
    }
    if (town == "") {
      townError.innerText = "Please Fill This Input Field";
      flag = false;
    } else if (flag) {
      alert(
        `Form Submitted Succesfully And Your Username :${
          first_name + last_name
        } and password :${123456}`
      );
      firstName.innerText = "";
      lastName.innerText = "";
      stateError.innerText = "";
      streetError1.innerText = "";
      streetError2.innerText = "";
      townError.innerText = "";
      postcodeError.innerText = "";
    }
  });
  
});
// checkout js navigation =====================
document.getElementById("checkout").addEventListener("click", () => {
  slideContent.innerHTML = 
  `<div class = "aboutSection">
<p>home > Checkout</p>
<h1 class = "about_section">checkout</h1>
</div>`;
  navigation.innerHTML = `<div class="checkout">
    <div class="container">
      <div class="row">
        <form class="forms row" id="forms">
          <h4 class="my-5">Billing Details</h4>
              <div class=" col-md-6">
            <h6>first name</h6>
            
              <input type="text" class="w-100" id="first_name" />
              <h6 class="text-danger" id="firstName"></h6>
            </div>
            <div class="  col-md-6">

                <h6>last name</h6>
                
                <input type="text" class="w-100" id="last_name"/>
                <h6 class="text-danger" id="lastName"></h6>
            </div>
          <div class="col-md-12">
             
                  <h6>State / Country</h6>
                      
                  <input type="text" class="w-100" id="State" />
                  <h6 class="text-danger" id="stateError"></h6>

          </div>
              <div class="col-md-6">

                  <h6>Street Address</h6>
                  
                <input type="text" placeholder="house number and street name" class="w-100" id="street-address1" />
                <h6 class="text-danger" id="streetError1"></h6>
              </div>
              <div class="col-md-6">
                  <h6> street address</h6>
                  
                  <input
                    type="text"
                    placeholder="Apartment,Suite,unit etc;(optional)"
                    class="w-100"
                    id="street-address2" />
                    <h6 class="text-danger" id="streetError2"></h6>

              </div>
              <div class="col-md-6">

                  <h6> town/city</h6>
                  
                  <input type="text" class="w-100" id="town"/>
                  <h6 class="text-danger" id="townError"></h6>
              </div>
              <div class="col-md-6">

                  <h6> Postcode / ZIP *</h6>
                  
                  <input type="number" class="w-100" id="postcode"/>
                  <h6 class="text-danger" id="postcodeError"></h6>
              </div>
            <div class="col-md-6">
              <h6>phone</h6>
            <input type="number" class="w-100" />
            </div>
            <div class="col-md-6">
              <h6>Email Address</h6>
            <input type="email " class="w-100" />
            </div>
            <div class="col-md-7">
              <div class="radio">
                  <input type="radio" class="mb-4 me-2">
                  <h6>create an account</h6>
                  <input type="radio" class="ms-5 mb-4 me-2">
                  <h6>Ship to different address</h6>
                  
              </div>
            </div>
            <div class="col-md-5 text-end">
              <button class="checkout_btn w-50" type="submit">submit</button>
            </div>
            <div class="container">
                <div class="row">
            <div class="col-md-6">
              <div class="Cart_check">
                <h4>cart total</h4>
                <p class="d-flex justify-content-between opacity-75 my-4">
                  <span>subtotal</span><span>$20.60</span>
                </p>
                <p class="d-flex justify-content-between opacity-75 my-4">
                  <span>Delivery</span><span>$0.00</span>
                </p>
                <p class="d-flex justify-content-between opacity-75 my-4">
                  <span>discount</span><span>$3.00</span>
                </p>
                <hr />
                <p class="d-flex justify-content-between my-4 align-items-center">
                    <span class="fs-5">total</span
                  ><span class="bold">$17.60</span>
                </p>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="Cart_check">
                  <h4>payment method</h4>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">direct bank transfer</p>
                  </p>
                  <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">check payment  </p>
                  </p>
                  <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">paypal</p>
                  </p>
                  <p class="d-flex align-items-center opacity-75 my-3"><input type="checkbox" class="mx-2"> I have read and accept the terms and conditions</p>
                  </p>
                  
              <button class="checkout_btn rounded w-100 me-0 m-0" id="orderPlaced">place an order</button>
                </div>
            </div>
          </div>
      </div>
  </form>
  </div>
    </div>
  </div>`;


// check out js==============================================

  let formHandle = document.getElementById("forms");
formHandle.addEventListener("submit", (e) => {
  let flag = true;
  e.preventDefault()
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let State = document.getElementById("first_name").value;
  let streetAddress1 = document.getElementById("street-address1").value;
  let streetAddress2 = document.getElementById("street-address2").value;
  let town = document.getElementById("town").value;
  let postcode = document.getElementById("postcode").value;

  // error variables
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let stateError = document.getElementById("stateError");
  let streetError1 = document.getElementById("streetError1");
  let streetError2 = document.getElementById("streetError2");
  let townError = document.getElementById("townError");
  let postcodeError = document.getElementById("postcodeError");

  if (first_name.length < 3) {
    firstName.innerText = "please Enter Your First Name";
    flag = false;
  }
  if (!isNaN(first_name)) {
    firstName.innerText = "please fill only character";
    flag = false;
  }
  if (last_name.value == "") {
    lastName.innerText = "please Enter Your last Name";
    flag = false;
  }
  if (!isNaN(last_name)) {
    lastName.innerText = "please fill only character";
    flag = false;
  }
  if (State == "") {
    stateError.innerText = "Please Fill This Input Field";
    flag = false;
  }
  if (streetAddress1.length < 4) {
    streetError1.innerText = "Please Fill This Input Field";
    flag = false;
  }
  if (streetAddress2.length < 4) {
    streetError2.innerText = "Please Fill This Input Field";
    flag = false;
  }
  if (postcode == "") {
    postcodeError.innerText = "Please Fill This Input Field";
    flag = false;
  }
  if (town == "") {
    townError.innerText = "Please Fill This Input Field";
    flag = false;
  } else if (flag) {
    alert(
      `Form Submitted Succesfully And Your Username :${
        first_name + last_name
      } and password :${123456}`
    );
    firstName.innerText = "";
    lastName.innerText = "";
    stateError.innerText = "";
    streetError1.innerText = "";
    streetError2.innerText = "";
    townError.innerText = "";
    postcodeError.innerText = "";
  }
});
document.getElementById("orderPlaced").addEventListener("click",()=>{
  alert("Your Order Submitted SuccesfUlly")
})
});

// contact us navigation ==============================

document.getElementById("contact").addEventListener("click", () => {
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > contact us</p>
  <h1 class = "about_section">contact us</h1>
  </div>
  `;
  navigation.innerHTML = `
  <div class="Contact_js bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="contact_icons">

                <i class="fa-solid fa-location-dot CONT_ICO "></i>
                <p>Address :<span class="opacity-50 text-dark">  198 West 21th Street, Suite 721 New York NY 10016</span></p>

            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="contact_icons">

                <i class="fa-solid fa-phone CONT_ICO"></i>
                <p >Phone :<span> + 1235 2355 98</span></p>

            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="contact_icons">

                <i class="fa-solid fa-paper-plane CONT_ICO"></i>
                <p>email :<span>  info@yoursite.com</span></p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="contact_icons">

                <i class="fa-solid fa-earth-americas CONT_ICO"></i>
                <p>Website :<span>  yoursite.com</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mt-5">
            
        <div class="col-lg-4">
            <div>

                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0474021952!2d-74.31001196101985!3d40.697538013491915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1729936505376!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
            </div>
        </div>
        <div class="col-md-12">
        <div class="forms">
            <h3 class="text-start ms-5 ps-5 my-5">contact us</h3>
                    <div class="Forms_inp">
                        <div class="contact_inp w-100">
                            <h6 class="text-start ms-4">Full Name</h6>
                            <input type="text" placeholder="Name" class="w-100 me-4">

                        </div>
                        <div class="contact_inp w-100">

                            <h6 class="text-start ms-4">Email Address</h6>
                            <input type="email" placeholder="Email" class="w-100 ms-4">
                        </div>
                    </div>
                    <div class="contact_inp text-start">
                        
                        <h6>Subject</h6>
                            <input type="text" placeholder="Enter Your Subject Here" class="w-100">
                    </div>
                    <div class="contact_inp">
                        
                        <h6>Message</h6>
                            <input type="text" placeholder="Enter Your  Message Here" class="w-100">
                    </div>
                    <button class="Contact_btn rounded text-center">Send Message</button>
                </div>
        </div>
        
    </div>
      </div>
    </div>

  `;
});

// cart nav btn ===============================

document.getElementById("ViewAll").addEventListener("click",()=>{
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > cart</p>
  <h1 class = "about_section">my cart</h1>
  </div>
  `;
  navigation.innerHTML = ` <div class="cart">
      <div class="container">
        <div class="Cart_head">
          <h4>product</h4>
          <div class="d-flex">
            <h4 class="mx-4">price</h4>
            <h4 class="mx-4">quantity</h4>
            <h4 class="mx-4">total</h4>
          </div>
        </div>
        <div class="cart_list">
          <div class="Cart_items" id="cart_item">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity"
                value="2"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item1">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity1"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete1" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item2">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity2"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete2" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item3">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity3"
                value="1"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete3" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
          <div class="Cart_items" id="cart_item4">
            <input type="checkbox" />
            <div class="cart_item">
              <img src="./Images/prod-1.jpg.webp" class="mx-5" alt="" />
              <div class="cart_list_name mt-2">
                <h4>Jim Beam Kentucky Straight</h4>
                <p>Fugiat voluptates quasi nemo, ipsa perferendis</p>
              </div>
            </div>
            <div class="cart_rate">
              <p class="mx-4 opacity-75 price">$44.99</p>
              <input
                type="number"
                class="cart_quantity"
                id="quantity4"
                value="3"
                min="0"
              />
              <p class="mx-4 opacity-75 total">$89.98</p>
              <button id="Delete4" class="Cart_del">
                <i class="fa-solid fa-delete-left" role="button"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-7"></div>
          <div class="col-md-5">
            <div class="Cart_check">
              <h4>cart total</h4>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>subtotal</span><span>$20.60</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>Delivery</span><span>$0.00</span>
              </p>
              <p class="d-flex justify-content-between opacity-75 my-4">
                <span>discount</span><span>$3.00</span>
              </p>
              <hr />
              <p class="d-flex justify-content-between my-4 align-items-center">
                <span class="fs-5">total</span><span class="bold">$17.60</span>
              </p>
            </div>
            <button class="checkout_btn rounded" id="checkoutProcess">
              procced To checkout
            </button>
          </div>
        </div>
      </div>
    </div>`;

  // cart js first part ==================================
  let quantity = document.getElementById("quantity");
  quantity.addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[0];
    let total = document.getElementsByClassName("total")[0];
    total.innerText = Math.round(44.99 * e.target.value);
  });

  document.getElementById("quantity1").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[1];
    let total = document.getElementsByClassName("total")[1];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity2").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[2];
    let total = document.getElementsByClassName("total")[2];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity3").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[3];
    let total = document.getElementsByClassName("total")[3];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("quantity4").addEventListener("change", (e) => {
    let price = document.getElementsByClassName("price")[4];
    let total = document.getElementsByClassName("total")[4];
    total.innerText = Math.round(44.99 * e.target.value);
  });
  document.getElementById("Delete").addEventListener("click", () => {
    document.getElementById("cart_item").style.display = "none";
  });
  document.getElementById("Delete1").addEventListener("click", () => {
    document.getElementById("cart_item1").style.display = "none";
  });
  document.getElementById("Delete2").addEventListener("click", () => {
    document.getElementById("cart_item2").style.display = "none";
  });
  document.getElementById("Delete3").addEventListener("click", () => {
    document.getElementById("cart_item3").style.display = "none";
  });
  document.getElementById("Delete4").addEventListener("click", () => {
    document.getElementById("cart_item4").style.display = "none";
  });


  
  document.getElementById("checkoutProcess").addEventListener("click", () => {
    slideContent.innerHTML = 
    `<div class = "aboutSection">
  <p>home > Checkout</p>
  <h1 class = "about_section">checkout</h1>
  </div>`;
    navigation.innerHTML = `<div class="checkout">
      <div class="container">
        <div class="row">
          <form class="forms row" id="forms">
            <h4 class="my-5">Billing Details</h4>
                <div class=" col-md-6">
              <h6>first name</h6>
              
                <input type="text" class="w-100" id="first_name" />
                <h6 class="text-danger" id="firstName"></h6>
              </div>
              <div class="  col-md-6">

                  <h6>last name</h6>
                  
                  <input type="text" class="w-100" id="last_name"/>
                  <h6 class="text-danger" id="lastName"></h6>
              </div>
            <div class="col-md-12">
               
                    <h6>State / Country</h6>
                        
                    <input type="text" class="w-100" id="State" />
                    <h6 class="text-danger" id="stateError"></h6>

            </div>
                <div class="col-md-6">

                    <h6>Street Address</h6>
                    
                  <input type="text" placeholder="house number and street name" class="w-100" id="street-address1" />
                  <h6 class="text-danger" id="streetError1"></h6>
                </div>
                <div class="col-md-6">
                    <h6> street address</h6>
                    
                    <input
                      type="text"
                      placeholder="Apartment,Suite,unit etc;(optional)"
                      class="w-100"
                      id="street-address2" />
                      <h6 class="text-danger" id="streetError2"></h6>

                </div>
                <div class="col-md-6">

                    <h6> town/city</h6>
                    
                    <input type="text" class="w-100" id="town"/>
                    <h6 class="text-danger" id="townError"></h6>
                </div>
                <div class="col-md-6">

                    <h6> Postcode / ZIP *</h6>
                    
                    <input type="number" class="w-100" id="postcode"/>
                    <h6 class="text-danger" id="postcodeError"></h6>
                </div>
              <div class="col-md-6">
                <h6>phone</h6>
              <input type="number" class="w-100" />
              </div>
              <div class="col-md-6">
                <h6>Email Address</h6>
              <input type="email " class="w-100" />
              </div>
              <div class="col-md-7">
                <div class="radio">
                    <input type="radio" class="mb-4 me-2">
                    <h6>create an account</h6>
                    <input type="radio" class="ms-5 mb-4 me-2">
                    <h6>Ship to different address</h6>
                    
                </div>
              </div>
              <div class="col-md-5 text-end">
                <button class="checkout_btn w-50" type="submit">submit</button>
              </div>
              <div class="container">
                  <div class="row">
              <div class="col-md-6">
                <div class="Cart_check">
                  <h4>cart total</h4>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>subtotal</span><span>$20.60</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>Delivery</span><span>$0.00</span>
                  </p>
                  <p class="d-flex justify-content-between opacity-75 my-4">
                    <span>discount</span><span>$3.00</span>
                  </p>
                  <hr />
                  <p class="d-flex justify-content-between my-4 align-items-center">
                      <span class="fs-5">total</span
                    ><span class="bold">$17.60</span>
                  </p>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="Cart_check">
                    <h4>payment method</h4>
                      <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">direct bank transfer</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">check payment  </p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="radio" class="mx-2">paypal</p>
                    </p>
                    <p class="d-flex align-items-center opacity-75 my-3"><input type="checkbox" class="mx-2"> I have read and accept the terms and conditions</p>
                    </p>
                    
                <button class="checkout_btn rounded w-100 me-0 m-0" id="orderPlaced">place an order</button>
                  </div>
              </div>
            </div>
        </div>
    </form>
    </div>
      </div>
    </div>`;
  })

  document.getElementById("orderPlaced").addEventListener("click",()=>{
    alert("Your Order Submitted SuccesfUlly")
  })
})

// view all product btn
document.getElementById("All_product").addEventListener("click",()=>{
  slideContent.innerHTML = `
  <div class = "aboutSection">
  <p>home > products > </p>
  <h1 class = "about_section">products</h1>
  </div>
  `;
  navigation.innerHTML = `
  <div class="container">
<div class="row">
<div class="col-md-9">

    <div class="products_js text-center">
          <div class="container">
            <div class="row">
              <div class="heading_product">
                <p class="since_p">our delightful offerings</p>
                <h1>tastefully your's</h1>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-1.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>

                <div class="details">
                  <span class="text-light p-1 px-3 sales">sale</span>
                  <p class="since_p">brandy</p>
                  <h4>bacardi 151</h4>
                  <p><span class="sale_price">$69.00</span> $49.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-2.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <span class="text-light py-1 px-3 d-inline-block bg-warning sales"
                    >best seller</span
                  >
                  <p class="since_p">gin</p>
                  <h4>Jim Beam Kentucky Straight</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-3.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <span class="text-light py-1 bg-success px-3 d-inline-block sales"
                    >new arrivals</span
                  >
                  <p class="since_p">rum</p>
                  <h4>Citadelle</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-4.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">rum</p>
                  <h4>The Glenlivet</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-5.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">whisky</p>
                  <h4>black label</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-6.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">tequila</p>
                  <h4>macallan</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-7.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">vodka</p>
                  <h4>old monk</h4>
                  <p>$69.00</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-8.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  <p class="since_p">whisky</p>
                  <h4>Jameson Irish Whiskey</h4>
                  <p>$69.00</p>
                </div>
              </div>
               <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-9.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  <p class="since_p">whisky</p>
                  <h4>Screwball</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-10.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  <p class="since_p">whisky</p>
                  <h4>Screwball</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-11.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                  
                  
                  <p class="since_p">whisky</p>
                  <h4>McClelland's</h4>
                  <p>$69.00</p>
                </div>
              </div> <div class="col-lg-4">
                <div class="product_img">
                  <div class="pr_img">
                    <img src="./Images/prod-12.jpg.webp" alt="" />
                  </div>
                  <div class="hover_product">
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                  </div>
                </div>
                <div class="details">
                 
                  
                  <p class="since_p">whisky</p>
                  <h4>Plantation</h4>
                  <p>$69.00</p>
                </div>
              </div>
            </div>

            <div class="products_page">
        <a href="">
          &lt;
        </a>
        <a href="" class="products_page_sp">
          1
        </a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">
          &gt;
        </a>
      </div>
          </div>
        </div>
        </div> 
        <div class="col-md-3">
        <div class="trial">
        <h4>product type</h4>
        <ul class="product_type">
          <li>
            <a href="" class="text-start">Brandy</a>
            <span class="product_type_spans text-end"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href=""> gin</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">rum</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">tequila</a
            ><span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">vodka </a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
          <li>
            <a href="">whisky</a>
            <span class="product_type_spans"><i class="fa-solid fa-angle-right mx-2"></i></span>
          </li>
        </ul>
      </div>
      
      <div class = "blogings">
       <h4>recent blogs</h4>
          <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_1.jpg.webp" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
              <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_2.jpg" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
              <div class="js_blog">
            <div class="imgs">
              <img src="./Images/image_3.jpg" class="img-fluid" alt="img">
            </div>
            <div class="jsBlog_content">
              Even the all-powerful Pointing has no control about the blind texts
            </div>
          </div>
            <div class="comment">
              <p class="mb-3 mx-3">
                <i class="fa-solid fa-calendar-days mx-1"></i>apr,18,2020 
              </p>
              <p>
                <i class="fa-solid fa-comment"></i>19
              </p>
            </div>
        </div>
</div> 
<div>
</div>
  `;
})