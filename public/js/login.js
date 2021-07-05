// STEPS
//  1. Create Event listener for form
//  2. Create log in function


// what do you mean published screen?


const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login', 
            data: {
                email,
                password
            }
        });
        if (res.data.status === 'success') {
            // showAlert('success', 'Logged in successfully!');
            window.setTimeout(() => {
              location.assign('/');
            }, 1500);
          }
    } catch (err) {
        console.log(err.response.data);
    }


}

document.querySelector('#form').addEventListener('submit', e => {
    // prevents form from loading anyother page
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
})