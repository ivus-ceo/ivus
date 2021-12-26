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
  aside.sidebar {
    top: 2rem;
    display: flex;
    position: absolute;
    padding-right: 2rem;
    z-index: $z-index - 1;
    height: calc(100vh - 8rem);
    width: calc(100vw - 39.5% - 2rem);
    right: calc(-100vw + 39.5% + 2rem);
    flex-direction: column;
    align-items: flex-end;

    &.sidebar--show-sidebar {
      right: 0;
    }

    .sidebar__close {
      cursor: pointer;
      user-select: none;
      box-shadow: $box-shadow;
      background-color: #fff;
      border-radius: $border-radius;

      @include flex(center);
      @include square(3rem);

      i {
        font-size: 2rem;
      }
    }

    .sidebar__avatar {
      width: 3.5rem;
      height: 3.5rem;
      margin-top: 1.5rem;
      margin-right: .5rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        outline: .5rem solid #fff;
      }
    }
  }
</style>