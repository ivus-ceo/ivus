<template>
  <div class="input" :class="{ 'input--has-error': hasErrors }" ref="input">
    <div class="input__inner">
      <label v-if="icon" :for="id" class="input__label">
        <i :class="iconType">{{ icon }}</i>
      </label>

      <input :id="id" :name="name" :type="type" placeholder=" " class="input__input">

      <small class="input__placeholder">{{ placeholder }}</small>
    </div>

    <div :key="index" v-for="(error, index) in inputErrors" class="input__error">
      <div class="input__error-icon">
        <i class="material-icons-outlined">close</i>
      </div>
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Input',

    props: {
      id: String,
      name: String,
      icon: String,
      errors: Object,
      placeholder: String,
      type: {
        type: String,
        default: 'text'
      },
      iconType: {
        type: String,
        default: 'material-icons'
      },
    },

    methods: {
      handleInput(e) {
        this.$emit('input', e.target.value);
      }
    },

    computed: {
      inputErrors: function() {
        return (this.errors && this.errors[this.id].length > 0) ? this.errors[this.id] : [];
      },
      hasErrors: function() {
        return this.errors && this.errors[this.id].length > 0
      },
    }
  }
</script>

<style lang="scss">
  div.input {

    &.input--has-error {

      .input__inner {

        .input__input {
          
        }
      }
    }

    .input__inner {
      display: flex;
      position: relative;

      .input__label {
        opacity: 1;
        margin-right: .5rem;
        box-shadow: $box-shadow;
        background-color: #fff;
        border-radius: $border-radius;
        transition: opacity .1s $transition-mode;
  
        @include flex(center, center);
        @include fixed-size(3.5rem, 3.5rem);

        i {
          font-size: 1.5rem;
          transition: all $transition-time;
        }
      }

      .input__input {
        padding: 0;
        width: 100%;
        border: none;
        outline: none;
        height: 3.5rem;
        max-width: 100%;
        padding: 1.15rem 1rem 0;
        color: $color-dark-blue;
        box-shadow: $box-shadow;
        border-radius: $border-radius;
        transition: all $transition-time;
        font-family: $font-family-regular;

        &:focus ~ .input__placeholder,
        &:hover ~ .input__placeholder {
          top: .85rem;
          font-size: .75rem;
          color: rgba($color-dark-blue, .5);
        }

        &:not(&:placeholder-shown) ~ .input__placeholder {
          top: .85rem;
          font-size: .75rem;
          color: rgba($color-dark-blue, .5);
        }
      }

      .input__placeholder {
        top: 1.25rem;
        left: 5rem;
        position: absolute;
        pointer-events: none;
        transition: .1s $transition-mode;
      }
    }
    
    .input__error {
      padding: 1rem;
      color: #EA2027;
      margin-top: .5rem;
      font-weight: 600;
      background-color: #FBD2D4;
      border-radius: $border-radius;

      @include flex(flex-start, center);

      .input__error-icon {
        margin-right: .5rem;
        border-radius: $border-radius / 2;

        @include flex(center, center);

        i {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>