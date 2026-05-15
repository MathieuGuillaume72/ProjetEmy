# EMY — Rénovation premium en Sarthe

Site vitrine ultra-premium moderne pour l'entreprise EMY, spécialiste de la rénovation de l'habitat en Sarthe (Le Mans, La Flèche, Sablé-sur-Sarthe…).

## Structure

```
ProjetEmy/
├── index.html              # Page d'accueil
├── pages/
│   ├── isolation.html      # Isolation thermique
│   ├── chauffage.html      # Pompes à chaleur, ballons
│   ├── electricite.html    # Photovoltaïque, VMC, tableau
│   ├── toiture.html        # Toiture & façade
│   ├── realisations.html   # Galerie chantiers
│   ├── tarifs.html         # Tarifs détaillés
│   └── contact.html        # Formulaire & contact
├── assets/
│   ├── css/style.css       # Stylesheet complet
│   ├── js/main.js          # Interactions & animations
│   └── img/                # Réservé visuels locaux
├── robots.txt
└── sitemap.xml
```

## Fonctionnalités

- Design premium moderne (bleu profond + accents teal/vert + touche rose discrète)
- Animations fluides, glassmorphism léger, reveal au scroll
- Menu déroulant complet avec sous-menus
- Formulaire de contact avec préférences (téléphone, rappel, WhatsApp, email)
- Bouton WhatsApp flottant + bouton appel mobile flottant
- SEO local optimisé Sarthe / Le Mans
- Schéma JSON-LD LocalBusiness pour le référencement
- 100 % responsive (mobile, tablette, desktop)
- Tarifs publics et transparents
- 8 pages complètes interconnectées

## Lancer en local

```bash
# Servir avec un serveur statique simple
python3 -m http.server 8000
# puis http://localhost:8000
```

Aucune dépendance, aucun build. HTML/CSS/JS natifs.
