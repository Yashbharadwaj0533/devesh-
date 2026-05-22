const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80";
const burgerImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80";
const friesImage = "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80";
const momosImage = "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=900&q=80";
const sandwichImage = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80";
const pastaImage = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80";
const garlicBreadImage = "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=900&q=80";
const comboImage = "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=900&q=80";
const drinkImage = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80";

const menuData = [
    { id: "tomato-pizza", category: "Single Topping Pizza", name: "Tomato Pizza", price: 69, image: pizzaImage },
    { id: "onion-pizza", category: "Single Topping Pizza", name: "Onion Pizza", price: 71, image: pizzaImage },
    { id: "capsicum-pizza", category: "Single Topping Pizza", name: "Capsicum Pizza", price: 76, image: pizzaImage },
    { id: "corn-pizza", category: "Single Topping Pizza", name: "Corn Pizza", price: 76, image: pizzaImage },
    { id: "single-topping-set-4", category: "Single Topping Pizza", name: "Set of 4 Single Topping Pizza", price: 270, image: pizzaImage },
    { id: "onion-capsicum-pizza", category: "Double Topping Pizza", name: "Onion & Capsicum Pizza", price: 105, image: pizzaImage },
    { id: "tomato-corn-pizza", category: "Double Topping Pizza", name: "Tomato & Corn Pizza", price: 105, image: pizzaImage },
    { id: "jalapeno-onion-pizza", category: "Double Topping Pizza", name: "Jalapeno & Onion Pizza", price: 105, image: pizzaImage },
    { id: "onion-paneer-pizza", category: "Double Topping Pizza", name: "Onion & Paneer Pizza", price: 109, image: pizzaImage },
    { id: "double-topping-set-4", category: "Double Topping Pizza", name: "Set of 4 Double Topping Pizza", price: 399, image: pizzaImage },

    { id: "cheese-pizza-small", category: "Veg Pizza", name: "Cheese Pizza - Small", price: 105, image: pizzaImage },
    { id: "cheese-pizza-medium", category: "Veg Pizza", name: "Cheese Pizza - Medium", price: 219, image: pizzaImage },
    { id: "cheese-pizza-large", category: "Veg Pizza", name: "Cheese Pizza - Large", price: 352, image: pizzaImage },
    { id: "cheese-corn-small", category: "Veg Pizza", name: "Cheese & Corn - Small", price: 105, image: pizzaImage },
    { id: "cheese-corn-medium", category: "Veg Pizza", name: "Cheese & Corn - Medium", price: 219, image: pizzaImage },
    { id: "cheese-corn-large", category: "Veg Pizza", name: "Cheese & Corn - Large", price: 352, image: pizzaImage },
    { id: "cheese-onion-small", category: "Veg Pizza", name: "Cheese & Onion - Small", price: 105, image: pizzaImage },
    { id: "cheese-onion-medium", category: "Veg Pizza", name: "Cheese & Onion - Medium", price: 219, image: pizzaImage },
    { id: "cheese-onion-large", category: "Veg Pizza", name: "Cheese & Onion - Large", price: 352, image: pizzaImage },
    { id: "double-cheese-small", category: "Veg Pizza", name: "Double Cheese Pizza - Small", price: 142, image: pizzaImage },
    { id: "double-cheese-medium", category: "Veg Pizza", name: "Double Cheese Pizza - Medium", price: 285, image: pizzaImage },
    { id: "double-cheese-large", category: "Veg Pizza", name: "Double Cheese Pizza - Large", price: 428, image: pizzaImage },
    { id: "garden-fresh-small", category: "Veg Pizza", name: "Garden Fresh - Small", price: 142, image: pizzaImage },
    { id: "garden-fresh-medium", category: "Veg Pizza", name: "Garden Fresh - Medium", price: 285, image: pizzaImage },
    { id: "garden-fresh-large", category: "Veg Pizza", name: "Garden Fresh - Large", price: 428, image: pizzaImage },
    { id: "cheese-paneer-small", category: "Veg Pizza", name: "Cheese & Paneer - Small", price: 142, image: pizzaImage },
    { id: "cheese-paneer-medium", category: "Veg Pizza", name: "Cheese & Paneer - Medium", price: 285, image: pizzaImage },
    { id: "cheese-paneer-large", category: "Veg Pizza", name: "Cheese & Paneer - Large", price: 428, image: pizzaImage },
    { id: "farmfresh-small", category: "Veg Pizza", name: "Farmfresh - Small", price: 190, image: pizzaImage },
    { id: "farmfresh-medium", category: "Veg Pizza", name: "Farmfresh - Medium", price: 343, image: pizzaImage },
    { id: "farmfresh-large", category: "Veg Pizza", name: "Farmfresh - Large", price: 495, image: pizzaImage },
    { id: "country-feast-small", category: "Veg Pizza", name: "Country Feast - Small", price: 190, image: pizzaImage },
    { id: "country-feast-medium", category: "Veg Pizza", name: "Country Feast - Medium", price: 343, image: pizzaImage },
    { id: "country-feast-large", category: "Veg Pizza", name: "Country Feast - Large", price: 495, image: pizzaImage },
    { id: "spicy-tango-small", category: "Veg Pizza", name: "Spicy Tango Pizza - Small", price: 190, image: pizzaImage },
    { id: "spicy-tango-medium", category: "Veg Pizza", name: "Spicy Tango Pizza - Medium", price: 343, image: pizzaImage },
    { id: "spicy-tango-large", category: "Veg Pizza", name: "Spicy Tango Pizza - Large", price: 495, image: pizzaImage },
    { id: "wonder-pizza-small", category: "Veg Pizza", name: "Wonder Pizza - Small", price: 190, image: pizzaImage },
    { id: "wonder-pizza-medium", category: "Veg Pizza", name: "Wonder Pizza - Medium", price: 343, image: pizzaImage },
    { id: "wonder-pizza-large", category: "Veg Pizza", name: "Wonder Pizza - Large", price: 495, image: pizzaImage },
    { id: "spicy-paneer-small", category: "Veg Pizza", name: "Spicy Paneer - Small", price: 219, image: pizzaImage },
    { id: "spicy-paneer-medium", category: "Veg Pizza", name: "Spicy Paneer - Medium", price: 380, image: pizzaImage },
    { id: "spicy-paneer-large", category: "Veg Pizza", name: "Spicy Paneer - Large", price: 505, image: pizzaImage },
    { id: "three-peppers-small", category: "Veg Pizza", name: "Three Peppers - Small", price: 219, image: pizzaImage },
    { id: "three-peppers-medium", category: "Veg Pizza", name: "Three Peppers - Medium", price: 380, image: pizzaImage },
    { id: "three-peppers-large", category: "Veg Pizza", name: "Three Peppers - Large", price: 505, image: pizzaImage },
    { id: "delicious-pizza-small", category: "Veg Pizza", name: "Delicious Pizza - Small", price: 219, image: pizzaImage },
    { id: "delicious-pizza-medium", category: "Veg Pizza", name: "Delicious Pizza - Medium", price: 380, image: pizzaImage },
    { id: "delicious-pizza-large", category: "Veg Pizza", name: "Delicious Pizza - Large", price: 505, image: pizzaImage },
    { id: "veggie-lovers-small", category: "Veg Pizza", name: "Veggie Lovers - Small", price: 219, image: pizzaImage },
    { id: "veggie-lovers-medium", category: "Veg Pizza", name: "Veggie Lovers - Medium", price: 380, image: pizzaImage },
    { id: "veggie-lovers-large", category: "Veg Pizza", name: "Veggie Lovers - Large", price: 505, image: pizzaImage },
    { id: "achari-pizza-small", category: "Veg Pizza", name: "Achari Pizza - Small", price: 219, image: pizzaImage },
    { id: "achari-pizza-medium", category: "Veg Pizza", name: "Achari Pizza - Medium", price: 380, image: pizzaImage },
    { id: "achari-pizza-large", category: "Veg Pizza", name: "Achari Pizza - Large", price: 505, image: pizzaImage },
    { id: "friends-zone-special-small", category: "Veg Pizza", name: "Friends Zone Special Pizza - Small", price: 248, image: pizzaImage },
    { id: "friends-zone-special-medium", category: "Veg Pizza", name: "Friends Zone Special Pizza - Medium", price: 400, image: pizzaImage },
    { id: "friends-zone-special-large", category: "Veg Pizza", name: "Friends Zone Special Pizza - Large", price: 562, image: pizzaImage },
    { id: "cloud-one-small", category: "Veg Pizza", name: "Cloud One Pizza - Small", price: 248, image: pizzaImage },
    { id: "cloud-one-medium", category: "Veg Pizza", name: "Cloud One Pizza - Medium", price: 400, image: pizzaImage },
    { id: "cloud-one-large", category: "Veg Pizza", name: "Cloud One Pizza - Large", price: 562, image: pizzaImage },
    { id: "chefs-veg-special-small", category: "Veg Pizza", name: "Chef's Veg Special - Small", price: 248, image: pizzaImage },
    { id: "chefs-veg-special-medium", category: "Veg Pizza", name: "Chef's Veg Special - Medium", price: 400, image: pizzaImage },
    { id: "chefs-veg-special-large", category: "Veg Pizza", name: "Chef's Veg Special - Large", price: 562, image: pizzaImage },
    { id: "paneer-makhani-small", category: "Veg Pizza", name: "Paneer Makhani Pizza - Small", price: 248, image: pizzaImage },
    { id: "paneer-makhani-medium", category: "Veg Pizza", name: "Paneer Makhani Pizza - Medium", price: 400, image: pizzaImage },
    { id: "paneer-makhani-large", category: "Veg Pizza", name: "Paneer Makhani Pizza - Large", price: 562, image: pizzaImage },

    { id: "potato-crispy-burger", category: "Burgers", name: "Potato Crispy Burger", price: 43, image: burgerImage },
    { id: "cheese-burger", category: "Burgers", name: "Cheese Burger", price: 52, image: burgerImage },
    { id: "veg-delight-burger", category: "Burgers", name: "Veg Delight Burger", price: 62, image: burgerImage },
    { id: "smoky-tandoori-burger", category: "Burgers", name: "Smoky Tandoori Burger", price: 72, image: burgerImage },
    { id: "achari-paneer-burger", category: "Burgers", name: "Achari Paneer Burger", price: 82, image: burgerImage },
    { id: "friends-zone-spl-burger", category: "Burgers", name: "Friends Zone Spl. Burger", price: 92, image: burgerImage },

    { id: "zingy-parcel", category: "Side Orders", name: "Zingy Parcel", price: 43, image: friesImage },
    { id: "french-fries", category: "Side Orders", name: "French Fries", price: 70, image: friesImage },
    { id: "peri-peri-french-fries", category: "Side Orders", name: "Peri-peri French Fries", price: 95, image: friesImage },
    { id: "chocolava-cake", category: "Side Orders", name: "Chocolava Cake", price: 85, image: friesImage },
    { id: "cheese-dip", category: "Side Orders", name: "Cheese Dip", price: 30, image: friesImage },
    { id: "jalapeno-dip", category: "Side Orders", name: "Jalapeno Dip", price: 20, image: friesImage },

    { id: "momos", category: "Momos", name: "Momos", price: 69, image: momosImage },
    { id: "fry-momos", category: "Momos", name: "Fry Momos", price: 79, image: momosImage },
    { id: "paneer-momos", category: "Momos", name: "Paneer Momos", price: 89, image: momosImage },
    { id: "fry-paneer-momos", category: "Momos", name: "Fry Paneer Momos", price: 99, image: momosImage },

    { id: "mexican-sandwich", category: "Sandwich", name: "Mexican Sandwich", price: 79, image: sandwichImage },
    { id: "smoggy-veggie-sandwich", category: "Sandwich", name: "Smoggy Veggie Sandwich", price: 89, image: sandwichImage },
    { id: "veggie-paradise-sandwich", category: "Sandwich", name: "Veggie Paradise Sandwich", price: 89, image: sandwichImage },
    { id: "loaded-veggies-sandwich", category: "Sandwich", name: "Loaded Veggies Sandwich", price: 89, image: sandwichImage },
    { id: "paneer-tikka-sandwich", category: "Sandwich", name: "Paneer Tikka Sandwich", price: 99, image: sandwichImage },

    { id: "veg-red-pasta", category: "Pasta", name: "Veg Red Pasta", price: 105, image: pastaImage },
    { id: "veg-white-pasta", category: "Pasta", name: "Veg White Pasta", price: 105, image: pastaImage },
    { id: "mix-sauce-pasta", category: "Pasta", name: "Mix Sauce Pasta", price: 119, image: pastaImage },

    { id: "garlic-bread", category: "Garlic Bread", name: "Garlic Bread", price: 95, image: garlicBreadImage },
    { id: "stuffed-garlic-bread", category: "Garlic Bread", name: "Stuffed Garlic Bread", price: 120, image: garlicBreadImage },
    { id: "veg-calzone-pocket", category: "Garlic Bread", name: "Veg Calzone Pocket", price: 119, image: garlicBreadImage },

    { id: "cold-coffee", category: "Drinks", name: "Cold Coffee", price: 99, image: drinkImage },

    { id: "combo-1", category: "Combo Offers", name: "Combo-1", price: 170, image: comboImage },
    { id: "combo-2", category: "Combo Offers", name: "Combo-2", price: 315, image: comboImage },
    { id: "family-combo", category: "Combo Offers", name: "Family Combo", price: 560, image: comboImage },
    { id: "happy-family-combo", category: "Combo Offers", name: "Happy Family Combo", price: 710, image: comboImage }
];

