<script setup>
import {computed, onMounted, onBeforeUnmount, watch} from 'vue'
import {useRoute} from 'vue-router'
import CommonNav from './components/navigation/CommonNavigationComponent.vue'
import UniqueNav from './components/navigation/UniqueNavigationComponent.vue'
import Footer from './components/footer/FooterComponent.vue'

const route = useRoute()

const routesWithUniqueNav = ['/servers/hardtech', '/servers/terrafirmacreate', '/servers/mif']

const routesWithoutMifBackground = ['/servers/hardtech']

const currentNav = computed(() => {
  return routesWithUniqueNav.includes(route.path) ? UniqueNav : CommonNav
})

const showFooter = computed(() => {
  return !routesWithUniqueNav.includes(route.path)
})

const updateBodyClass = () => {
  const isGlobalBackground = !routesWithUniqueNav.includes(route.path)
  const isMifBackground = !routesWithoutMifBackground.includes(route.path) && routesWithUniqueNav.includes(route.path)

  if (route.path === '/servers/terrafirmacreate') {
    document.body.classList.add('terrafirmacreate-background')
    document.body.classList.remove('global-background', 'mif-page-background', 'mif-scrollbar', 'global-scrollbar')
    removeBalls()
  } else if (isGlobalBackground) {
    document.body.classList.add('global-background', 'global-scrollbar')
    document.body.classList.remove('mif-page-background', 'mif-scrollbar', 'terrafirmacreate-background')
    initializeBallsAnimation()
  } else if (isMifBackground) {
    document.body.classList.add('mif-page-background', 'mif-scrollbar')
    document.body.classList.remove('global-background', 'global-scrollbar', 'terrafirmacreate-background')
    removeBalls()
  } else {
    // Для маршрутов без mif-background (например, /servers/hardtech)
    document.body.classList.add('global-background')
    document.body.classList.remove('mif-page-background', 'terrafirmacreate-background', 'mif-scrollbar')
    initializeBallsAnimation()
  }
}

onMounted(() => {
  updateBodyClass()
})

watch(route, () => {
  updateBodyClass()
})

onBeforeUnmount(() => {
  document.body.classList.remove('mif-page-background', 'global-background', 'mif-scrollbar', 'global-scrollbar', 'terrafirmacreate-background')
  removeBalls()
})

let animationFrameId;

function initializeBallsAnimation() {
  if (document.querySelector('.floating-balls')) return;

  const container = document.createElement('div')
  container.className = 'floating-balls'
  document.body.appendChild(container)

  const ballCount = 13
  const colors = ['#ffc371', '#ff5f6d']

  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement('div')
    ball.className = 'ball'
    ball.style.width = `${Math.random() * 130 + 130}px`
    ball.style.height = ball.style.width
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

    ball.dataset.x = Math.random() * window.innerWidth + 'px'
    ball.dataset.y = Math.random() * window.innerHeight + 'px'
    ball.dataset.dx = (Math.random() - 0.5)
    ball.dataset.dy = (Math.random() - 0.5)

    container.appendChild(ball)
  }

  animateBalls()
}

function animateBalls() {
  const balls = document.querySelectorAll('.ball')

  balls.forEach(ball => {
    const rect = ball.getBoundingClientRect()
    const ballWidth = rect.width
    const ballHeight = rect.height

    let x = parseFloat(ball.dataset.x)
    let y = parseFloat(ball.dataset.y)
    let dx = parseFloat(ball.dataset.dx)
    let dy = parseFloat(ball.dataset.dy)

    x += dx
    y += dy

    if (x + ballWidth > window.innerWidth || x < 0) {
      dx = -dx
    }
    if (y + ballHeight > window.innerHeight || y < 0) {
      dy = -dy
    }

    ball.dataset.x = (x + dx) + 'px'
    ball.dataset.y = (y + dy) + 'px'
    ball.dataset.dx = dx
    ball.dataset.dy = dy

    ball.style.transform = `translate(${x}px, ${y}px)`
  })

  animationFrameId = requestAnimationFrame(animateBalls)
}

function removeBalls() {
  const container = document.querySelector('.floating-balls')
  if (container) {
    container.remove()
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}
</script>

<template>
  <component :is="currentNav"/>
  <router-view/>
  <Footer v-if="showFooter"/>
</template>

<style>
body.global-background {
  background-color: rgb(22, 22, 22);
}

body.mif-page-background {
  background: black;
}

body.terrafirmacreate-background {
  background: url('./assets/icons/serverPage/terrafirmacreatePage/background.png');
  background-size: cover;
}

body.global-scrollbar::-webkit-scrollbar {
  width: 10px;
}

body.global-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  border-radius: 10px;
}

body.global-scrollbar::-webkit-scrollbar-track {
  background: rgb(38, 36, 30);
  background-clip: content-box;
}

body.mif-scrollbar::-webkit-scrollbar {
  width: 10px;
}

body.mif-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(132deg, #5c8bf1, #9fc7f5 100%);
  border-radius: 10px;
}

body.mif-scrollbar::-webkit-scrollbar-track {
  background: rgb(38, 36, 30);
  background-clip: content-box;
}

.floating-balls {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  filter: blur(100px);
}

.ball {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
</style>