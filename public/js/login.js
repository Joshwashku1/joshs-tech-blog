const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#loginemail').value.trim();
    const password = document.querySelector('#loginpassword').value.trim();


    if (email && password) {
        console.log(email, password);
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            let password2 = document.querySelector('#loginpassword')
            password2.classList = "form-control is-invalid";
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#username').value.trim();
    const email = document.querySelector('#signupemail').value.trim();
    const password = document.querySelector('#signuppassword').value.trim();

    if (user_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ user_name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            let password3 = document.querySelector('#sighpassword')
            password3.classList = "form-control is-invalid";
            alert(response.statusText);
        }
    }
};



const login = document.getElementById('loginbtn')
if (login) {
    login.addEventListener("click", loginFormHandler)

}

const signup = document.getElementById('signupbtn');
if (signup) {
    signup.addEventListener("click", signupFormHandler)

}


