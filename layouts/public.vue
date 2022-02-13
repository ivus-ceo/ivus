<template>
  <main class="layout" ref="layout">
    <div class="layout__content">
      <div class="layout__content-inner">
        <Nuxt/>
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
          }, 600);
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
    overflow-x: hidden;
    position: relative;
    flex-direction: column;
    height: calc(100vh - 5rem);

    &.layout--show-sidebar {
      overflow-y: hidden;

      &::before,
      &::after {
        content: '';
        width: 100%;
        display: block;
        position: fixed;
        box-shadow: $box-shadow;
        border-radius: $border-radius * 2;
      }

      &::before {
        top: 4rem;
        left: 0;
        z-index: -1;
        opacity: .6;
        background-color: #fff;
        height: calc(100% - 13rem);
        transform: translateX(-100%);
        animation: animateExpandedBeforeSidebar .6s .4s $transition-mode forwards;
      }

      &::after {
        top: 5rem;
        left: 0;
        z-index: -2;
        opacity: .4;
        background-color: #fff;
        height: calc(100% - 15rem);
        transform: translateX(-100%);
        animation: animateExpandedAfterSidebar .6s .5s $transition-mode forwards;
      }

      .layout__content {
        &::before,
        &::after {
          left: 0;
          content: '';
          width: 100%;
          display: block;
          position: fixed;
        }

        &::before {
          top: 3rem;
          z-index: -1;
          box-shadow: $box-shadow;
          height: calc(100% - 11rem);
          border-radius: $border-radius * 2;
          animation: animateExpandedSidebar .6s .2s $transition-mode forwards;
        }

        &::after {
          top: 0;
          height: 3rem;
          background-color: $color-body;
          animation: animateExpandedTopBox .2s $transition-mode forwards;
        }

        .layout__content-inner {
          animation: animateExpandedContent .6s .2s $transition-mode forwards;
        }
      }

      .layout__navbar {
        &::before {
          left: 0;
          bottom: 5rem;
          content: '';
          width: 100%;
          height: 5rem;
          display: block;
          position: fixed;
          background-color: $color-body;
          animation: animateExpandedBottomBox .2s $transition-mode forwards;
        }
      }
    }

    // &.layout--hide-sidebar {
    //   justify-content: center;

    //   .layout__content {
    //     border-radius: 0;
    //     max-height: 100vh;
    //     background-color: transparent;
    //     animation: animateCollapsedSidebar .6s $transition-mode;
    //   }
    // }

    .layout__content {
      flex: auto;
      position: relative;

      .layout__content-backdrop {
      
      }
    }
  }
</style>