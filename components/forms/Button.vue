<template>
  <button class="button" :class="{ 'button--is-loading': isLoading }" @click="handleClick">
    <div v-if="isLoading" class="button__loading">
      <div class="button__loading-title">{{ loadingTitle }}</div>
      <div class="button__loading-progress"></div>
    </div>

    <slot v-if="!isLoading"/>
  </button>
</template>

<script>
  export default {
    name: 'Button',

    props: {
      isLoading: {
        type: Boolean,
        default: false
      },
      loadingTitle: {
        type: String,
        default: 'Loading'
      },
      timeout: {
        type: [String, Number],
        default: 400,
      }
    },

    methods: {
      handleClick(e) {
        if (this.isLoading) return; 

        const ripple = document.createElement('span');

        ripple.classList.add('ripple')
        ripple.style.top = e.offsetY + 'px'
        ripple.style.left = e.offsetX + 'px'
        
        e.target.appendChild(ripple)

        this.$emit('buttonClick', e)

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
    border: none;
    color: #fff;
    outline: none;
    height: 3.5rem;
    cursor: pointer;
    overflow: hidden;
    font-weight: 700;
    position: relative;
    letter-spacing: 1px;
    box-shadow: $box-shadow;
    text-transform: uppercase;
    border-radius: $border-radius;
    background-color: $color-base;
    font-family: $font-family-regular;
    transition: .1s box-shadow $transition-mode,
                .1s background-color $transition-mode;

    @include flex(center, center);

    &.button--is-loading {
      padding: 0;
      pointer-events: none;
      
      .button__loading {
        width: 100%;
        height: 100%;
        user-select: none;
      
        @include flex(center, center);

        .button__loading-title {}

        .button__loading-progress {
          left: 0;
          bottom: 0;
          width: 50%;
          height: .4rem;
          position: absolute;
          background-color: lighten($color-base, 25);
          animation: buttonLoader 1.2s infinite;
        }
      }
    }

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