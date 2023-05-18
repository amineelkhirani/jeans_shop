// Get necessary elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');

// Initialize cart and total price
let cart = [];
let total = 0;

// Add event listener to each "Add to Cart" button
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('.product-name').textContent;
    const productPrice = parseFloat(button.parentElement.querySelector('.product-price').textContent.replace('$', ''));
    
    // Add product to cart array
    cart.push({ name: productName, price: productPrice });
    
    // Update total price
    total += productPrice;
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    
    // Add item to cart list
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });
});

