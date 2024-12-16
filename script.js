       // Get references to the password field and button
       const passwordField = document.getElementById('password');
       const loginButton = document.getElementById('loginButton');

       // Listen for input in the password field
       passwordField.addEventListener('input', function () {
           if (passwordField.value.trim() !== '') {
               // If the password field has text, enable the button and change color
               loginButton.classList.add('enabled');
           } else {
               // If the password field is empty, reset the button
               loginButton.classList.remove('enabled');
           }
       });
       