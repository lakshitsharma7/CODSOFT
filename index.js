document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send-btn');

    sendButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
});
