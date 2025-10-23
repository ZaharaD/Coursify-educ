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
          Bonjour {{ user.firstName || user.name }}, prêt à enseigner aujourd'hui ? 👨‍🏫
        </h1>
        <p class="text-gray-600">Gérez vos cours, créez des quiz et suivez les progrès de vos élèves</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Cours créés</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.coursesCreated }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Quiz créés</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.quizzesCreated }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Élèves inscrits</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.studentsEnrolled }}</p>
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
              <p class="text-sm font-medium text-gray-600">Quiz complétés</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.quizzesCompleted }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - Course Management -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Upload Course Section -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                📤 Téléverser un cours
              </h2>
            </div>
            
            <form @submit.prevent="uploadCourse" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Titre du cours</label>
                  <input
                    v-model="newCourse.title"
                    type="text"
                    required
                    class="input-field"
                    placeholder="Ex: Introduction aux Mathématiques"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Matière</label>
                  <select v-model="newCourse.subject" required class="input-field">
                    <option value="">Sélectionner une matière</option>
                    <option value="mathématiques">Mathématiques</option>
                    <option value="français">Français</option>
                    <option value="histoire">Histoire</option>
                    <option value="sciences">Sciences</option>
                    <option value="anglais">Anglais</option>
                    <option value="géographie">Géographie</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  v-model="newCourse.description"
                  rows="3"
                  class="input-field"
                  placeholder="Description du cours..."
                ></textarea>
              </div>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de contenu</label>
                  <select v-model="newCourse.type" required class="input-field">
                    <option value="">Sélectionner le type</option>
                    <option value="pdf">PDF</option>
                    <option value="video">Vidéo</option>
                    <option value="link">Lien externe</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
                  <select v-model="newCourse.level" required class="input-field">
                    <option value="">Sélectionner le niveau</option>
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="avancé">Avancé</option>
                  </select>
                </div>
              </div>
              
              <div v-if="newCourse.type === 'link'">
                <label class="block text-sm font-medium text-gray-700 mb-2">URL du cours</label>
                <input
                  v-model="newCourse.url"
                  type="url"
                  class="input-field"
                  placeholder="https://..."
                />
              </div>
              
              <div v-else>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fichier</label>
                <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-500 transition-colors">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <p class="text-gray-600 mb-2">Glissez-déposez votre fichier ici ou</p>
                  <button type="button" class="btn-outline">
                    Parcourir les fichiers
                  </button>
                </div>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                Téléverser le cours
              </button>
            </form>
          </div>

          <!-- Create Quiz Section -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                🧮 Créer un quiz
              </h2>
            </div>
            
            <form @submit.prevent="createQuiz" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Titre du quiz</label>
                  <input
                    v-model="newQuiz.title"
                    type="text"
                    required
                    class="input-field"
                    placeholder="Ex: Quiz Mathématiques - Algèbre"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Matière</label>
                  <select v-model="newQuiz.subject" required class="input-field">
                    <option value="">Sélectionner une matière</option>
                    <option value="mathématiques">Mathématiques</option>
                    <option value="français">Français</option>
                    <option value="histoire">Histoire</option>
                    <option value="sciences">Sciences</option>
                    <option value="anglais">Anglais</option>
                    <option value="géographie">Géographie</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  v-model="newQuiz.description"
                  rows="2"
                  class="input-field"
                  placeholder="Description du quiz..."
                ></textarea>
              </div>
              
              <div class="grid md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de questions</label>
                  <input
                    v-model="newQuiz.questionCount"
                    type="number"
                    min="1"
                    max="50"
                    required
                    class="input-field"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Points par question</label>
                  <input
                    v-model="newQuiz.pointsPerQuestion"
                    type="number"
                    min="1"
                    required
                    class="input-field"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Durée (minutes)</label>
                  <input
                    v-model="newQuiz.duration"
                    type="number"
                    min="5"
                    class="input-field"
                    placeholder="30"
                  />
                </div>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                Créer le quiz
              </button>
            </form>
          </div>

          <!-- My Courses -->
          <div class="card p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900">Mes cours</h2>
              <button class="text-primary-500 hover:text-primary-600 text-sm font-medium">
                Voir tout
              </button>
            </div>
            
            <div class="space-y-4">
              <div v-for="course in myCourses" :key="course.id" class="card-hover p-4">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900">{{ course.title }}</h3>
                    <p class="text-sm text-gray-600 mb-2">{{ course.subject }} • {{ course.type.toUpperCase() }}</p>
                    <p class="text-sm text-gray-500">{{ course.description }}</p>
                  </div>
                  <div class="flex items-center space-x-2 ml-4">
                    <span class="badge badge-primary">{{ course.level }}</span>
                    <button class="text-gray-400 hover:text-gray-600">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Student Tracking & Profile -->
        <div class="space-y-8">
          <!-- Student Tracking -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              📊 Suivi des élèves
            </h2>
            
            <div class="space-y-4">
              <div v-for="student in students" :key="student.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-medium">{{ student.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">{{ student.name }}</p>
                    <p class="text-sm text-gray-600">{{ student.quizzesCompleted }} quiz complétés</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-medium text-gray-900">{{ student.averageScore }}%</p>
                  <p class="text-xs text-gray-600">Score moyen</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Quiz Results -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Résultats récents</h2>
            
            <div class="space-y-4">
              <div v-for="result in recentResults" :key="result.id" class="p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium text-gray-900">{{ result.quizTitle }}</h3>
                  <span class="text-sm text-gray-600">{{ result.date }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">{{ result.studentName }}</span>
                  <span class="font-medium" :class="result.score >= 70 ? 'text-green-600' : 'text-red-600'">
                    {{ result.score }}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Teacher Profile -->
          <div class="card p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
              </svg>
              👤 Profil enseignant
            </h2>
            
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-2xl font-bold">{{ userInitials }}</span>
              </div>
              <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
              <p class="text-sm text-gray-600">{{ user.institution || 'Établissement non renseigné' }}</p>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Cours créés</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.coursesCreated }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Quiz créés</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.quizzesCreated }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Élèves actifs</span>
                <span class="text-sm font-medium text-gray-900">{{ stats.studentsEnrolled }}</span>
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
  coursesCreated: 8,
  quizzesCreated: 15,
  studentsEnrolled: 45,
  quizzesCompleted: 120
})

