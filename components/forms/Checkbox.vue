<template>
  <div class="checkbox" ref="checkbox">
    <div class="checkbox__box" @click.stop="handleClick">
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
    },

    methods: {
      handleClick(e) {
        const checkbox = this.$refs.checkbox;
        const input = checkbox.querySelector('input');

        (input.checked) ? checkbox.classList.add('checkbox--active') : checkbox.classList.remove('checkbox--active');

        this.$emit('checkboxClick');
      }
    }
  }
</script>

<style lang="scss">
  div.checkbox {
    @include flex(flex-start, center);

    &.checkbox--active {

      .checkbox__box {
        border: none;
        background-color: $color-base;
        outline: .25rem solid $color-base-accent;
      }
    }

    .checkbox__box {
      width: 1rem;
      height: 1rem;
      position: relative;
      border-radius: .3rem;
      border: .15rem solid $color-base;
      transition: .1s $transition-mode;

      @include fixed-size(1rem, 1rem);

      .checkbox__input {
        margin: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;

        &:checked + .checkbox__checkmark {
          display: block;
        }
      }

      .checkbox__checkmark {
        top: 0;
        left: 0;
        display: none;
        color: #fff;
        font-size: .75rem;
        position: absolute;
        pointer-events: none;
        transform: translate(calc(50% - .25rem), calc(50% - .25rem));
      }
    }

    .checkbox__label {
      cursor: pointer;
      margin-left: .5rem;
    }
  }
</style>