// let Name = document.getElementById("name");
// let Email = document.getElementById("email");
// let Number = document.getElementById("number");
// let Address = document.getElementById("address");

function sendEmail() {
    // const bodymsg=`Full Name : ${Name.value}<br>
    // Email : ${Email.value}<br>
    // Phone Number : ${Number.value}<br>
    // Address : ${Address}`;
    // Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "agrawalji280203@gmail.com",
    //     Password: "F313D4F45E827ABBAC8F3AE13EB4E9166738",
    //     To: 'agrawalji280203@gmail.com',
    //     From:"agrawalji280203@gmail.com",
    //     Subject: "New user",
    //     Body: "User data"
    // }).then(
    //     message => alert("Form submitted successfully")
    // );
    alert("Form submitted successfully");
}
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

})
let products ={
    name: "shampoo",
    price: "200",
    name2: "oil",
    price2: "300",
}
