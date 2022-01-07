<template>
  <main class="layout" ref="layout">
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
        const timeout = 600;

        if (layout.classList.contains('layout--show-sidebar')) {
          layout.classList.add('layout--hide-sidebar');
          layout.classList.remove('layout--show-sidebar');
          
          setTimeout(() => { 
            layout.classList.remove('layout--hide-sidebar');
          }, timeout);
        } else {
          layout.classList.add('layout--show-sidebar');
          layout.classList.remove('layout--hide-sidebar');
        }
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

      &::before,
      &::after {
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
        animation: animateExpandedBeforeSidebar .6s .5s $transition-mode forwards;
      }

      &::after {
        max-height: calc(100vh - 10rem);
        animation: animateExpandedAfterSidebar .6s .4s $transition-mode forwards;
      }

      .layout__content {
        overflow: hidden;
        box-shadow: $box-shadow;
        background-color: #fff;
        transform: translateX(-60.5%);
        max-height: calc(100vh - 8rem);
        border-radius: $border-radius * 2;
        animation: animateExpandedSidebar .6s $transition-mode forwards;
      }
    }

    &.layout--hide-sidebar {
      justify-content: center;

      .layout__content {
        border-radius: 0;
        max-height: 100vh;
        background-color: transparent;
        animation: animateCollapsedSidebar .6s $transition-mode;
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