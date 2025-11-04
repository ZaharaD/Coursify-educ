<template>
  <div class="loading-spinner" :class="{ 'full-page': fullPage }">
    <div class="spinner">
      <div v-for="i in 12" :key="i" :style="getStyle(i)"></div>
    </div>
    <p v-if="message" class="mt-4 text-gray-600">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    color: {
      type: String,
      default: '#C52D20' // Couleur primaire de l'application
    },
    message: {
      type: String,
      default: ''
    },
    fullPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizePx() {
      const sizes = { sm: '20px', md: '40px', lg: '60px' }
      return sizes[this.size] || sizes.md
    }
  },
  methods: {
    getStyle(i) {
      const style = {
        animationDelay: `${(i - 1) * 0.1}s`,
        transform: `rotate(${30 * (i - 1)}deg)`,
        '--spinner-color': this.color
      }
      
      if (this.sizePx) {
        style.width = `calc(${this.sizePx} / 10)`
        style.height = `calc(${this.sizePx} / 3)`
        style.left = `calc(50% - calc(${this.sizePx} / 20))`
        style.top = `calc(50% - calc(${this.sizePx} / 2))`
      }
      
      return style
    }
  }
}
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.loading-spinner.full-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.spinner {
  position: relative;
  width: var(--spinner-size, 40px);
  height: var(--spinner-size, 40px);
}

.spinner div {
  position: absolute;
  width: 4px;
  height: 12px;
  background: var(--spinner-color, #C52D20);
  border-radius: 2px;
  transform-origin: center calc(100% - 4px);
  animation: spinner 1.2s linear infinite;
  opacity: 0;
}

@keyframes spinner {
  0% { opacity: 1; }
  100% { opacity: 0.2; }
}
</style>
