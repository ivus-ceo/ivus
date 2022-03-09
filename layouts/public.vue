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
        this.$refs.layout.classList.toggle('layout--hide-sidebar')
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
    display: flex;
    overflow-x: hidden;
    position: relative;
    flex-direction: column;
    height: calc(100vh - 5rem);

    &.layout--show-sidebar {
      transform: translateX(-80%);
    }

    .layout__content {
      flex: auto;
      position: relative;
    }
  }
</style>