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
      <div class="sidebar__header">
        <div class="sidebar__header-theme">
          <i class="material-icons-outlined">dark_mode</i>
        </div>

        <div class="sidebar__header-close" @click="emitToggleSidebar">
          <i class="material-icons-outlined">close</i>
        </div>
      </div>

      <!-- <div class="sidebar__search">
        <Input id="search" name="search" placeholder="Search"/>
      </div> -->

      <div class="sidebar__links">
        <div class="sidebar__links-header">
          Menu
        </div>

        <ul class="sidebar__links-items">
          <li class="sidebar__links-item" v-for="link in links" :key="link.id" @click="emitToggleSidebar">
            <nuxt-link class="sidebar__links-item-link" :to="link.href">
              <i class="sidebar__links-item-icon material-icons-round">{{ link.icon }}</i>
              <span class="sidebar__links-item-title">{{ link.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="sidebar__options">
        <div class="sidebar__options-language">
          English
        </div>

        <div class="sidebar__options-currency">
          USD
        </div>
      </div>

      <div class="sidebar__shopping-cart">

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
          { id: 2, name: 'Login', icon: 'login', href: '/auth/login' },
        ]
      }
    },

    methods: {
      emitToggleSidebar(e) {
        this.$refs.icon.$el.classList.toggle('navbar__menu-icon--show-sidebar');
        this.$nuxt.$emit('eventToggleSidebar');
      },

      toggleSidebar() {
        const sidebar = this.$refs.sidebar;

        if (sidebar.classList.contains('sidebar--show-sidebar')) {
          sidebar.classList.add('sidebar--hide-sidebar');
          sidebar.classList.remove('sidebar--show-sidebar');
          
          setTimeout(() => { 
            sidebar.classList.remove('sidebar--hide-sidebar');
          }, 300);
        } else {
          sidebar.classList.add('sidebar--show-sidebar');
          sidebar.classList.remove('sidebar--hide-sidebar');
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
  nav.navbar {
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    padding: 0 2rem;
    position: fixed;
    overflow: hidden;
    z-index: $z-index;
    align-items: center;
    justify-content: center;
    box-shadow: $box-shadow;
    background-color: #fff;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;

    .navbar__brand {
      font-size: 4.5rem;
      transform: translateY(-12px);
      font-family: $font-family-header;

      .navbar__brand-link {
        text-decoration: none;
      }
    }

    .navbar__menu {
      top: .5rem;
      width: 4rem;
      height: 4rem;
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
          background-color: $color-dark-blue;
        }

        .navbar__menu-icon-dash {
          display: block;
          width: 2.3rem;
          height: .27rem;
          pointer-events: none;
          border-radius: .2rem;
          background-color: $color-dark-blue;

          &:nth-child(2) {
            margin: .37rem 0;
          }
        }
      }
    }
  }

  aside.sidebar {
    top: 3rem;
    display: flex;
    position: fixed;
    padding-right: 2rem;
    z-index: $z-index - 1;
    align-items: flex-end;
    flex-direction: column;
    height: calc(100% - 11rem);
    width: calc(100vw - 34.4% - 4rem);
    right: calc(-100vw + 34.4% + 2rem);

    &.sidebar--show-sidebar {
      right: 0;

      .sidebar__header {
        animation: animateExpandedSidebarMenu .3s .1s $transition-mode forwards;
      }

      .sidebar__search {
        animation: animateExpandedSidebarMenu .3s .15s $transition-mode forwards;
      }

      .sidebar__links {
        animation: animateExpandedSidebarMenu .3s .2s $transition-mode forwards;
      }

      .sidebar__options {
        animation: animateExpandedSidebarMenu .3s .25s $transition-mode forwards;
      }

      .sidebar__shopping-cart {
        animation: animateExpandedSidebarMenu .3s .3s $transition-mode forwards;
      }
    }

    &.sidebar--hide-sidebar {
      right: 0;

      .sidebar__header {
        animation: animateCollapsedSidebarMenu .1s $transition-mode forwards;
      }

      .sidebar__search {
        animation: animateCollapsedSidebarMenu .1s $transition-mode forwards;
      }

      .sidebar__links {
        animation: animateCollapsedSidebarMenu .1s $transition-mode forwards;
      }

      .sidebar__options {
        animation: animateCollapsedSidebarMenu .1s $transition-mode forwards;
      }

      .sidebar__shopping-cart {
        animation: animateCollapsedSidebarMenu .1s $transition-mode forwards;
      }
    }

    .sidebar__header {
      width: 100%;
      transform: translateX(calc(100% + 2rem));
      
      @include flex(space-between);

      & > div {
        height: 3.5rem;
        cursor: pointer;
        user-select: none;
        width: calc(50% - .5rem);
        background-color: #fff;
        box-shadow: $box-shadow;
        border-radius: $border-radius;

        @include flex(center, center);

        & > i {
          font-size: 2rem;
        }
      }

      .sidebar__header-theme {
        
      }

      .sidebar__header-close {

      }
    }

    .sidebar__search {
      width: 100%;
      margin-top: 1rem;
      transform: translateX(calc(100% + 2rem));

      input {
        height: 3.5rem;
      }
    }

    .sidebar__links {
      flex: 1;
      width: 100%;
      margin: 1rem 0;
      padding: 0 1rem;
      background-color: #fff;
      box-shadow: $box-shadow;
      border-radius: $border-radius;
      transform: translateX(calc(100% + 2rem));

      .sidebar__links-header {
        margin-top: 1rem;
        font-size: .75rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      ul.sidebar__links-items {
        margin-top: 1rem;

        li.sidebar__links-item {

          .sidebar__links-item-link {
            padding: .5rem 0;

            @include flex(flex-start, center);

            .sidebar__links-item-icon {
              width: 2rem;
              height: 2rem;
              font-size: 1rem;
              box-shadow: $box-shadow;
              background-color: #fff;
              border-radius: calc($border-radius / 2);

              @include flex(center, center);
            }

            .sidebar__links-item-title {
              margin-left: .5rem;
            }
          }
        }
      }
    }

    .sidebar__options {
      width: 100%;
      transform: translateX(calc(100% + 2rem));
      
      @include flex(space-between);

      & > div {
        height: 3.5rem;
        cursor: pointer;
        width: calc(50% - .5rem);
        background-color: #fff;
        box-shadow: $box-shadow;
        border-radius: $border-radius;

        @include flex(center, center);

        & > i {
          font-size: 2rem;
        }
      }
    }

    .sidebar__shopping-cart {
      width: 100%;
      height: 6rem;
      cursor: pointer;
      margin-top: 1rem;
      background-color: #fff;
      box-shadow: $box-shadow;
      border-radius: $border-radius;
      transform: translateX(calc(100% + 2rem));
    }
  }
</style>