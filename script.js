// Handle mobile navigation menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Handle product image gallery (only if the elements exist)
const mainImage = document.getElementById('mainImage');
const smallImage = document.getElementsByClassName('smallImage');

if (mainImage && smallImage.length > 0) {
    Array.from(smallImage).forEach((img) => {
        img.onclick = function () {
            mainImage.src = img.src;
        };
    });
}

// ==========================
// Blog Posts Data
// ==========================
const blogPosts = [
    {
        id: 1,
        title: "The Origin of Coffee",
        date: "12/01",
        image: "images/contactHero.jpg",
        excerpt: "Coffee comes from different places. And depending on where on earth it comes from, it can be ethically or not ethically sourced...",
        content: "Coffee has a rich history that dates back centuries. It is believed to have originated in Ethiopia, where the coffee plant was first discovered. From there, it spread to the Arabian Peninsula and eventually to the rest of the world. Coffee became a cultural phenomenon, influencing trade, politics, and daily life."
    },
    {
        id: 2,
        title: "How to Brew the Perfect Cup",
        date: "12/02",
        image: "images/contactHero.jpg",
        excerpt: "Brewing the perfect cup of coffee is an art. Learn the techniques to make your coffee taste amazing...",
        content: "Brewing the perfect cup of coffee requires attention to detail. Start with freshly ground coffee beans, use the right water temperature, and choose the brewing method that suits your taste. Experiment with different ratios of coffee to water to find your perfect balance. Don't forget to clean your equipment for the best flavor."
    },
    {
        id: 3,
        title: "The Health Benefits of Coffee",
        date: "12/03",
        image: "images/contactHero.jpg",
        excerpt: "Coffee has many health benefits when consumed in moderation. Discover how it can improve your day...",
        content: "Coffee is packed with antioxidants and can provide several health benefits when consumed in moderation. It can improve focus, boost energy levels, and even reduce the risk of certain diseases like Parkinson's and Alzheimer's. However, excessive consumption can lead to negative effects like insomnia or anxiety."
    },
    {
        id: 4,
        title: "Sustainable Coffee Practices",
        date: "12/04",
        image: "images/contactHero.jpg",
        excerpt: "Sustainability in coffee production is crucial for the environment. Learn about sustainable practices...",
        content: "Sustainable coffee practices involve ethical sourcing, reducing waste, and supporting local farmers. By choosing sustainably produced coffee, you can help protect the environment and support communities that rely on coffee production for their livelihood. Look for certifications like Fair Trade or Rainforest Alliance."
    },
    {
        id: 5,
        title: "The Science of Coffee Roasting",
        date: "12/05",
        image: "images/contactHero.jpg",
        excerpt: "Roasting coffee beans is both a science and an art. Learn how roasting affects flavor...",
        content: "Coffee roasting transforms green coffee beans into the aromatic brown beans we know and love. The process involves precise control of temperature and time to develop the desired flavor profile. Light roasts preserve acidity, while dark roasts bring out bold, smoky flavors."
    },
    {
        id: 6,
        title: "Exploring Coffee Cultures Around the World",
        date: "12/06",
        image: "images/contactHero.jpg",
        excerpt: "Coffee is enjoyed differently across the globe. Discover unique coffee traditions...",
        content: "From Italian espresso to Turkish coffee, every culture has its unique way of enjoying coffee. In Ethiopia, coffee ceremonies are a social event, while in Japan, pour-over coffee is an art form. Exploring these traditions can deepen your appreciation for coffee."
    },
    {
        id: 7,
        title: "Decoding Coffee Labels",
        date: "12/07",
        image: "images/contactHero.jpg",
        excerpt: "Understanding coffee labels can help you choose the best beans for your taste...",
        content: "Coffee labels often include terms like single-origin, blend, or organic. Single-origin coffee comes from one region, offering unique flavors, while blends combine beans from different regions for a balanced taste. Certifications like organic or Fair Trade indicate ethical and sustainable practices."
    },
    {
        id: 8,
        title: "The Role of Water in Coffee Brewing",
        date: "12/08",
        image: "images/contactHero.jpg",
        excerpt: "Water quality plays a significant role in coffee brewing. Learn how to optimize it...",
        content: "Water makes up 98% of your coffee, so its quality matters. Use filtered water to avoid impurities that can affect flavor. The ideal water temperature for brewing is between 195°F and 205°F. Experimenting with water-to-coffee ratios can also enhance your brew."
    },
    {
        id: 9,
        title: "The Rise of Specialty Coffee",
        date: "12/09",
        image: "images/contactHero.jpg",
        excerpt: "Specialty coffee is transforming the industry. Discover what makes it unique...",
        content: "Specialty coffee focuses on high-quality beans, ethical sourcing, and precise brewing methods. It emphasizes traceability, allowing consumers to know where their coffee comes from. This movement has elevated coffee from a commodity to a craft."
    },
    {
        id: 10,
        title: "Cold Brew vs. Iced Coffee",
        date: "12/10",
        image: "images/contactHero.jpg",
        excerpt: "Cold brew and iced coffee are popular summer drinks. Learn the difference...",
        content: "Cold brew is made by steeping coffee grounds in cold water for 12-24 hours, resulting in a smooth, less acidic flavor. Iced coffee, on the other hand, is brewed hot and then cooled, offering a bolder taste. Both are refreshing but cater to different preferences."
    },
    {
        id: 11,
        title: "The Economics of Coffee",
        date: "12/11",
        image: "images/contactHero.jpg",
        excerpt: "Coffee is one of the most traded commodities in the world. Explore its economic impact...",
        content: "The coffee industry supports millions of farmers worldwide. However, fluctuating prices and climate change pose challenges. Supporting ethical brands can help ensure fair wages and sustainable practices in the coffee supply chain."
    },
    {
        id: 12,
        title: "The Future of Coffee",
        date: "12/12",
        image: "images/contactHero.jpg",
        excerpt: "What does the future hold for coffee? Discover emerging trends and challenges...",
        content: "The future of coffee lies in innovation and sustainability. From lab-grown coffee to eco-friendly packaging, the industry is evolving to meet consumer demands. However, climate change remains a significant threat to coffee production, requiring collective action."
    }
];

