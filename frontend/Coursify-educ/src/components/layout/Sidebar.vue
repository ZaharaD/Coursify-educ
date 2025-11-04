<template>
  <div class="sidebar bg-white shadow-lg w-64 min-h-screen fixed left-0 top-0 pt-16 z-40">
    <nav class="mt-8">
      <ul class="space-y-2 px-4">
        <li v-for="item in menuItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            :class="{ 'bg-primary-50 text-primary-600': $route.path.startsWith(item.path) }"
          >
            <component :is="item.icon" class="w-5 h-5 mr-3" />
            <span class="font-medium">{{ item.label }}</span>
            <span v-if="item.badge" class="ml-auto bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {{ item.badge }}
            </span>
          </router-link>
        </li>
      </ul>
      
      <!-- Section des cours -->
      <div class="mt-10 px-4">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">Mes cours</h3>
        <ul class="space-y-1">
          <li v-for="course in myCourses" :key="course.id">
            <router-link 
              :to="`/courses/${course.id}`"
              class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <div class="w-2 h-2 rounded-full mr-3" :style="{ backgroundColor: course.color }"></div>
              <span class="truncate">{{ course.title }}</span>
              <span class="ml-auto text-xs text-gray-500">{{ course.progress }}%</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { 
  HomeIcon, 
  BookOpenIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  ClockIcon, 
  Cog6ToothIcon,
  AcademicCapIcon,
  FireIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'Sidebar',
  components: {
    HomeIcon,
    BookOpenIcon,
    DocumentTextIcon,
    ChartBarIcon,
    ClockIcon,
    Cog6ToothIcon,
    AcademicCapIcon,
    FireIcon,
    QuestionMarkCircleIcon
  },
  data() {
    return {
      menuItems: [
        { path: '/dashboard', label: 'Tableau de bord', icon: 'HomeIcon' },
        { path: '/courses', label: 'Mes cours', icon: 'BookOpenIcon', badge: 3 },
        { path: '/games', label: 'Jeux éducatifs', icon: 'FireIcon' },
        { path: '/quizzes', label: 'Quiz', icon: 'QuestionMarkCircleIcon' },
        { path: '/assignments', label: 'Devoirs', icon: 'DocumentTextIcon' },
        { path: '/progress', label: 'Progression', icon: 'ChartBarIcon' },
        { path: '/schedule', label: 'Planning', icon: 'ClockIcon' },
        { path: '/settings', label: 'Paramètres', icon: 'Cog6ToothIcon' },
      ],
      myCourses: [
        { id: 1, title: 'Introduction à la programmation', progress: 65, color: '#3B82F6' },
        { id: 2, title: 'Mathématiques avancées', progress: 30, color: '#10B981' },
        { id: 3, title: 'Histoire de l\'art', progress: 85, color: '#F59E0B' },
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  transition: all 0.3s ease;
  border-right: 1px solid #e5e7eb;
}

.router-link-active {
  background-color: #f3f4f6;
  color: #1d4ed8;
  font-weight: 500;
}

.router-link-active svg {
  color: #1d4ed8;
}
</style>
