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
            <span class="text-xl font-bold" style="color: #C52D20">COURSIFY-EDUC</span>
          </div>

          <!-- Navigation -->
          <div class="flex items-center space-x-4">
            <router-link to="/student" class="text-gray-600 hover:text-primary-500 transition-colors">
              Retour au dashboard
            </router-link>
            <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span class="text-white text-sm font-medium">{{ userInitials }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Assistant IA Intelligent
        </div>
        
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Posez vos questions et obtenez des réponses instantanées
        </h1>
        <p class="text-lg text-gray-600">
          Votre assistant personnel pour tous vos sujets d'étude
        </p>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button 
          v-for="action in quickActions" 
          :key="action.id"
          @click="selectQuickAction(action)"
          class="card-hover p-4 text-center"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path :d="action.icon"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 text-sm">{{ action.title }}</h3>
        </button>
      </div>

      <!-- Chat Interface -->
      <div class="card p-6">
        <!-- Chat Messages -->
        <div class="h-96 overflow-y-auto mb-6 space-y-4" ref="chatContainer">
          <!-- Welcome Message -->
          <div v-if="messages.length === 0" class="text-center py-8">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Bonjour ! 👋</h3>
            <p class="text-gray-600">Je suis votre assistant IA. Posez-moi n'importe quelle question sur vos cours !</p>
          </div>

          <!-- Messages -->
          <div v-for="message in messages" :key="message.id" class="flex" :class="message.sender === 'user' ? 'justify-end' : 'justify-start'">
            <div class="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl" :class="message.sender === 'user' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-900'">
              <p class="text-sm">{{ message.content }}</p>
              <p class="text-xs mt-1 opacity-70">{{ formatTime(message.timestamp) }}</p>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Form -->
        <form @submit.prevent="sendMessage" class="flex space-x-4">
          <div class="flex-1 relative">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Posez votre question..."
              class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              :disabled="isTyping"
            />
            <button
              type="button"
              @click="clearChat"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              title="Effacer la conversation"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
          <button
            type="submit"
            :disabled="!newMessage.trim() || isTyping"
            class="btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </button>
        </form>
      </div>

      <!-- Features Section -->
      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <div class="card p-6 text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Réponses instantanées</h3>
          <p class="text-sm text-gray-600">Obtenez des réponses rapides et précises à toutes vos questions</p>
        </div>

        <div class="card p-6 text-center">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Tous les sujets</h3>
          <p class="text-sm text-gray-600">Mathématiques, sciences, histoire, langues et bien plus encore</p>
        </div>

        <div class="card p-6 text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Explications détaillées</h3>
          <p class="text-sm text-gray-600">Des explications claires et adaptées à votre niveau</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({})
const newMessage = ref('')
const isTyping = ref(false)
const messages = ref([])
const chatContainer = ref(null)

const quickActions = ref([
  {
    id: 1,
    title: 'Aide en Maths',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    id: 2,
    title: 'Explication',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 3,
    title: 'Résumé',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 4,
    title: 'Quiz',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

const userInitials = computed(() => {
  if (!user.value.name) return 'U'
  const names = user.value.name.split(' ')
  return names.map(name => name.charAt(0)).join('').toUpperCase()
})

const selectQuickAction = (action) => {
  const prompts = {
    1: "Peux-tu m'aider avec un problème de mathématiques ?",
    2: "Peux-tu m'expliquer ce concept plus en détail ?",
    3: "Peux-tu me faire un résumé de ce chapitre ?",
    4: "Peux-tu me créer un petit quiz sur ce sujet ?"
  }
  
  newMessage.value = prompts[action.id] || "Peux-tu m'aider ?"
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  const userMessage = {
    id: Date.now(),
    sender: 'user',
    content: newMessage.value,
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  const currentMessage = newMessage.value
  newMessage.value = ''
  isTyping.value = true

  // Scroll to bottom
  await nextTick()
  scrollToBottom()

  // Simulate AI response
  setTimeout(() => {
    const aiResponse = generateAIResponse(currentMessage)
    messages.value.push({
      id: Date.now() + 1,
      sender: 'ai',
      content: aiResponse,
      timestamp: new Date()
    })
    isTyping.value = false
    
    nextTick(() => {
      scrollToBottom()
    })
  }, 1500)
}

const generateAIResponse = (userMessage) => {
  const responses = [
    "Excellente question ! Laissez-moi vous expliquer cela de manière claire et simple...",
    "Je comprends votre question. Voici une explication détaillée qui devrait vous aider...",
    "C'est un concept important ! Permettez-moi de vous donner une explication complète...",
    "Très bonne question ! Voici ce que vous devez savoir sur ce sujet...",
    "Je vais vous expliquer cela étape par étape pour que ce soit bien clair..."
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}

const clearChat = () => {
  messages.value = []
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const formatTime = (timestamp) => {
  return timestamp.toLocaleTimeString('fr-FR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
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
/* Styles spécifiques à l'assistant IA */
</style>
