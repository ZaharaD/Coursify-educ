<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Initialisation de l'application
  console.log('Coursify-educ app initialized')
})
</script>

<style>
/* Styles globaux déjà définis dans style.css */
</style>
