<template>
  <div class="input" :class="{ 'input--has-error': hasErrors, 'input--has-not-icon': hasIcon }" ref="input">
    <div class="input__inner">
      <label v-if="icon" :for="id" class="input__label">
        <i :class="iconType">{{ icon }}</i>
      </label>

      <input :id="id" :name="name" :type="type" :value="value" placeholder=" " class="input__input" @input="handleInput">

      <small class="input__placeholder">{{ placeholder }}</small>
    </div>
    
    <BaseAlert icon="contact_phone" :type="alert.type" :key="index" v-for="(alert, index) in alerts" class="input__alert">
      <span>{{ alert.message }}</span>
    </BaseAlert>
  </div>
</template>

<script>
  export default {
    name: 'Input',

    props: {
      id: String,
      name: String,
      icon: String,
      placeholder: String,
      value: String,
      alerts: {
        type: Array,
        default: [],
      },
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
      hasErrors() {
        for (const alert of this.alerts) {          
          if (alert.type === 'danger') {
            return true;
          }
        }

        return false;
      },

      hasIcon() {
        if (!this.icon) return true;
      },
    }
  }
</script>

<style lang="scss">
  div.input {

    &.input--has-error {}

    &.input--has-not-icon {

      .input__inner {

        .input__placeholder {
          left: 1rem;
          top: calc(50% - .5rem);
          position: absolute;
          pointer-events: none;
          transition: .1s $transition-mode;
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

        &:focus ~ .input__placeholder {
          top: .85rem;
          font-size: .75rem;
          color: rgba($color-dark-blue, .75);
        }

        &:not(&:placeholder-shown) ~ .input__placeholder {
          top: .85rem;
          font-size: .75rem;
          color: rgba($color-dark-blue, .75);
        }
      }

      .input__placeholder {
        top: calc(50% - .5rem);
        left: 5rem;
        position: absolute;
        pointer-events: none;
        transition: .1s $transition-mode;
      }
    }
    
    .input__alert {
      margin-top: .5rem;
    }
  }
</style>