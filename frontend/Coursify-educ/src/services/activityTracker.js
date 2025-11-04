import { trackActivity } from './streakService';

let activityStartTime = null;
let activityInterval = null;
const MIN_ACTIVE_MINUTES = 2; // Temps minimum en minutes pour considérer une session active

// Démarrer le suivi d'activité
function startTracking() {
  // Ne pas démarrer un nouveau suivi si un est déjà en cours
  if (activityInterval) return;

  activityStartTime = new Date();
  
  // Vérifier toutes les minutes si l'utilisateur est toujours actif
  activityInterval = setInterval(() => {
    const currentTime = new Date();
    const minutesActive = Math.floor((currentTime - activityStartTime) / (1000 * 60));
    
    // Si l'utilisateur est actif depuis plus de MIN_ACTIVE_MINUTES minutes
    if (minutesActive >= MIN_ACTIVE_MINUTES) {
      // Mettre à jour la série avec le temps actif
      trackActivity(minutesActive);
      // Réinitialiser le temps de début pour le prochain suivi
      activityStartTime = currentTime;
    }
  }, 60000); // Vérifier toutes les minutes
}

// Arrêter le suivi d'activité
function stopTracking() {
  if (activityInterval) {
    clearInterval(activityInterval);
    activityInterval = null;
    
    // Enregistrer le temps total d'activité pour la session
    if (activityStartTime) {
      const endTime = new Date();
      const minutesActive = Math.floor((endTime - activityStartTime) / (1000 * 60));
      
      if (minutesActive >= MIN_ACTIVE_MINUTES) {
        trackActivity(minutesActive);
      }
      
      activityStartTime = null;
    }
  }
}

// Détecter les changements d'onglet/visibilité de la page
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopTracking();
  } else {
    startTracking();
  }
});

export {
  startTracking,
  stopTracking
};
