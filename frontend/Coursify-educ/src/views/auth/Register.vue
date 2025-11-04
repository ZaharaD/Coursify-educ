<template>
  <div class="login-page">
    <!-- Section Formulaire -->
    <div class="form-section">
      <div class="login-container">
        <!-- Choix du type de compte -->
        <div v-if="!formStep" class="step-account-type">
          <div class="login-header">
            <h1>Créer un compte</h1>
            <p>Rejoignez notre communauté d'apprentissage</p>
          </div>
          
          <div class="account-type-options">
            <div class="account-type-option" :class="{ 'selected': form.role === 'student' }" @click="selectAccountType('student')">
              <div class="account-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Étudiant</h3>
              <p>Apprendre et suivre des cours</p>
            </div>
            
            <div 
              class="account-type-option"
              :class="{ 'selected': form.role === 'teacher' }"
              @click="selectAccountType('teacher')"
            >
              <div class="account-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Enseignant</h3>
              <p>Créer et partager des cours</p>
            </div>
          </div>
          
          <div class="form-footer">
            <p>Déjà un compte ? <router-link to="/login">Se connecter</router-link></p>
          </div>
        </div>
        
        <!-- Formulaire d'inscription -->
        <form v-else @submit.prevent="handleRegister" class="login-form">
          <div class="form-header">
            <button type="button" class="back-button" @click="formStep = 0" style="background-color: #C52D20 !important; position: relative !important; display: inline-flex !important; margin-bottom: 15px !important; z-index: 10 !important; border: 2px solid white !important; box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Retour</span>
            </button>
            <h2>Créer un compte {{ form.role === 'student' ? 'Étudiant' : 'Enseignant' }}</h2>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label for="firstName" class="form-label">Nom complet</label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="form-input"
                placeholder="Votre nom complet"
              />
            </div>

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

            <!-- Champ spécifique aux étudiants -->
            <div v-if="form.role === 'student'" class="form-group">
              <label for="field" class="form-label">Filière</label>
              <select 
                id="field"
                v-model="form.field"
                required
                class="form-input"
              >
                <option value="" disabled selected>Sélectionnez votre filière</option>
                <option v-for="(field, index) in fields" :key="index" :value="field">{{ field }}</option>
              </select>
            </div>

            <!-- Champ spécifique aux enseignants -->
            <div v-if="form.role === 'teacher'" class="form-group">
              <label for="specialty" class="form-label">Spécialité</label>
              <input
                id="specialty"
                v-model="form.specialty"
                type="text"
                required
                class="form-input"
                placeholder="Votre domaine d'expertise"
              />
              
              <label class="form-label file-upload-label">
                Télécharger votre diplôme (PDF, JPG, PNG)
                <input
                  type="file"
                  @change="handleDiplomaUpload"
                  accept=".pdf,.jpg,.jpeg,.png"
                  class="file-input"
                  required
                />
                <div class="file-upload">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>{{ form.diploma ? form.diploma.name : 'Sélectionner un fichier' }}</span>
                </div>
              </label>
            </div>

            <div class="form-group">
              <label for="password" class="form-label">Mot de passe</label>
              <div class="password-input">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="form-input"
                  placeholder="Votre mot de passe"
                />
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

            <div class="form-group">
              <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="form-input"
                placeholder="Confirmez votre mot de passe"
              />
            </div>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" v-model="form.acceptTerms" required />
                J'accepte les <a href="#">conditions d'utilisation</a>
              </label>
            </div>

            <button type="submit" class="login-button" :disabled="loading">
              <span v-if="loading" class="loading-spinner"></span>
              {{ loading ? 'Création en cours...' : 'Créer mon compte' }}
            </button>

            <p class="login-link">
              Vous avez déjà un compte ?
              <router-link to="/login">Se connecter</router-link>
            </p>
            
            <div class="legal-links">
              <router-link to="/terms">Conditions d'utilisation</router-link>
              <span>•</span>
              <router-link to="/privacy">Politique de confidentialité</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Section Image -->
    <div class="image-section">
      <img src="@/assets/images/etude.jpg" alt="Étudiant" class="computer-image"/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const formStep = ref(0) // 0 = choix du type de compte, 1 = formulaire
const error = ref('')

// Liste des filières disponibles
const fields = [
  'Informatique',
  'Mathématiques',
  'Physique',
  'Chimie',
  'Biologie',
  'Économie',
  'Droit',
  'Lettres',
  'Langues',
  'Autre'
]

const form = reactive({
  role: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  field: '',
  specialty: '',
  diploma: null,
  acceptTerms: false
})

const selectAccountType = (type) => {
  form.role = type
  formStep.value = 1
}

const handleDiplomaUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      error.value = 'Le fichier est trop volumineux (max 5MB)'
      return
    }
    
    // Vérifier le type de fichier
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      error.value = 'Format de fichier non supporté. Utilisez PDF, JPG ou PNG.'
      return
    }
    
    form.diploma = file
    error.value = ''
  }
}

