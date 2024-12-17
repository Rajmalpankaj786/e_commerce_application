let ls = JSON.parse(localStorage.getItem("LocalStorage")) ||[];

    document.querySelector("form").addEventListener("submit" , function(event){
        event.preventDefault();
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        let obj ={
            name,
            email,
            password
        }

        let newData = ls.filter((el) => el.email.toLowerCase().includes(email.toLowerCase()));

        if(newData.length <=0){
          ls.push(obj);
        localStorage.setItem("LocalStorage" , JSON.stringify(ls));
        console.log(ls)
        alert("SingUp successfully !");
        window.location.href = "login.html";
        }
        else{
          alert("User Already have an Account, Go to login page !");
          window.location.href = "login.html";

        }
       
    })