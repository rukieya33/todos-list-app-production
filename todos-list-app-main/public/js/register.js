
const registerButton = document.getElementById('register'); 

registerButton.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submissio
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;  
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
 
        const response  = await fetch('https://todos-list-app-production-backend.onrender.com/registers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first: firstName,
                last: lastName,
                email: email,
                psw: password,
            }),
        })
 const data = await response.json();
  console.log(data);

    /*alert('Registration successful! Please log in.');*/
        //window.location.href = '../view/login.html'; // Redirect to login page after successful registration


});
