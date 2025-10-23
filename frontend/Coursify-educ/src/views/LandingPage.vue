<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">COURSIFY-EDUC</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="#accueil" class="text-gray-600 hover:text-primary-500 transition-colors">Accueil</a>
            <a href="#cours" class="text-gray-600 hover:text-primary-500 transition-colors">Cours</a>
            <a href="#quiz" class="text-gray-600 hover:text-primary-500 transition-colors">Quiz</a>
            <a href="#contact" class="text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
          </nav>

          <!-- CTA Button -->
          <div class="flex items-center space-x-4">
            <router-link to="/login" class="btn-primary">
              Se connecter
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="accueil" class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="animate-slide-in-left">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h1 class="text-4xl lg:text-6xl font-bold text-gray-900">COURSIFY-EDUC</h1>
            </div>
            
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Apprendre n'est pas une corvée, mais un voyage passionnant vers la découverte ! 
              Transforme ton apprentissage en aventure ludique et motivante avec nos cours interactifs, 
              quiz amusants et système de récompenses.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/register" class="btn-primary text-center">
                Commencer l'aventure
              </router-link>
              <button class="btn-outline">
                Explorer les quiz
              </button>
            </div>
          </div>

          <!-- Right Illustration -->
          <div class="animate-slide-in-right">
            <div class="relative">
              <div class="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
                <!-- Illustration SVG -->
                <svg class="w-80 h-80" viewBox="0 0 400 400" fill="none">
                  <!-- Seesaw base -->
                  <rect x="50" y="200" width="300" height="8" fill="#374151" rx="4"/>
                  
                  <!-- Person reaching for star -->
                  <circle cx="120" cy="150" r="25" fill="#374151"/>
                  <rect x="110" y="175" width="20" height="60" fill="#374151"/>
                  <rect x="100" y="235" width="15" height="30" fill="#374151"/>
                  <rect x="125" y="235" width="15" height="30" fill="#374151"/>
                  <rect x="105" y="180" width="30" height="15" fill="#374151"/>
                  
                  <!-- Star -->
                  <path d="M200 80 L210 110 L240 110 L215 130 L225 160 L200 140 L175 160 L185 130 L160 110 L190 110 Z" fill="#FCD34D"/>
                  
                  <!-- Books and graduation cap -->
                  <rect x="280" y="180" width="40" height="8" fill="#6B7280"/>
                  <rect x="285" y="188" width="30" height="8" fill="#6B7280"/>
                  <rect x="290" y="196" width="20" height="8" fill="#6B7280"/>
                  
                  <!-- Graduation cap -->
                  <path d="M320 160 L340 160 L335 175 L325 175 Z" fill="#374151"/>
                  <circle cx="330" cy="160" r="3" fill="#FCD34D"/>
                </svg>
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="cours" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">FONCTIONNALITÉS</h2>
          <p class="text-lg text-gray-600">Toutes nos fonctionnalités</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1: Jeux -->
          <div class="card-hover p-8 text-center animate-slide-in-up">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Jeux</h3>
            <p class="text-gray-600 mb-6">Apprends en t'amusant avec nos mini-jeux éducatifs interactifs</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Feature 2: Progression -->
          <div class="card-hover p-8 text-center bg-primary-500 text-white animate-slide-in-up">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Progression</h3>
            <p class="text-white text-opacity-90 mb-6">Suis ton évolution avec des statistiques détaillées et des objectifs</p>
            <a href="#" class="text-white font-medium hover:text-gray-200 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Feature 3: Badges -->
          <div class="card-hover p-8 text-center animate-slide-in-up">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Badges</h3>
            <p class="text-gray-600 mb-6">Collectionne des badges et débloque des récompenses pour tes réussites</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Feature 4: Espace collaboratif -->
          <div class="card-hover p-8 text-center animate-slide-in-up">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Espace collaboratif</h3>
            <p class="text-gray-600 mb-6">Travaille en équipe et partage tes connaissances avec d'autres élèves</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Feature 5: Accompagnement -->
          <div class="card-hover p-8 text-center bg-primary-500 text-white animate-slide-in-up">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Accompagnement</h3>
            <p class="text-white text-opacity-90 mb-6">Bénéficie d'un soutien personnalisé et de conseils d'apprentissage</p>
            <a href="#" class="text-white font-medium hover:text-gray-200 transition-colors">
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section class="py-20 gradient-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8">
              TOUT POUR QUE TU APPRENNES DE LA MEILLEURE MANIÈRE
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-lg">Méthodes d'apprentissage adaptées</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-lg">Contenu de qualité vérifié</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-lg">Suivi personnalisé de ta progression</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-lg">Communauté d'apprenants motivés</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="w-full h-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div class="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">Étudiante motivée</h3>
                  <p class="text-gray-600">Prête à apprendre et réussir !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works Section -->
    <section id="quiz" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">COMMENT ÇA MARCHE ?</h2>
          <p class="text-lg text-gray-600">Commence ton parcours d'apprentissage en 3 étapes simples</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="card-hover p-8 text-center animate-slide-in-up">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-500">01</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Crée ton compte</h3>
            <p class="text-gray-600 mb-6">Inscris-toi gratuitement en quelques secondes</p>
            <a href="#" class="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Step 2 -->
          <div class="card-hover p-8 text-center bg-primary-500 text-white animate-slide-in-up">
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">02</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Choisis ton niveau</h3>
            <p class="text-white text-opacity-90 mb-6">Sélectionne les matières qui t'intéressent</p>
            <a href="#" class="text-white font-medium hover:text-gray-200 transition-colors">
              En savoir plus →
            </a>
          </div>

          <!-- Step 3 -->
          <div class="card-hover p-8 text-center animate-slide-in-up">
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

    <!-- AI Assistant Section -->
    <section class="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Nouveau
        </div>
        
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Assistant IA Intelligent</h2>
        <p class="text-lg text-gray-600 mb-8">
          Posez vos questions et obtenez des réponses instantanées sur tous les sujets
        </p>
        
        <router-link to="/ai-assistant" class="btn-primary inline-flex items-center">
          Essayez l'assistant IA
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Logo and Social -->
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
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Nos cours -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Nos cours</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mathématiques</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sciences</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Histoire</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Langues</a></li>
            </ul>
          </div>

          <!-- Explore -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Explore</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Jeux</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Classements</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Badges</a></li>
            </ul>
          </div>

          <!-- Support -->
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

onMounted(() => {
  // Animation d'entrée pour les éléments
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

  // Observer tous les éléments avec la classe animate-on-scroll
  document.querySelectorAll('.animate-slide-in-up').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Styles spécifiques à la landing page */
</style>
