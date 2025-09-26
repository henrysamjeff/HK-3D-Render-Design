// Données des produits
const products = [
    {
        id: 1,
        name: "Audi S5",
        category: "Images Rendus",
        price: 45,
        image: "images/car-1.jpg",
        description: "Rendu 3D haute définition d'une voiture de luxe"
    },
    {
        id: 2,
        name: "Bentley",
        category: "Images Rendus",
        price: 50,
        image: "images/car-2.jpg",
        description: "Présentation professionnelle pour vos idées"
    },
    {
        id: 3,
        name: "BYD Speed GT",
        category: "Images Rendus",
        price: 20,
        image: "images/car-3.jpg",
        description: "Rendu sportif avec environnement personnalisable"
    },
    {
        id: 4,
        name: "Chevrolet Corvette",
        category: "Images Rendus",
        price: 30,
        image: "images/car-4.jpg",
        description: "Présentation réaliste des voitures de sport"
    },
    {
        id: 5,
        name: "Chevrolet Tahoe",
        category: "Images Rendus",
        price: 28,
        image: "images/car-5.jpg",
        description: "Rendu de luxe"
    },
    {
        id: 6,
        name: "Chevrolet Silverado EV RST",
        category: "Images Rendus",
        price: 20,
        image: "images/car-6.jpg",
        description: "Présentation de rendu professionnel"
    },
    {
        id: 7,
        name: "Dodge Ram TRX",
        category: "Images Rendus",
        price: 30,
        image: "images/car-7.jpg",
        description: "Rendu présentation"
    },
    {
        id: 8,
        name: "Dodge Ram TRX",
        category: "Model 3D Disponible",
        price: 35,
        image: "images/car-8.jpg",
        description: "Model design et pro"
    },
    {
        id: 9,
        name: "Ford F-150 Raptor",
        category: "Images Rendus",
        price: 30,
        image: "images/car-9.jpg",
        description: "Rendu 3D pro"
    },
    {
        id: 10,
        name: "Ford Mustang Boss",
        category: "Images Rendu",
        price: 20,
        image: "images/car-10.jpg",
        description: "Rendu 3D Speed"
    },
    {   
        id: 11,
        name: "Ford Mustang",
        category: "Model 3D Disponible",
        price: 40,
        image: "images/car-11.jpg",
        description: "Rendu 3D Speed"
    },
    {
        id: 12,
        name: "BMW",
        category: "Model 3D Disponible",
        price: 30,
        image: "images/car-12.jpg",
        description: "Rendu 3D pro"
    },
    {
        id: 13,
        name: "Hyundai i20",
        category: "Model 3D Disponible",
        price: 40,
        image: "images/car-13.jpg",
        description: "3D Réaliste"
    },
    {
        id: 14,
        name: "Jeep Gladiator",
        category: "Images Rendus",
        price: 50,
        image: "images/car-14.jpg",
        description: "Rendu 3D Réaliste"
    },
    {
        id: 15,
        name: "Jeep Grand Cherokee",
        category: "Model 3D Disponible",
        price: 20,
        image: "images/car-15.jpg",
        description: "3D Pro"
    },
    {
        id: 16,
        name: "Ferrari",
        category: "Model 3D Disponible",
        price: 20,
        image: "images/car-16.jpg",
        description: "3D Pro"
    },
    {
        id: 17,
        name: "Mercedes-Benz G-Class Brabus",
        category: "Images Rendus",
        price: 50,
        image: "images/car-17.jpg",
        description: "Rendu 3D Réaliste"
    },
    {
        id: 18,
        name: "Nissan GT-R 35",
        category: "Images Rendus",
        price: 50,
        image: "images/car-18.jpg",
        description: "Rendu 3D Professionnel et Réaliste"
    },
    {
        id: 19,
        name: "Porcshe GT3 RS",
        category: "Model 3D Disponible",
        price: 30,
        image: "images/car-19.jpg",
        description: "3D Pro et Parfait"
    },
    {
        id: 20,
        name: "Rezvani Tank",
        category: "Images Rendus",
        price: 50,
        image: "images/car-20.jpg",
        description: "Rendu 3D Pro et Réaliste"
    },
    {
        id: 21,
        name: "Toyota Land Cruiser VX",
        category: "Model 3D Disponible",
        price: 40,
        image: "images/car-21.jpg",
        description: "3D pro"
    },
    {
        id: 22,
        name: "Toyota Land Cruiser VX-R",
        category: "Images Rendus",
        price: 40,
        image: "images/car-22.jpg",
        description: "Rendu 3D"
    },
    {
        id: 23,
        name: "Toyota Tundra",
        category: "images de rendu",
        price: 50,
        image: "images/car-23.jpg",
        description: "Rendu 3D"
    },
    {
        id: 24,
        name: "BMW M4 COMPETITION",
        category: "Les Rendus Gratuites",
        price: 0,
        image: "images/car-24.jpg",
        description: "Rendu 3D"
    },
    {
        id: 25,
        name: "GREAT WALL HAVAL H6",
        category: "Les Rendus Gratuites",
        price: 0,
        image: "images/car-25.jpg",
        description: "Rendu 3D"
    },
    {
        id: 26,
        name: "RANGE ROVER SVR",
        category: "Les Rendus Gratuites",
        price: 0,
        image: "images/car-26.jpg",
        description: "Rendu 3D pro et réaliste"
    }
];

// Panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Charger la galerie sur la page d'accueil
    if (document.querySelector('.gallery-grid')) {
        loadGallery();
        setupFilterButtons();
    }
    
    // Charger le panier sur la page panier
    if (document.getElementById('cart-items')) {
        loadCart();
    }
    
    // Mise à jour du compteur du panier
    updateCartCount();
    
    // Configuration du menu hamburger
    setupHamburgerMenu();
});

// Chargement de la galerie
function loadGallery(filter = 'all') {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('gallery-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}.00</p>
                <div class="purchase-info">
                    Choisissez le rendu qui vous plaît et contactez-nous par e-mail à henrysamjeff288@gmail.com. 
                    Nous vous enverrons le fichier 3D dans différents formats comme SKP. 
                    Si vous voulez seulement le rendu image, nous l'enverrons en haute qualité adaptée à différents profils.
                </div>
                <button class="buy-btn" data-id="${product.id}">Ajouter au panier</button>
            </div>
        `;
        galleryGrid.appendChild(productElement);
    });
    
    // Ajouter les événements aux boutons
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Configuration des boutons de filtre
function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Filtrer la galerie
            const filter = this.getAttribute('data-filter');
            loadGallery(filter);
        });
    });
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur
    updateCartCount();
    
    // Message de confirmation
    alert(`${product.name} a été ajouté au panier!`);
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Charger le panier
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Votre panier est vide</div>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Prix: $${item.price}.00 x ${item.quantity}</p>
            </div>
            <div class="item-total">$${itemTotal}.00</div>
            <button class="remove-btn" data-id="${item.id}">Retirer</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    // Ajouter les événements aux boutons de retrait
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Configuration du menu hamburger
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Gestion du formulaire de contact
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Ici, normalement, vous enverriez ces données à un serveur
        // Pour cette démo, nous affichons simplement un message de confirmation
        alert(`Merci ${name} pour votre message! Nous vous répondrons à ${email} sous peu.`);
        
        // Réinitialiser le formulaire
        this.reset();
    });
}
