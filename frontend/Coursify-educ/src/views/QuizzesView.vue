<template>
  <div class="min-h-screen bg-gray-50">
    <!-- En-tête -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">Quiz</h1>
          <router-link 
            to="/dashboard" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Retour au tableau de bord
          </router-link>
        </div>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white shadow rounded-lg p-6">
        <div class="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h2 class="mt-2 text-lg font-medium text-gray-900">Section des quiz en préparation</h2>
          <p class="mt-1 text-sm text-gray-500">Cette fonctionnalité sera bientôt disponible.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'QuizzesView',
  setup() {
    return {
      // Vous pouvez ajouter ici la logique pour charger les quiz
    }
  }
}
</script>
