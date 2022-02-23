<template>
  <div class="input">
    <input class="input__input"
           :id="id"
           :name="name"
           :type="type" 
           :placeholder="placeholder"
           @input="handleInput">
           
    <label v-if="this.icon" class="input__label" 
           :for="id">
           <i :class="iconType">{{ this.icon }}</i>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Input',

    props: {
      id: String,
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      iconType: {
        type: String,
        default: 'material-icons'
      },
      icon: String,
    },

    methods: {
      handleInput(e) {
        this.$emit('input', e.target.value);
      }
    },
  }
</script>

<style lang="scss">
  div.input {
    display: flex;
    position: relative;

    .input__label {
      order: 1;
      opacity: 1;
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
      margin-right: .5rem;
      box-shadow: $box-shadow;
      background-color: #fff;
      border-radius: $border-radius;
      transition: opacity .1s $transition-mode;

      @include flex(center, center);
      @include fixed-size(3rem, 3rem);

      i {
        font-size: 1.2rem;
        transition: all $transition-time;
      }
    }

    .input__input {
      order: 2;
      padding: 0;
      width: 100%;
      height: 3rem;
      border: none;
      outline: none;
      padding: 1rem;
      max-width: 100%;
      color: $color-dark-blue;
      box-shadow: $box-shadow;
      transition: all $transition-time;
      border-radius: $border-radius;
      font-family: $font-family-regular;

      &::placeholder {
        color: $color-dark-blue;
      }

      &:focus ~ .input__label i,
      &:hover ~ .input__label i {
        color: $color-base;
      }
    }
  }
</style>