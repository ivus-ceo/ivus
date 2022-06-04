<template>
  <span>
    <nav class="navbar" ref="navbar">
      
    </nav>
    
    <aside class="sidebar" ref="sidebar">
      
    </aside>
  </span>
</template>

<script>
  export default {
    name: 'AppNavbar',

    data() {
      return {
        links: [
          { id: 1, name: 'Home', icon: 'home', href: '/' },
          { id: 2, name: 'Login', icon: 'login', href: '/auth/login' },
        ]
      }
    },

    methods: {
      emitToggleSidebar(e) {
        this.$refs.icon.$el.classList.toggle('navbar__menu-icon--show-sidebar');
        this.$nuxt.$emit('globalEventToggleSidebar');
      },

      toggleSidebar() {
        this.$refs.sidebar.classList.toggle('sidebar--show-sidebar')
      }
    },

    mounted() {
      this.$nuxt.$on('globalEventToggleSidebar', () => {
        this.toggleSidebar()
      });
    }
  }
</script>

<style lang="scss">
  nav.navbar {
    
  }

  aside.sidebar {
    
  }
</style>