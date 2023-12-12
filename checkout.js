// Parse URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Retrieve quantity and total price from URL
const quantityValue = urlParams.get('quantity');
const totalPriceValue = urlParams.get('totalPrice');

// Shipping cost
const shippingCost = 34.75;

// Calculate total price with shipping
const totalPriceWithShipping = parseInt(totalPriceValue) + shippingCost;

// Store total price with shipping in session storage
sessionStorage.setItem('totalPriceWithShipping', totalPriceWithShipping);

// Update the DOM with the retrieved values
document.querySelector('.totalQuantity').innerText = quantityValue;
document.querySelector('.totalPrice').innerText = `₱${totalPriceWithShipping.toLocaleString()}`;

// Update product details based on the items in the cart
const productList = document.querySelector('.list');

listCards.forEach((value) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('item');

    productDiv.innerHTML = `
        <img src="img/${value.image}">
        <div class="info">
            <div class="name">${value.name}</div>
            <div class="price">₱${value.price.toLocaleString()}/1 product</div>
        </div>
        <div class="quantity">${value.quantity}</div>
        <div class="returnPrice">₱${(value.quantity * value.price).toLocaleString()}</div>
    `;

    productList.appendChild(productDiv);
});