const categories = ["Single Topping Pizza", "Double Topping Pizza", "Veg Pizza", "Burgers", "Side Orders", "Momos", "Sandwich", "Pasta", "Garlic Bread", "Drinks", "Combo Offers"];
const cafeWhatsAppNumber = "917983868082";
let cart = [];
let activeCategory = categories[0];
let reviews = [];

const defaultReviews = [
    { name: "Yash Bharadwaj", rating: 5, text: "Pizza was hot, cheesy, and delivered quickly. Perfect for evening cravings." },
    { name: "Neha", rating: 5, text: "The combo offer is really value for money. Loved the garlic bread too." },
    { name: "Rohit", rating: 4, text: "Good taste and fresh food. The burger prices are very reasonable." }
];

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
const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const reviewMessage = document.getElementById("reviewMessage");

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
            <article class="food-card" style="animation-delay:${index * 0.025}s">
                <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
                <div class="card-body">
                    <div class="card-top">
                        <h3>${escapeHtml(item.name)}</h3>
                        <span class="price">${formatPrice(item.price)}</span>
                    </div>
                    <div class="card-actions">
                        <div class="qty-control" aria-label="Quantity for ${escapeHtml(item.name)}">
                            <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${escapeHtml(item.name)} quantity">-</button>
                            <span>${quantity}</span>
                            <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button>
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
                    <h3>${escapeHtml(item.name)}</h3>
                    <p>${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}</p>
                </div>
                <button class="remove-button" type="button" data-remove="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">
                    <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            <div class="qty-control" aria-label="Cart quantity for ${escapeHtml(item.name)}">
                <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Decrease ${escapeHtml(item.name)} quantity">-</button>
                <span>${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${item.id}" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button>
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

    if (calculateTotal() < 200) {
        formMessage.textContent = "Minimum delivery order is \u20B9200.";
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

function loadReviews() {
    try {
        const savedReviews = JSON.parse(localStorage.getItem("friendsZoneReviews"));
        reviews = Array.isArray(savedReviews) && savedReviews.length ? savedReviews : defaultReviews;
    } catch {
        reviews = defaultReviews;
    }
}

function saveReviews() {
    localStorage.setItem("friendsZoneReviews", JSON.stringify(reviews));
}

function renderStars(rating) {
    return Array.from({ length: 5 }, (_, index) => (
        `<i class="fa-${index < rating ? "solid" : "regular"} fa-star" aria-hidden="true"></i>`
    )).join("");
}

function renderReviews() {
    reviewList.innerHTML = reviews.map((review) => `
        <article class="review-card">
            <div class="review-top">
                <strong>${escapeHtml(review.name)}</strong>
                <span class="stars" aria-label="${review.rating} out of 5 stars">${renderStars(Number(review.rating))}</span>
            </div>
            <p>${escapeHtml(review.text)}</p>
        </article>
    `).join("");
}

function handleReviewSubmit(event) {
    event.preventDefault();
    reviewMessage.textContent = "";

    if (!reviewForm.checkValidity()) {
        reviewMessage.textContent = "Please add your name, rating, and review.";
        reviewForm.reportValidity();
        return;
    }

    const formData = new FormData(reviewForm);
    reviews.unshift({
        name: formData.get("reviewName").trim(),
        rating: Number(formData.get("reviewRating")),
        text: formData.get("reviewText").trim()
    });
    reviews = reviews.slice(0, 12);
    saveReviews();
    renderReviews();
    reviewForm.reset();
    reviewMessage.textContent = "Thanks! Your review is now visible.";
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
reviewForm.addEventListener("submit", handleReviewSubmit);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCartDrawer();
        if (modalBackdrop.classList.contains("show")) {
            resetOrderState();
        }
    }
});

loadReviews();
renderCategories();
renderProducts();
renderCart();
renderReviews();
