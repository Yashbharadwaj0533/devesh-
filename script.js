const menuData = [
    { id: "veg-burger", category: "Burgers", name: "Veg Burger", price: 79, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80" },
    { id: "cheese-burger", category: "Burgers", name: "Cheese Burger", price: 99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80" },
    { id: "paneer-burger", category: "Burgers", name: "Paneer Burger", price: 119, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80" },
    { id: "double-patty-burger", category: "Burgers", name: "Double Patty Burger", price: 149, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80" },
    { id: "margherita-pizza", category: "Pizza", name: "Margherita Pizza", price: 149, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80" },
    { id: "farmhouse-pizza", category: "Pizza", name: "Farmhouse Pizza", price: 199, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80" },
    { id: "cheese-burst-pizza", category: "Pizza", name: "Cheese Burst Pizza", price: 249, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80" },
    { id: "paneer-tikka-pizza", category: "Pizza", name: "Paneer Tikka Pizza", price: 269, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80" },
    { id: "veg-sandwich", category: "Sandwich", name: "Veg Sandwich", price: 69, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80" },
    { id: "grilled-sandwich", category: "Sandwich", name: "Grilled Sandwich", price: 89, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=900&q=80" },
    { id: "cheese-corn-sandwich", category: "Sandwich", name: "Cheese Corn Sandwich", price: 109, image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80" },
    { id: "paneer-sandwich", category: "Sandwich", name: "Paneer Sandwich", price: 129, image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80" },
    { id: "veg-momos", category: "Momos", name: "Veg Momos", price: 79, image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=900&q=80" },
    { id: "fried-momos", category: "Momos", name: "Fried Momos", price: 99, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80" },
    { id: "paneer-momos", category: "Momos", name: "Paneer Momos", price: 119, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80" },
    { id: "tandoori-momos", category: "Momos", name: "Tandoori Momos", price: 139, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" },
    { id: "white-sauce-pasta", category: "Pasta", name: "White Sauce Pasta", price: 149, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80" },
    { id: "red-sauce-pasta", category: "Pasta", name: "Red Sauce Pasta", price: 139, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" },
    { id: "mix-sauce-pasta", category: "Pasta", name: "Mix Sauce Pasta", price: 159, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80" },
    { id: "french-fries", category: "Fries & Snacks", name: "French Fries", price: 79, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80" },
    { id: "peri-peri-fries", category: "Fries & Snacks", name: "Peri Peri Fries", price: 99, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80" },
    { id: "loaded-fries", category: "Fries & Snacks", name: "Loaded Fries", price: 129, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },
    { id: "nuggets", category: "Fries & Snacks", name: "Nuggets", price: 149, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80" },
    { id: "cold-coffee", category: "Drinks", name: "Cold Coffee", price: 99, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80" },
    { id: "oreo-shake", category: "Drinks", name: "Oreo Shake", price: 129, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80" },
    { id: "chocolate-shake", category: "Drinks", name: "Chocolate Shake", price: 139, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80" },
    { id: "mojito", category: "Drinks", name: "Mojito", price: 89, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=900&q=80" },
    { id: "coke", category: "Drinks", name: "Coke", price: 49, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80" },
    { id: "burger-fries-coke", category: "Combo Offers", name: "Burger + Fries + Coke", price: 199, image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=900&q=80" },
    { id: "pizza-cold-drink", category: "Combo Offers", name: "Pizza + Cold Drink", price: 249, image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80" },
    { id: "pasta-garlic-bread", category: "Combo Offers", name: "Pasta + Garlic Bread", price: 229, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" }
];

const categories = ["Burgers", "Pizza", "Sandwich", "Momos", "Pasta", "Fries & Snacks", "Drinks", "Combo Offers"];
const cafeWhatsAppNumber = "917300706836";
let cart = [];
let activeCategory = categories[0];

const productGrid = document.getElementById("productGrid");
const categoryBar = document.getElementById("categoryBar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartBadge = document.getElementById("cartBadge");
const cartDrawer = document.getElementById("cartDrawer");
const cartTrigger = document.getElementById("cartTrigger");
const closeCart = document.getElementById("closeCart");
const checkoutForm = document.getElementById("checkoutForm");
const formMessage = document.getElementById("formMessage");
const modalBackdrop = document.getElementById("modalBackdrop");
const confirmationContent = document.getElementById("confirmationContent");
const modalClose = document.getElementById("modalClose");
const continueShopping = document.getElementById("continueShopping");

function formatPrice(value) {
    return `\u20B9${value}`;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getCartItem(id) {
    return cart.find((item) => item.id === id);
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCategories() {
    categoryBar.innerHTML = categories.map((category, index) => `
        <button class="category-button ${category === activeCategory ? "active" : ""}" style="animation-delay:${index * 0.04}s" type="button" data-category="${category}">
            ${category}
        </button>
    `).join("");
}

function renderProducts() {
    const filteredItems = menuData.filter((item) => item.category === activeCategory);
    productGrid.innerHTML = filteredItems.map((item, index) => {
        const cartItem = getCartItem(item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        return `
            <article class="food-card" style="animation-delay:${index * 0.04}s">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="card-body">
                    <div class="card-top">
                        <h3>${item.name}</h3>
                        <span class="price">${formatPrice(item.price)}</span>
                    </div>
                    <div class="card-actions">
                        <div class="qty-control" aria-label="Quantity for ${item.name}">
                            <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">-</button>
                            <span>${quantity}</span>
                            <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
                        </div>
                        <button class="add-button" type="button" data-action="add" data-id="${item.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function addToCart(id) {
    const menuItem = menuData.find((item) => item.id === id);
    const existingItem = getCartItem(id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else if (menuItem) {
        cart.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
        });
    }

    renderCart();
    renderProducts();
}

function updateQuantity(id, direction) {
    const existingItem = getCartItem(id);

    if (!existingItem && direction === "increase") {
        addToCart(id);
        return;
    }

    if (!existingItem) {
        return;
    }

    existingItem.quantity += direction === "increase" ? 1 : -1;

    if (existingItem.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    renderCart();
    renderProducts();
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    renderCart();
    renderProducts();
}

function renderCart() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = itemCount;
    cartTotal.textContent = formatPrice(calculateTotal());

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is waiting for something delicious.</div>';
        return;
    }

    cartItems.innerHTML = cart.map((item) => `
        <article class="cart-item">
            <div class="cart-item-main">
                <div>
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}</p>
                </div>
                <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">
                    <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            <div class="qty-control" aria-label="Cart quantity for ${item.name}">
                <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
            </div>
        </article>
    `).join("");
}

function openCart() {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
}

function generateOrderId() {
    return `FZC-${Math.floor(100000 + Math.random() * 900000)}`;
}

function createOrderMessage(orderDetails) {
    const itemLines = cart.map((item) => (
        `- ${item.name} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    )).join("\n");

    return [
        "New Order - Friend's Zone Cafe",
        `Order ID: ${orderDetails.orderId}`,
        "",
        "Items:",
        itemLines,
        "",
        `Total: ${formatPrice(calculateTotal())}`,
        "",
        `Customer: ${orderDetails.name}`,
        `Mobile: ${orderDetails.mobile}`,
        `Address: ${orderDetails.address}`,
        `Payment: ${orderDetails.payment}`,
        orderDetails.instructions ? `Instructions: ${orderDetails.instructions}` : ""
    ].filter(Boolean).join("\n");
}

function createWhatsAppUrl(message) {
    return `https://wa.me/${cafeWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}

function buildConfirmation(orderDetails, whatsappUrl) {
    const itemsMarkup = cart.map((item) => `
        <div class="summary-row">
            <span>${escapeHtml(item.name)} x ${item.quantity}</span>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
        </div>
    `).join("");

    confirmationContent.innerHTML = `
        <p class="confirmation-meta">Thank you, <strong>${escapeHtml(orderDetails.name)}</strong>. Your order ID is <strong>${orderDetails.orderId}</strong>.</p>
        <div class="summary-list">${itemsMarkup}</div>
        <div class="summary-total">
            <span>Grand Total</span>
            <span>${formatPrice(calculateTotal())}</span>
        </div>
        <div class="address-box">
            <strong>Deliver to:</strong><br>
            ${escapeHtml(orderDetails.address)}<br>
            <strong>Mobile:</strong> ${escapeHtml(orderDetails.mobile)}<br>
            <strong>Payment:</strong> ${escapeHtml(orderDetails.payment)}<br>
            ${orderDetails.instructions ? `<strong>Instructions:</strong> ${escapeHtml(orderDetails.instructions)}` : ""}
        </div>
        <a class="whatsapp-link" href="${whatsappUrl}" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            Open WhatsApp Order
        </a>
    `;
}

function showModal() {
    modalBackdrop.classList.add("show");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function resetOrderState() {
    cart = [];
    checkoutForm.reset();
    formMessage.textContent = "";
    renderCart();
    renderProducts();
    closeCartDrawer();
    modalBackdrop.classList.remove("show");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function handleOrderSubmit(event) {
    event.preventDefault();
    formMessage.textContent = "";

    if (cart.length === 0) {
        formMessage.textContent = "Please add at least one item before placing your order.";
        return;
    }

    if (!checkoutForm.checkValidity()) {
        formMessage.textContent = "Please complete all required fields with valid details.";
        checkoutForm.reportValidity();
        return;
    }

    const orderDetails = {
        orderId: generateOrderId(),
        name: document.getElementById("customerName").value.trim(),
        mobile: document.getElementById("mobileNumber").value.trim(),
        address: document.getElementById("deliveryAddress").value.trim(),
        payment: new FormData(checkoutForm).get("paymentMethod"),
        instructions: document.getElementById("specialInstructions").value.trim()
    };

    const whatsappUrl = createWhatsAppUrl(createOrderMessage(orderDetails));
    buildConfirmation(orderDetails, whatsappUrl);
    showModal();
    window.open(whatsappUrl, "_blank", "noopener");
}

categoryBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCategories();
    renderProducts();
});

productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    if (button.dataset.action === "add") {
        addToCart(button.dataset.id);
    } else {
        updateQuantity(button.dataset.id, button.dataset.action);
    }
});

cartItems.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove]");
    const quantityButton = event.target.closest("button[data-action]");

    if (removeButton) {
        removeFromCart(removeButton.dataset.remove);
    }

    if (quantityButton) {
        updateQuantity(quantityButton.dataset.id, quantityButton.dataset.action);
    }
});

cartTrigger.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) {
        closeCartDrawer();
    }
});
checkoutForm.addEventListener("submit", handleOrderSubmit);
continueShopping.addEventListener("click", resetOrderState);
modalClose.addEventListener("click", resetOrderState);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCartDrawer();
        if (modalBackdrop.classList.contains("show")) {
            resetOrderState();
        }
    }
});

renderCategories();
renderProducts();
renderCart();
