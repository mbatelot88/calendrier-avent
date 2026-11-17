/**
 * ==============================================================================
 * CALENDRIER DE L'AVENT INTERACTIF - GRANDBLAISE LEROY
 * Pièces Automobiles, Outillage Professionnel & Fourniture Industrielle
 * ==============================================================================
 */

// --- CONFIGURATION GÉNÉRALE ---
const CONFIG = {
  // Activer ou désactiver la barre d'outils de test (true = visible, false = cachée)
  SHOW_DEV_TOOLBAR: true,

  // Clé pour le stockage dans le navigateur
  STORAGE_KEY: 'grandblaise_advent_opened_v2',

  // Année cible (2026)
  TARGET_YEAR: 2026,

  // Mois cible (11 = Décembre en JS car 0 = Janvier)
  TARGET_MONTH: 11
};

/**
 * ==============================================================================
 * CONFIGURATION CENTRALISÉE DES 24 CADEAUX / SURPRISES
 * Thématiques : Petit outillage d'atelier, accessoires auto, codes promos exclusifs
 * Images : ./Cases/1.jpg à ./Cases/24.jpg
 * ==============================================================================
 */
const adventGifts = [
  {
    day: 1,
    title: "Jeu de Tournevis de Précision",
    subtitle: "Atelier & Mécanique Fine",
    category: "Outillage Pro",
    badge: "Cadeau d'Ouverture",
    description: "Le compte à rebours commence ! Recevez un jeu de tournevis de précision avec poignée ergonomique bi-matière pour toutes vos interventions minutieuses.",
    image: "./Cases/1.jpg",
    promoCode: "NOEL-OUTIL10",
    linkText: "Découvrir la gamme Outillage",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 2,
    title: "Offre Système de Freinage",
    subtitle: "Sécurité & Performance",
    category: "Pièces Auto",
    badge: "Code Avantage",
    description: "Profitez de 10% de remise immédiate sur l'ensemble des plaquettes, disques et kits de freinage parmi les plus grandes marques d'équipementiers.",
    image: "./Cases/2.jpg",
    promoCode: "NOEL-FREIN10",
    linkText: "Consulter les pièces de freinage",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 3,
    title: "Lampe d'Inspection LED Rechargeable",
    subtitle: "Éclairage d'Atelier",
    category: "Équipement Pro",
    badge: "Sélection Atelier",
    description: "Ultra-compacte et magnétique, cette baladeuse LED éclaire parfaitement les recoins du compartiment moteur et les zones de maintenance industrielle.",
    image: "./Cases/3.jpg",
    promoCode: null,
    linkText: "Voir l'éclairage d'atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 4,
    title: "Pack Dégivrage & Hivernage Auto",
    subtitle: "Préparation Grand Froid",
    category: "Entretien Auto",
    badge: "Spécial Hiver",
    description: "Spray dégivrant rapide puissant + raclette ergonomique avec gant thermique intégré pour affronter sereinement les matins de gel.",
    image: "./Cases/4.jpg",
    promoCode: "HIVEROAD-FREE",
    linkText: "Découvrir les produits hiver",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 5,
    title: "Clé à Cliquet Compacte 1/4\" 72 Dents",
    subtitle: "Précision & Ergonomie",
    category: "Outillage à Main",
    badge: "Indispensable",
    description: "Angle de reprise de 5° idéal pour les accès difficiles sous capot ou dans les coffrets industriels étroits. Mécanisme haute longévité.",
    image: "./Cases/5.jpg",
    promoCode: null,
    linkText: "Voir les cliquets & douilles",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 6,
    title: "Spécial Saint-Nicolas : -15% Filtration",
    subtitle: "Filtres Huile, Air, Habitacle & Carburant",
    category: "Entretien Moteur",
    badge: "Code Promo Fête",
    description: "En ce jour de fête, assurez la longévité de votre moteur ! Bénéficiez de -15% sur tous les filtres d'origine certifiée.",
    image: "./Cases/6.jpg",
    promoCode: "STNICOLAS-FILTRE",
    linkText: "Sélectionner mes filtres",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 7,
    title: "Testeur Numérique de Liquide de Frein",
    subtitle: "Diagnostic Fiable & Instantané",
    category: "Diagnostic Auto",
    badge: "Contrôle Sécurité",
    description: "Stylo testeur haute précision indiquant en 1 seconde le taux d'humidité présent dans votre liquide de frein DOT3, DOT4 et DOT5.1.",
    image: "./Cases/7.jpg",
    promoCode: null,
    linkText: "Consulter les outils de diagnostic",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 8,
    title: "Gants de Mécanique Haute Résistance",
    subtitle: "Grip & Protection Nitrile",
    category: "Protection EPI",
    badge: "Confort & Sécurité",
    description: "Protection optimale contre les hydrocarbures et graisses avec sensation tactile préservée pour le vissage délicat.",
    image: "./Cases/8.jpg",
    promoCode: null,
    linkText: "Voir les équipements de protection",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 9,
    title: "Spray Nettoyant Freins & Dégraissant Pro",
    subtitle: "Nettoyage Haute Efficacité",
    category: "Chimie & Atelier",
    badge: "Essentiel Atelier",
    description: "Formule active à séchage rapide pour pièces mécaniques, disques, embrayages et chaînes industrielles. Zéro résidu.",
    image: "./Cases/9.jpg",
    promoCode: "CLEAN-BRAKE",
    linkText: "Découvrir la chimie d'atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 10,
    title: "Manomètre de Pression Pneumatique",
    subtitle: "Contrôle Haute Précision",
    category: "Pneumatique",
    badge: "Liaison au Sol",
    description: "Lecture digitale instantanée avec bouton de dégonflage précis pour garantir une tenue de route irréprochable et des économies de carburant.",
    image: "./Cases/10.jpg",
    promoCode: null,
    linkText: "Accessoires pneumatiques",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 11,
    title: "Jeu de Clés Mixtes à Cliquet Chrome Vanadium",
    subtitle: "Robustesse Garantie",
    category: "Outillage Pro",
    badge: "Qualité Pro",
    description: "Le confort d'une fourche classique associé à la rapidité d'un œil à cliquet réversible. Conçu pour un usage intensif quotidien.",
    image: "./Cases/11.jpg",
    promoCode: null,
    linkText: "Voir les jeux de clés",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 12,
    title: "Offre Énergie : -12% sur les Batteries",
    subtitle: "Démarrage & Chargeurs Intelligents",
    category: "Électrique & Batterie",
    badge: "Code Promo",
    description: "Ne craignez plus les baisses de température hivernales ! Profitez de -12% sur les batteries de démarrage VL/VUL et chargeurs d'atelier.",
    image: "./Cases/12.jpg",
    promoCode: "ENERGIE-NOEL12",
    linkText: "Trouver ma batterie",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 13,
    title: "Coffret d'Embouts Spéciaux Sécurité 32 Pièces",
    subtitle: "Torx, Hex, XZN & Spanner",
    category: "Outillage Industrie",
    badge: "Polyvalence",
    description: "Tous les profils d'empreintes indispensables pour le démontage mécanique automobile et la maintenance de machines industrielles.",
    image: "./Cases/13.jpg",
    promoCode: null,
    linkText: "Voir les embouts & coffrets",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 14,
    title: "Kit Microfibres de Lustrage & Finition",
    subtitle: "Détailing & Carrosserie",
    category: "Carrosserie & Soin",
    badge: "Esthétique Auto",
    description: "Microfibres ultra-épaisses sans couture pour l'essuyage des cires, nettoyants carrosserie et vitrages sans aucune micro-rayure.",
    image: "./Cases/14.jpg",
    promoCode: null,
    linkText: "Produits de rénovation",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 15,
    title: "Clé Dynamométrique d'Atelier Précise",
    subtitle: "Serrage au Couple Recommandé",
    category: "Outillage Contrôlé",
    badge: "Haute Précision",
    description: "Pour respecter scrupuleusement les couples de serrage constructeur (roues, culasses, bougies, carters). Certificat d'étalonnage inclus.",
    image: "./Cases/15.jpg",
    promoCode: "TORQUE-PRO",
    linkText: "Découvrir les clés dynamométriques",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 16,
    title: "Aérosol Lubrifiant Dégrippant Multifonction",
    subtitle: "Haute Pénétration & Anticorrosion",
    category: "Fourniture Industrielle",
    badge: "Produit Phare",
    description: "Libère immédiatement les assemblages filetés rouillés, élimine l'humidité et dépose un film protecteur durable contre la corrosion saline.",
    image: "./Cases/16.jpg",
    promoCode: null,
    linkText: "Consulter la fourniture industrielle",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 17,
    title: "Câbles de Démarrage Professionnels 500A",
    subtitle: "Cuivre Renforcé & Pinces Isolées",
    category: "Dépannage & Sécurité",
    badge: "Indispensable Hiver",
    description: "Câbles de 3,5 mètres à forte section pour un démarrage instantané de tous véhicules essence, diesel et utilitaires.",
    image: "./Cases/17.jpg",
    promoCode: null,
    linkText: "Équipements de dépannage",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 18,
    title: "Grande Vente Flash : -20% sur l'Outillage à Main",
    subtitle: "Offre Exclusive Grandblaise Leroy",
    category: "Outillage Pro",
    badge: "Super Promo",
    description: "Bénéficiez de 20% de réduction immédiate sur une large sélection de pinces, clés, tournevis et cliquets des plus grands fabricants.",
    image: "./Cases/18.jpg",
    promoCode: "OUTIL-FLASH20",
    linkText: "Profiter de l'offre flash",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 19,
    title: "Pince Multiprise Entrepassée à Réglage Rapide",
    subtitle: "Bouton Poussoir & Mâchoires Trempées",
    category: "Outillage Industrie",
    badge: "Top Ergonomie",
    description: "Ajustement instantané d'une seule main et auto-blocage sur tubes et écrous. Ne dérape pas et protège les arêtes de vis.",
    image: "./Cases/19.jpg",
    promoCode: null,
    linkText: "Voir les pinces d'atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 20,
    title: "Baladeuse LED Orientable 360° avec Crochet",
    subtitle: "Double Faisceau & Aimant Néodyme",
    category: "Éclairage d'Atelier",
    badge: "J-4 Noël",
    description: "L'éclairage mains-libres parfait pour travailler sous le pont élévateur ou au fond d'une baie moteur sombre.",
    image: "./Cases/20.jpg",
    promoCode: null,
    linkText: "Consulter les lampes atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 21,
    title: "Pince-Étau Mécanicien Forgée",
    subtitle: "Maintien Puissant & Déblocage Rapide",
    category: "Outillage Pro",
    badge: "Force & Précision",
    description: "Idéale pour le serrage, la soudure et le maintien de pièces mécaniques sans forcer. Vis de réglage moletée.",
    image: "./Cases/21.jpg",
    promoCode: null,
    linkText: "Outillage de maintien",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 22,
    title: "Coffret d'Ampoules & Fusibles d'Urgence",
    subtitle: "Conformité Route & Dépannage",
    category: "Éclairage & Sécurité",
    badge: "Kit Sécurité",
    description: "Boîte étanche compartimentée regroupant les ampoules phares H7/H4 et assortiment complet de fusibles à lame standard et mini.",
    image: "./Cases/22.jpg",
    promoCode: null,
    linkText: "Éclairage et signalisation",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 23,
    title: "Offre Exclusive : -15% sur la Fourniture Industrielle",
    subtitle: "Visserie, Roulements, Courroies & Fixations",
    category: "Fourniture Industrie",
    badge: "Spécial Réveillon",
    description: "Pour boucler l'année en beauté, optimisez vos stocks d'atelier avec 15% de remise sur toute la fourniture industrielle Grandblaise Leroy.",
    image: "./Cases/23.jpg",
    promoCode: "INDUSTRIE-NOEL15",
    linkText: "Voir les fournitures industrielles",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 24,
    title: "Le Grand Cadeau de Réveillon !",
    subtitle: "La Grande Surprise Finale Grandblaise Leroy",
    category: "Prestige Noël",
    badge: "Joyeux Noël 🎄",
    description: "Toute l'équipe Grandblaise Leroy vous souhaite un merveilleux Réveillon de Noël ! Profitez aujourd'hui d'un Bon d'Achat exceptionnel ou tentez de remporter notre coffret d'outillage complet de 108 pièces.",
    image: "./Cases/24.jpg",
    promoCode: "NOEL-GRANDBLAISE24",
    linkText: "Découvrir la surprise du 24",
    linkUrl: "https://www.grandblaise-leroy.fr"
  }
];

