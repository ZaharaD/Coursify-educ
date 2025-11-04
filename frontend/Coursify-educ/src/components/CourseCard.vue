<template>
  <div class="relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100" 
       :style="{ '--card-color': course.color || '#C52D20' }">
    <!-- Badge Nouveau -->
    <div v-if="course.isNew" class="absolute top-3 right-3 z-10 rounded-full px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 shadow-sm">
      Nouveau
    </div>
    
    <!-- Bannière avec couleur dynamique -->
    <div class="relative h-32 flex items-center justify-center overflow-hidden" 
         :style="{ backgroundColor: course.color || '#C52D20', backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)' }">
      <!-- Icône du cours -->
      <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg" 
           :style="{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.1)' }">
        <slot name="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 20.477 5.754 20 7.5 20s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 20.477 18.247 20 16.5 20c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </slot>
      </div>
      
      <!-- Espace pour l'alignement -->
      <div class="absolute -bottom-4 right-4 w-16"></div>
    </div>
    
    <!-- Contenu de la carte -->
    <div class="p-5">
      <!-- En-tête avec titre et catégorie -->
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-lg font-semibold text-gray-900" style="display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          {{ course.title }}
        </h3>
        <span class="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg whitespace-nowrap ml-2">
          {{ course.category }}
        </span>
      </div>
      
      <!-- Description -->
      <p class="text-sm text-gray-600 my-3" style="display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.5rem;">
        {{ course.description }}
      </p>
      
      <!-- Métadonnées sur une seule ligne -->
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-sm text-gray-600">
        <div class="flex items-center space-x-1">
          <span class="font-medium" :style="{ color: course.color || '#C52D20' }">{{ course.progress || 0 }}%</span>
          <span class="mx-1">•</span>
          <span>{{ course.lessons }} leçons</span>
          <span class="mx-1">•</span>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ course.duration }}
          </div>
        </div>
      </div>
      
      <!-- Bouton continuer en grand -->
      <button class="w-full mt-4 py-3 rounded-lg text-base font-medium text-white transition-all duration-200 flex items-center justify-center hover:opacity-90" 
              :style="{ backgroundColor: course.color || '#C52D20' }"
              @click="$emit('continue-course', course)">
        Continuer le cours
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import ProgressChart from './charts/ProgressChart.vue';

export default {
  name: 'CourseCard',
  components: {
    ProgressChart
  },
  props: {
    course: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        title: 'Titre du cours',
        description: 'Description du cours',
        category: 'Catégorie',
        progress: 0,
        duration: '0h 00min',
        lessons: 0,
        color: '#C52D20',
        isNew: false
      })
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques pour le composant ProgressChart */
.compact-progress :deep(.progress-bar) {
  margin-bottom: 0.5rem;
}

.compact-progress :deep(.progress-text) {
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.compact-progress :deep(.chart-header) {
  margin-bottom: 0.5rem;
}

.compact-progress :deep(.chart-title) {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
