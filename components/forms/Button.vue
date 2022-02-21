<template>
  <button class="button" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'Button',

    props: {
      timeout: {
        type: [String, Number],
        default: 400,
      }
    },

    methods: {
      handleClick(e) {
        const ripple = document.createElement('span');

        ripple.classList.add('ripple')
        ripple.style.top = e.offsetY + 'px'
        ripple.style.left = e.offsetX + 'px'
        
        e.target.appendChild(ripple)

        this.$emit('buttonClick')

        setTimeout(() => {
          ripple.remove()
        }, parseInt(this.timeout))
      }
    }
  }
</script>

<style lang="scss">
  .button {
    width: 100%;
    height: 3rem;
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    font-weight: 700;
    position: relative;
    box-shadow: $box-shadow;
    text-transform: uppercase;
    border-radius: $border-radius;
    background-color: $color-base;
    transition: .1s box-shadow $transition-mode;

    @include flex(center, center);

    i {
      font-size: 1rem;
      margin-right: .5rem;
      pointer-events: none;
    }

    span {
      font-size: 1rem;
      pointer-events: none;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 0 10px rgba($color-base, 0.5);
    }

    span.ripple {
      border-radius: 50%;
      position: absolute;
      pointer-events: none;
      background-color: #fff;
      animation: fadeOutGrow $transition-time linear;
      transform: translate(-50%, -50%);
    }
  }
</style>