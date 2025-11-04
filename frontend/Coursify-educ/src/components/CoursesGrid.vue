<template>
  <div class="courses-grid-container">
    <!-- En-tête avec titre et contrôles -->
    <div class="courses-header">
      <h2 class="section-title">Mes cours</h2>
      
      <div class="controls">
        <!-- Filtre par catégorie -->
        <div class="filter-group">
          <label for="category-filter" class="filter-label">Filtrer par :</label>
          <select 
            id="category-filter" 
            v-model="filters.category"
            class="filter-select"
          >
            <option value="">Toutes les catégories</option>
            <option 
              v-for="category in categories" 
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <!-- Tri -->
        <div class="sort-group">
          <label for="sort-by" class="filter-label">Trier par :</label>
          <select 
            id="sort-by" 
            v-model="sortBy"
            class="filter-select"
          >
            <option value="recent">Récents</option>
            <option value="progress">Progression</option>
            <option value="title">Titre (A-Z)</option>
          </select>
        </div>

        <!-- Barre de recherche et filtres -->
        <div class="flex items-center space-x-2">
          <div class="search-group">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher un cours..."
              class="search-input"
            >
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <!-- Boutons de filtre rapide -->
          <div class="flex space-x-2">
            <button 
              @click="filterByType('jeu')"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              :class="{ 'bg-primary-50 border-primary-200 text-primary-600': filters.type === 'jeu' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM4 10a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm13-1a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2a1 1 0 011-1h1z" />
              </svg>
              Jeu
            </button>
            <button 
              @click="filterByType('quizz')"
              class="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              :class="{ 'bg-primary-50 border-primary-200 text-primary-600': filters.type === 'quizz' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quizz
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Grille de cours avec animation -->
    <transition-group name="fade" tag="div" class="courses-grid">
      <CourseCard 
        v-for="course in paginatedCourses" 
        :key="course.id"
        :course="course"
        class="course-item"
        data-testid="course-card"
      />
    </transition-group>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="pagination-button"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
      >
        &larr; Précédent
      </button>
      
      <div class="page-numbers">
        <button 
          v-for="page in visiblePages" 
          :key="page"
          @click="goToPage(page)"
          :class="{
            'active': currentPage === page,
            'dots': page === '...'
          }"
          class="page-number"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="pagination-button"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
      >
        Suivant &rarr;
      </button>
    </div>

    <!-- Message si aucun cours trouvé -->
    <div v-if="filteredAndSortedCourses.length === 0" class="no-courses">
      <p>Aucun cours ne correspond à votre recherche.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import CourseCard from './CourseCard.vue';

// Fonction pour filtrer par type
const filterByType = (type) => {
  if (filters.type === type) {
    filters.type = ''
  } else {
    filters.type = type
  }
}

// Données factices pour la démonstration
const mockCourses = [
  {
    id: 1,
    title: 'Introduction à la programmation',
    description: 'Apprenez les bases de la programmation avec Python',
    category: 'Informatique',
    progress: 65,
    duration: '3h 15min',
    lessons: 8,
    color: '#4F46E5',
    lastAccessed: '2023-05-15',
    tags: ['jeu']
  },
  {
    id: 2,
    title: 'Design UI/UX avancé',
    description: 'Maîtrisez les principes avancés du design d\'interface',
    category: 'Design',
    progress: 30,
    duration: '5h 45min',
    lessons: 12,
    color: '#10B981',
    lastAccessed: '2023-05-10',
    tags: ['quizz']
  },
  {
    id: 3,
    title: 'Marketing digital',
    description: 'Stratégies avancées pour le marketing en ligne',
    category: 'Marketing',
    progress: 85,
    duration: '4h 30min',
    lessons: 10,
    color: '#F59E0B',
    lastAccessed: '2023-05-18',
    tags: ['jeu']
  },
  {
    id: 4,
    title: 'Gestion de projet Agile',
    description: 'Méthodologies agiles pour une gestion de projet efficace',
    category: 'Gestion',
    progress: 45,
    duration: '6h 20min',
    lessons: 14,
    color: '#EF4444',
    lastAccessed: '2023-05-05',
    tags: ['quizz']
  }
];

