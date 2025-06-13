
const registerButton = document.getElementById('register'); 

registerButton.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submissio
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;  
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
    try {
        
        fetch('https://todos-list-app-production-backend.onrender.com/registers', {
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
        }).then(res => res.json())
.then(data => {
    console.log(data);
    alert('Registration successful! Please log in.');
        window.location.href = '../view/login.html'; // Redirect to login page after successful registration
})
.catch(err => console.error(err));
        
    }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again later.');
    }
});
