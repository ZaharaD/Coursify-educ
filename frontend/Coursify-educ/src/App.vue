<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { startTracking, stopTracking } from '@/services/activityTracker'

onMounted(() => {
  // Initialisation de l'application
  console.log('Coursify-educ app initialized')
  // Démarrer le suivi d'activité
  startTracking()
})

// Arrêter le suivi lors du démontage du composant
onUnmounted(() => {
  stopTracking()
})
</script>

<style>
/* Styles globaux déjà définis dans style.css */
</style>
