<template>
  <div class="checkbox">
    <div class="checkbox__box">
      <input class="checkbox__input"
            :id="id"
            :name="name"
            type="checkbox">
      <i class="checkbox__checkmark material-icons">check</i>
    </div>
    <label class="checkbox__label" :for="id">{{ this.label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'Input',

    props: {
      id: String,
      name: String,
      label: String
    }
  }
</script>

<style lang="scss">
  div.checkbox {
    @include flex(flex-start, center);

    .checkbox__box {
      width: 1rem;
      height: 1rem;
      position: relative;
      border-radius: .3rem;
      background-color: $color-base;

      @include fixed-size(1rem, 1rem);

      .checkbox__input {
        margin: 0;
        opacity: 0;
        width: 14px;
        height: 15px;
      }

      .checkbox__checkmark {
        top: 0;
        left: 0;
        display: none;
        color: #fff;
        font-size: .75rem;
        position: absolute;
        pointer-events: none;
      }
    }
  }
</style>