// ==========================
// Products Array
// ==========================
const products = [
    {
        id: "11",
        name: "El Colombiano",
        brand: "MyCoffeeBrand",
        price: "$19.99",
        image: "images/shopItem1.jpg",
        description: "A rich and bold coffee sourced from Colombia.",
        content: "El Colombiano is a premium coffee sourced from the lush mountains of Colombia...",
        sizes: ["12 oz", "16 oz", "20 oz"],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 50,
        rating: 4.5
    },
    {
        id: "22",
        name: "Coffee Tumbler",
        brand: "MyCoffeeBrand",
        price: "$24.99",
        image: "images/shopItem2.jpg",
        description: "A stylish tumbler to keep your coffee hot or cold.",
        content: "Our Coffee Tumbler is designed to keep your beverages at the perfect temperature...",
        sizes: ["Small", "Medium", "Large"],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 30,
        rating: 5
    },
    {
        id: "3",
        name: "Espresso Machine",
        brand: "MyCoffeeBrand",
        price: "$199.99",
        image: "images/shopItem1.jpg",
        description: "A high-quality espresso machine for coffee enthusiasts.",
        content: "Take your coffee game to the next level with our Espresso Machine...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 10,
        rating: 4.5
    },
    {
        id: "4",
        name: "Coffee Mug",
        brand: "MyCoffeeBrand",
        price: "$12.99",
        image: "images/shopItem2.jpg",
        description: "A beautifully designed coffee mug for your daily brew.",
        content: "Start your day with our beautifully designed Coffee Mug...",
        sizes: ["8 oz", "12 oz"],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 100,
        rating: 5
    },
    {
        id: "5",
        name: "French Press",
        brand: "MyCoffeeBrand",
        price: "$39.99",
        image: "images/shopItem1.jpg",
        description: "A classic French press for rich and flavorful coffee.",
        content: "Brew coffee the traditional way with our durable French Press...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 25,
        rating: 4.8
    },
    {
        id: "6",
        name: "Cold Brew Maker",
        brand: "MyCoffeeBrand",
        price: "$29.99",
        image: "images/shopItem2.jpg",
        description: "A convenient cold brew maker for smooth coffee.",
        content: "Enjoy smooth and refreshing cold brew coffee with our easy-to-use Cold Brew Maker...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 40,
        rating: 4.7
    },
    {
        id: "7",
        name: "Coffee Grinder",
        brand: "MyCoffeeBrand",
        price: "$49.99",
        image: "images/shopItem1.jpg",
        description: "A high-quality grinder for freshly ground coffee.",
        content: "Grind your coffee beans to perfection with our Coffee Grinder...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 20,
        rating: 4.6
    },
    {
        id: "8",
        name: "Reusable Coffee Filter",
        brand: "MyCoffeeBrand",
        price: "$9.99",
        image: "images/shopItem2.jpg",
        description: "An eco-friendly reusable coffee filter.",
        content: "Reduce waste with our durable and eco-friendly Reusable Coffee Filter...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 200,
        rating: 4.9
    },
    {
        id: "9",
        name: "Coffee Subscription Box",
        brand: "MyCoffeeBrand",
        price: "$29.99/month",
        image: "images/shopItem1.jpg",
        description: "A monthly subscription box with premium coffee.",
        content: "Receive a curated selection of premium coffee every month with our Subscription Box...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 100,
        rating: 5
    },
    {
        id: "10",
        name: "Coffee Scoop",
        brand: "MyCoffeeBrand",
        price: "$5.99",
        image: "images/shopItem2.jpg",
        description: "A precise coffee scoop for perfect measurements.",
        content: "Measure your coffee with precision using our durable Coffee Scoop...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 300,
        rating: 4.8
    },
    {
        id: "12",
        name: "Travel Coffee Kit",
        brand: "MyCoffeeBrand",
        price: "$59.99",
        image: "images/shopItem1.jpg",
        description: "A portable coffee kit for coffee lovers on the go.",
        content: "Enjoy your favorite coffee anywhere with our Travel Coffee Kit...",
        sizes: [],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "featured",
        stock: 15,
        rating: 4.7
    },
    {
        id: "13",
        name: "Coffee Beans Sampler",
        brand: "MyCoffeeBrand",
        price: "$19.99",
        image: "images/shopItem2.jpg",
        description: "A sampler pack of our finest coffee beans.",
        content: "Explore a variety of flavors with our Coffee Beans Sampler...",
        sizes: ["8 oz", "12 oz"],
        smallImages: ["images/shopItem1.jpg", "images/shopItem2.jpg", "images/shopItem1-2.jpg"],
        category: "new",
        stock: 60,
        rating: 4.9
    }
];

