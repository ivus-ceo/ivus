<template>
  <span>
    <!-- Start of navbar -->
    <nav class="navbar">
      <div class="navbar__brand">
        <nuxt-link to="/" class="navbar__brand-link">
          ivus
        </nuxt-link>
      </div>

      <div class="navbar__menu">
        <Button class="navbar__menu-icon" ref="icon" @buttonClick="emitToggleSidebar">
          <span class="navbar__menu-icon-dash"></span>
          <span class="navbar__menu-icon-dash"></span>
          <span class="navbar__menu-icon-dash"></span>
        </Button>
      </div>
    </nav>
    <!-- End of navbar -->
    
    <Sidebar/>
  </span>
</template>

<script>
  export default {
    name: 'Navbar',

    methods: {
      emitToggleSidebar(e) {
        this.$refs.icon.$el.classList.toggle('navbar__menu-icon--active-sidebar');
        this.$nuxt.$emit('eventToggleSidebar');
      }
    }
  }
</script>

<style lang="scss">
  nav.navbar {
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 4rem;
    position: fixed;
    padding: 0 2rem;
    overflow: hidden;
    z-index: $z-index;
    box-shadow: $box-shadow;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;

    .navbar__brand {
      font-size: 3rem;
      transform: translateY(-8px);
      font-family: $font-family-header;

      .navbar__brand-link {
        text-decoration: none;
      }
    }

    .navbar__menu {
      top: .5rem;
      width: 3rem;
      height: 3rem;
      overflow: hidden;
      position: absolute;
      border-radius: 50%;
      right: calc(2rem - .8rem);

      .navbar__menu-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: transparent;

        &.navbar__menu-icon--active-sidebar {
          .navbar__menu-icon-dash {
            // transform: scale(0);
          }
        }

        .ripple {
          background-color: #000;
        }

        .navbar__menu-icon-dash {
          display: block;
          width: 1.5rem;
          height: .2142rem;
          pointer-events: none;
          border-radius: .1rem;
          background-color: $color-dark-blue;
          transition: transform $transition-time $transition-mode;

          &:nth-child(2) {
            margin: .2857rem 0;
          }
        }
      }
    }
  }
</style>