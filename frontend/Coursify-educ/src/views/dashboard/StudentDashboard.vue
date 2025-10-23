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

          <!-- User info & Actions -->
          <div class="flex items-center space-x-4">
            <!-- AI Assistant Button -->
            <router-link to="/ai-assistant" class="btn-outline text-sm">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Assistant IA
            </router-link>
            
            <!-- User Profile -->
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">{{ userInitials }}</span>
              </div>
              <span class="text-sm font-medium text-gray-700">{{ user.name }}</span>
            </div>
            
            <!-- Logout -->
            <button @click="logout" class="text-gray-500 hover:text-gray-700 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Bienvenue {{ user.firstName || user.name }} ! 🎉
        </h1>
        <p class="text-gray-600">Prêt à continuer ton apprentissage ?</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Quiz complétés</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.quizzesCompleted }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Points</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.points }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Badges</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.badges }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Niveau</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.level }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - Courses & Resources -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Courses Section -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
                📚 Cours & Ressources
              </h2>
              <button class="text-primary-500 hover:text-primary-600 text-sm font-medium">
                Voir tout
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="course in courses" :key="course.id" class="card-hover p-4">
                <div class="flex items-start space-x-3">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-gray-900 truncate">{{ course.title }}</h3>
                    <p class="text-sm text-gray-600 mb-2">{{ course.subject }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-500">{{ course.duration }}</span>
                      <button class="btn-primary text-xs py-1 px-3">
                        {{ course.type === 'pdf' ? 'Télécharger' : 'Suivre' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quiz & Mini-games Section -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                🎮 Quiz & Mini-jeux
              </h2>
              <button class="text-primary-500 hover:text-primary-600 text-sm font-medium">
                Voir tout
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="quiz in quizzes" :key="quiz.id" class="card-hover p-4">
                <div class="flex items-start space-x-3">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-gray-900 truncate">{{ quiz.title }}</h3>
                    <p class="text-sm text-gray-600 mb-2">{{ quiz.subject }} • {{ quiz.questions }} questions</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-500">{{ quiz.points }} points</span>
                      <button class="btn-primary text-xs py-1 px-3">
                        Commencer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Progress & Profile -->
        <div class="space-y-8">
          <!-- Progress Section -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
              🏆 Progression & Classement
            </h2>
            
            <!-- Progress Bar -->
            <div class="mb-6">
              <div class="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progression du niveau</span>
                <span>{{ progress.currentXP }} / {{ progress.nextLevelXP }} XP</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
              </div>
            </div>

            <!-- Recent Badges -->
            <div class="mb-6">
              <h3 class="font-semibold text-gray-900 mb-3">Badges récents</h3>
              <div class="flex space-x-2">
                <div v-for="badge in recentBadges" :key="badge.id" class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center" :title="badge.name">
                  <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Leaderboard -->
            <div>
              <h3 class="font-semibold text-gray-900 mb-3">Classement</h3>
              <div class="space-y-2">
                <div v-for="(player, index) in leaderboard" :key="player.id" class="flex items-center justify-between p-2 rounded-lg" :class="index < 3 ? 'bg-yellow-50' : 'bg-gray-50'">
                  <div class="flex items-center space-x-3">
                    <span class="text-sm font-medium text-gray-600 w-6">{{ index + 1 }}</span>
                    <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-xs font-medium">{{ player.name.charAt(0) }}</span>
                    </div>
                    <span class="text-sm font-medium text-gray-900">{{ player.name }}</span>
                  </div>
                  <span class="text-sm font-medium text-gray-600">{{ player.points }} pts</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Section -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
              👤 Profil utilisateur
            </h2>
            
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl font-bold">{{ userInitials }}</span>
              </div>
              <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
              <p class="text-sm text-gray-600">Niveau {{ stats.level }}</p>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Quiz complétés</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.quizzesCompleted }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Score moyen</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.averageScore }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Temps d'étude</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.studyTime }}h</span>
              </div>
            </div>

            <button class="btn-outline w-full mt-6">
              Modifier le profil
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({})
const stats = reactive({
  quizzesCompleted: 12,
  points: 2450,
  badges: 8,
  level: 5,
  averageScore: 87,
  studyTime: 24
})

const progress = reactive({
  currentXP: 750,
  nextLevelXP: 1000
})

const courses = ref([
  {
    id: 1,
    title: 'Introduction aux Mathématiques',
    subject: 'Mathématiques',
    duration: '2h 30min',
    type: 'pdf'
  },
  {
    id: 2,
    title: 'Histoire de France - Révolution',
    subject: 'Histoire',
    duration: '1h 45min',
    type: 'video'
  },
  {
    id: 3,
    title: 'Grammaire Française',
    subject: 'Français',
    duration: '3h 15min',
    type: 'pdf'
  },
  {
    id: 4,
    title: 'Sciences Physiques - Optique',
    subject: 'Physique',
    duration: '2h 00min',
    type: 'video'
  }
])

const quizzes = ref([
  {
    id: 1,
    title: 'Quiz Mathématiques - Algèbre',
    subject: 'Mathématiques',
    questions: 15,
    points: 100
  },
  {
    id: 2,
    title: 'Culture Générale',
    subject: 'Général',
    questions: 20,
    points: 150
  },
  {
    id: 3,
    title: 'Histoire - Moyen Âge',
    subject: 'Histoire',
    questions: 12,
    points: 80
  },
  {
    id: 4,
    title: 'Mini-jeu : Calcul Mental',
    subject: 'Mathématiques',
    questions: 10,
    points: 50
  }
])

const recentBadges = ref([
  { id: 1, name: 'Premier Quiz' },
  { id: 2, name: 'Mathématicien' },
  { id: 3, name: 'Persévérant' }
])

const leaderboard = ref([
  { id: 1, name: 'Marie Dubois', points: 3200 },
  { id: 2, name: 'Pierre Martin', points: 3100 },
  { id: 3, name: 'Sophie Leroy', points: 2950 },
  { id: 4, name: user.value.name || 'Vous', points: 2450 },
  { id: 5, name: 'Lucas Moreau', points: 2200 }
])

const userInitials = computed(() => {
  if (!user.value.name) return 'U'
  const names = user.value.name.split(' ')
  return names.map(name => name.charAt(0)).join('').toUpperCase()
})

const progressPercentage = computed(() => {
  return (progress.currentXP / progress.nextLevelXP) * 100
})

const logout = () => {
  localStorage.removeItem('user')
  router.push('/')
}

onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
  } else {
    router.push('/login')
  }
})
</script>

<style scoped>
/* Styles spécifiques au dashboard élève */
</style>
