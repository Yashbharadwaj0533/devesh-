const whatsappNumber = "917830143379";
const minimumOrderAmount = 200;
const fallbackImage = "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D";

const foodImages = {
  pizza: [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80"
  ],
  burger: [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80"
  ],
  fries: [
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80"
  ],
  parcel: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1606755962773-d324e2dabdca?auto=format&fit=crop&w=900&q=80"
  ],
  cake: [
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80"
  ],
  dip: [
    "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?auto=format&fit=crop&w=900&q=80"
  ],
  momos: [
    "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=80"
  ],
  sandwich: [
    "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=900&q=80"
  ],
  pasta: [
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
  ],
  drink: [
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"
  ],
  combo: [
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
  ]
};

const rawItems = [
  ["tomato-pizza", "Single Topping Pizza", "Tomato Pizza", 69],
  ["onion-pizza", "Single Topping Pizza", "Onion Pizza", 71],
  ["capsicum-pizza", "Single Topping Pizza", "Capsicum Pizza", 76],
  ["corn-pizza", "Single Topping Pizza", "Corn Pizza", 76],
  ["single-topping-set-4", "Single Topping Pizza", "Set of 4 Single Topping Pizza", 270],
  ["onion-capsicum-pizza", "Double Topping Pizza", "Onion & Capsicum Pizza", 105],
  ["tomato-corn-pizza", "Double Topping Pizza", "Tomato & Corn Pizza", 105],
  ["jalapeno-onion-pizza", "Double Topping Pizza", "Jalapeno & Onion Pizza", 105],
  ["onion-paneer-pizza", "Double Topping Pizza", "Onion & Paneer Pizza", 109],
  ["double-topping-set-4", "Double Topping Pizza", "Set of 4 Double Topping Pizza", 399],
  ["cheese-pizza-small", "Veg Pizza", "Cheese Pizza - Small", 105],
  ["cheese-pizza-medium", "Veg Pizza", "Cheese Pizza - Medium", 219],
  ["cheese-pizza-large", "Veg Pizza", "Cheese Pizza - Large", 352],
  ["cheese-corn-small", "Veg Pizza", "Cheese & Corn - Small", 105],
  ["cheese-corn-medium", "Veg Pizza", "Cheese & Corn - Medium", 219],
  ["cheese-corn-large", "Veg Pizza", "Cheese & Corn - Large", 352],
  ["cheese-onion-small", "Veg Pizza", "Cheese & Onion - Small", 105],
  ["cheese-onion-medium", "Veg Pizza", "Cheese & Onion - Medium", 219],
  ["cheese-onion-large", "Veg Pizza", "Cheese & Onion - Large", 352],
  ["double-cheese-small", "Veg Pizza", "Double Cheese Pizza - Small", 142],
  ["double-cheese-medium", "Veg Pizza", "Double Cheese Pizza - Medium", 285],
  ["double-cheese-large", "Veg Pizza", "Double Cheese Pizza - Large", 428],
  ["garden-fresh-small", "Veg Pizza", "Garden Fresh - Small", 142],
  ["garden-fresh-medium", "Veg Pizza", "Garden Fresh - Medium", 285],
  ["garden-fresh-large", "Veg Pizza", "Garden Fresh - Large", 428],
  ["cheese-paneer-small", "Veg Pizza", "Cheese & Paneer - Small", 142],
  ["cheese-paneer-medium", "Veg Pizza", "Cheese & Paneer - Medium", 285],
  ["cheese-paneer-large", "Veg Pizza", "Cheese & Paneer - Large", 428],
  ["farmfresh-small", "Veg Pizza", "Farmfresh - Small", 190],
  ["farmfresh-medium", "Veg Pizza", "Farmfresh - Medium", 343],
  ["farmfresh-large", "Veg Pizza", "Farmfresh - Large", 495],
  ["country-feast-small", "Veg Pizza", "Country Feast - Small", 190],
  ["country-feast-medium", "Veg Pizza", "Country Feast - Medium", 343],
  ["country-feast-large", "Veg Pizza", "Country Feast - Large", 495],
  ["spicy-tango-small", "Veg Pizza", "Spicy Tango Pizza - Small", 190],
  ["spicy-tango-medium", "Veg Pizza", "Spicy Tango Pizza - Medium", 343],
  ["spicy-tango-large", "Veg Pizza", "Spicy Tango Pizza - Large", 495],
  ["wonder-pizza-small", "Veg Pizza", "Wonder Pizza - Small", 190],
  ["wonder-pizza-medium", "Veg Pizza", "Wonder Pizza - Medium", 343],
  ["wonder-pizza-large", "Veg Pizza", "Wonder Pizza - Large", 495],
  ["spicy-paneer-small", "Veg Pizza", "Spicy Paneer - Small", 219],
  ["spicy-paneer-medium", "Veg Pizza", "Spicy Paneer - Medium", 380],
  ["spicy-paneer-large", "Veg Pizza", "Spicy Paneer - Large", 505],
  ["three-peppers-small", "Veg Pizza", "Three Peppers - Small", 219],
  ["three-peppers-medium", "Veg Pizza", "Three Peppers - Medium", 380],
  ["three-peppers-large", "Veg Pizza", "Three Peppers - Large", 505],
  ["delicious-pizza-small", "Veg Pizza", "Delicious Pizza - Small", 219],
  ["delicious-pizza-medium", "Veg Pizza", "Delicious Pizza - Medium", 380],
  ["delicious-pizza-large", "Veg Pizza", "Delicious Pizza - Large", 505],
  ["veggie-lovers-small", "Veg Pizza", "Veggie Lovers - Small", 219],
  ["veggie-lovers-medium", "Veg Pizza", "Veggie Lovers - Medium", 380],
  ["veggie-lovers-large", "Veg Pizza", "Veggie Lovers - Large", 505],
  ["achari-pizza-small", "Veg Pizza", "Achari Pizza - Small", 219],
  ["achari-pizza-medium", "Veg Pizza", "Achari Pizza - Medium", 380],
  ["achari-pizza-large", "Veg Pizza", "Achari Pizza - Large", 505],
  ["friends-zone-special-small", "Veg Pizza", "Friends Zone Special Pizza - Small", 248],
  ["friends-zone-special-medium", "Veg Pizza", "Friends Zone Special Pizza - Medium", 400],
  ["friends-zone-special-large", "Veg Pizza", "Friends Zone Special Pizza - Large", 562],
  ["cloud-one-small", "Veg Pizza", "Cloud One Pizza - Small", 248],
  ["cloud-one-medium", "Veg Pizza", "Cloud One Pizza - Medium", 400],
  ["cloud-one-large", "Veg Pizza", "Cloud One Pizza - Large", 562],
  ["chefs-veg-special-small", "Veg Pizza", "Chef's Veg Special - Small", 248],
  ["chefs-veg-special-medium", "Veg Pizza", "Chef's Veg Special - Medium", 400],
  ["chefs-veg-special-large", "Veg Pizza", "Chef's Veg Special - Large", 562],
  ["paneer-makhani-small", "Veg Pizza", "Paneer Makhani Pizza - Small", 248],
  ["paneer-makhani-medium", "Veg Pizza", "Paneer Makhani Pizza - Medium", 400],
  ["paneer-makhani-large", "Veg Pizza", "Paneer Makhani Pizza - Large", 562],
  ["potato-crispy-burger", "Burgers", "Potato Crispy Burger", 43],
  ["cheese-burger", "Burgers", "Cheese Burger", 52],
  ["veg-delight-burger", "Burgers", "Veg Delight Burger", 62],
  ["smoky-tandoori-burger", "Burgers", "Smoky Tandoori Burger", 72],
  ["achari-paneer-burger", "Burgers", "Achari Paneer Burger", 82],
  ["friends-zone-spl-burger", "Burgers", "Friends Zone Spl. Burger", 92],
  ["zingy-parcel", "Side Orders", "Zingy Parcel", 43],
  ["french-fries", "Side Orders", "French Fries", 70],
  ["peri-peri-french-fries", "Side Orders", "Peri-peri French Fries", 95],
  ["chocolava-cake", "Side Orders", "Chocolava Cake", 85],
  ["cheese-dip", "Side Orders", "Cheese Dip", 30],
  ["jalapeno-dip", "Side Orders", "Jalapeno Dip", 20],
  ["momos", "Momos", "Momos", 69],
  ["fry-momos", "Momos", "Fry Momos", 79],
  ["paneer-momos", "Momos", "Paneer Momos", 89],
  ["fry-paneer-momos", "Momos", "Fry Paneer Momos", 99],
  ["mexican-sandwich", "Sandwich", "Mexican Sandwich", 79],
  ["smoggy-veggie-sandwich", "Sandwich", "Smoggy Veggie Sandwich", 89],
  ["veggie-paradise-sandwich", "Sandwich", "Veggie Paradise Sandwich", 89],
  ["loaded-veggies-sandwich", "Sandwich", "Loaded Veggies Sandwich", 89],
  ["paneer-tikka-sandwich", "Sandwich", "Paneer Tikka Sandwich", 99],
  ["veg-red-pasta", "Pasta", "Veg Red Pasta", 105],
  ["veg-white-pasta", "Pasta", "Veg White Pasta", 105],
  ["mix-sauce-pasta", "Pasta", "Mix Sauce Pasta", 119],
  ["cold-coffee", "Drinks", "Cold Coffee", 99],
  ["combo-1", "Combo Offers", "Combo-1", 170],
  ["combo-2", "Combo Offers", "Combo-2", 315],
  ["family-combo", "Combo Offers", "Family Combo", 560],
  ["happy-family-combo", "Combo Offers", "Happy Family Combo", 710]
];