/**
 * ==============================================================================
 * CLASSE DU CALENDRIER DE L'AVENT
 * ==============================================================================
 */
class AdventCalendar {
  constructor() {
    this.openedDays = this.loadOpenedDays();
    this.currentDate = this.resolveCurrentDate();
    this.isDevUnlockAll = false;

    // DOM Elements
    this.grid = document.getElementById('calendarGrid');
    this.statusText = document.getElementById('statusText');
    this.currentYearSpan = document.getElementById('currentYear');
    this.modal = document.getElementById('giftModal');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.toastContainer = document.getElementById('toastContainer');

    // Éléments Modale
    this.modalImage = document.getElementById('modalImage');
    this.modalDayTag = document.getElementById('modalDayTag');
    this.modalBadge = document.getElementById('modalBadge');
    this.modalCategory = document.getElementById('modalCategory');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalSubtitle = document.getElementById('modalSubtitle');
    this.modalDescription = document.getElementById('modalDescription');
    this.promoBox = document.getElementById('promoBox');
    this.promoCodeText = document.getElementById('promoCodeText');
    this.btnCopyPromo = document.getElementById('btnCopyPromo');
    this.modalLink = document.getElementById('modalLink');
    this.modalLinkText = document.getElementById('modalLinkText');

    // Développeur Toolbar
    this.devToolbar = document.getElementById('devToolbar');
    this.devDateInput = document.getElementById('devDateInput');
    this.devCurrentInfo = document.getElementById('devCurrentInfo');
    this.btnApplyDevDate = document.getElementById('btnApplyDevDate');
    this.btnUnlockAll = document.getElementById('btnUnlockAll');
    this.btnResetStorage = document.getElementById('btnResetStorage');
    this.toggleDevDetails = document.getElementById('toggleDevDetails');

    this.init();
  }