// Dynamically generate links for products
products.forEach(product => {
    product.link = `product.html?id=${product.id}`;
});

// ==========================
// Product Utilities
// ==========================
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function getProductById(productId) {
    return products.find(product => product.id === productId);
}

function redirectToThankYou(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "thank-you.html"; // Redirect to the Thank You page
}

function updateInCartIndicator() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productId = getProductIdFromURL();
    const cartItem = cart.find(item => item.id === productId);

    console.log("Cart:", cart);
    console.log("Product ID:", productId);
    console.log("Cart Item:", cartItem);
    
    const inCartIndicator = document.getElementById("in-cart-indicator");
    console.log("In Cart Indicator Element:", inCartIndicator);
    if (inCartIndicator) {
        if (cartItem) {
            inCartIndicator.textContent = `In Cart: ${cartItem.quantity}`;
            inCartIndicator.style.display = "block"; // Ensure it is visible
        } else {
            inCartIndicator.style.display = "none"; // Hide if not in cart
        }
    }
}

// ==========================
// Add to Cart Functionality
// ==========================
function addToCart(product, quantity = 1) {
    console.log("Adding to cart:", product); // Debugging
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Adjust price based on size
    const sizePriceMap = {
        "12 oz": 19.99,
        "16 oz": 22.99,
        "20 oz": 25.99,
        "Small": 24.99,
        "Medium": 29.99,
        "Large": 34.99
    };
    product.price = `$${sizePriceMap[product.selectedSize] || parseFloat(product.price.replace("$", ""))}`;

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === product.selectedSize);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart summary
    const cartSummary = document.getElementById("cart-summary");
    if (cartSummary) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0);
        cartSummary.innerHTML = `
            Total Items: ${totalItems}<br>
            Total Price: $${totalPrice.toFixed(2)}
        `;
    }

    // Update the specific product card
    updateProductCard(product);

    // Show the notification modal
    const cartModal = document.getElementById("cart-notification");
    if (cartModal) {
        cartModal.classList.remove("hidden");
    }

    // Handle modal buttons
    const continueShoppingButton = document.getElementById("continue-shopping");
    if (continueShoppingButton && !continueShoppingButton.dataset.listenerAdded) {
        continueShoppingButton.addEventListener("click", () => {
            cartModal.classList.add("hidden");
            document.getElementById("product-quantity").value = 1; // Reset quantity field
        });
        continueShoppingButton.dataset.listenerAdded = true;
    }

    const checkoutButton = document.getElementById("checkout");
    if (checkoutButton && !checkoutButton.dataset.listenerAdded) {
        checkoutButton.addEventListener("click", () => {
            window.location.href = "cart.html";
        });
        checkoutButton.dataset.listenerAdded = true;
    }

    const closeModalButton = document.getElementById("close-modal");
    if (closeModalButton && !closeModalButton.dataset.listenerAdded) {
        closeModalButton.addEventListener("click", () => {
            cartModal.classList.add("hidden");
        });
        closeModalButton.dataset.listenerAdded = true;
    }
}

