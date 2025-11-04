<template>
  <div class="flex items-center space-x-1">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-6 w-6 text-orange-500" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.332-.441-.616-.972-.8-1.54z" clip-rule="evenodd" />
    </svg>
    <span class="text-sm font-medium text-gray-700">
      {{ currentStreak }}
    </span>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCurrentStreak, updateStreak } from '@/services/streakService';

export default {
  name: 'StreakIndicator',
  // Pas besoin de props pour le moment
  props: {},
  setup() {
    const currentStreak = ref(0);

    onMounted(() => {
      // Mettre à jour la série au chargement
      currentStreak.value = updateStreak();
    });

    return {
      currentStreak
    };
  }
};
</script>
