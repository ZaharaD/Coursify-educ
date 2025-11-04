<template>
  <div class="notification-container">
    <button 
      class="notification-button"
      @click="toggleNotifications"
      aria-label="Notifications"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span 
        v-if="unreadCount > 0" 
        class="notification-badge"
      >
        {{ unreadCount > 9 ? '9+' : unreadCount }}
      </span>
    </button>
    
    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="notification-dropdown"
        v-click-outside="closeNotifications"
      >
        <div class="notification-header">
          <h3 class="notification-title">Notifications</h3>
          <button 
            v-if="unreadCount > 0"
            class="mark-all-read"
            @click="markAllAsRead"
          >
            Tout marquer comme lu
          </button>
        </div>
        
        <div class="notification-list">
          <div 
            v-if="notifications.length === 0"
            class="empty-notifications"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-10 w-10 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1" 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <p>Aucune notification</p>
          </div>
          
          <div 
            v-for="notification in notifications" 
            :key="notification.id"
            class="notification-item"
            :class="{ 'unread': !notification.read }"
            @click="handleNotificationClick(notification)"
          >
            <div class="notification-icon">
              <component 
                :is="getNotificationIcon(notification.type)" 
                class="h-5 w-5"
              />
            </div>
            <div class="notification-content">
              <p class="notification-message">{{ notification.message }}</p>
              <span class="notification-time">{{ formatTime(notification.time) }}</span>
            </div>
            <div 
              v-if="!notification.read" 
              class="unread-indicator"
            ></div>
          </div>
        </div>
        
        <div 
          v-if="notifications.length > 0"
          class="notification-footer"
        >
          <router-link 
            to="/notifications" 
            class="view-all"
          >
            Voir toutes les notifications
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { BellIcon, CheckCircleIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'NotificationBell',
  
  directives: {
    'click-outside': {
      beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  },
  
  setup() {
    const isOpen = ref(false);
    const notifications = ref([]);
    
    // Données factices pour la démonstration
    const mockNotifications = [
      {
        id: 1,
        type: 'success',
        message: 'Votre devoir a été noté',
        time: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        read: false,
        link: '/assignments/1/grade'
      },
      {
        id: 2,
        type: 'warning',
        message: 'Rappel : Devoir à rendre demain',
        time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        read: false,
        link: '/assignments/2'
      },
      {
        id: 3,
        type: 'info',
        message: 'Nouveau message de votre professeur',
        time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        read: true,
        link: '/messages/1'
      },
      {
        id: 4,
        type: 'success',
        message: 'Cours mis à jour : Introduction à React',
        time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        read: true,
        link: '/courses/react-intro'
      },
    ];
    
    // Charger les notifications depuis le localStorage ou utiliser les données factices
    const loadNotifications = () => {
      const savedNotifications = localStorage.getItem('notifications');
      if (savedNotifications) {
        notifications.value = JSON.parse(savedNotifications);
      } else {
        notifications.value = [...mockNotifications];
        saveNotifications();
      }
    };
    
    // Sauvegarder les notifications dans le localStorage
    const saveNotifications = () => {
      localStorage.setItem('notifications', JSON.stringify(notifications.value));
    };
    
    // Compter les notifications non lues
    const unreadCount = computed(() => {
      return notifications.value.filter(n => !n.read).length;
    });
    
    // Basculer l'affichage des notifications
    const toggleNotifications = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value && unreadCount.value > 0) {
        markAsRead();
      }
    };
    
    // Fermer les notifications
    const closeNotifications = () => {
      isOpen.value = false;
    };
    
    // Marquer toutes les notifications comme lues
    const markAllAsRead = () => {
      notifications.value = notifications.value.map(n => ({
        ...n,
        read: true
      }));
      saveNotifications();
    };
    
    // Marquer une notification comme lue
    const markAsRead = () => {
      notifications.value = notifications.value.map(n => ({
        ...n,
        read: true
      }));
      saveNotifications();
    };
    
    // Gérer le clic sur une notification
    const handleNotificationClick = (notification) => {
      // Marquer comme lue
      const index = notifications.value.findIndex(n => n.id === notification.id);
      if (index !== -1) {
        notifications.value[index].read = true;
        saveNotifications();
      }
      
      // Fermer le menu déroulant
      isOpen.value = false;
      
      // Naviguer vers le lien de la notification
      if (notification.link) {
        // Utilisez votre routeur ici, par exemple :
        // router.push(notification.link);
        console.log('Naviguer vers:', notification.link);
      }
    };
    
    // Obtenir l'icône en fonction du type de notification
    const getNotificationIcon = (type) => {
      switch (type) {
        case 'success':
          return CheckCircleIcon;
        case 'warning':
          return ExclamationCircleIcon;
        case 'info':
        default:
          return BellIcon;
      }
    };
    
    // Formater l'heure de la notification
    const formatTime = (date) => {
      const now = new Date();
      const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
      
      if (diffInSeconds < 60) {
        return 'À l\'instant';
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `Il y a ${minutes} min`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `Il y a ${hours} h`;
      } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `Il y a ${days} j`;
      }
    };
    
    // Simuler des notifications en temps réel (pour la démo)
    let notificationInterval;
    
    const simulateRealTimeNotifications = () => {
      // Ne pas simuler en développement pour éviter les doublons
      if (process.env.NODE_ENV === 'development') return;
      
      notificationInterval = setInterval(() => {
        const types = ['success', 'warning', 'info'];
        const messages = [
          'Nouveau message dans le forum',
          'Devoir à rendre bientôt',
          'Nouvelle ressource disponible',
          'Rappel : Cours demain',
          'Votre question a une réponse'
        ];
        
        const newNotification = {
          id: Date.now(),
          type: types[Math.floor(Math.random() * types.length)],
          message: messages[Math.floor(Math.random() * messages.length)],
          time: new Date(),
          read: false,
          link: '#'
        };
        
        notifications.value.unshift(newNotification);
        saveNotifications();
        
        // Jouer un son de notification
        playNotificationSound();
        
      }, 30000); // Toutes les 30 secondes
    };
    
    // Jouer un son de notification
    const playNotificationSound = () => {
      const audio = new Audio('/notification-sound.mp3');
      audio.play().catch(e => console.log('Erreur de lecture du son:', e));
    };
    
    // Au montage du composant
    onMounted(() => {
      loadNotifications();
      simulateRealTimeNotifications();
      
      // Écouter les événements de notification (pour une vraie application)
      window.addEventListener('new-notification', (event) => {
        if (event.detail) {
          const newNotification = {
            id: Date.now(),
            type: event.detail.type || 'info',
            message: event.detail.message,
            time: new Date(),
            read: false,
            link: event.detail.link
          };
          
          notifications.value.unshift(newNotification);
          saveNotifications();
          playNotificationSound();
        }
      });
    });
    
    // Nettoyer à la destruction du composant
    onBeforeUnmount(() => {
      if (notificationInterval) {
        clearInterval(notificationInterval);
      }
      window.removeEventListener('new-notification');
    });
    
    return {
      isOpen,
      notifications,
      unreadCount,
      toggleNotifications,
      closeNotifications,
      markAllAsRead,
      handleNotificationClick,
      getNotificationIcon,
      formatTime
    };
  }
};
</script>