// ==========================
// Update "In Cart" Indicator
// ==========================
function updateProductCard(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = cart.find(item => item.id === product.id);
    const quantityInCart = cartItem ? cartItem.quantity : 0;

    const productCard = document.querySelector(`[data-product-id="${product.id}"]`);
    if (productCard) {
        const inCartIndicator = productCard.querySelector(".in-cart");
        if (quantityInCart > 0) {
            if (inCartIndicator) {
                inCartIndicator.textContent = `In Cart: ${quantityInCart}`;
            } else {
                const newIndicator = document.createElement("p");
                newIndicator.classList.add("in-cart");
                newIndicator.textContent = `In Cart: ${quantityInCart}`;
                productCard.querySelector(".prod-desc").appendChild(newIndicator);
            }
        } else if (inCartIndicator) {
            inCartIndicator.remove();
        }
    }
}

// ==========================
// Populate Products (Reusable Function)
// ==========================

function generateProductCardHTML(product, quantityInCart = 0) {
    const stars = Array.from({ length: 5 }, (_, i) =>
        `<i class="fa-solid fa-star${i < Math.floor(product.rating) ? '' : '-half-alt'}" style="color: #FFD43B;"></i>`
    ).join("");

    return `
        <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="prod-desc">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">${stars}</div>
                <h4>${product.price}</h4>
                ${quantityInCart > 0 ? `<p class="in-cart">In Cart: ${quantityInCart}</p>` : ""}
            </div>
        </a>
        <img src="images/cart.png" class="cart" alt="Add to Cart">
    `;
}

