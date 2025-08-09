document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    products.forEach((product) => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(keyword) ? "block" : "none";
    });
  });
});


// script.js - xử lý thêm sản phẩm vào giỏ hàng
  document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Kiểm tra sản phẩm đã có chưa
        const existing = cart.find(item => item.name === name);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng!");
      });
    });
  });

    // cart.html - hiển thị sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  if (cartItemsContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach((item, index) => {
      const row = document.createElement("tr");

      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal.toFixed(2)}</td>
        <td><button class="remove-btn" data-index="${index}">X</button></td>
      `;

      cartItemsContainer.appendChild(row);
    });

    totalDisplay.innerText = `Total: $${total.toFixed(2)}`;

    // Xóa sản phẩm
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      });
    });
  }
});


// ==== LOGIN ====
function showRegisterForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm && registerForm) {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
}

const loginFormElement = document.getElementById('loginFormElement');
if (loginFormElement) {
  loginFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
      alert('Đăng nhập thành công!');
      window.location.href = 'index.html';
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  });
}

// ==== REGISTER ====
function showLoginForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm && registerForm) {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }
}

const registerFormElement = document.querySelector('.auth-form');
if (registerFormElement) {
  registerFormElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (password !== confirm) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    alert('Đăng ký thành công!');
    console.log("Redirecting to login page...");
    window.location.href = 'login.html';
  });
}

// ==== PROFILE ====
const profileForm = document.getElementById('profileForm');

if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
        // Ngăn chặn việc form tự động gửi và tải lại trang
        event.preventDefault();

        window.location.href = 'index.html';
    });
}

// ==== CONTACT ====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting and reloading the page
            event.preventDefault();

            // Here you can add code to send the form data to a server if needed

            // Redirect the user to index.html after a small delay
            // The delay is for demonstration; you can remove it if you want an instant redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500); 
        });
    }
});