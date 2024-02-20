// // // /* Log In JavaScript Code */

document.querySelector('.register-container form').addEventListener('submit', function (e) {
    e.preventDefault();

    var firstName = document.querySelector('.register-container input[placeholder="First Name"]').value;
    var lastName = document.querySelector('.register-container input[placeholder="Last Name"]').value;
    var age = document.querySelector('.register-container input[placeholder="Age"]').value;
    var address = document.querySelector('.register-container input[placeholder="Address"]').value;
    var email = document.querySelector('.register-container input[placeholder="Email"]').value;
    var password = document.querySelector('.register-container input[placeholder="Password"]').value;
    var mobileNumber = document.querySelector('.register-container input[placeholder="Mobile number"]').value;

    var user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        address: address,
        email: email,
        password: password,
        mobileNumber: mobileNumber
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert('Registration successful! You can now log in.');

   
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.querySelector('.login-container form').addEventListener('submit', function (e) {
    e.preventDefault();

    var loginEmail = document.querySelector('.login-container input[id="email"]').value;
    var loginPassword = document.querySelector('.login-container input[id="password"]').value;

    var storedUser = JSON.parse(localStorage.getItem(loginEmail));

    if (storedUser && storedUser.password === loginPassword) {
        alert('Login successful!');
       
        window.location.assign('anotherhome.html');
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

document.getElementById('login').addEventListener('click', function () {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('register').addEventListener('click', function () {
    document.querySelector('.container').classList.add('right-panel-active');
});