  /**
   * Initialisation générale
   */
  init() {
    if (this.currentYearSpan) {
      this.currentYearSpan.textContent = this.currentDate.getFullYear();
    }
    this.renderHeaderStatus();
    this.renderGrid();
    this.bindEvents();
    this.initSnowCanvas();
    this.initDevToolbar();
  }

  /**
   * Résolution de la date (Date réelle ou simulation via paramètres URL)
   */
  resolveCurrentDate() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Déblocage total avec ?dev=true
    if (urlParams.get('dev') === 'true') {
      this.isDevUnlockAll = true;
    }

    // Date personnalisée : ?testDate=2026-12-15
    const testDateParam = urlParams.get('testDate');
    if (testDateParam) {
      const parsed = new Date(testDateParam + 'T12:00:00');
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }

    // Jour direct : ?day=15
    const dayParam = parseInt(urlParams.get('day'), 10);
    if (!isNaN(dayParam) && dayParam >= 1 && dayParam <= 24) {
      const year = CONFIG.TARGET_YEAR || new Date().getFullYear();
      return new Date(year, CONFIG.TARGET_MONTH, dayParam, 12, 0, 0);
    }

    return new Date();
  }

  /**
   * Calcule le jour de calendrier actif (1 à 24)
   */
  getActiveCalendarDay() {
    if (this.isDevUnlockAll) return 24;

    const month = this.currentDate.getMonth();
    const date = this.currentDate.getDate();

    if (month < CONFIG.TARGET_MONTH) return 0;
    if (month > CONFIG.TARGET_MONTH) return 24;

    return Math.min(date, 24);
  }

  /**
   * Affichage du statut dans l'en-tête
   */
  renderHeaderStatus() {
    const activeDay = this.getActiveCalendarDay();
    const isDecember = this.currentDate.getMonth() === CONFIG.TARGET_MONTH;

    if (this.isDevUnlockAll) {
      this.statusText.innerHTML = `Mode Test : <strong>Toutes les 24 surprises sont débloquées</strong>`;
      return;
    }

    if (!isDecember && activeDay === 0) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formatted = this.currentDate.toLocaleDateString('fr-FR', options);
      this.statusText.innerHTML = `Date actuelle : ${formatted} — <em>Ouverture officielle le 1er décembre !</em>`;
    } else if (activeDay >= 24) {
      this.statusText.innerHTML = `Joyeux Noël ! Les 24 cases Grandblaise Leroy sont disponibles.`;
    } else {
      this.statusText.innerHTML = `Nous sommes le <strong>${activeDay} décembre</strong> : la case ${activeDay} vous attend !`;
    }
  }

  /**
   * Rendu visuel des 24 cases
   */
  renderGrid() {
    this.grid.innerHTML = '';
    const activeDay = this.getActiveCalendarDay();

    adventGifts.forEach((gift) => {
      const isPast = gift.day < activeDay;
      const isToday = gift.day === activeDay;
      const isFuture = gift.day > activeDay;
      const isOpened = this.openedDays.includes(gift.day);

      const door = document.createElement('div');
      door.className = 'calendar-door';
      door.setAttribute('data-day', gift.day);
      door.setAttribute('tabindex', '0');
      door.setAttribute('role', 'button');

      if (isFuture) {
        door.classList.add('is-locked');
        door.setAttribute('aria-label', `Case ${gift.day} - Verrouillée jusqu'au ${gift.day} décembre`);
      } else {
        if (isToday) door.classList.add('is-today');
        if (isOpened) door.classList.add('is-opened');
        door.setAttribute('aria-label', `Case ${gift.day} - ${isOpened ? 'Déjà ouverte' : 'Ouvrir la case'}`);
      }

      door.innerHTML = `
        <div class="door-card">
          <!-- Face Arrière : Visuel du lot/outil/promo -->
          <div class="door-back">
            <img src="${gift.image}" alt="Aperçu ${gift.title}" loading="lazy" onerror="this.src='./Cases/1.jpg'">
            <div class="door-back-caption">${gift.title}</div>
          </div>
          <!-- Face Avant : Volet de fête -->
          <div class="door-front">
            <div class="door-header">
              <span class="door-state-icon"></span>
              <span class="door-motif">⚙️</span>
            </div>
            <div class="door-number">${gift.day}</div>
            <div class="door-footer">
              <span class="door-tag">${isToday ? "Aujourd'hui" : (isFuture ? "À venir" : "Décembre")}</span>
            </div>
          </div>
        </div>
      `;

      door.addEventListener('click', () => this.handleDoorClick(gift, door));
      door.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleDoorClick(gift, door);
        }
      });

      this.grid.appendChild(door);
    });
  }

  /**
   * Clic sur une case
   */
  handleDoorClick(gift, doorElement) {
    const activeDay = this.getActiveCalendarDay();

    // 1. Case Future (Verrouillée)
    if (gift.day > activeDay && !this.isDevUnlockAll) {
      this.playChime(220, 0.15);
      this.showToast(`Patience ! 🎅 Cette surprise s'ouvrira le ${gift.day} décembre.`);
      
      // Animation tremblement
      doorElement.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(-4px)' },
        { transform: 'translateX(4px)' },
        { transform: 'translateX(0)' }
      ], {
        duration: 400,
        easing: 'ease-in-out'
      });
      return;
    }

    // 2. Déjà Ouverte
    if (this.openedDays.includes(gift.day)) {
      this.openModal(gift);
      return;
    }

    // 3. Première ouverture (Aujourd'hui ou passé)
    this.playCelebrationSound();
    doorElement.classList.add('opening');

    setTimeout(() => {
      doorElement.classList.remove('opening');
      doorElement.classList.add('is-opened');
      this.saveOpenedDay(gift.day);
      this.triggerConfetti();
      this.openModal(gift);
    }, 700);
  }

  /**
   * Ouverture de la modale avec détails du lot
   */
  openModal(gift) {
    this.modalImage.src = gift.image;
    this.modalImage.alt = gift.title;
    this.modalDayTag.textContent = `Case ${gift.day} Décembre`;
    this.modalBadge.textContent = gift.badge || "Surprise";
    this.modalCategory.textContent = gift.category || "Pièces & Industrie";
    this.modalTitle.textContent = gift.title;
    this.modalSubtitle.textContent = gift.subtitle || "Grandblaise Leroy";
    this.modalDescription.textContent = gift.description;
    
    // Code promo éventuel
    if (gift.promoCode) {
      this.promoBox.style.display = 'block';
      this.promoCodeText.textContent = gift.promoCode;
      this.currentPromoToCopy = gift.promoCode;
    } else {
      this.promoBox.style.display = 'none';
      this.currentPromoToCopy = null;
    }

    // Bouton de lien externe
    if (gift.linkUrl) {
      this.modalLink.href = gift.linkUrl;
      this.modalLinkText.textContent = gift.linkText || "Profiter de l'offre";
      this.modalLink.style.display = 'inline-flex';
    } else {
      this.modalLink.style.display = 'none';
    }

    this.modal.classList.add('is-active');
    this.modal.setAttribute('aria-hidden', 'false');
    this.modalCloseBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  /**
   * Fermeture modale
   */
  closeModal() {
    this.modal.classList.remove('is-active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Affichage d'un Toast
   */
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🔔</span><span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3800);
  }

  /**
   * LocalStorage
   */
  loadOpenedDays() {
    try {
      const data = localStorage.getItem(CONFIG.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveOpenedDay(day) {
    if (!this.openedDays.includes(day)) {
      this.openedDays.push(day);
      try {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.openedDays));
      } catch (e) {
        console.warn("Erreur d'écriture localStorage :", e);
      }
    }
  }

  resetStorage() {
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    this.openedDays = [];
    this.renderGrid();
    this.updateDevInfo();
    this.showToast("Mémoire du calendrier réinitialisée !");
  }

  /**
   * Synthèse sonore Web Audio API (Tintement de clochettes)
   */
  playChime(frequency = 587.33, duration = 0.4) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Ignoré si restrictions audio
    }
  }

  playCelebrationSound() {
    const notes = [587.33, 739.99, 880.00, 1174.66];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.6);
      }, idx * 110);
    });
  }

  /**
   * Confettis dorés et festifs au Canvas
   */
  triggerConfetti() {
    const canvas = document.getElementById('snowCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#c99326', '#f7d57c', '#a91b1b', '#1b4d32', '#ffffff'];

    for (let i = 0; i < 75; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 240 - 120),
        y: canvas.height / 2 + (Math.random() * 240 - 120),
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14 - 3,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rotation += p.spin;
        p.alpha -= 0.015;

        if (p.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (frame < 80) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }

  /**
   * Flocons de neige délicats (adaptés au fond beige chaud)
   */
  initSnowCanvas() {
    const canvas = document.getElementById('snowCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const flakes = [];
    const count = Math.min(Math.floor(window.innerWidth / 16), 60);

    for (let i = 0; i < count; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.8,
        density: Math.random() * count,
        alpha: Math.random() * 0.6 + 0.25,
        speedY: Math.random() * 1.0 + 0.4,
        speedX: Math.random() * 0.5 - 0.25
      });
    }

    let angle = 0;
    const drawSnow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.01;

      flakes.forEach((f) => {
        f.y += f.speedY;
        f.x += Math.sin(angle + f.density) * 0.5 + f.speedX;

        if (f.y > canvas.height) {
          f.y = -10;
          f.x = Math.random() * canvas.width;
        }
        if (f.x > canvas.width) f.x = 0;
        if (f.x < 0) f.x = canvas.width;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${f.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(drawSnow);
    };

    drawSnow();
  }

  /**
   * Événements
   */
  bindEvents() {
    // Fermeture modale
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('is-active')) {
        this.closeModal();
      }
    });

    // Copie du code promo
    this.btnCopyPromo.addEventListener('click', () => {
      if (this.currentPromoToCopy) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(this.currentPromoToCopy).then(() => {
            this.showToast(`Code promo "${this.currentPromoToCopy}" copié ! 🏷️`);
          }).catch(() => {
            this.showToast(`Code promo : ${this.currentPromoToCopy}`);
          });
        } else {
          this.showToast(`Code promo : ${this.currentPromoToCopy}`);
        }
      }
    });
  }

  /**
   * Boîte à outils développeur
   */
  initDevToolbar() {
    if (!CONFIG.SHOW_DEV_TOOLBAR) {
      if (this.devToolbar) this.devToolbar.style.display = 'none';
      return;
    }

    const yyyy = this.currentDate.getFullYear();
    const mm = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const dd = String(this.currentDate.getDate()).padStart(2, '0');
    this.devDateInput.value = `${yyyy}-${mm}-${dd}`;

    this.updateDevInfo();

    this.btnApplyDevDate.addEventListener('click', () => {
      const val = this.devDateInput.value;
      if (val) {
        this.isDevUnlockAll = false;
        this.currentDate = new Date(val + 'T12:00:00');
        this.renderHeaderStatus();
        this.renderGrid();
        this.updateDevInfo();
        this.showToast(`Date simulée : ${val}`);
      }
    });

    this.btnUnlockAll.addEventListener('click', () => {
      this.isDevUnlockAll = true;
      this.renderHeaderStatus();
      this.renderGrid();
      this.updateDevInfo();
      this.showToast("Mode Test : Toutes les cases débloquées !");
    });

    this.btnResetStorage.addEventListener('click', () => {
      this.resetStorage();
    });

    this.toggleDevDetails.addEventListener('click', () => {
      this.devToolbar.classList.toggle('is-collapsed');
      this.toggleDevDetails.textContent = this.devToolbar.classList.contains('is-collapsed') ? '+' : '−';
    });
  }

  updateDevInfo() {
    const activeDay = this.getActiveCalendarDay();
    this.devCurrentInfo.innerHTML = `
      Actif : <strong>${this.isDevUnlockAll ? "Toutes (24)" : "Jour " + activeDay}</strong> | 
      Cases ouvertes : <strong>${this.openedDays.length} / 24</strong>
    `;
  }
}

// Lancement au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  window.adventCalendar = new AdventCalendar();
});
