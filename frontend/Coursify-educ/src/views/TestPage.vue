<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
        Test Coursify-educ 🎓
      </h1>
      
      <!-- Test des couleurs -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Couleur principale</h2>
          <div class="w-full h-20 bg-primary-500 rounded-lg mb-4"></div>
          <p class="text-sm text-gray-600">#C52D20</p>
        </div>
        
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Bouton primaire</h2>
          <button class="btn-primary">Test Bouton</button>
        </div>
        
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Bouton outline</h2>
          <button class="btn-outline">Test Outline</button>
        </div>
      </div>
      
      <!-- Test des badges -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Badges</h2>
        <div class="flex space-x-4">
          <span class="badge badge-primary">Primaire</span>
          <span class="badge badge-success">Succès</span>
          <span class="badge badge-warning">Avertissement</span>
        </div>
      </div>
      
      <!-- Test des animations -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Animations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-primary-100 rounded-lg animate-slide-in-up">
            <p class="text-center">Slide Up</p>
          </div>
          <div class="p-4 bg-primary-100 rounded-lg animate-slide-in-left">
            <p class="text-center">Slide Left</p>
          </div>
          <div class="p-4 bg-primary-100 rounded-lg animate-slide-in-right">
            <p class="text-center">Slide Right</p>
          </div>
        </div>
      </div>
      
      <!-- Test de la barre de progression -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Barre de progression</h2>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 75%"></div>
        </div>
        <p class="text-sm text-gray-600 mt-2">75% complété</p>
      </div>
      
      <!-- Test du gradient -->
      <div class="card mb-8">
        <h2 class="text-xl font-semibold text-white mb-4">Gradient</h2>
        <div class="gradient-primary p-8 rounded-lg text-center">
          <h3 class="text-2xl font-bold text-white mb-2">Coursify-educ</h3>
          <p class="text-white opacity-90">Plateforme d'apprentissage moderne</p>
        </div>
      </div>
      
      <!-- Navigation de test -->
      <div class="text-center">
        <router-link to="/" class="btn-primary mr-4">
          Retour à l'accueil
        </router-link>
        <router-link to="/login" class="btn-outline">
          Page de connexion
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Test page pour vérifier que les styles fonctionnent
</script>

<style scoped>
/* Styles spécifiques à la page de test */
</style>
