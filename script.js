document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Muhammad Ahmed's Portfolio!");

    const introText = document.getElementById("intro-text");
    introText.style.opacity = "0";
    introText.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
        introText.style.opacity = "1";
    }, 500);

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset();
    });
});