function populateProducts(container, products) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the cart from localStorage

    // Clear the container before populating
    container.innerHTML = "";

    products.forEach(product => {

        // Check if the product is already in the cart
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;

        const productCard = document.createElement("div");
        productCard.classList.add("prod-card");
        productCard.setAttribute("data-product-id", product.id); // Add data-product-id attribute

        productCard.innerHTML = generateProductCardHTML(product, quantityInCart);

        // Add event listener for product card click (redirect to product page)
        productCard.addEventListener("click", (e) => {
            if (!e.target.classList.contains("cart")) {
                window.location.href = product.link;
            }
        });

        // Add event listener for "Add to Cart" icon
        const cartIcon = productCard.querySelector(".cart");
        cartIcon.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Add to Cart clicked for:", product); // Debugging
            addToCart(product);

            // Update the "In Cart" indicator dynamically
            const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCartItem = updatedCart.find(item => item.id === product.id);
            const updatedQuantityInCart = updatedCartItem ? updatedCartItem.quantity : 0;

            const inCartIndicator = productCard.querySelector(".in-cart");
            if (updatedQuantityInCart > 0) {
                if (inCartIndicator) {
                    inCartIndicator.textContent = `In Cart: ${updatedQuantityInCart}`;
                } else {
                    const newIndicator = document.createElement("p");
                    newIndicator.classList.add("in-cart");
                    newIndicator.textContent = `In Cart: ${updatedQuantityInCart}`;
                    productCard.querySelector(".prod-desc").appendChild(newIndicator);
                }
            }
        });

        container.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Dynamically populate the header
    const headerHTML = `
        <section id="header">
            <a href="index.html"><img src="images/logo0.png" class="logo" alt="Coffee Shop Logo"></a>
            <div>
                <ul id="navbar">
                    <!-- Navigation links will be dynamically generated here -->
                </ul>        
            </div>
            <div id="mobile">
                <a href="cart.html"><i class="fa-solid fa-shopping-cart"></i></a> <!-- Updated cart icon -->
                <div id="bar" class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    `;

    // Insert the header into the DOM
    const body = document.body;
    body.insertAdjacentHTML("afterbegin", headerHTML);

    // Dynamically populate navigation links
    const navLinks = [
        { name: "Home", href: "index.html" },
        { name: "Shop", href: "shop.html" },
        { name: "Blog", href: "blog.html" },
        { name: "About", href: "about.html" },
        { name: "Contact", href: "contact.html" },
        { name: "Cart", href: "cart.html", icon: "fa-solid fa-shopping-cart" }
    ];

    const navbar = document.getElementById("navbar");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const isActive = link.href === currentPage ? "active" : "";
        if (link.icon) {
            navbar.innerHTML += `
                <li><a href="${link.href}" id="lg-bag"><i class="${link.icon}"></i> </a></li>
            `;
        } else {
            navbar.innerHTML += `
                <li><a href="${link.href}" class="${isActive}">${link.name}</a></li>
            `;
        }
    });

    // Hamburger menu toggle functionality
    const bar = document.getElementById("bar");
    const navbarContainer = document.getElementById("navbar");

    bar.addEventListener("click", () => {
        navbarContainer.classList.toggle("active");
        bar.classList.toggle("open");
    });

    // Dynamically populate the footer
    const footerHTML = `
    <footer class="section-padding1">
        <div class="footer-container">
            <!-- Contact Section -->
            <div class="col">
                <h4>Contact</h4>
                <p><strong>Address:</strong> 1234 Heavens Rd, NY, NY</p>
                <p><strong>Phone:</strong> +1 646 123-1234</p>
                <p><strong>Hours:</strong> 10am - 6pm, Mon - Sat</p>
                <div class="followLinks">
                    <h4>Follow Us</h4>
                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <!-- About Section -->
            <div class="col">
                <h4>About</h4>
                <a href="about.html">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="contact.html">Contact Us</a>
            </div>

            <!-- My Account Section -->
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
        </div>

        <!-- Copyright Section -->
        <div class="copiright">
            <p>© 2025 SuperbWebDev - Golden Bull Coffee. All Rights Reserved.</p>
        </div>
    </footer>
    `;

    // Insert the footer into the DOM
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // ==========================
    // Initialize Product Cards on Pages
    // ==========================
    const featuredProductsContainer = document.getElementById("featured-products");
    const newProductsContainer = document.getElementById("new-products");
    const shopProductsContainer = document.getElementById("shop-products");

    // Filter products by category
    const featuredProducts = products.filter(product => product.category === "featured").slice(0, 4); // Limit to 4 featured products
    const newProducts = products
        .filter(product => product.category === "new")
        .slice(-4); // Get the 4 latest new products (assuming they are ordered by addition)

    // Populate product cards on index.html
    if (featuredProductsContainer) populateProducts(featuredProductsContainer, featuredProducts);
    if (newProductsContainer) populateProducts(newProductsContainer, newProducts);

    // Populate product cards on shop.html
    if (shopProductsContainer) populateProducts(shopProductsContainer, products);

    // ==========================
    // Pagination Logic
    // ==========================
    const productsPerPage = 8; // Number of items per page
    let currentPagePagi = 1; // Shared pagination variable
    let isPaginationAction = false; // Flag to track if the action is triggered by pagination

    function renderPaginatedContent(data, containerId, page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedData = data.slice(startIndex, endIndex);
    
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = ""; // Clear existing content
    
            paginatedData.forEach(item => {
                const itemBox = document.createElement("div");
                itemBox.classList.add(containerId === "shop-products" ? "prod-card" : "blog-box");
    
                if (containerId === "shop-products") {
                    // Render product card
                    const cart = JSON.parse(localStorage.getItem("cart")) || [];
                    const cartItem = cart.find(cartItem => cartItem.id === item.id);
                    const quantityInCart = cartItem ? cartItem.quantity : 0;
    
                    itemBox.innerHTML = generateProductCardHTML(item, quantityInCart);
    
                    // Add event listener for product card click (redirect to product page)
                    itemBox.addEventListener("click", (e) => {
                        if (!e.target.classList.contains("cart")) {
                            window.location.href = item.link;
                        }
                    });
    
                    // Add event listener for "Add to Cart" icon
                    const cartIcon = itemBox.querySelector(".cart");
                    cartIcon.addEventListener("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Add to Cart clicked for:", item); // Debugging
                        addToCart(item);
    
                        // Update the "In Cart" indicator dynamically
                        const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
                        const updatedCartItem = updatedCart.find(cartItem => cartItem.id === item.id);
                        const updatedQuantityInCart = updatedCartItem ? updatedCartItem.quantity : 0;
    
                        const inCartIndicator = itemBox.querySelector(".in-cart");
                        if (updatedQuantityInCart > 0) {
                            if (inCartIndicator) {
                                inCartIndicator.textContent = `In Cart: ${updatedQuantityInCart}`;
                            } else {
                                const newIndicator = document.createElement("p");
                                newIndicator.classList.add("in-cart");
                                newIndicator.textContent = `In Cart: ${updatedQuantityInCart}`;
                                itemBox.querySelector(".prod-desc").appendChild(newIndicator);
                            }
                        }
                    });
                } else if (containerId === "blog") {
                    // Render blog card
                    itemBox.innerHTML = `
                        <div class="blog-image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="blog-details">
                            <h4>${item.title}</h4>
                            <p>${item.excerpt}</p>
                            <a href="blog-post.html?id=${item.id}">CONTINUE READING</a>
                        </div>
                        <h1>${item.date}</h1>
                    `;
                }
    
                container.appendChild(itemBox);
            });
        }
    
        // Scroll to the top of the section only if triggered by pagination
        if (isPaginationAction) {
            const section = document.getElementById(containerId === "shop-products" ? "products" : "blog");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    
        // Reset the flag after scrolling
        isPaginationAction = false;
    }

    function updatePaginationLinks(data, containerId) {
        const totalPages = Math.ceil(data.length / productsPerPage);
        const paginationContainer = document.getElementById("pagination");

        if (paginationContainer) {
            paginationContainer.innerHTML = ""; // Clear existing links

            // Add previous button
            if (currentPagePagi > 1) {
                const prevLink = document.createElement("a");
                prevLink.href = "#";
                prevLink.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
                prevLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    isPaginationAction = true; // Set the flag for pagination
                    currentPagePagi--;
                    renderPaginatedContent(data, containerId, currentPagePagi);
                    updatePaginationLinks(data, containerId);
                });
                paginationContainer.appendChild(prevLink);
            }

            // Add page number links
            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement("a");
                pageLink.href = "#";
                pageLink.textContent = i;
                if (i === currentPagePagi) {
                    pageLink.classList.add("active");
                }
                pageLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    isPaginationAction = true; // Set the flag for pagination
                    currentPagePagi = i;
                    renderPaginatedContent(data, containerId, currentPagePagi);
                    updatePaginationLinks(data, containerId);
                });
                paginationContainer.appendChild(pageLink);
            }

            // Add next button
            if (currentPagePagi < totalPages) {
                const nextLink = document.createElement("a");
                nextLink.href = "#";
                nextLink.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
                nextLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    isPaginationAction = true; // Set the flag for pagination
                    currentPagePagi++;
                    renderPaginatedContent(data, containerId, currentPagePagi);
                    updatePaginationLinks(data, containerId);
                });
                paginationContainer.appendChild(nextLink);
            }
        }
    }

    // ==========================
    // Initialize Pagination
    // ==========================
    if (window.location.pathname.includes("shop.html")) {
        renderPaginatedContent(products, "shop-products", currentPagePagi);
        updatePaginationLinks(products, "shop-products");
    } else if (window.location.pathname.includes("blog.html")) {
        renderPaginatedContent(blogPosts, "blog", currentPagePagi);
        updatePaginationLinks(blogPosts, "blog");
    }

    // ==========================
    // Blog Post Rendering
    // ==========================
    function renderSingleBlogPost() {
        const postId = new URLSearchParams(window.location.search).get("id");
        const post = blogPosts.find(p => p.id === parseInt(postId));

        const postContent = document.getElementById("post-content");
        if (postContent && post) {
            postContent.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.date}</p>
                <img src="${post.image}" alt="${post.title}">
                <p>${post.content}</p>
            `;
        } else if (postContent) {
            postContent.innerHTML = `<p>Post not found.</p>`;
        }
    }

    // Call the function if on the single post page
    if (window.location.pathname.includes("blog-post.html")) {
        renderSingleBlogPost();
    }

    // ==========================
    // Populate Product Details
    // ==========================
    function populateProductDetails(product) {
        if (!product) {
            document.getElementById("prod-details").innerHTML = "<p>Product not found.</p>";
            return;
        }

        // Populate main image
        document.getElementById("mainImage").src = product.image;

        // Populate small images
        const smallImagesContainer = document.getElementById("small-images");
        smallImagesContainer.innerHTML = ""; // Clear existing images
        product.smallImages.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = product.name;
            imgElement.classList.add("smallImage");
            imgElement.style.cursor = "pointer";
            imgElement.addEventListener("click", () => {
                document.getElementById("mainImage").src = image;
            });
            smallImagesContainer.appendChild(imgElement);
        });

        // Populate product details
        document.getElementById("product-brand").textContent = product.brand;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;

        // Populate product content
        const productContentContainer = document.getElementById("product-content");
        if (productContentContainer) {
            productContentContainer.textContent = product.content;
        }

        // Populate sizes
        const sizesDropdown = document.getElementById("product-sizes");
        sizesDropdown.innerHTML = ""; // Clear existing options

        const sizePriceMap = {
            "12 oz": 19.99,
            "16 oz": 22.99,
            "20 oz": 25.99,
            "Small": 24.99,
            "Medium": 29.99,
            "Large": 34.99
        };

        // Set the initial price based on the default size
        const initialSize = product.sizes[0];
        document.getElementById("product-price").textContent = `$${sizePriceMap[initialSize] || parseFloat(product.price.replace("$", ""))}`;

        product.sizes.forEach(size => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            sizesDropdown.appendChild(option);
        });

        // Update price when size is changed
        sizesDropdown.addEventListener("change", () => {
            const selectedSize = sizesDropdown.value;
            const updatedPrice = sizePriceMap[selectedSize] || parseFloat(product.price.replace("$", ""));
            document.getElementById("product-price").textContent = `$${updatedPrice.toFixed(2)}`;
        });

        // Add to cart functionality
        const addToCartButton = document.getElementById("add-to-cart");
        addToCartButton.addEventListener("click", () => {
            const quantityInput = document.getElementById("product-quantity");
            const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 1;
            const selectedSize = sizesDropdown.value;

            // Pass the product with the selected size and quantity to addToCart
            addToCart({ ...product, selectedSize }, quantity);

            // Update the "In Cart" indicator after adding to cart
            updateInCartIndicator();
        });

        // Update the "In Cart" indicator on page load
        updateInCartIndicator();
    }

    // ==========================
    // Initialize Product Details
    // ==========================
    const productId = getProductIdFromURL();
    const product = getProductById(productId);
    if (product) {
        populateProductDetails(product);
    }


    // ==========================
    // Populate Cart
    // ==========================
    function populateCart() {
        const cartItemsContainer = document.getElementById("cart-items");

        if (!cartItemsContainer) {
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center;">Your cart is empty.</td>
                </tr>
            `;
            return;
        }

        let cartTotal = 0;

        cart.forEach((item, index) => {
            const itemSubtotal = parseFloat(item.price.replace("$", "")) * item.quantity;
            cartTotal += itemSubtotal;

            cartItemsContainer.innerHTML += `
                <tr>
                    <td><a href="#" class="remove-item" data-index="${index}"><i class="fa-regular fa-circle-xmark"></i></a></td>
                    <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" class="item-quantity" data-index="${index}" value="${item.quantity}" min="1"></td>
                    <td>$${itemSubtotal.toFixed(2)}</td>
                </tr>
            `;
        });

        const subtotalContainer = document.querySelector("#subtotal table");
        if (subtotalContainer) {
            subtotalContainer.innerHTML = `
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$${cartTotal.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$${cartTotal.toFixed(2)}</strong></td>
                </tr>
            `;
        }

        addCartEventListeners();
    }

    if (window.location.pathname.includes("cart.html")) {
        populateCart();
    }

    // ==========================
    // Cart Event Listeners
    // ==========================
    function addCartEventListeners() {
        const removeButtons = document.querySelectorAll(".remove-item");
        const quantityInputs = document.querySelectorAll(".item-quantity");

        removeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const index = button.dataset.index;
                removeItemFromCart(index);
            });
        });

        quantityInputs.forEach(input => {
            input.addEventListener("change", (e) => {
                const index = input.dataset.index;
                const newQuantity = parseInt(input.value);
                updateItemQuantity(index, newQuantity);
            });
        });
    }

    function removeItemFromCart(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        populateCart();
    }

    function updateItemQuantity(index, quantity) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (quantity < 1) {
            removeItemFromCart(index);
            return;
        }
        cart[index].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        populateCart();
    }


    // ==========================
    // Coupon Data
    // ==========================
    const coupons = {
        SAVE10: { discount: 0.1, expires: "2025-12-31" },
        SAVE20: { discount: 0.2, expires: "2025-12-31" },
        SAVE25: { discount: 0.25, expires: "2025-12-31" }
    };

    // ==========================
    // Update Cart Totals
    // ==========================
    function updateCartTotals() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const couponCode = localStorage.getItem("couponCode") || null;
        let discount = 0;

        // Calculate subtotal
        const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0);

        // Apply coupon discount if a valid coupon is applied
        if (couponCode && coupons[couponCode]) {
            const today = new Date();
            const expirationDate = new Date(coupons[couponCode].expires);

            if (today <= expirationDate) {
                discount = subtotal * coupons[couponCode].discount;
            } else {
                displayMessage("The coupon has expired.", "error");
                localStorage.removeItem("couponCode");
            }
        }

        // Calculate shipping cost
        const shippingCost = subtotal === 0 ? 0 : subtotal >= 45 ? 0 : 5; // Free shipping for orders over $45, otherwise $5

        const total = subtotal - discount + shippingCost;

        // Update the DOM only if the elements exist
        const cartSubtotalElement = document.getElementById("cart-subtotal");
        const couponDiscountElement = document.getElementById("coupon-discount");
        const shippingCostElement = document.getElementById("shipping-cost");
        const cartTotalElement = document.getElementById("cart-total");

        if (cartSubtotalElement) {
            cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
        if (couponDiscountElement) {
            couponDiscountElement.textContent = `-$${discount.toFixed(2)}`;
        }
        if (shippingCostElement) {
            shippingCostElement.textContent = shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`;
        }
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${total.toFixed(2)}`;
        }
    }

    // ==========================
    // Display Messages
    // ==========================
    function displayMessage(message, type) {
        const messageContainer = document.getElementById("message-container");
        messageContainer.textContent = message;
        messageContainer.className = type; // Add a class for styling (e.g., "success" or "error")
        setTimeout(() => {
            messageContainer.textContent = "";
            messageContainer.className = "";
        }, 5000); // Clear the message after 5 seconds
    }

    // ==========================
    // Apply Coupon
    // ==========================
    function applyCoupon() {
        const couponInput = document.getElementById("coupon-code");
        const couponCode = couponInput.value.trim();

        if (coupons[couponCode]) {
            const today = new Date();
            const expirationDate = new Date(coupons[couponCode].expires);

            if (today <= expirationDate) {
                localStorage.setItem("couponCode", couponCode);
                displayMessage(`Coupon applied successfully! You saved ${coupons[couponCode].discount * 100}%.`, "success");
            } else {
                displayMessage("The coupon has expired.", "error");
                localStorage.removeItem("couponCode");
            }
        } else {
            displayMessage("Invalid coupon code.", "error");
            localStorage.removeItem("couponCode");
        }

        // Update the cart totals after applying the coupon
        updateCartTotals();
    }

    // ==========================
    // Proceed to Checkout
    // ==========================
    function proceedToCheckout() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            displayMessage("Your cart is empty. Add some products before proceeding to checkout.");
            return;
        }

        // Redirect to the checkout page
        window.location.href = "checkout.html";
    }

    // ==========================
    // Attach Event Listeners
    // ==========================
    const applyCouponButton = document.getElementById("apply-coupon");
    if (applyCouponButton) {
        applyCouponButton.addEventListener("click", applyCoupon);
    }

    const proceedToCheckoutButton = document.getElementById("proceed-to-checkout");
    if (proceedToCheckoutButton) {
        proceedToCheckoutButton.addEventListener("click", proceedToCheckout);
    }

    // ==========================
    // Initialize Cart Totals
    // ==========================
    updateCartTotals();


});