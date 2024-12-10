// Function to add a product to cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to the cart!`);
  }
  
  // Add event listeners to the "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-id"));
      const productName = button.getAttribute("data-name");
      const productPrice = parseInt(button.getAttribute("data-price"));
  
      const product = { id: productId, name: productName, price: productPrice };
      addToCart(product);
    });
  });


  function handleAddToCart()
  {
    const data = document.querySelector('#price').innerHTML();

    if(dataNew)
    {
      sessionStorage.setItem('myData',dataNew);
    }


  }

