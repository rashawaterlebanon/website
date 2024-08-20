function toggleLanguage() {
    const translateButton = document.getElementById("translateButton");
    const mainTitle = document.getElementById("mainTitle");
    const description = document.getElementById("description");
    const emailLabel = document.getElementById("emailLabel");
    const phoneLabel = document.getElementById("phoneLabel");
    const locationLabel = document.getElementById("locationLabel");

    if (translateButton.innerText === "Arabic") {
        translateButton.innerText = "English";
        mainTitle.innerText = "مرحبًا بكم في مياه رشا لمبردات المياه";
        description.innerText = "نحن نوفر أعلى جودة من المياه لمبرداتك.";
        emailLabel.innerText = "البريد الإلكتروني:";
        phoneLabel.innerText = "رقم الهاتف:";
        locationLabel.innerText = "الموقع:";
    } else {
        translateButton.innerText = "Arabic";
        mainTitle.innerText = "Welcome to Rasha Water for Coolers";
        description.innerText = "We provide the highest quality water for your coolers.";
        emailLabel.innerText = "Email:";
        phoneLabel.innerText = "Phone Number:";
        locationLabel.innerText = "Location:";
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = {
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            location: document.getElementById("location").value
        };
    
        fetch("https://formspree.io/f/xovanrnn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Your details have been submitted successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });