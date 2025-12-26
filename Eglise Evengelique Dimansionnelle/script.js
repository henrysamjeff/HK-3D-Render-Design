// Données des vidéos - À MODIFIER AVEC VOS VIDÉOS
const videos = [
    {
        id: 1,
        title: "Message Profonds de Pasteur Roody Fevry",
        description: "Dans ce message, Pasteur Roody Fevry enseigne la puissant pour ceux qui veulent aller plus loin avec Dieu.",
        duration: "31:52",
        date: "23 Novembre 2025",
        videoFile: "assets/videos/video1.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video1-thumb.jpg" // À REMPLACER
    },
    {
        id: 2,
        title: "La puissance de la louange",
        description: "Découvrez comment la louange authentique peut changer les atmosphères spirituelles et ouvrir des portes que la raison ne peut expliquer. Un temps de bénédiction assuré!",
        duration: "38:15",
        date: "8 octobre 2023",
        videoFile: "assets/videos/video2.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video2-thumb.jpg" // À REMPLACER
    },
    {
        id: 3,
        title: "Vivre dans la grâce",
        description: "Un message profond sur la grâce de Dieu qui nous est offerte gratuitement. Apprenez à recevoir et à vivre dans cette grâce dimensionnelle chaque jour.",
        duration: "52:10",
        date: "1 octobre 2023",
        videoFile: "assets/videos/video3.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video3-thumb.jpg" // À REMPLACER
    },
    {
        id: 4,
        title: "Le pardon libérateur",
        description: "Le pardon n'est pas seulement un commandement, c'est une clé pour notre propre libération. Ce message transformera votre compréhension du pardon.",
        duration: "41:33",
        date: "24 septembre 2023",
        videoFile: "assets/videos/video4.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video4-thumb.jpg" // À REMPLACER
    },
    {
        id: 5,
        title: "Cultiver l'intimité avec Dieu",
        description: "Comment développer une relation personnelle et profonde avec Dieu au milieu du tumulte de la vie quotidienne. Des conseils pratiques pour votre marche spirituelle.",
        duration: "47:05",
        date: "17 septembre 2023",
        videoFile: "assets/videos/video5.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video5-thumb.jpg" // À REMPLACER
    },
    {
        id: 6,
        title: "L'esprit de service",
        description: "Jésus nous a montré l'exemple du service. Découvrez comment servir avec joie dans l'église et dans votre communauté pour manifester l'amour de Christ.",
        duration: "39:48",
        date: "10 septembre 2023",
        videoFile: "assets/videos/video6.mp4", // À REMPLACER
        thumbnail: "assets/thumbnails/video6-thumb.jpg" // À REMPLACER
    }
];

// État des boutons d'action
let buttonStates = {
    like: false,
    dislike: false,
    pray: false
};

// Fonctions principales
document.addEventListener('DOMContentLoaded', function() {
    // Gérer l'intro de 10 secondes
    handleIntro();
    
    // Initialiser la page d'accueil
    initializeHomePage();
    
    // Gérer la navigation
    setupNavigation();
    
    // Gérer la recherche
    setupSearch();
    
    // Gérer les boutons d'action vidéo
    setupVideoActions();
    
    // Gérer le menu mobile
    setupMobileMenu();
});

// Gérer l'intro de 10 secondes
function handleIntro() {
    const introScreen = document.getElementById('intro-screen');
    const introMusic = document.getElementById('intro-music');
    
    // Jouer la musique si disponible
    if (introMusic) {
        introMusic.play().catch(e => {
            console.log("Lecture audio bloquée par le navigateur:", e);
        });
    }
    
    // Cacher l'intro après 10 secondes
    setTimeout(() => {
        introScreen.style.opacity = '0';
        
        // Arrêter la musique
        if (introMusic) {
            introMusic.pause();
            introMusic.currentTime = 0;
        }
        
        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 1000);
    }, 10000); // 10 secondes
}

// Initialiser la page d'accueil avec les vidéos
function initializeHomePage() {
    const videosGrid = document.getElementById('videosGrid');
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
}

