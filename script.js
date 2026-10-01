// ================================
// SNEHA ENTERPRISES - JAVASCRIPT
// ================================


// WhatsApp Number
const whatsappNumber = "919934479992";


// Product enquiry buttons
const enquiryButtons = document.querySelectorAll(".product-card a");

enquiryButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;

        const message =
            `Hello Sneha Enterprises!%0A%0A` +
            `I am interested in *${productName}*.%0A` +
            `Please share the price and availability.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });

});


// Contact button
const contactButtons = document.querySelectorAll(".secondary-btn");

contactButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        console.log("Contact section opened");
    });

});


// ================================
// SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll(
    ".sport-card, .product-card, .why-card, .contact-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {
    observer.observe(card);
});


// ================================
// CURRENT YEAR
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} Sneha Enterprises. All Rights Reserved.`;
}

/* =========================
   PRODUCT CATEGORY FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productCards.forEach(function (card) {

            const productCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {
                card.classList.remove("hide-product");
            } else {
                card.classList.add("hide-product");
            }

        });

    });

});