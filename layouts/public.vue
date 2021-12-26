<template>
  <main class="layout layout--show-sidebar" ref="layout">
    <div class="layout__content">
      <Nuxt/>

      <div class="layout__content-footer">

      </div>
    </div>

    <div class="layout__navbar">
      <Navbar/>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'public',

    methods: {
      toggleSidebar() {
        const layout = this.$refs.layout;

        if (layout.classList.contains('layout--show-sidebar')) {

          layout.classList.add('layout--hide-sidebar');
          layout.classList.remove('layout--show-sidebar');

          setTimeout(() => { 
            layout.classList.remove('layout--hide-sidebar');
          }, 700);

        } else {

          layout.classList.add('layout--show-sidebar');
          layout.classList.remove('layout--hide-sidebar');

        }
        // this.$hello('peter')
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
  main.layout {
    width: 100vw;
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    height: calc(100vh - 4rem);

    &.layout--show-sidebar {
      justify-content: center;

      &::before, &::after {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        border-radius: $border-radius * 2;
      }

      &::before {
        max-height: calc(100vh - 12rem);
        animation: animateExpandedBeforeSidebar $transition-sidebar .8s forwards;
      }

      &::after {
        max-height: calc(100vh - 10rem);
        animation: animateExpandedAfterSidebar $transition-sidebar .75s forwards;
      }

      .layout__content {
        overflow: hidden;
        box-shadow: $box-shadow;
        animation: animateExpandedSidebar $transition-sidebar forwards;
        // animation: animateExpandedSidebar 0s forwards;
      }
    }

    &.layout--hide-sidebar {
      justify-content: center;

      .layout__content {
        animation: animateCollapsedSidebar $transition-sidebar forwards;
      }
    }

    .layout__content {
      flex: auto;
      padding: 2rem;
      position: relative;
    }

    .layout__content-footer {

    }
  }
</style>