<style scoped>
.notification-container {
  position: relative;
  display: inline-block;
}

.notification-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;
}

.notification-button:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  background-color: #ef4444;
  color: white;
  border-radius: 9999px;
  font-size: 0.65rem;
  font-weight: 600;
  border: 2px solid white;
}

.notification-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 360px;
  max-height: 80vh;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.notification-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.mark-all-read {
  font-size: 0.75rem;
  color: #3b82f6;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.mark-all-read:hover {
  background-color: #eff6ff;
}

.notification-list {
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
}

.empty-notifications {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;
  color: #6b7280;
}

.empty-notifications p {
  margin-top: 0.75rem;
  font-size: 0.875rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}

.notification-item:hover {
  background-color: #f9fafb;
}

.notification-item.unread {
  background-color: #f8fafc;
}

.notification-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.notification-item[data-type="success"] .notification-icon {
  background-color: #ecfdf5;
  color: #10b981;
}

.notification-item[data-type="warning"] .notification-icon {
  background-color: #fffbeb;
  color: #f59e0b;
}

.notification-item[data-type="info"] .notification-icon {
  background-color: #eff6ff;
  color: #3b82f6;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-message {
  font-size: 0.875rem;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.notification-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.unread-indicator {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3b82f6;
}

.notification-footer {
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.view-all {
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.view-all:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Scrollbar personnalisée */
.notification-list::-webkit-scrollbar {
  width: 6px;
}

.notification-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.notification-list::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.notification-list::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Réactivité */
@media (max-width: 480px) {
  .notification-dropdown {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-height: 70vh;
    border-radius: 1rem 1rem 0 0;
  }
  
  .notification-list {
    max-height: 60vh;
  }
}
</style>
