<template>
  <div class="modal">
    <div class="modal__inner">

    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  div.modal {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    position: fixed;
    z-index: $z-index;
    align-items: center;
    justify-content: center;
    background-color: rgba(#F79F1F, .5);

    &.modal--show-modal {
      display: flex;
    }
  }
</style>