<template>
  <div class="login-page">
    <!-- Section Formulaire -->
    <div class="form-section">
      <div class="form-container">
        <!-- En-tête -->
        <header class="login-header">
          <div class="logo-container">
            <div class="logo-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h1 class="logo-text">COURSIFY-EDUC</h1>
          </div>
          
          <h2 class="login-title">Connexion</h2>
          <p class="login-subtitle">
            Connectez-vous à votre compte pour continuer votre apprentissage
          </p>
        </header>

        <!-- Formulaire -->
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email" class="form-label">Adresse email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="form-input"
              placeholder="votre@email.com"
            />
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Mot de passe</label>
            <div class="password-input">
              <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required class="form-input" placeholder="Votre mot de passe"/>
              <div class="password-actions">
                <button type="button" class="toggle-password" @click="showPassword = !showPassword">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" v-model="form.remember" />
              Se souvenir de moi
            </label>

            <router-link to="/forgot-password" class="forgot-password">
              Mot de passe oublié ?
            </router-link>
          </div>

          <!-- Bouton de connexion -->
          <button type="submit" class="login-button":disabled="loading">
            <span v-if="loading" class="loading-spinner">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1zm8.66-14a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 4zM7.67 19.134a1 1 0 0 1-.366 1.366A1 1 0 0 1 6.33 19.8l-1.5-2.598a1 1 0 1 1 1.732-1l1.5 2.598a1 1 0 0 1 .366 1.366zM22 12a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1zm.83-7.134a1 1 0 0 1 1.366-.366l2.598 1.5a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 7.83 4.866zM16.33 19.134a1 1 0 0 1 1.366.366 1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5z"></path>
              </svg>  </span>
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>

          <!-- Lien d'inscription -->
          <p class="register-link">
            Pas encore de compte ?
            <router-link to="/register">
             <span style="color: var(--color-primary)">Créer un compte</span> 
            </router-link>
          </p>
          
          <div class="legal-links">
            <router-link to="/terms">Conditions d'utilisation</router-link>
            <span>•</span>
            <router-link to="/privacy">Politique de confidentialité</router-link>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Section Image -->
    <div class="image-section">
      <img src="@/assets/images/etude.jpg" alt="Ordinateur" class="computer-image"/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)
const showPassword = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const error = ref('')


const handleLogin = async () => {
  loading.value = true
  
  try {
    // Simulation d'une requête API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Déterminer le rôle basé sur l'email
    let role = 'student'
    if (form.email.includes('enseignant')) {
      role = 'teacher'
    } else if (form.email.includes('admin')) {
      role = 'admin'
    }
    
    // Stocker les informations de l'utilisateur
    localStorage.setItem('user', JSON.stringify({
      email: form.email,
      role: role,
      name: form.email.split('@')[0]
    }))
    
    // Rediriger vers le dashboard approprié
    switch (role) {
      case 'student':
        router.push('/student')
        break
      case 'teacher':
        router.push('/teacher')
        break
      case 'admin':
        router.push('/admin')
        break
      default:
        router.push('/student')
    }
  } catch (error) {
    console.error('Erreur de connexion:', error)
    alert('Erreur de connexion. Veuillez réessayer.')
  } finally {
    loading.value = false
  }
}
</script>

<style>
/* Styles pour la page de connexion
.login-page {
  display: flex;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Section du formulaire 
.form-section {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}
 */
/* Section de l'image */
@import "@/assets/css/auth.css";
</style>
