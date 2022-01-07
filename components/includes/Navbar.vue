<template>
  <span>
    <!-- Start of navbar -->
    <nav class="navbar" ref="navbar">
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
    
    <!-- Start of sidebar -->
    <aside class="sidebar" ref="sidebar">
      <div class="sidebar__close" @click="emitToggleSidebar">
        <i class="material-icons-outlined">close</i>
      </div>

      <div class="sidebar__avatar">
        <nuxt-link to="/profile">
          <img src="https://images.unsplash.com/photo-1640275986993-7076998713c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80" alt="">
        </nuxt-link>
      </div>

      <div class="sidebar__links">
        <nuxt-link v-for="link in links" :key="link.id" :to="link.href" class="sidebar__link">
          {{ link.name }}
          <i class="material-icons-round">{{ link.icon }}</i>
        </nuxt-link>
      </div>

      <div class="sidebar__footer">
        <nuxt-link to="/logout" class="sidebar__link">
          Logout <i class="material-icons">logout</i>
        </nuxt-link>
      </div>
    </aside>
    <!-- End of sidebar -->
  </span>
</template>

<script>
  export default {
    name: 'Navbar',

    data() {
      return {
        links: [
          { id: 1, name: 'Home', icon: 'home', href: '/' },
          { id: 2, name: 'Shop', icon: 'shop', href: '/shop' },
        ]
      }
    },

    methods: {
      emitToggleSidebar(e) {
        this.$refs.icon.$el.classList.toggle('navbar__menu-icon--show-sidebar');
        this.$nuxt.$emit('eventToggleSidebar');
      },

      toggleSidebar() {
        this.$refs.sidebar.classList.toggle('sidebar--show-sidebar');
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

        &.navbar__menu-icon--show-sidebar {
          .navbar__menu-icon-dash {
            &:nth-child(1) {
              transform: translateY(2px) rotate(-45deg);
            }

            &:nth-child(2) {
              display: none;
            }

            &:nth-child(3) {
              transform: translateY(-1px) rotate(45deg);
            }
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

          &:nth-child(2) {
            margin: .2857rem 0;
          }
        }
      }
    }
  }

  aside.sidebar {
    top: 2rem;
    display: flex;
    position: absolute;
    padding-right: 2rem;
    z-index: $z-index - 1;
    align-items: flex-end;
    flex-direction: column;
    height: calc(100vh - 8rem);
    width: calc(100vw - 39.5% - 4rem);
    right: calc(-100vw + 39.5% + 2rem);

    &.sidebar--show-sidebar {
      right: 0;

      .sidebar__close {
        animation: animateExpandedSidebarMenu .6s $transition-mode forwards;
      }

      .sidebar__avatar {
        animation: animateExpandedSidebarMenu .75s $transition-mode forwards;
      }

      .sidebar__links {
        animation: animateExpandedSidebarMenu .9s $transition-mode forwards;
      }

      .sidebar__footer {
        animation: animateExpandedSidebarMenu 1.05s $transition-mode forwards;
      }
    }

    .sidebar__close {
      cursor: pointer;
      user-select: none;
      position: relative;
      box-shadow: $box-shadow;
      background-color: #fff;
      border-radius: $border-radius;
      transition: $transition-time $transition-mode;

      @include square(3rem);
      @include flex(center, center);

      i {
        font-size: 2rem;
      }
    }

    .sidebar__avatar {
      width: 3.5rem;
      height: 3.5rem;
      position: relative;
      margin-top: 1.5rem;
      margin-right: .5rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        outline: .5rem solid #fff;
      }
    }

    .sidebar__links {
      flex: auto;
      width: 100%;
      padding: 1rem 0 0;
      text-align: right;
      position: relative;
      flex-direction: column;

      @include flex(flex-start, flex-end);
    }

    .sidebar__footer {
      width: 100%;
      position: relative;
    }

    .sidebar__link {
      width: 100%;
      padding: .8rem 0;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      transition: $transition-time $transition-mode;

      @include flex(flex-end, center);

      &.nuxt-link-active {
        font-weight: bold;
        color: $color-base;
      }

      i {
        font-size: 1rem;
        margin-left: .5rem;
      }
    }
  }
</style>