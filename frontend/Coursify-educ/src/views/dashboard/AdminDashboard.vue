
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
            <!-- Admin Badge -->
            <span class="badge badge-primary">Administrateur</span>
            
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
          Tableau de bord administrateur ⚙️
        </h1>
        <p class="text-gray-600">Gérez la plateforme, les utilisateurs et le contenu</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Utilisateurs totaux</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.totalUsers }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Cours actifs</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.activeCourses }}</p>
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
              <p class="text-sm font-medium text-gray-600">Quiz créés</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.totalQuizzes }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Contenu en attente</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.pendingContent }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - User Management -->
        <div class="lg:col-span-2 space-y-8">
          <!-- User Management -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                👥 Gestion des utilisateurs
              </h2>
              <button class="btn-primary text-sm">
                Ajouter un utilisateur
              </button>
            </div>
            
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <span class="text-white text-xs font-medium">{{ user.name.charAt(0) }}</span>
                        </div>
                        <div class="ml-3">
                          <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                          <div class="text-sm text-gray-500">{{ user.email }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="badge" :class="getRoleBadgeClass(user.role)">
                        {{ getRoleLabel(user.role) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="badge" :class="user.active ? 'badge-success' : 'badge-warning'">
                        {{ user.active ? 'Actif' : 'Inactif' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex space-x-2">
                        <button class="text-primary-600 hover:text-primary-900">Modifier</button>
                        <button class="text-red-600 hover:text-red-900">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Content Management -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
                📚 Gestion des contenus
              </h2>
            </div>
            
            <div class="space-y-4">
              <div v-for="content in pendingContent" :key="content.id" class="p-4 border border-gray-200 rounded-lg">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900">{{ content.title }}</h3>
                    <p class="text-sm text-gray-600 mb-2">{{ content.type }} • {{ content.subject }} • Par {{ content.author }}</p>
                    <p class="text-sm text-gray-500">{{ content.description }}</p>
                  </div>
                  <div class="flex items-center space-x-2 ml-4">
                    <button class="btn-primary text-xs py-1 px-3">
                      Valider
                    </button>
                    <button class="text-red-600 hover:text-red-800 text-xs py-1 px-3">
                      Rejeter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gamification System -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                🏅 Système de progression
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Seuils de points</h3>
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="text-sm text-gray-600">Niveau 1 → 2</span>
                    <span class="font-medium text-gray-900">500 points</span>
                  </div>
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="text-sm text-gray-600">Niveau 2 → 3</span>
                    <span class="font-medium text-gray-900">1000 points</span>
                  </div>
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="text-sm text-gray-600">Niveau 3 → 4</span>
                    <span class="font-medium text-gray-900">1500 points</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Badges disponibles</h3>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">Premier Quiz</p>
                      <p class="text-xs text-gray-600">Compléter 1 quiz</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">Persévérant</p>
                      <p class="text-xs text-gray-600">Compléter 10 quiz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Settings & Analytics -->
        <div class="space-y-8">
          <!-- Platform Settings -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
              ⚙️ Paramètres
            </h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Maintenance mode</span>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Nouveaux utilisateurs</span>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Validation automatique</span>
                <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Global Statistics -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Statistiques globales</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Utilisateurs actifs (7j)</span>
                <span class="text-sm font-medium text-gray-900">{{ globalStats.activeUsers7d }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Quiz complétés (30j)</span>
                <span class="text-sm font-medium text-gray-900">{{ globalStats.quizzesCompleted30d }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Temps d'étude total</span>
                <span class="text-sm font-medium text-gray-900">{{ globalStats.totalStudyTime }}h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Taux de satisfaction</span>
                <span class="text-sm font-medium text-gray-900">{{ globalStats.satisfactionRate }}%</span>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Activité récente</h2>
            
            <div class="space-y-4">
              <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path :d="activity.icon"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-900">{{ activity.description }}</p>
                  <p class="text-xs text-gray-500">{{ activity.time }}</p>
                </div>
              </div>
            </div>
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
  totalUsers: 156,
  activeCourses: 42,
  totalQuizzes: 89,
  pendingContent: 7
})

const globalStats = reactive({
  activeUsers7d: 89,
  quizzesCompleted30d: 1247,
  totalStudyTime: 2847,
  satisfactionRate: 94
})

const users = ref([
  { id: 1, name: 'Marie Dubois', email: 'marie@example.com', role: 'student', active: true },
  { id: 2, name: 'Pierre Martin', email: 'pierre@example.com', role: 'teacher', active: true },
  { id: 3, name: 'Sophie Leroy', email: 'sophie@example.com', role: 'student', active: false },
  { id: 4, name: 'Lucas Moreau', email: 'lucas@example.com', role: 'student', active: true },
  { id: 5, name: 'Admin User', email: 'admin@example.com', role: 'admin', active: true }
])

const pendingContent = ref([
  {
    id: 1,
    title: 'Cours de Physique Quantique',
    type: 'PDF',
    subject: 'Physique',
    author: 'Dr. Einstein',
    description: 'Introduction aux concepts de la physique quantique moderne'
  },
  {
    id: 2,
    title: 'Quiz Histoire de l\'Art',
    type: 'Quiz',
    subject: 'Histoire',
    author: 'Prof. Monet',
    description: 'Quiz sur les mouvements artistiques du 19ème siècle'
  }
])

const recentActivity = ref([
  {
    id: 1,
    description: 'Nouveau cours "Mathématiques Avancées" créé par Prof. Gauss',
    time: 'Il y a 2 heures',
    icon: 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z'
  },
  {
    id: 2,
    description: 'Utilisateur "Marie Dubois" a complété 5 quiz',
    time: 'Il y a 4 heures',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 3,
    description: 'Nouveau badge "Mathématicien" débloqué par 12 utilisateurs',
    time: 'Il y a 6 heures',
    icon: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
  }
])

const userInitials = computed(() => {
  if (!user.value.name) return 'A'
  const names = user.value.name.split(' ')
  return names.map(name => name.charAt(0)).join('').toUpperCase()
})

const getRoleLabel = (role) => {
  const labels = {
    student: 'Élève',
    teacher: 'Enseignant',
    admin: 'Administrateur'
  }
  return labels[role] || role
}

const getRoleBadgeClass = (role) => {
  const classes = {
    student: 'badge-primary',
    teacher: 'badge-success',
    admin: 'badge-warning'
  }
  return classes[role] || 'badge-primary'
}

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
/* Styles spécifiques au dashboard administrateur */
</style>
