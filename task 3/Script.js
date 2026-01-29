// -------------------
// Dark Mode Toggle
// -------------------
const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeBtn.textContent = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});


// -------------------
// Hide / Unhide Sections
// -------------------
const toggleButtons = document.querySelectorAll(".toggleBtn");

toggleButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        let target = document.getElementById(this.dataset.target);

        if (target.style.display === "none") {
            target.style.display = "block";
            this.textContent = "Hide " + this.dataset.target;
        } else {
            target.style.display = "none";
            this.textContent = "Unhide " + this.dataset.target;
        }
    });
});


// -------------------
// Form Validation
// -------------------
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        errorMsg.textContent = "Please fill all fields!";
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "";
        alert("Message Sent Successfully!");
    }
});
