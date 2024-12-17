let detailsArr = JSON.parse(localStorage.getItem("details")) || [];

    document.querySelector("form").addEventListener("submit" , function(e){
        e.preventDefault();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var adress = document.getElementById('adress').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var pincode = document.getElementById('pincode').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;


    if(name == "" || lastname == "" || adress == "" || city == "" || country == "" || pincode == "" || number == "" || email == ""){
        alert("Please fill all the fields");
    }else{
    detailsObj={
        name:name,
        lastname:lastname,
        adress:adress,
        city:city,
        country:country,
        pincode:pincode,
        number:number,
        email:email
    }
    console.log(detailsObj);

    detailsArr.push(detailsObj);
    localStorage.setItem("details" , JSON.stringify(detailsArr));

    alert("Customer Details Saved Successfully !");

    window.location.href = "payment.html";
}

    })
   
