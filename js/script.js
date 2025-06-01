

let cartCount = 0;


function updateCartDisplay() {
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("modal-cart-count").textContent = cartCount;
}

// Add item to cart
function addToCart() {
  cartCount++;
  updateCartDisplay();
}

// Remove one item from cart
function removeFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateCartDisplay();
  }
}

// Clear all items from cart
function clearCart() {
  cartCount = 0;
  updateCartDisplay();
}


document.addEventListener("DOMContentLoaded", updateCartDisplay);
