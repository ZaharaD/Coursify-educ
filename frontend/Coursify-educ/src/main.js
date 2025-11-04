import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import LandingPage from './views/LandingPage.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import StudentDashboard from './views/dashboard/StudentDashboard.vue'
import TeacherDashboard from './views/dashboard/TeacherDashboard.vue'
import AdminDashboard from './views/dashboard/AdminDashboard.vue'
import AIAssistant from './views/AIAssistant.vue'
import TestPage from './views/TestPage.vue'
import QuizzesView from './views/QuizzesView.vue'

// Composants pour les pages statiques
const TermsOfService = { template: '<div class="container"><h1>Conditions d\'utilisation</h1><p>Contenu des conditions d\'utilisation à compléter.</p></div>' }
const PrivacyPolicy = { template: '<div class="container"><h1>Politique de confidentialité</h1><p>Contenu de la politique de confidentialité à compléter.</p></div>' }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student',
    name: 'StudentDashboard',
    component: StudentDashboard
  },
  {
    path: '/teacher',
    name: 'TeacherDashboard',
    component: TeacherDashboard
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/ai-assistant',
    name: 'AIAssistant',
    component: AIAssistant
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsOfService,
    meta: { title: 'Conditions d\'utilisation' }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPolicy,
    meta: { title: 'Politique de confidentialité' }
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: QuizzesView,
    meta: { title: 'Quiz' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')