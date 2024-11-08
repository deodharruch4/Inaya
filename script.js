document.addEventListener("DOMContentLoaded", function() {
    // Navigation from home page to earrings page
    /*const earringsLink = document.getElementById("earrings-link");
    if (earringsLink) {
      earringsLink.addEventListener("click", function() {
        window.location.href = "earrings.html"; // Navigate to earrings page
      });
    }
  
    // Navigation from home page to rings page
    const ringsLink = document.getElementById("rings-link");
    if (ringsLink) {
      ringsLink.addEventListener("click", function() {
        window.location.href = "rings.html"; // Navigate to rings page
      });
    }
  */
    // Navigation from any page to home page
    const logoLink = document.getElementById("logo-link");
    if (logoLink) {
      logoLink.addEventListener("click", function() {
        window.location.href = "index.html"; // Navigate to home page
      });
    }

    // Navigation from any page to home page
    const buttonLink = document.getElementById("button-link");
    if (buttonLink) {
      buttonLink.addEventListener("click", function() {
        window.location.href = "feedback.html"; // Navigate to home page
      });
    }
    
    // Navigation from any page to wishlist page
    const wishlistLink = document.getElementById("wishlist-link");
    if (wishlistLink) {
      wishlistLink.addEventListener("click", function() {
        window.location.href = "wishlist.html"; // Navigate to wishlist page
      });
    }

     //earrings
    const earringsLink = document.getElementById("earrings-link");
    if (earringsLink) {
      earringsLink.addEventListener("click", function() {
        window.location.href = "wishlist.html";
      });
    }

    // Navigation from any page to login page
    const loginLink = document.getElementById("login-link");
    if (loginLink) {
      loginLink.addEventListener("click", function() {
        window.location.href = "login.html"; // Navigate to login page
      });
    }

     // Navigation from any page to checkout page
    const cartLink = document.getElementById("cart-link");
    if (cartLink) {
      cartLink.addEventListener("click", function() {
        window.location.href = "checkout.html"; // Navigate to cart page
      });
    }
  
    // Navigation from product page to login page after clicking Buy Now
    const buyNowBtn = document.getElementById("buy-now-btn");
    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", function() {
        window.location.href = "login.html"; // Navigate to login page
      });
    }
  
    // Navigation from login page to checkout page after signing in
    const signInBtn = document.getElementById("sign-in-btn");
    if (signInBtn) {
      signInBtn.addEventListener("click", function() {
        window.location.href = "checkout.html"; // Navigate to checkout page
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const earringsLink = document.getElementById("earrings-link");
    const ringsLink = document.getElementById("rings-link");
    const braceletsLink = document.getElementById("bracelets-link");
    
  
    earringsLink.addEventListener("click", function(event) {
      console.log("Earrings link clicked");
    });
  
    ringsLink.addEventListener("click", function(event) {
      console.log("Rings link clicked");
    });

    braceletsLink.addEventListener("click", function(event) {
      console.log("Bracelets link clicked");
    });
      
  });
  
