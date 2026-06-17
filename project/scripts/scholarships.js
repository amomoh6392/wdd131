const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.querySelector("#fullname").value;

    document.querySelector("#form-message").textContent =
        `Thank you, ${name}!  Your inquiry has been received.`;

    form.reset();
});