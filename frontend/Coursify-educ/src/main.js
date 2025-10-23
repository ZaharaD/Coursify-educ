import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import des composants de pages
import LandingPage from './views/LandingPage.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import StudentDashboard from './views/dashboard/StudentDashboard.vue'
import TeacherDashboard from './views/dashboard/TeacherDashboard.vue'
import AdminDashboard from './views/dashboard/AdminDashboard.vue'
import AIAssistant from './views/AIAssistant.vue'
import TestPage from './views/TestPage.vue'

// Configuration des routes
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')