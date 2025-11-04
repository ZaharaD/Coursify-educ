const STREAK_KEY = 'user_streak';
const LAST_ACTIVITY_KEY = 'last_activity';
const REQUIRED_MINUTES = 120; // 2 heures en minutes

// Vérifier et mettre à jour la série
function updateStreak() {
  const now = new Date();
  const lastActivity = getLastActivity();
  
  // Si c'est la première fois
  if (!lastActivity) {
    initStreak();
    return 1;
  }

  const lastDate = new Date(lastActivity);
  const daysDiff = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

  // Si c'est le même jour, on ne fait rien
  if (isSameDay(now, lastDate)) {
    return getCurrentStreak();
  }

  // Si c'est le jour suivant
  if (daysDiff === 1) {
    const currentStreak = getCurrentStreak() + 1;
    localStorage.setItem(STREAK_KEY, currentStreak);
    updateLastActivity();
    return currentStreak;
  }
  
  // Si plus d'un jour d'écart, réinitialiser
  if (daysDiff > 1) {
    resetStreak();
    return 0;
  }
}

function trackActivity(minutesWorked) {
  const now = new Date();
  const lastActivity = getLastActivity();
  
  // Si c'est un nouveau jour et qu'on a travaillé assez longtemps
  if (!isSameDay(now, new Date(lastActivity))) {
    if (minutesWorked >= REQUIRED_MINUTES) {
      updateLastActivity();
      return updateStreak();
    }
    return getCurrentStreak();
  }
  
  return getCurrentStreak();
}

function getCurrentStreak() {
  return parseInt(localStorage.getItem(STREAK_KEY) || '0');
}

function getLastActivity() {
  return localStorage.getItem(LAST_ACTIVITY_KEY);
}

function updateLastActivity() {
  localStorage.setItem(LAST_ACTIVITY_KEY, new Date().toISOString());
}

function initStreak() {
  localStorage.setItem(STREAK_KEY, '1');
  updateLastActivity();
}

function resetStreak() {
  localStorage.setItem(STREAK_KEY, '0');
  updateLastActivity();
}

function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

export {
  updateStreak,
  trackActivity,
  getCurrentStreak,
  resetStreak
};
