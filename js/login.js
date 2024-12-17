let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

let ls = JSON.parse(localStorage.getItem("LocalStorage")) || [];

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

   let sEmail = ls.filter((ele) => { return ele.email.toLowerCase().includes(email.toLowerCase()) })
   
   //console.log(sEmail.email,sEmail.password)

    if (sEmail.length<=0) {
        alert("Don't have an Account for this Email!");
        window.location.href = "signUp.html";
    }
        else {
           
            if (password == sEmail[0].password) {
                alert("User Logged In Successfully !")
                localStorage.setItem("isLoggedIn" ,JSON.stringify("true"));
                window.location.href = "index.html"; 
            }
            else {
                alert("Incorrect Password !")
            }
        }
    //console.log(email, password)
    //console.log(ls.email)
})