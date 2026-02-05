/* Basket System */
let basket = [];
let basketPanel = document.getElementById("basket");
let basketList = document.getElementById("basketList");

function openBasket() {
    basketPanel.classList.add("open");
}

function closeBasket() {
    basketPanel.classList.remove("open");
}

function addToBasket(name, price) {
    basket.push({name, price});

    basketList.innerHTML += `
        <div class="basket-item">
            🧺 ${name} - ₹${price}
        </div>
    `;

    alert(`✨ Added to Basket! 🍰\n${name}`);
}

/* Payment Popup */
let popup = document.getElementById("paymentPopup");

function openPayment() {
    popup.classList.add("show");
}

function closePayment() {
    popup.classList.remove("show");
}

/* Contact Form Validation */
function validateForm() {
    const name = document.getElementById("cname");
    const email = document.getElementById("cemail");
    const msg = document.getElementById("cmsg");
    const errorBox = document.getElementById("errorBox");

    errorBox.innerHTML = "";

    if (name.value === "") {
        errorBox.innerHTML += `<div class="error-bubble">🐰 Please enter your name!</div>`;
        return false;
    }
    if (!email.value.includes("@")) {
        errorBox.innerHTML += `<div class="error-bubble">🐻 Enter a valid email!</div>`;
        return false;
    }
    if (msg.value.length < 5) {
        errorBox.innerHTML += `<div class="error-bubble">🐥 Message too short!</div>`;
        return false;
    }

    alert("✨ Thank you for contacting Mavén Bistro! 💖 We'll reply soon! ☕");
    return true;
}

/* Confirm Payment */
function confirmPayment() {
    let method = document.querySelector('input[name="paymethod"]:checked');

    if (!method) {
        alert("Please select a payment method 💕");
        return;
    }

    // UPDATED: Thank you message popup
    alert("✨ Thank you for your payment! 💖\nYou paid via " + method.value + " 🍰☕");

    closePayment();
    closeBasket();
}
