// /* Feedback JavaScript Code */

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });
});

function submitForm() {
    let firstName = document.getElementById("fname").value.trim();
    let emailAdd = document.getElementById("emailAdd").value.trim();
    let streetAdd = document.getElementById("streetAdd").value.trim();
    let contact = document.getElementById("contact").value.trim();

    let errorMessage = document.getElementById("errorMessage");
    let errorMessage2 = document.getElementById("errorMessage2");
    let errorMessage3 = document.getElementById("errorMessage3");
    let errorMessage4 = document.getElementById("errorMessage4");

    errorMessage.innerText = "";
    errorMessage2.innerText = "";
    errorMessage3.innerText = "";
    errorMessage4.innerText = "";

    if (firstName === '') {
        errorMessage.innerText = "Name is required.";
    }

    if (emailAdd === '') {
        errorMessage2.innerText = "Email is required.";
    }

    if (streetAdd === '') {
        errorMessage3.innerText = "Street Address is required.";
    }

    if (contact === '') {
        errorMessage4.innerText = "Contact Number is required.";
    }

    if (firstName === '' || emailAdd === '' || streetAdd === '' || contact === '') {
        return; 
    }

    let recommend = document.querySelector('input[name="questionOne"]:checked');
    let whereHeard = document.getElementById("hearAbout").value;
    let firstTimeOrder = document.querySelector('input[name="order"]:checked');

    let comments = {
        commentOne: document.getElementById("commentOne").value.trim(),
        commentTwo: document.getElementById("commentTwo").value.trim(),
        commentThree: document.getElementById("commentThree").value.trim()
    };

    let satisfaction = {
        purchase: document.querySelector('input[name="purchase"]:checked'),
        customerService: document.querySelector('input[name="customerService"]:checked'),
        productQuality: document.querySelector('input[name="productQuality"]:checked'),
        price: document.querySelector('input[name="price"]:checked')
    };

    let responseWindow = window.open("", "Response Window", "width=600, height=400");

    if (responseWindow) {
        document.getElementById("form").reset();

        responseWindow.document.body.innerHTML = `
            <h2>Customer Satisfaction Survey Responses</h2>
            <p><b>Name:</b> ${firstName}</p>
            <p><b>Email Address:</b> ${emailAdd}</p>
            <p><b>Street Address:</b> ${streetAdd}</p>
            <p><b>Contact Number:</b> ${contact}</p>
            <p><b>Do you recommend us to other customers?</b> ${recommend ? recommend.value : "Not answered"}</p>
            <p><b>Where did you hear about us?</b> ${whereHeard}</p>
            <p><b>Was this your first time ordering from our shop?</b> ${firstTimeOrder ? firstTimeOrder.value : "Not answered"}</p>
            
            <h3>Satisfaction Ratings:</h3>
            <p><b>Purchase process:</b> ${satisfaction.purchase ? satisfaction.purchase.value : "Not answered"}</p>
            <p><b>Customer Service:</b> ${satisfaction.customerService ? satisfaction.customerService.value : "Not answered"}</p>
            <p><b>Product Quality:</b> ${satisfaction.productQuality ? satisfaction.productQuality.value : "Not answered"}</p>
            <p><b>Price:</b> ${satisfaction.price ? satisfaction.price.value : "Not answered"}</p>
            
            <h3>Comments:</h3>
            <p><b>Comment One:</b> ${comments.commentOne}</p>
            <p><b>Comment Two:</b> ${comments.commentTwo}</p>
            <p><b>Comment Three:</b> ${comments.commentThree}</p>
        `;
    } else {
        alert("Unable to open a new window for responses.");
        document.getElementById("form").reset();
    }
}

