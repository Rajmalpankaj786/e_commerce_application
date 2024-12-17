let cart = JSON.parse(localStorage.getItem("cartItem")) || [];
let order = JSON.parse(localStorage.getItem("order")) || [];
let Customer = JSON.parse(localStorage.getItem("details")) || [];
console.log(cart ,order, Customer)

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    let otp = document.querySelector("#otp").value;

    if (otp == "123456") {
       // alert("Payment Successfully !")
       obj = {
        cart,
        Customer
       }


       order.push(obj);
      
     localStorage.setItem("order",JSON.stringify(order));
      let a =  localStorage.removeItem("cartItem");
      localStorage.removeItem("details");
      //console.log(a);
        //localStorage.setItem("cartItem" , JSON.stringify(cart));
        window.location.href = "thanks.html"
    }
    else {
        alert("Wrong OTP, Please Try Again !!")
    }
})