// Créer une carte vidéo
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.setAttribute('data-video-id', video.id);
    
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <!-- À REMPLACER PAR VOTRE MINIATURE -->
            <img src="${video.thumbnail}" alt="${video.title}">
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <span>${video.duration}</span> • 
                <span>${video.date}</span>
            </div>
        </div>
    `;
    
    videoCard.addEventListener('click', () => {
        openVideoPlayer(video.id);
    });
    
    return videoCard;
}

// Gérer la navigation entre les pages
function setupNavigation() {
    // Navigation principale
    const navLinks = document.querySelectorAll('.nav-links a, .sidebar-item, .footer-links a, .logo, .user-actions a');
    
    navLinks.forEach(link => {
        if (link.hasAttribute('data-page')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                
                // Gérer le menu mobile
                if (window.innerWidth <= 768) {
                    document.getElementById('navLinks').classList.remove('active');
                }
                
                // Mettre à jour la navigation active
                updateActiveNavigation(pageId);
                
                // Afficher la page demandée
                showPage(pageId);
            });
        }
    });
}

// Mettre à jour la navigation active
function updateActiveNavigation(pageId) {
    // Réinitialiser tous les liens actifs
    document.querySelectorAll('.nav-links a').forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Activer le lien correspondant dans la navigation principale
    const correspondingNavLink = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
    if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
    }
    
    // Activer l'élément correspondant dans la sidebar
    const correspondingSidebarItem = document.querySelector(`.sidebar-item[data-page="${pageId}"]`);
    if (correspondingSidebarItem) {
        correspondingSidebarItem.classList.add('active');
    }
}

// Afficher une page spécifique
function showPage(pageId) {
    // Masquer toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Si c'est la page d'accueil, s'assurer que la grille de vidéos est à jour
        if (pageId === 'home') {
            const videosGrid = document.getElementById('videosGrid');
            if (!videosGrid.hasChildNodes()) {
                initializeHomePage();
            }
        }
        
        // Faire défiler vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Ouvrir le lecteur vidéo
function openVideoPlayer(videoId) {
    const video = videos.find(v => v.id === videoId);
    if (!video) return;
    
    // Mettre à jour le lecteur vidéo
    document.getElementById('videoPlayerTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;
    
    // Créer le lecteur vidéo - À MODIFIER POUR VOS VIDÉOS
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = `
        <video controls width="100%" height="100%">
            <source src="${video.videoFile}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
    `;
    
    // Réinitialiser les boutons d'action
    resetActionButtons();
    
    // Afficher la page du lecteur vidéo
    showPage('video-player');
}

// Gérer la recherche
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Effectuer une recherche
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Si la recherche est vide, réinitialiser la grille
        resetVideoGrid();
        return;
    }
    
    // Filtrer les vidéos
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) || 
        video.description.toLowerCase().includes(searchTerm)
    );
    
    // Afficher les résultats
    displaySearchResults(filteredVideos, searchTerm);
}

// Réinitialiser la grille vidéo
function resetVideoGrid() {
    const videosGrid = document.getElementById('videosGrid');
    videosGrid.innerHTML = '';
    initializeHomePage();
}

// Afficher les résultats de recherche
function displaySearchResults(filteredVideos, searchTerm) {
    const videosGrid = document.getElementById('videosGrid');
    videosGrid.innerHTML = '';
    
    if (filteredVideos.length === 0) {
        videosGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <h3>Aucun résultat trouvé</h3>
                <p>Aucune vidéo ne correspond à votre recherche.</p>
            </div>
        `;
    } else {
        filteredVideos.forEach(video => {
            const videoCard = createVideoCard(video);
            videosGrid.appendChild(videoCard);
        });
        
        // Mettre en surbrillance les termes de recherche
        highlightSearchTerms(searchTerm);
    }
}

// Mettre en surbrillance les termes de recherche
function highlightSearchTerms(searchTerm) {
    const videoTitles = document.querySelectorAll('.video-title');
    
    videoTitles.forEach(title => {
        const originalText = title.textContent;
        const lowerTitle = originalText.toLowerCase();
        
        if (lowerTitle.includes(searchTerm)) {
            const startIndex = lowerTitle.indexOf(searchTerm);
            const endIndex = startIndex + searchTerm.length;
            
            const highlightedText = 
                originalText.substring(0, startIndex) +
                '<mark style="background-color: var(--secondary-color); padding: 2px 0;">' +
                originalText.substring(startIndex, endIndex) +
                '</mark>' +
                originalText.substring(endIndex);
            
            title.innerHTML = highlightedText;
        }
    });
}

// Gérer les boutons d'action vidéo
function setupVideoActions() {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const prayBtn = document.getElementById('prayBtn');
    
    likeBtn.addEventListener('click', function() {
        toggleActionButton('like', this, dislikeBtn);
    });
    
    dislikeBtn.addEventListener('click', function() {
        toggleActionButton('dislike', this, likeBtn);
    });
    
    prayBtn.addEventListener('click', function() {
        togglePrayButton(this);
    });
}

// Basculer l'état d'un bouton d'action
function toggleActionButton(buttonType, button, oppositeButton) {
    if (!buttonStates[buttonType]) {
        button.classList.add('active');
        buttonStates[buttonType] = true;
        
        // Si le bouton opposé était activé, le désactiver
        const oppositeType = buttonType === 'like' ? 'dislike' : 'like';
        if (buttonStates[oppositeType]) {
            oppositeButton.classList.remove('active');
            buttonStates[oppositeType] = false;
        }
    } else {
        button.classList.remove('active');
        buttonStates[buttonType] = false;
    }
}

// Basculer l'état du bouton de prière
function togglePrayButton(button) {
    if (!buttonStates.pray) {
        button.classList.add('active');
        buttonStates.pray = true;
        
        // Afficher une notification
        showPrayerNotification();
    } else {
        button.classList.remove('active');
        buttonStates.pray = false;
    }
}

// Afficher une notification pour la prière
function showPrayerNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'Merci pour votre témoignage ! Dieu vous bénisse.';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1000;
        box-shadow: var(--shadow);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Réinitialiser les boutons d'action
function resetActionButtons() {
    buttonStates = {
        like: false,
        dislike: false,
        pray: false
    };
    
    document.getElementById('likeBtn').classList.remove('active');
    document.getElementById('dislikeBtn').classList.remove('active');
    document.getElementById('prayBtn').classList.remove('active');
}

// Gérer le menu mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu mobile en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target) && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
}

// Ajouter des styles d'animation pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);