const newCourse = reactive({
  title: '',
  subject: '',
  description: '',
  type: '',
  level: '',
  url: ''
})

const newQuiz = reactive({
  title: '',
  subject: '',
  description: '',
  questionCount: 10,
  pointsPerQuestion: 10,
  duration: 30
})

const myCourses = ref([
  {
    id: 1,
    title: 'Introduction aux Mathématiques',
    subject: 'Mathématiques',
    description: 'Cours d\'introduction aux concepts de base des mathématiques',
    type: 'pdf',
    level: 'Débutant'
  },
  {
    id: 2,
    title: 'Histoire de France - Révolution',
    subject: 'Histoire',
    description: 'Étude approfondie de la Révolution française',
    type: 'video',
    level: 'Intermédiaire'
  },
  {
    id: 3,
    title: 'Grammaire Française',
    subject: 'Français',
    description: 'Règles de grammaire et exercices pratiques',
    type: 'pdf',
    level: 'Débutant'
  }
])

const students = ref([
  { id: 1, name: 'Marie Dubois', quizzesCompleted: 8, averageScore: 87 },
  { id: 2, name: 'Pierre Martin', quizzesCompleted: 6, averageScore: 92 },
  { id: 3, name: 'Sophie Leroy', quizzesCompleted: 10, averageScore: 78 },
  { id: 4, name: 'Lucas Moreau', quizzesCompleted: 5, averageScore: 85 }
])

const recentResults = ref([
  { id: 1, quizTitle: 'Quiz Mathématiques', studentName: 'Marie Dubois', score: 95, date: 'Aujourd\'hui' },
  { id: 2, quizTitle: 'Histoire - Révolution', studentName: 'Pierre Martin', score: 88, date: 'Hier' },
  { id: 3, quizTitle: 'Grammaire Française', studentName: 'Sophie Leroy', score: 72, date: 'Il y a 2 jours' }
])

const userInitials = computed(() => {
  if (!user.value.name) return 'U'
  const names = user.value.name.split(' ')
  return names.map(name => name.charAt(0)).join('').toUpperCase()
})

const uploadCourse = () => {
  // Simulation de l'upload
  console.log('Uploading course:', newCourse)
  
  // Reset form
  Object.keys(newCourse).forEach(key => {
    newCourse[key] = ''
  })
  
  // Show success message
  alert('Cours téléversé avec succès !')
}

const createQuiz = () => {
  // Simulation de la création de quiz
  console.log('Creating quiz:', newQuiz)
  
  // Reset form
  Object.keys(newQuiz).forEach(key => {
    if (key === 'questionCount') newQuiz[key] = 10
    else if (key === 'pointsPerQuestion') newQuiz[key] = 10
    else if (key === 'duration') newQuiz[key] = 30
    else newQuiz[key] = ''
  })
  
  // Show success message
  alert('Quiz créé avec succès !')
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
/* Styles spécifiques au dashboard enseignant */
</style>
