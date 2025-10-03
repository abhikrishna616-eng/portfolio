// EmailJS contact form integration
function sendMail(event) {
    event.preventDefault();
    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("Email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_hqi840s", "template_fl6xpq8", parms)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again later.");
        });
}