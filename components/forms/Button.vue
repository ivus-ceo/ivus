<template>
  <button @click="handleClick">
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
  button {
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
    // transition: .2s box-shadow;
    // box-shadow: 0 1px 5px 0 rgba(black, .2);

    &:hover,
    &:focus {
      // box-shadow: 0 5px 10px 0 rgba(black, .4);
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