# Coursify-educ 🎓

Une plateforme web moderne, responsive et ludique destinée à l'éducation interactive. Coursify-educ transforme l'apprentissage en une expérience motivante et engageante grâce à la gamification et à l'intelligence artificielle.

## 🚀 Fonctionnalités

### Pour les Élèves/Étudiants
- **Dashboard personnalisé** avec progression et statistiques
- **Cours interactifs** (PDF, vidéos, liens externes)
- **Quiz et mini-jeux** éducatifs avec feedback immédiat
- **Système de progression** avec points, niveaux et badges
- **Classements** pour motiver l'apprentissage
- **Assistant IA intelligent** pour répondre aux questions

### Pour les Enseignants
- **Upload de cours** (PDF, vidéos, liens)
- **Création de quiz** personnalisés
- **Suivi des élèves** et statistiques détaillées
- **Gestion des contenus** et validation

### Pour les Administrateurs
- **Gestion complète des utilisateurs**
- **Validation des contenus** (cours, quiz)
- **Configuration du système de gamification**
- **Statistiques globales** de la plateforme
- **Paramètres système**

## 🎨 Design

- **Couleur principale** : #C52D20 (rouge vif)
- **Design moderne** avec des éléments arrondis et doux
- **Responsive** pour mobile, tablette et desktop
- **Animations fluides** pour une expérience engageante
- **Interface intuitive** avec navigation claire

## 🛠️ Technologies

- **Frontend** : Vue.js 3 + Composition API
- **Routing** : Vue Router 4
- **Styling** : TailwindCSS
- **Icons** : Heroicons + Lucide Vue
- **Build Tool** : Vite
- **HTTP Client** : Axios

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd Coursify-educ/frontend/Coursify-educ
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

## 🎮 Comptes de démonstration

### Élève
- **Email** : eleve@demo.com
- **Mot de passe** : password

### Enseignant
- **Email** : enseignant@demo.com
- **Mot de passe** : password

### Administrateur
- **Email** : admin@demo.com
- **Mot de passe** : password

## 📱 Pages principales

### 🏠 Page d'accueil (Landing Page)
- Présentation de la plateforme
- Section fonctionnalités
- Témoignages et avantages
- Assistant IA en vedette
- Design inspiré de l'image fournie

### 🔐 Authentification
- **Connexion** avec comptes de démo
- **Inscription** avec choix du rôle
- Interface moderne et sécurisée

### 👨‍🎓 Dashboard Élève
- Accueil personnalisé
- Cours et ressources disponibles
- Quiz et mini-jeux
- Progression et classements
- Profil utilisateur

### 👨‍🏫 Dashboard Enseignant
- Upload de cours
- Création de quiz
- Suivi des élèves
- Statistiques détaillées

### ⚙️ Dashboard Administrateur
- Gestion des utilisateurs
- Validation des contenus
- Configuration de la gamification
- Statistiques globales

### 🤖 Assistant IA
- Chat interactif
- Réponses instantanées
- Actions rapides
- Interface moderne

## 🎯 Système de Gamification

### Points et Niveaux
- Gagner des points en complétant des quiz
- Système de niveaux progressif
- Barre de progression visuelle

### Badges
- Badges automatiques (ex: "Premier Quiz", "Persévérant")
- Collection de récompenses
- Motivation continue

### Classements
- Classement général
- Classement par matière
- Esprit de compétition sain

## 🎨 Composants UI

### Boutons
- `btn-primary` : Bouton principal (rouge)
- `btn-secondary` : Bouton secondaire (blanc)
- `btn-outline` : Bouton avec bordure

### Cards
- `card` : Carte de base
- `card-hover` : Carte avec effet hover

### Badges
- `badge-primary` : Badge principal
- `badge-success` : Badge de succès
- `badge-warning` : Badge d'avertissement

### Progress
- `progress-bar` : Barre de progression
- `progress-fill` : Remplissage de la barre

## 📱 Responsive Design

- **Mobile First** : Optimisé pour les petits écrans
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation adaptative** : Menu hamburger sur mobile
- **Grilles flexibles** : Adaptation automatique du contenu

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
src/
├── views/
│   ├── LandingPage.vue          # Page d'accueil
│   ├── auth/
│   │   ├── Login.vue           # Connexion
│   │   └── Register.vue        # Inscription
│   ├── dashboard/
│   │   ├── StudentDashboard.vue # Dashboard élève
│   │   ├── TeacherDashboard.vue # Dashboard enseignant
│   │   └── AdminDashboard.vue   # Dashboard admin
│   └── AIAssistant.vue         # Assistant IA
├── App.vue                      # Composant principal
├── main.js                      # Point d'entrée
└── style.css                    # Styles globaux
```

## 🎉 Fonctionnalités à venir

- [ ] Intégration backend Laravel
- [ ] Système de notifications
- [ ] Chat en temps réel
- [ ] Mode hors ligne
- [ ] Application mobile
- [ ] Analytics avancées
- [ ] Intégration LMS

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

- **Développement Frontend** : Vue.js + TailwindCSS
- **Design** : Interface moderne et responsive
- **UX/UI** : Expérience utilisateur optimisée

---

**Coursify-educ** - Transformez l'apprentissage en aventure ! 🚀📚