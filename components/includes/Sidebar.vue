<template>
  <!-- Start of sidebar -->
  <aside class="sidebar" ref="sidebar">
    
  </aside>
  <!-- End of sidebar -->
</template>

<script>
  export default {
    name: 'Sidebar',

    methods: {
      toggleSidebar() {
        this.$refs.sidebar.classList.toggle('sidebar--show-sidebar')
      }
    },
    
    mounted() {
      this.$nuxt.$on('eventToggleSidebar', () => {
        this.toggleSidebar()
      });
    }
  }
</script>

<style lang="scss">
  aside.sidebar {
    left: 0;
    width: 100vw;
    height: 100vh;
    bottom: -100vh;
    position: fixed;
    z-index: $z-index - 1;
    background-color: #fff;
    transition: all $transition-time $transition-mode;

    &.sidebar--show-sidebar {
      bottom: 0;
    }
  }
</style>