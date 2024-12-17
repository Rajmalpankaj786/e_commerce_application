let order = JSON.parse(localStorage.getItem("order")) || [];

console.log(order)
displayData(order)
//displayCustomer(order);
// mainFunction(order)
// function mainFunction(order){
//     order.forEach(el,index => {
//         let div = document.createElement("div");
//         let cust = document.createElement("h2");
//         cust.innerText = "# Order Details "+(index+1)+" : "
//     })
   
// }
function displayData(arr) {
    // arr = cart.reduce((acc, el) => acc + el.price, 0);
    document.querySelector("#main1").innerHTML = "";
    arr.forEach((element, index) => {
       // console.log(element.cart[0].image)
       let div2 = document.createElement("div");
        
        let div = document.createElement("div");
        let cust = document.createElement("h3");
        cust.innerText = "# Order Details "+(index+1)+" : "
        let img = document.createElement("img");
        img.setAttribute("src", element.cart[0].image);
        img.style.width = "100px";
        img.style.margin = "10px";

        let h1 = document.createElement("h3");
        h1.innerText = "Title : " + element.cart[0].title;

        // let p1 = document.createElement("p1");
        // p1.innerText = "Description : "  + element.description;

        let h2 = document.createElement("h4");
        h2.innerText = "Category : " + element.cart[0].category;


        //window.location.reload();
        let h4 = document.createElement("h4");
        h4.innerText = "Price : $ " + element.cart[0].price;

        // let add1 = document.createElement("h4");
        // add1.innerText = "Rating : "+ element.rating.rate;
        div.append( cust ,img, h1, h2, h4);

        let div1 = document.createElement("div");
        // let cust1 = document.createElement("h2");
        // cust.innerText = "Customer Details :"

        let name = document.createElement("h4");
        name.innerText = "Name : " + element.Customer[0].name + " " + element.Customer[0].lastname;

        let email = document.createElement("h4");
        email.innerText = "Email : " + element.Customer[0].email;

        let contact = document.createElement("h4");
        contact.innerText = "Contact : " + element.Customer[0].number;

        let address = document.createElement("h4");
        address.innerText = "address : " + element.Customer[0].adress;

        let city = document.createElement("h4");
        city.innerText = "City : " + element.Customer[0].city;

        let country = document.createElement("h4");
        country.innerText = "Country : " + element.Customer[0].country;
        


       
        div1.append( name, email, contact, address, city, country);
        div2.append(div,div1)
        document.querySelector("#main1").append(div2);

    });
}


// function displayCustomer(arr) {
//     arr.forEach(el => {
        
//         document.querySelector("#customer").append(div)

//     })
// }