export default {
  name: 'CoursesGrid',
  components: {
    CourseCard
  },
  
  props: {
    itemsPerPage: {
      type: Number,
      default: 6
    }
  },
  
  setup(props) {
    const currentPage = ref(1);
    const itemsPerPage = ref(props.itemsPerPage);
    const searchQuery = ref('')
    const sortBy = ref('recent')
    const filters = ref({
      category: '',
      type: ''
    });

    // Pagination
    const totalPages = computed(() => {
      return Math.ceil(filteredAndSortedCourses.value.length / itemsPerPage.value);
    });
    
    const paginatedCourses = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredAndSortedCourses.value.slice(start, end);
    });
    
    const visiblePages = computed(() => {
      const range = [];
      const total = totalPages.value;
      const current = currentPage.value;
      const delta = 2;
      
      range.push(1);
      
      if (current - delta > 2) range.push('...');
      
      for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i);
      }
      
      if (current + delta < total - 1) range.push('...');
      
      if (total > 1) range.push(total);
      
      return range;
    });
    
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    const goToPage = (page) => {
      if (page !== '...') {
        currentPage.value = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Extraire les catégories uniques des cours
    const categories = computed(() => {
      const cats = new Set();
      mockCourses.forEach(course => cats.add(course.category));
      return Array.from(cats);
    });

    // Filtrer et trier les cours
    const filteredAndSortedCourses = computed(() => {
      let result = [...mockCourses]

      // Filtrage par recherche
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(course => 
          course.title.toLowerCase().includes(query) || 
          course.description.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
        )
      }

      // Filtrage par catégorie
      if (filters.value.category) {
        result = result.filter(course => course.category === filters.value.category)
      }
      
      // Filtrage par type (jeu/quizz)
      if (filters.value.type === 'jeu') {
        result = result.filter(course => course.tags?.includes('jeu'))
      } else if (filters.value.type === 'quizz') {
        result = result.filter(course => course.tags?.includes('quizz'))
      }

      // Tri
      switch (sortBy.value) {
        case 'recent':
          result.sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed));
          break;
        case 'progress':
          result.sort((a, b) => b.progress - a.progress);
          break;
        case 'title':
          result.sort((a, b) => a.title.localeCompare(b.title));
          break;
      }

      return result;
    });

    // Réinitialiser la page quand les filtres changent
    watch([searchQuery, sortBy, () => filters.value.category], () => {
      currentPage.value = 1;
    });

    return {
      searchQuery,
      sortBy,
      filters,
      categories,
      filteredAndSortedCourses,
      paginatedCourses,
      currentPage,
      totalPages,
      visiblePages,
      prevPage,
      nextPage,
      goToPage
    };
  }
};
</script>

<style scoped>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.pagination-button {
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  color: #4b5563;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  background-color: #e5e7eb;
  border-color: #d1d5db;
}

.page-numbers {
  display: flex;
  gap: 0.25rem;
}

.page-number {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.page-number:not(.dots):hover {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
}

.page-number.active {
  background-color: #C52D20;
  color: white;
  border-color: #C52D20;
}

.page-number.dots {
  cursor: default;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 640px) {
  .pagination {
    gap: 0.25rem;
  }
  
  .pagination-button {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }
  
  .page-number {
    width: 2rem;
    height: 2rem;
    font-size: 0.875rem;
  }
}
.courses-grid-container {
  width: 100%;
}

.courses-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

@media (min-width: 768px) {
  .courses-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

@media (min-width: 640px) {
  .controls {
    flex-direction: row;
    align-items: center;
  }
}

.filter-group,
.sort-group,
.search-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-label,
.sort-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
}

select,
input[type="text"] {
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

select:focus,
input[type="text"]:focus {
  border-color: #C52D20;
  outline: none;
  box-shadow: 0 0 0 1px #C52D20;
}

.search-input {
  position: relative;
  flex: 1 1 0%;
}

.search-input input {
  padding-left: 2.5rem;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  height: 1.25rem;
  width: 1.25rem;
  transform: translateY(-50%);
  color: #9ca3af;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.no-courses {
  text-align: center;
  padding: 2rem 0;
  color: #6b7280;
  grid-column: 1 / -1;
}

.no-courses p {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

/* Réactivité */
@media (max-width: 640px) {
  .controls {
    width: 100%;
  }
  
  .filter-select,
  .search-input,
  .search-group {
    width: 100%;
  }
}
</style>
