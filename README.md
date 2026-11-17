# 🎄 Calendrier de l'Avent Interactif - Grandblaise Leroy

> Calendrier de l'Avent web interactif, festif et responsive aux couleurs de **Grandblaise Leroy** (Spécialiste de la vente de pièces automobiles & fournitures industrielles).

---

## ✨ Fonctionnalités clés

- 🎅 **Ambiance de Noël & Industrie** : Fond beige chaleureux, guirlandes lumineuses clignotantes, sapins décorés, boules oscillantes et paquets cadeaux.
- ⚙️ **24 Surprises ciblées Atelier & Auto** : Petit outillage professionnel (tournevis, cliquets, baladeuse d'inspection LED, manomètres, clés mixtes, pinces) et codes promotionnels exclusifs.
- 🔒 **Règle temporelle stricte** :
  - Seules la case du jour actuel et les cases passées peuvent être ouvertes.
  - Les cases futures sont verrouillées avec notification festive.
- 🛠️ **Mode Développeur / Test intégré** : Barre d'outils escamotable et support des paramètres URL (`?testDate=2026-12-15` ou `?dev=true`) pour tester le calendrier à tout moment.
- 💾 **Sauvegarde Locale (`localStorage`)** : Les cases ouvertes sont mémorisées dans le navigateur de l'utilisateur.
- 🔔 **Animations & Audio** : Tintement festif des clochettes (synthétisé en pur Web Audio API sans fichier externe), flocons de neige et pluie de confettis dorés au Canvas.
- 📋 **Codes Promo en 1 clic** : Bouton « Copier » automatique du code promotionnel dans le presse-papier avec toast de confirmation.

---

## 📁 Arborescence du Projet

```text
├── Cases/                   # Visuels des 24 cases (1.jpg à 24.jpg)
│   ├── 1.jpg
│   ├── ...
│   └── 24.jpg
├── index.html               # Structure HTML5 & modale accessible
├── style.css                # Styles CSS3, 3D, guirlandes & décors festifs
├── script.js                # Logique temporelle, configuration des 24 lots
├── README.md                # Documentation du projet
└── push-github.ps1          # Script de synchronisation automatique vers GitHub
```

---

## 🚀 Utilisation locale

Ouvrez simplement `index.html` dans un navigateur moderne, ou lancez un serveur local rapide :
```powershell
python -m http.server 8080
# Ouvrir ensuite http://localhost:8080
```

---

## 🌐 Déploiement sur www.grandblaise-leroy.fr

Déposez le contenu du dossier sur votre hébergement web (ex. `/public_html/calendrier/` ou `/www/calendrier/`).  
Il sera instantanément accessible via :  
`https://www.grandblaise-leroy.fr/calendrier/`
