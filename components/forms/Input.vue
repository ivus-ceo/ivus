<template>
  <div class="input">
    <input class="input__insert"
           :type="this.type" 
           :id="this.id">
    <label class="input__label" 
           :for="this.id">
           <i :class="this.labelIconType">{{ this.labelIcon }}</i>
           {{ this.label }}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Input',

    props: {
      id: String,
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      labelIconType: {
        type: String,
        default: 'material-icons'
      },
      labelIcon: String,
    }
  }
</script>

<style lang="scss">
  div.input {
    position: relative;

    .input__label {
      top: 0;
      left: 0;
      opacity: 1;
      padding: 1rem;
      font-size: 1rem;
      position: absolute;
      pointer-events: none;
      transition: opacity .1s $transition-mode;

      @include flex(flex-start, center);

      i {
        font-size: 1rem;
        margin-right: .5rem;
      }
    }

    .input__insert {
      padding: 0;
      height: 3rem;
      border: none;
      outline: none;
      padding: 1rem;
      max-width: 100%;
      box-shadow: $box-shadow;
      transition: all $transition-time;
      border-radius: $border-radius;
      font-family: $font-family-regular;

      &:focus ~ .input__label {
        opacity: 0;
      }
    }
  }
</style>