const menuItems = rawItems.map(([id, category, name, price]) => ({ id, category, name, price }));
const categories = [...new Set(menuItems.map((item) => item.category))];
const categoryBar = document.getElementById("categoryBar");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
let activeCategory = categories[0];
let cart = {};

function rupees(value) {
  return `₹${value}`;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function getFoodImage(item, index) {
  const id = item.id.toLowerCase();
  const category = item.category.toLowerCase();
  const pick = (images) => images[index % images.length];
  if (category.includes("pizza")) return foodImages.pizza[index % foodImages.pizza.length];
  if (category.includes("burger")) return pick(foodImages.burger);
  if (id.includes("fries")) return pick(foodImages.fries);
  if (id.includes("parcel")) return pick(foodImages.parcel);
  if (id.includes("cake")) return pick(foodImages.cake);
  if (id.includes("dip")) return pick(foodImages.dip);
  if (category.includes("momos")) return pick(foodImages.momos);
  if (category.includes("sandwich")) return pick(foodImages.sandwich);
  if (category.includes("pasta")) return pick(foodImages.pasta);
  if (category.includes("drinks")) return pick(foodImages.drink);
  if (category.includes("combo")) return pick(foodImages.combo);
  return fallbackImage;
}

function renderCategories() {
  categoryBar.innerHTML = categories.map((category) => `
    <button class="category-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join("");
}

function getFilteredItems() {
  const query = searchInput.value.trim().toLowerCase();
  return menuItems.filter((item) => {
    const categoryMatch = query ? true : item.category === activeCategory;
    const searchableText = [
      item.name,
      item.category,
      item.price,
      `₹${item.price}`,
      `rs ${item.price}`,
      `rate ${item.price}`
    ].join(" ").toLowerCase();
    const queryMatch = !query || searchableText.includes(query);
    return categoryMatch && queryMatch;
  });
}

function renderMenu() {
  const items = getFilteredItems();
  menuGrid.innerHTML = items.map((item, index) => `
    <article class="food-card">
      <div class="food-media">
        <img src="${getFoodImage(item, index)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}';">
        <span>${escapeHtml(item.category)}</span>
      </div>
      <div class="food-body">
        <div class="food-title">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.category)}</p>
        </div>
        <div class="food-actions">
          <span class="price">${rupees(item.price)}</span>
          <button class="add-button" type="button" data-add="${escapeHtml(item.id)}">Add</button>
        </div>
      </div>
    </article>
  `).join("") || `<p class="cart-empty">No items found.</p>`;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

function changeQuantity(id, delta) {
  const next = (cart[id] || 0) + delta;
  if (next <= 0) delete cart[id];
  else cart[id] = next;
  renderCart();
}

function getCartRows() {
  return Object.entries(cart).map(([id, quantity]) => {
    const item = menuItems.find((entry) => entry.id === id);
    return item ? { ...item, quantity, lineTotal: item.price * quantity } : null;
  }).filter(Boolean);
}

function renderCart() {
  const rows = getCartRows();
  const total = rows.reduce((sum, row) => sum + row.lineTotal, 0);
  cartTotal.textContent = rupees(total);
  cartList.innerHTML = rows.length ? rows.map((row) => `
    <div class="cart-row">
      <div><strong>${escapeHtml(row.name)}</strong><div>${rupees(row.price)} x ${row.quantity} = ${rupees(row.lineTotal)}</div></div>
      <div class="qty-controls">
        <button class="qty-button" type="button" data-qty="${escapeHtml(row.id)}" data-delta="-1">-</button>
        <span>${row.quantity}</span>
        <button class="qty-button" type="button" data-qty="${escapeHtml(row.id)}" data-delta="1">+</button>
      </div>
    </div>
  `).join("") : `<p class="cart-empty">Your cart is empty.</p>`;
}

function createOrderText(customer) {
  const rows = getCartRows();
  const total = rows.reduce((sum, row) => sum + row.lineTotal, 0);
  return [
    "New Order - Friend's Zone Cafe",
    "",
    `Name: ${customer.name}`,
    `Mobile: ${customer.phone}`,
    `Address: ${customer.address}`,
    "",
    "Items:",
    ...rows.map((row) => `- ${row.name} x ${row.quantity} = ${rupees(row.lineTotal)}`),
    "",
    `Total: ${rupees(total)}`
  ].join("\n");
}

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".topbar")) closeMenu();
});

categoryBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

document.querySelector(".type-strip").addEventListener("click", (event) => {
  const button = event.target.closest("[data-jump-category]");
  if (!button) return;
  activeCategory = button.dataset.jumpCategory;
  searchInput.value = "";
  renderCategories();
  renderMenu();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-qty]");
  if (!button) return;
  changeQuantity(button.dataset.qty, Number(button.dataset.delta));
});

searchInput.addEventListener("input", renderMenu);

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  orderMessage.textContent = "";
  const rows = getCartRows();
  if (!rows.length) {
    orderMessage.textContent = "Please add at least one item.";
    return;
  }
  const total = rows.reduce((sum, row) => sum + row.lineTotal, 0);
  if (total < minimumOrderAmount) {
    orderMessage.textContent = `Minimum order is ${rupees(minimumOrderAmount)}. Please add ${rupees(minimumOrderAmount - total)} more.`;
    return;
  }
  if (!orderForm.checkValidity()) {
    orderMessage.textContent = "Please fill customer details correctly.";
    orderForm.reportValidity();
    return;
  }
  const data = new FormData(orderForm);
  const text = createOrderText({
    name: data.get("name").trim(),
    phone: data.get("phone").trim(),
    address: data.get("address").trim()
  });
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  orderMessage.textContent = "WhatsApp order message is ready.";
});

renderCategories();
renderMenu();
renderCart();
