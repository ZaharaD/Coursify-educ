<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="ml-64 flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200 py-1">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-14">
            <!-- Logo et Recherche -->
            <div class="flex-1 flex items-center space-x-6">
              <div class="flex items-center space-x-2">
                <div class="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <span class="text-xl font-bold" style="color: #C52D20">COURSIFY-EDUC</span>
              </div>
              
              <!-- Barre de recherche -->
              <div class="hidden md:flex flex-1 max-w-md">
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Rechercher...">
                </div>
              </div>
              
              <!-- Boutons de navigation -->
              <div class="hidden md:flex space-x-2">
                <router-link to="/games" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM4 10a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm13-1a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2a1 1 0 011-1h1z" />
                  </svg>
                  Jeux
                </router-link>
                <router-link to="/quizzes" class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quiz
                </router-link>
              </div>
            </div>

            <!-- User info & Actions -->
            <div class="flex items-center space-x-4">
              <!-- Bouton de recherche mobile -->
              <button class="md:hidden text-gray-500 hover:text-gray-700">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <!-- Indicateur de série -->
              <div class="flex items-center px-3 py-1 rounded-lg bg-orange-50 border border-orange-100">
                <StreakIndicator />
              </div>
              
              <!-- Bouton Plein écran 
              <button class="text-gray-500 hover:text-gray-700 transition-colors hidden md:block">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>-->
              
              <!-- Bouton d'assistant IA -->
              <router-link to="/ai-assistant" class="hidden md:flex items-center px-3 py-1.5 bg-[#C52D20] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Assistant IA
              </router-link>
              
              <!-- Notification Bell -->
              <NotificationBell />
              
              <!-- User Profile Dropdown -->
              <div class="relative ml-2">
                <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
                  <div class="w-9 h-9 bg-[#C52D20] rounded-full flex items-center justify-center text-white font-medium">
                    {{ userInitials }}
                  </div>
                  <div class="hidden md:flex items-center space-x-2">
                    <span class="text-sm font-medium text-gray-700">{{ user.name }}</span>
                   <!-- <div class="flex items-center text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.215.33-.331.712-.372 1.1-.1.95.25 1.94 1.05 2.8.8.86 1.8 1.4 2.9 1.4.2 0 .4-.02.6-.05.2-.03.4-.1.6-.2.2-.1.3-.25.4-.4.1-.15.2-.35.2-.6 0-.25-.1-.5-.2-.7-.1-.2-.25-.35-.4-.45l-.2-.1c-.2-.1-.4-.15-.6-.15-.3 0-.6.05-.9.15-.3.1-.6.25-.8.45l-.1.1c-.1.1-.2.2-.2.3 0 .1 0 .2.1.3.1.1.2.1.3.1.2 0 .3-.1.4-.2.1-.1.2-.2.3-.2.1 0 .2 0 .3.1.1.1.2.2.2.3 0 .1 0 .2-.1.3-.1.1-.2.2-.3.2-.3.1-.6.1-.9 0-.3-.1-.6-.3-.8-.5-.5-.5-.8-1.2-.8-1.9 0-.3.1-.6.2-.9.1-.3.3-.5.5-.7.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2.3 0 .6 0 .9.1.3.1.5.2.7.4.2.2.3.4.4.6.1.2.2.4.2.6 0 .2-.1.4-.2.6-.1.2-.3.3-.5.4-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4-.1-.2-.3-.4-.3-.6 0-.2 0-.4.1-.6.1-.2.2-.3.4-.4.2-.1.4-.2.6-.2.2 0 .4.1.6.2.2.1.3.2.4.4.1.2.2.4.2.6 0 .2-.1.4-.2.6-.1.2-.3.3-.5.4-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-xs font-bold ml-1">42</span>
                    </div>-->
                  </div>
                  <svg class="hidden md:block h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <!-- Dropdown Menu -->
                <div v-if="isUserMenuOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Mon Profil</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Paramètres</a>
                    <a @click="logout" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer" role="menuitem">
                      Déconnexion
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main content -->
      <main class="flex-1 overflow-y-auto pt-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <!-- Welcome Section -->
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              Bienvenue {{ user.firstName || user.name }} ! 🎉
            </h1>
            <p class="text-gray-600">Prêt à continuer ton apprentissage ?</p>
          </div>

          <!-- Courses Grid Section -->
          <CoursesGrid />
          
          <!-- Rest of your content here -->
          
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import StreakIndicator from '@/components/StreakIndicator.vue'
import { trackActivity } from '@/services/streakService'
import Sidebar from '@/components/layout/Sidebar.vue'
import NotificationBell from '@/components/notifications/NotificationBell.vue'
import CoursesGrid from '@/components/CoursesGrid.vue'

export default {
  name: 'StudentDashboard',
  components: {
    Sidebar,
    NotificationBell,
    CoursesGrid,
    StreakIndicator
  },
  setup() {
    const router = useRouter()
    const user = ref({ name: 'Utilisateur Test' }) // Valeur par défaut pour les tests
    const isUserMenuOpen = ref(false)
    
    const userInitials = computed(() => {
      if (!user.value.name) return 'US'
      return user.value.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    })
    
    const toggleUserMenu = () => {
      isUserMenuOpen.value = !isUserMenuOpen.value
    }
    
    // Fermer le menu quand on clique ailleurs
    const handleClickOutside = (event) => {
      const userMenu = document.querySelector('.user-menu-container')
      if (userMenu && !userMenu.contains(event.target)) {
        isUserMenuOpen.value = false
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })
    
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    const stats = reactive({
      quizzesCompleted: 12,
      points: 2450,
      badges: 8,
      level: 5,
      averageScore: 87,
      studyTime: 24
    })

    const logout = () => {
      // Logout logic here
      router.push('/login')
    }

    onMounted(() => {
      const userData = localStorage.getItem('user')
      if (userData) {
        user.value = JSON.parse(userData)
      }
    })

    return {
      user,
      userInitials,
      isUserMenuOpen,
      toggleUserMenu,
      stats,
      logout
    }
  }
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
