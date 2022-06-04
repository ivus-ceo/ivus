<template>
  <main class="layout" ref="layout">
    <div class="layout__content">
      <Nuxt/>
    </div>

    <div class="layout__navbar">
      <AppNavbar/>
    </div>
  
    <BaseModal ref="modal"/>
  </main>
</template>

<script>
  export default {
    name: 'public',

    methods: {
      toggleSidebar() {
        this.$refs.layout.classList.toggle('layout--show-sidebar')
      },

      showModal() {
        this.$refs.modal.classList.add('modal--show-modal');
      },
    },

    mounted() {
      this.$nuxt.$on('globalEventToggleSidebar', () => {
        this.toggleSidebar()
      });

      this.$nuxt.$on('globalEventShowModal', () => {
        this.showModal()
      });
    }
  }
</script>

<style lang="scss">
  main.layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-x: hidden;
    position: relative;
    flex-direction: column;

    &.layout--show-sidebar {
      overflow-y: hidden;
    }

    .layout__content {
      flex: auto;
      position: relative;
      transition: $transition-time transform $transition-mode;
    }
  }
</style>