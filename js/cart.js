let cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  displayData(cart);
  cartProductName(cart);
  

  function displayData(arr1) {
   // arr = cart.reduce((acc, el) => acc + el.price, 0);
    document.querySelector("#container1").innerHTML = "";
    arr1.forEach((element, index) => {
      let count = 1;

      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src", element.image);
      img.style.width = "100px";
      img.style.margin = "10px";
      let h1 = document.createElement("h2");
      h1.innerText = "Title : " + element.title;

      // let p1 = document.createElement("p1");
      // p1.innerText = "Description : "  + element.description;

      let h2 = document.createElement("h4");
      h2.innerText = "Category : " + element.category;


      //window.location.reload();
      let h4 = document.createElement("h4");
      h4.innerText = "Price : $ " + element.price;

      // let add1 = document.createElement("h4");
      // add1.innerText = "Rating : "+ element.rating.rate;

      let add1 = document.createElement("button");
      add1.innerText = " + ";
      add1.style.width = "30px";
      add1.style.fontSize = "20px";
      add1.style.borderRadius = "18px";
      add1.style.border = "none";
      add1.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";

      let sp = document.createElement("span");
      sp.innerText = "1";
      sp.style.margin = "10px";
      sp.style.padding = "5px";
      sp.style.fontSize = "20px";
      sp.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";

      let add2 = document.createElement("button");
      add2.innerText = " - ";
      add2.style.width = "30px";
      add2.style.fontSize = "20px";
      add2.style.borderRadius = "18px";
      add2.style.border = "none";
      add2.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";

      add1.addEventListener("click", function (e) {
        e.preventDefault();
        count++;

        
        let total = arr - element.price + count * element.price;
        console.log(total); 
        span.innerText = "$ " + Math.round(total);
        //console.log(arr)
        sp.innerText = count;

      })
      add2.addEventListener("click", function (e) {
        e.preventDefault();
        count--;
        if (count <= 0) {
          let x = cart.splice(index, 1);
          console.log(x)
          localStorage.setItem("cartItem", JSON.stringify(cart))
          displayData(cart);
          window.location.reload();
        }
        sp.innerText = count;
        let arr = cart.reduce((acc, el) => acc + count*el.price, 0)
        span.innerText = "$ " + arr;

      })
      console.log(count * (element.price))


      div.append(img, h1, h2, h4, add1, sp, add2);
      document.querySelector("#container1").append(div);

    });
  }

  /* total cart product price */

  let span = document.querySelector("#span1");
  let arr = cart.reduce((acc, el) => acc + el.price, 0)
  span.innerText = "$ " + arr;
  //console.log(arr)



  /* product name */


  function cartProductName(cart) {
    let i = 1;
    cart.forEach(el => {
      let title = document.createElement("p");
      title.innerText = i + ". " + el.title;
      i++;
      document.querySelector("#title").append(title);


    })
  }

  /* buy now buuton */

  document.querySelector("#buy").addEventListener("click", function () {
    window.location.href = "checkout.html";
  })