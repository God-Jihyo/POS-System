function appendToDisplay(value) {
    // Get the input field by ID
    var amountInput = document.getElementById('amount');
    
    // Append the clicked value to the input field's value
    amountInput.value += value;
}

function eraseLastDigit() {
    // Get the input field by ID
    var amountInput = document.getElementById('amount');
    
    // Remove the last character from the input field's value
    amountInput.value = amountInput.value.slice(0, -1);
}

// Retrieve total price with shipping from session storage
const totalPriceWithShipping = sessionStorage.getItem('totalPriceWithShipping');

// Update the DOM with the retrieved value
document.querySelector('.totalPrice').innerText = `₱${totalPriceWithShipping.toLocaleString()}`;

// Function to calculate remaining amount and display alert
function calculateRemainingAmount() {
    // Retrieve total price with shipping from session storage
    const totalPriceWithShipping = sessionStorage.getItem('totalPriceWithShipping');

    // Get the input field by ID
    const amountInput = document.getElementById('amount');

    // Check if amountInput is not empty
    if (amountInput.value !== '') {
        // Parse the input value to a number
        const enteredAmount = parseFloat(amountInput.value);

        // Calculate remaining amount
        const remainingAmount = enteredAmount - totalPriceWithShipping;

        if (remainingAmount < 0) {
            // Display an alert for insufficient payment
            alert('Insufficient Money. Please provide exact amount to proceed.');
        } else {
            // Display a confirmation message
            const confirmation = confirm('Thank you for your order! Please expect your order to arrive in 10 minutes.');

            // Check if the user confirmed
            if (confirmation) {
                // Display alert with the remaining amount
                alert(`Change: ₱${remainingAmount.toLocaleString()}`);
            } else {
                // Display a message if the user cancels
                alert('Order canceled. No change will be provided.');
            }
        }
    } else {
        // Display an alert if the input is empty
        alert('Please enter an amount.');
    }
}



// Add an event listener to the Pay button
const payButton = document.querySelector('.buttonCheckout');
payButton.addEventListener('click', calculateRemainingAmount);

