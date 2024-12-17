let arr = JSON.parse(localStorage.getItem("payment")) || [];

document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();

    let cardNumber = document.querySelector("#cardNumber").value;
    let cvv = document.querySelector("#cvv").value;
    let valid = document.querySelector("#valid").value;
    let name = document.querySelector("#name").value;

    let obj = {
        cardNumber,
        cvv,
        valid,
        name
    }

    arr.push(obj);
    localStorage.setItem("payment" , JSON.stringify(arr));

    window.location.href = "otp.html";
})