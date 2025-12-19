function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        alert("Isi username dan password!");
    }
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk ditambahkan ke keranjang");
}

if (document.getElementById("cartItems")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = "<p>Keranjang kosong</p>";
    } else {
        cart.forEach(item => {
            container.innerHTML += `
                <div class="product">
                    <h3>${item.name}</h3>
                    <p>Harga: Rp ${item.price}</p>
                </div>
            `;
        });
    }
}
