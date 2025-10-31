<template>
  <div class="landing-page">
    <header class="header">
      <div class="header-container">
       
        <a href="#" class="logo">
          <div class="logo-icon">
            <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          <span>COURSIFY-EDUC</span>
        </a>

        
        <nav class="nav">
          <a href="#accueil" class="nav-link">Accueil</a>
          <a href="#cours" class="nav-link">Cours</a>
          <a href="#quiz" class="nav-link">Quiz</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="auth-buttons">
          <router-link to="/login" class="btn btn-outline">
            Connexion
          </router-link>
          <router-link to="/register" class="btn btn-primary">
            S'inscrire
          </router-link>
        </div>
      </div>
    </header>

    
    <section id="accueil" class="hero">
      <div class="container">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">COURSIFY-EDUC</h1>
            
            <p class="hero-text">
              Apprendre n'est pas une corvée, mais un voyage passionnant vers la découverte ! 
              Transforme ton apprentissage en aventure ludique et motivante avec nos cours interactifs, 
              quiz amusants et système de récompenses.
            </p>
            
            <div class="hero-buttons">
              <router-link to="/register" class="btn btn-primary">
                Commencer l'aventure
              </router-link>
              <a href="#cours" class="btn btn-outline">
                Découvrir plus
                <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="hero-illustration">
            <div class="hero-image-container">
              <div class="hero-image-bg"></div>
              <img src="@/assets/images/etudiant.png" alt="Étudiant heureux" class="hero-image" loading="lazy">
            </div>               
          </div>
        </div>
      </div>
    </section>

    <section id="cours" class="features">
      <div class="container">
        <div class="section-title">
          <h2>FONCTIONNALITÉS</h2>
          <p>Toutes nos fonctionnalités</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/console.png" alt="Jeux éducatifs" class="icon-img">
              </div>
            </div>
            <h3>Jeux Éducatifs</h3>
            <p>Apprends en t'amusant avec nos jeux éducatifs interactifs.</p>
            <a href="#" class="feature-link">
              En savoir plus
            </a>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/success.png" alt="Suivi de progression" class="icon-img">
              </div>
            </div>
            <h3>Suivi de Progression</h3>
            <p>Visualise tes progrès et tes résultats en temps réel.</p>
            <a href="#" class="feature-link">
              En savoir plus
            </a>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/checklist.png" alt="Quiz interactifs" class="icon-img">
              </div>
            </div>
            <h3>Quiz Interactifs</h3>
            <p>Teste tes connaissances avec nos quiz variés et amusants.</p>
            <a href="#" class="feature-link">
              En savoir plus
            </a>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/collaboration.png" alt="Espace collaboratif" class="icon-img">
              </div>
            </div>
            <h3>Espace collaboratif</h3>
            <p>Échange avec d'autres apprenants et partage tes connaissances.</p>
            <a href="#" class="feature-link">
              En savoir plus
            </a>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/dialog.png" alt="Accompagnement" class="icon-img">
              </div>
            </div>
            <h3>Accompagnement</h3>
            <p>Bénéficie d'un soutien personnalisé pour ta réussite.</p>
            <a href="#" class="feature-link">
              En savoir plus
            </a>
          </div>

          <div class="feature-card ai">
            <div class="feature-icon">
              <div class="icon-bg">
                <img src="@/assets/images/microchip.png" alt="Assistant IA" class="icon-img">
              </div>
            </div>
            <h3>Assistant IA</h3>
            <p>Pose tes questions et obtiens des réponses personnalisées.</p>
            <a href="#" class="feature-link">
              Discuter avec l'IA
            </a>
          </div>
        </div>
      </div>
    </section>

 <section class="learning-section">
    <div class="learning-container">
      <h2 class="learning-title"> TOUT POUR QUE TU <br /> APPRENNES DE LA MEILLEUR <br /> MANIÈRE </h2>

      <div class="learning-features">
        <div class="learning-feature">
          <span class="learning-bullet"></span>
          <div>
            <h3 class="learning-feature-title">Méthodes d'apprentissage adaptées</h3>
            <p class="learning-feature-text">Des techniques d'étude personnalisées pour toi</p>
          </div>
        </div>

        <div class="learning-feature">
          <span class="learning-bullet"></span>
          <div>
            <h3 class="learning-feature-title">Contenu de qualité vérifié</h3>
            <p class="learning-feature-text">Des ressources fiables et à jour</p>
          </div>
        </div>

        <div class="learning-feature">
          <span class="learning-bullet"></span>
          <div>
            <h3 class="learning-feature-title">Suivi personnalisé</h3>
            <p class="learning-feature-text">Tes progrès suivis en temps réel</p>
          </div>
        </div>

        <div class="learning-feature">
          <span class="learning-bullet"></span>
          <div>
            <h3 class="learning-feature-title">Communauté active</h3>
            <p class="learning-feature-text">Échange avec d'autres apprenants</p>
          </div>
        </div>
      </div>
    </div>

    <div class="learning-image-container">
      <img src="@/assets/images/etudiante.png" alt="Enfant avec sac à dos" class="sec-apprenti__image"/>
    </div>
  </section>

    <section id="quiz" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">COMMENT ÇA MARCHE ?</h2>
          <p class="text-lg text-gray-600">Commence ton parcours d'apprentissage en 3 étapes simples</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="card-hover p-8 text-center animate-slide-in-up rounded-2xl">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-500">01</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Crée ton compte</h3>
            <p class="text-gray-600 mb-6">Inscris-toi gratuitement en quelques secondes</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>

          <div class="card-hover p-8 text-center bg-primary-500 text-white animate-slide-in-up rounded-2xl">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">02</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Choisis ton niveau</h3>
            <p class="text-white text-opacity-90 mb-6">Sélectionne les matières qui t'intéressent</p>
            <a href="#" class="text-white font-medium hover:text-gray-200 transition-colors">
              En savoir plus →
            </a>
          </div>

          <div class="card-hover p-8 text-center animate-slide-in-up rounded-2xl">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-500">03</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Commence à apprendre</h3>
            <p class="text-gray-600 mb-6">Gagne tes premiers quiz et accumule des points</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="ia-assistant">
      <div class="ia-container">
        <div class="ia-badge">
          <svg class="ia-badge-icon" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Nouveau
        </div>
        
        <h2 class="ia-title">Assistant IA Intelligent</h2>
        <p class="ia-description">
          Posez vos questions et obtenez des réponses instantanées sur tous les sujets
        </p>
        
        <router-link to="/ai-assistant" class="ia-button">
          Essayez l'assistant IA
          <svg class="ia-button-icon" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </router-link>
      </div>
    </section>

    <footer id="contact" class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-1">
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <span class="text-xl font-bold">Coursify-educ</span>
            </div>
            
            <div class="flex space-x-4">
              <div class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </div>
              <div class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
          </div>

          
          <div>
            <h3 class="text-lg font-semibold mb-6">Nos cours</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mathématiques</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sciences</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Histoire</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Langues</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-6">Explore</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Jeux</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Classements</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Badges</a></li>
            </ul>
          </div>

           
          <div>
            <h3 class="text-lg font-semibold mb-6">Support</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p class="text-gray-400">&copy; 2024 Coursify-educ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
 </div>
</template>

<script setup>

import { onMounted } from 'vue'
import '@/assets/css/landing.css'

// Importer les images directement
import checklistImg from '../assets/images/checklist.png'
import consoleImg from '../assets/images/console.png'
import dialogImg from '../assets/images/dialog.png'
import collaborationImg from '../assets/images/collaboration.png'

onMounted(() => {
 
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in-up')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-slide-in-up').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style>

</style>
