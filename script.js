/**
 * ==============================================================================
 * CALENDRIER DE L'AVENT INTERACTIF - GRANDBLAISE LEROY – SCHOETTLÉ
 * Pièces Automobiles, Outillage Professionnel & Fourniture Industrielle
 * Textes officiels issus de calendar.txt
 * ==============================================================================
 */

// --- CONFIGURATION GÉNÉRALE ---
const CONFIG = {
  // Activer ou désactiver la barre d'outils de test (true = visible, false = cachée)
  SHOW_DEV_TOOLBAR: true,

  // Clé pour le stockage dans le navigateur
  STORAGE_KEY: 'grandblaise_advent_opened_v3',

  // Année cible (2026)
  TARGET_YEAR: 2026,

  // Mois cible (11 = Décembre en JS car 0 = Janvier)
  TARGET_MONTH: 11
};

/**
 * ==============================================================================
 * CONFIGURATION CENTRALISÉE DES 24 SURPRISES (calendar.txt)
 * Chaque jour contient son message officiel, son badge et son icône festive.
 * Aucune dépendance aux images externes du dossier Cases.
 * ==============================================================================
 */
const adventGifts = [
  {
    day: 1,
    title: "Gamme d'Entretien SHINE",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Entretien Auto",
    badge: "Cadeau Offert",
    icon: "🧽",
    description: "Dès 50 € d'achats sur toute la gamme d'entretien SHINE, une microfibre offerte.",
    promoCode: "SHINE-NOEL",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 2,
    title: "Pack Dégivrant & Lave-Glace",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Hiver & Visibilité",
    badge: "Pack Promo 8,99 €",
    icon: "❄️",
    description: "Offre promotionnelle dégivrant et lave-glace : le pack à 8,99 € TTC.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 3,
    title: "Éclairage d'Atelier ISOTECH",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Éclairage Pro",
    badge: "Remise -20%",
    icon: "💡",
    description: "20 % de remise sur une sélection d'éclairage ISOTECH (petites, grandes et moyennes baladeuses, frontales, projecteurs, lampes de capot, mini-projecteurs LED, lampes stylo).",
    promoCode: "ISOTECH-20",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 4,
    title: "Sélection LEVEROK",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Fidélité & Outillage",
    badge: "20% en Cagnotte",
    icon: "🪙",
    description: "20 % sur votre cagnotte dès 3 produits LEVEROK du catalogue achetés.",
    promoCode: "LEVEROK-CAGNOTTE",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 5,
    title: "Boîte à Outils LEVEROK",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Jeu Concours",
    badge: "Jeu Concours 🎁",
    icon: "🧰",
    description: "Jeu concours : devinez le prix et remportez la boîte à outils LEVEROK (Réf. LRKOUT-BAO).",
    promoCode: null,
    linkText: "Participer au jeu en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 6,
    title: "Set de Tournevis LEVEROK",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Jeu Concours Saint-Nicolas",
    badge: "Saint-Nicolas 🎁",
    icon: "🪛",
    description: "Jeu concours : remportez le set de tournevis LEVEROK (Réf. LRKOUT-TRNVS8).",
    promoCode: null,
    linkText: "Participer au jeu en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 7,
    title: "Rénovation d'Optiques de Phares",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Rénovation Optique",
    badge: "Offre Spéciale",
    icon: "✨",
    description: "Offre commerciale sur la rénovation d'optiques de phares Holts & Autobest + polisseuse LEVEROK.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 8,
    title: "Éclairage Automobile OSRAM",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Éclairage Véhicule",
    badge: "Offre Commerciale",
    icon: "🚘",
    description: "Offre commerciale sur l'éclairage automobile OSRAM (Réfs. CLKH1H7, CLKH4, CLKH7).",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 9,
    title: "Compresseurs ISOTECH",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Équipement Atelier",
    badge: "40 € à 50 € Cagnotte",
    icon: "⚙️",
    description: "De 40 € à 50 € reversés en cagnotte sur une sélection de compresseurs ISOTECH.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 10,
    title: "Batteries & Équipements de Démarrage",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Énergie & Démarrage",
    badge: "Offres Spéciales",
    icon: "🔋",
    description: "Plusieurs offres commerciales sur une sélection de batteries, chargeurs et équipements de démarrage (hors alternateurs).",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 11,
    title: "Mallettes ISOTECH",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Rangement & Outillage",
    badge: "20 € en Cagnotte",
    icon: "💼",
    description: "20 € de cagnotte sur les mallettes ISOTECH.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 12,
    title: "Lampe d'Inspection CLAS",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Jeu Concours",
    badge: "Jeu Concours 🎁",
    icon: "🔦",
    description: "Jeu concours : remportez la lampe CLAS (Réf. CLEOE 0145BL).",
    promoCode: null,
    linkText: "Participer au jeu en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 13,
    title: "Mini-Coffret à Cliquet CLAS",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Jeu Concours",
    badge: "Jeu Concours 🎁",
    icon: "🔧",
    description: "Jeu concours : devinez le prix et remportez le mini-coffret à cliquet CLAS (Réf. CLEOS 1050).",
    promoCode: null,
    linkText: "Participer au jeu en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 14,
    title: "Les Indispensables DEWALT",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Électroportatif Pro",
    badge: "Remise Immédiate",
    icon: "⚡",
    description: "Remise immédiate sur les indispensables de l'outillage DEWALT.",
    promoCode: "DEWALT-IMMEDIAT",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 15,
    title: "Lot de Bombes de Dégraissant Pro",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Maintenance & Chimie",
    badge: "Le Pack à 24,90 €",
    icon: "🧴",
    description: "Promotion sur un lot de deux bombes de dégraissant : 24,90 € TTC.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 16,
    title: "Gamme LMA (FACOM)",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Vêtements & Équipements Pro",
    badge: "Remise -20%",
    icon: "🦺",
    description: "20 % de remise sur la gamme LMA (FACOM).",
    promoCode: "FACOM-LMA20",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 17,
    title: "Opération Bons d'Achat",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Tous Rayons Confondus",
    badge: "15 € Offerts par 100 €",
    icon: "🎟️",
    description: "15 € offerts tous les 100 € d'achat (tous rayons confondus).",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 18,
    title: "Offre Système de Freinage",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Sécurité & Freinage",
    badge: "Plaquettes Offertes !",
    icon: "🛑",
    description: "Offre commerciale : pour l'achat de disques de frein, les plaquettes de frein BOSCH / ISOTECH sont offertes.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 19,
    title: "Garage pour Enfants BOSCH",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Jeu Concours Famille",
    badge: "Jeu Concours 🎁",
    icon: "🏎️",
    description: "Jeu concours : remportez un garage pour enfants BOSCH.",
    promoCode: null,
    linkText: "Participer au jeu en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 20,
    title: "Bon d'Achat Privilège",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Privilège de Noël",
    badge: "Bon Offert",
    icon: "🎁",
    description: "1 bon d'achat offert.",
    promoCode: "CADEAU-NOEL20",
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 21,
    title: "Consommables de Bricolage",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Consommables Atelier",
    badge: "Promotion Fêtes",
    icon: "🔩",
    description: "Promotion sur une sélection de consommables de bricolage FACOM, Estéban et Occon.",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 22,
    title: "Accessoires & Outillage CLAS",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Outillage Spécialisé",
    badge: "10% en Cagnotte",
    icon: "🛠️",
    description: "10 % en cagnotte dès 100 € d'achat sur une large sélection d'accessoires CLAS (clés à choc, clés dynamométriques, jeux de douilles, coffrets à cliquet, etc.).",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 23,
    title: "Sélection LEVEROK & Grand Tirage",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Cagnotte & Tirage au Sort",
    badge: "J-1 Avant Noël",
    icon: "🌟",
    description: "20 % de cagnotte à partir de 3 articles LEVEROK achetés + tirage au sort pour préparer le grand cadeau de demain (24 décembre) !",
    promoCode: null,
    linkText: "En savoir plus en magasin & atelier",
    linkUrl: "https://www.grandblaise-leroy.fr"
  },
  {
    day: 24,
    title: "Le Grand Tirage au Sort du Réveillon",
    subtitle: "Grandblaise Leroy – Schoettlé",
    category: "Prestige Réveillon de Noël",
    badge: "Grand Tirage au Sort 🎄",
    icon: "🧖‍♀️",
    description: "Grand Tirage au Sort : remportez 2 entrées (valables pour 2 personnes) de 3 heures au Spa de Ribeauvillé !",
    promoCode: null,
    linkText: "Découvrir les modalités du tirage au sort",
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

    // Éléments du DOM
    this.grid = document.getElementById('calendarGrid');
    this.statusText = document.getElementById('statusText');
    this.currentYearSpan = document.getElementById('currentYear');
    this.modal = document.getElementById('giftModal');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.toastContainer = document.getElementById('toastContainer');

    // Éléments Modale
    this.modalGiftIcon = document.getElementById('modalGiftIcon');
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
      this.statusText.innerHTML = `Joyeux Noël ! Les 24 cases Grandblaise Leroy – Schoettlé sont disponibles.`;
    } else {
      this.statusText.innerHTML = `Nous sommes le <strong>${activeDay} décembre</strong> : la case ${activeDay} vous attend !`;
    }
  }

  /**
   * Rendu visuel des 24 cases (Design festif sans image externe)
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
          <!-- Face Arrière : Design festif du cadeau révélé -->
          <div class="door-back">
            <span class="door-back-badge">${gift.badge}</span>
            <div class="door-back-icon">${gift.icon || '🎁'}</div>
            <div class="door-back-caption">${gift.title}</div>
          </div>
          <!-- Face Avant : Volet de fête Noël & dorures -->
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
    if (this.modalGiftIcon) {
      this.modalGiftIcon.textContent = gift.icon || '🎁';
    }
    this.modalDayTag.textContent = `Case ${gift.day} Décembre`;
    this.modalBadge.textContent = gift.badge || "Surprise";
    this.modalCategory.textContent = gift.category || "Pièces Auto & Industrie";
    this.modalTitle.textContent = gift.title;
    this.modalSubtitle.textContent = gift.subtitle || "Grandblaise Leroy – Schoettlé";
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

    // Bouton de lien
    if (gift.linkUrl) {
      this.modalLink.href = gift.linkUrl;
      this.modalLinkText.textContent = gift.linkText || "En savoir plus en magasin";
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
