<template>
  <div class="progress-chart-container" :style="{ '--progress-color': color }">
    <div class="chart-header">
      <h3 class="chart-title">{{ title }}</h3>
      <div class="progress-percentage">{{ progress }}%</div>
    </div>
    
    <div class="progress-bar">
      <div 
        class="progress-bar-fill" 
        :style="{ width: `${progress}%` }"
        :class="{ 'animate-pulse': loading }"
      ></div>
    </div>
    
    <div v-if="showDetails" class="progress-details">
      <div class="detail-item">
        <span class="detail-label">Débuté le :</span>
        <span class="detail-value">{{ startDate }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Dernière activité :</span>
        <span class="detail-value">{{ lastActivity }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Temps passé :</span>
        <span class="detail-value">{{ timeSpent }}</span>
      </div>
    </div>
    
    <div v-if="showMilestones" class="milestones">
      <div 
        v-for="(milestone, index) in milestones" 
        :key="index"
        class="milestone"
        :class="{ 'completed': milestone.progress <= progress }"
      >
        <div class="milestone-dot"></div>
        <span class="milestone-label">{{ milestone.label }}</span>
        <span class="milestone-progress">{{ milestone.progress }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressChart',
  props: {
    title: {
      type: String,
      default: 'Progression du cours'
    },
    progress: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    color: {
      type: String,
      default: '#C52D20' // Couleur primaire
    },
    loading: {
      type: Boolean,
      default: false
    },
    showDetails: {
      type: Boolean,
      default: true
    },
    showMilestones: {
      type: Boolean,
      default: true
    },
    startDate: {
      type: String,
      default: '15/03/2023'
    },
    lastActivity: {
      type: String,
      default: 'Aujourd\'hui'
    },
    timeSpent: {
      type: String,
      default: '2h 30min'
    },
    milestones: {
      type: Array,
      default: () => [
        { label: 'Introduction', progress: 0 },
        { label: 'Chapitre 1', progress: 25 },
        { label: 'Chapitre 2', progress: 50 },
        { label: 'Chapitre 3', progress: 75 },
        { label: 'Terminé', progress: 100 }
      ]
    }
  }
}
</script>

<style scoped>
.progress-chart-container {
  background: white;
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.progress-chart-container:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.progress-percentage {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--progress-color, #C52D20);
}

.progress-bar {
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.progress-bar-fill {
  height: 100%;
  background-color: var(--progress-color, #C52D20);
  border-radius: 4px;
  transition: width 0.6s ease;
}

.progress-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.detail-label {
  color: #6b7280;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

.detail-value {
  color: #111827;
  font-weight: 500;
}

.milestones {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.milestones::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e7eb;
}

.milestone {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 20%;
  text-align: center;
}

.milestone-dot {
  width: 12px;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.milestone.completed .milestone-dot {
  background-color: var(--progress-color, #C52D20);
  transform: scale(1.2);
}

.milestone:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  right: -100%;
  height: 2px;
  background-color: #e5e7eb;
  z-index: 0;
}

.milestone.completed:not(:last-child)::after {
  background-color: var(--progress-color, #C52D20);
}

.milestone-label {
  font-size: 0.7rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.milestone-progress {
  font-size: 0.65rem;
  font-weight: 600;
  color: #9ca3af;
}

.milestone.completed .milestone-progress {
  color: var(--progress-color, #C52D20);
}

/* Animation de chargement */
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Réactivité */
@media (max-width: 640px) {
  .progress-details {
    grid-template-columns: 1fr;
  }
  
  .milestone-label {
    font-size: 0.6rem;
  }
  
  .milestone-progress {
    font-size: 0.55rem;
  }
}
</style>
