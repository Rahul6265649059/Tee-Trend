// Function to load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
  
    // Clear the cart items container
    cartItemsContainer.innerHTML = "";
  
    // Calculate the total price
    let totalPrice = 0;
  
    cartItems.forEach(item => {
      totalPrice += item.price;
  
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name}</span>
        <span>Rs. ${item.price}</span>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  
    // Update total price
    totalPriceElement.textContent = totalPrice;
  }
  
  // Function to remove item from cart
  function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCart();
  }
  
  // Load cart on page load
  window.onload = loadCart;
  