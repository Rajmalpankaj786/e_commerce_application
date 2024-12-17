let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  console.log(isLoggedIn);
  let cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  let bag = [];
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()).then((data) => {
      bag = data;
      console.log(data);
      displayData(bag);
    })


  /* search funciton */
  document.querySelector("#search").addEventListener("input", function (event) {
    event.preventDefault();
    let q = document.querySelector("#search").value;
    let newData = bag.filter(element => {
      return element.title.toLowerCase().includes(q.toLowerCase())
    })
    console.log(newData)
    displayData(newData);
  })


  /* display funciton */
  function displayData(arr) {
    document.querySelector("#container").innerHTML = "";
    arr.forEach(element => {
      // product.push(element);

      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", element.image);

      img.addEventListener("click", () => {
        localStorage.setItem("selectedProduct", JSON.stringify(element));
        window.location.href = "productDetails.html";
      });
      // let ancher = document.createElement("a");
      // ancher.href = "productDetails.html";
      // ancher.append(img)
      // let id = document.createElement("h1");
      // id.innerText = element.id;
      let h1 = document.createElement("h2");
      h1.innerText = "Title : " + element.title;

      // let p1 = document.createElement("p1");
      // p1.innerText = element.description;
      let h2 = document.createElement("h4");
      h2.innerText = "Category : " + element.category;
      let h4 = document.createElement("h4");
      h4.innerText = "Price : $ " + element.price;
      let add = document.createElement("button");
      add.innerText = "Add To Cart ";
      add.style.backgroundColor = 'orange';
      add.style.border = "none";
      add.style.width = "200px";
      add.style.height = "30px";
      add.style.textAlign = "center";
      add.style.borderRadius = "20px";
      add.style.cursor = "pointer";
      // console.log(cart.filter((a) => a.id == (element.id)))
      add.addEventListener("click", function () {
        let y = element.id;
        console.log(y)
        let x = cart.filter((a) => { return a.id == y });
        console.log(x);

        if (isLoggedIn) {
          if (x.length > 0) {

            alert("Product is already in the cart!");


          } else {
            // Add product ID to the cart

            cart.push(element);
            localStorage.setItem("cartItem", JSON.stringify(cart));
            console.log(cart)
            alert("Product Added Successfully !")


          }
        }
        else {

          alert('User ID not found. Please log in again.');
          window.location.href = "login.html";
        }



      })

      div.append(img, h1, h2, h4, add);
      document.querySelector("#container").append(div);

    });
  }

 // JavaScript to handle menu toggle for responsive view
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
 });