const validateForm = () => {
  // Réinitialiser les erreurs
  error.value = ''
  
  // Validation du mot de passe
  if (form.password.length < 8) {
    error.value = 'Le mot de passe doit contenir au moins 8 caractères'
    return false
  }
  
  if (form.password !== form.confirmPassword) {
    error.value = 'Les mots de passe ne correspondent pas'
    return false
  }
  
  if (!form.acceptTerms) {
    error.value = 'Veuvez accepter les conditions d\'utilisation'
    return false
  }
  
  // Validation spécifique aux étudiants
  if (form.role === 'student' && !form.field) {
    error.value = 'Veuvez sélectionner une filière'
    return false
  }
  
  // Validation spécifique aux enseignants
  if (form.role === 'teacher') {
    if (!form.specialty) {
      error.value = 'Veuvez indiquer votre spécialité'
      return false
    }
    
    if (!form.diploma) {
      error.value = 'Veuvez télécharger une copie de votre diplôme'
      return false
    }
  }
  
  return true
}

const handleRegister = async () => {
  if (!validateForm()) return
  
  try {
    loading.value = true
    
    // Ici, vous pourriez ajouter la logique d'inscription
    // par exemple, un appel à votre API
    const formData = new FormData()
    Object.keys(form).forEach(key => {
      if (key === 'diploma' && form.diploma) {
        formData.append('diploma', form.diploma)
      } else if (key !== 'diploma') {
        formData.append(key, form[key])
      }
    })
    
    // Simulation d'un délai pour l'inscription
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Redirection après inscription réussie
    switch (form.role) {
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
    console.error('Erreur lors de l\'inscription:', error)
    error.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Styles pour la page d'inscription */
.login-page {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: white;
}

.form-section {
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--color-background);
  overflow-y: auto;
}

.login-container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.step-account-type {
  text-align: center;
}

.account-type-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.account-type-option {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.account-type-option:hover,
.account-type-option.selected {
  border-color: var(--color-primary);
  background-color: rgba(197, 45, 32, 0.1);
}

.account-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(197, 45, 32, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
}

.form-header {
  position: relative;
  padding: 15px 20px 5px;
  margin: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  margin-bottom: 5px;
}

.form-header h2 {
  font-size: 1.4rem;
  color: var(--color-text);
  margin: 0 0 10px 0;
  order: 2;
  width: 100%;
  text-align: left;
  padding-top: 5px;
}

.login-header h1 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.login-header p {
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.back-button {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff !important;
  background-color: #C52D20 !important;
  cursor: pointer;
  padding: 8px 16px !important;
  border: none !important;
  border-radius: 6px !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
  text-decoration: none !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
  min-width: 100px;
  height: 38px;
  margin-bottom: 10px !important;
  order: 1;
  align-self: flex-start;
}

/* Force la visibilité sur tous les écrans */
.back-button,
.back-button * {
  display: inline-flex !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.back-button:hover {
  background-color: #c5301c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.back-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-button svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.back-button span {
  white-space: nowrap;
  font-size: 0.95rem;
  line-height: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-header {
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .form-header h2 {
    font-size: 1.3rem;
    margin: 0;
    width: 100%;
    text-align: center;
  }
  
  .back-button {
    align-self: flex-start;
  }
}

.form-grid {
  display: grid;
  gap: 0.7rem;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9375rem;
}

.form-input {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #fff;
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(197, 45, 32, 0.1);
  outline: none;
}

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.file-input {
  display: none;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.login-button:hover:not(:disabled) {
  background-color: #b83729;
}

.login-button:active:not(:disabled) {
  transform: translateY(1px);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-footer {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--color-text-light);
  font-size: 0.875rem;
}

.login-link a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.login-link a:hover {
  text-decoration: underline;
}

.error-message {
  background-color: #fef2f2;
  color: #dc2626;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.legal-links {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--color-text-light);
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.legal-links a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.legal-links span {
  color: var(--color-border);
}

/* Responsive */
@media (max-width: 1024px) {
  .login-page {
    flex-direction: column;
  }
  
  .form-section,
  .image-section {
    width: 100%;
    min-height: auto;
  }
  
  .login-container {
    max-width: 500px;
    padding: 2rem 1rem;
  }
  
  .image-section {
    display: none;
  }
}

@media (max-width: 640px) {
  .form-section {
    padding: 1rem;
  }
  
  .login-container {
    padding: 1rem 0;
  }
  
  .account-type-options {
    grid-template-columns: 1fr;
  }
  
  .account-type-option {
    padding: 1rem 0.5rem;
  }
  
  .login-header h1 {
    font-size: 1.5rem;
  }
  
  .login-header p {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  
  .form-header h2 {
    font-size: 1.3rem;
  }
  
  .form-group {
    margin-bottom: 0.6rem;
  }
}
</style>
