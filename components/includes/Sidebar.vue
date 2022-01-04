<template>
  <!-- Start of sidebar -->
  <aside class="sidebar sidebar--show-sidebar" ref="sidebar">
    <div class="sidebar__close" @click="emitToggleSidebar">
      <i class="material-icons-outlined">close</i>
    </div>

    <div class="sidebar__avatar">
      <nuxt-link to="/profile">
        <img src="https://images.unsplash.com/photo-1640275986993-7076998713c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80" alt="">
      </nuxt-link>
    </div>

    <div class="sidebar__links">
      <nuxt-link to="/" class="sidebar__link">
        Home
        <!-- <i class="material-icons-round">home</i> -->
      </nuxt-link>

      <nuxt-link to="/shop" class="sidebar__link">
        Shop
        <!-- <i class="material-icons-round">shop</i> -->
      </nuxt-link>
    </div>

    <div class="sidebar__footer">
      <nuxt-link to="/logout" class="sidebar__link">
        Logout <i class="material-icons">logout</i>
      </nuxt-link>
    </div>
  </aside>
  <!-- End of sidebar -->
</template>

<script>
  export default {
    name: 'Sidebar',

    methods: {
      emitToggleSidebar(e) {
        this.$nuxt.$emit('eventToggleSidebar');
      },
      
      toggleSidebar() {
        const sidebar = this.$refs.sidebar;
        const timeout = 700;

        if (sidebar.classList.contains('sidebar--show-sidebar')) {
          sidebar.classList.add('sidebar--hide-sidebar');
          sidebar.classList.remove('sidebar--show-sidebar');
          
          setTimeout(() => { 
            sidebar.classList.remove('sidebar--hide-sidebar');
          }, timeout);
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
        // animation: animateExpandedSidebarMenu $transition-sidebar forwards;
      }

      .sidebar__avatar {
        // animation: animateExpandedSidebarMenu $transition-sidebar .15s forwards;
      }
      
      .sidebar__links {
        // animation: animateExpandedSidebarMenu $transition-sidebar .25s forwards;
      }

      .sidebar__footer {
        // animation: animateExpandedSidebarMenu $transition-sidebar .35s forwards;
      }
    }

    &.sidebar--hide-sidebar {
      right: calc(-100vw + 39.5% + 2rem);

      .sidebar__close {
        // animation: animateCollapsedSidebarMenu $transition-sidebar .35s forwards;
      }

      .sidebar__avatar {
        // animation: animateCollapsedSidebarMenu $transition-sidebar .25s forwards;
      }
      
      .sidebar__links {
        // animation: animateCollapsedSidebarMenu $transition-sidebar .15s forwards;
      }

      .sidebar__footer {
        // animation: animateCollapsedSidebarMenu $transition-sidebar forwards;
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

      &:hover,
      &:focus {
        color: #fff;
        background-color: $color-base;
        box-shadow: $box-shadow-active;
      }

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
      padding: .5rem 0;
      margin: 1.5rem 0;
      text-align: right;
      position: relative;
      flex-direction: column;
      box-shadow: $box-shadow;
      background-color: #fff;
      border-radius: $border-radius;

      @include flex(flex-start, flex-end);
    }

    .sidebar__footer {
      width: 100%;
      position: relative;
    }

    .sidebar__link {
      width: 100%;
      padding: 1rem 0;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      transition: $transition-time $transition-mode;
      
      @include flex(center, center);

      &.nuxt-link-active {
        font-weight: bold;
      }

      i {
        font-size: 1rem;
      }
    }
  }
</style>