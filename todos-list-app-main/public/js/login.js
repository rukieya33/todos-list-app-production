const loginButton = document.getElementById('login-form');
loginButton.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

        await fetch('wss://todos-list-app-production-backend.onrender.com/logins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'       
            },
            body: JSON.stringify({
                email: email,
                psw: password,
            }),
        }).then(res => res.json())
        .then(data => {
            alert(data.message);
            console.log(data)
            alert(data.logged_first)
            sessionStorage.setItem('logged_first', data['logged_first']);
            sessionStorage.setItem('logged_last', data['logged_last']);    
            sessionStorage.setItem('logged_email', data['logged_email']);
            
           if (sessionStorage.getItem('logged_first') && sessionStorage.getItem('logged_last') && sessionStorage.getItem('logged_email'))
           {
            window.location.href = '../view/my_profile.html';
           }
        }
        ).catch(error => {
            console.error('Error:', error.message);
            alert('Login failed. Please check your credentials.');
        }
        );  

    
});
