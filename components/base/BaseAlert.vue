<template>
  <div class="alert" ref="alert" :class="alertClass" role="alert">
    <div class="alert__icon">
      <i :class="iconType">{{ alertIcon }}</i>
    </div>

    <slot/>

    <div class="alert__close" @click="handleClick">
      <i class="material-icons">close</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Alert',

    props: {
      title: String,
      type: String,
      icon: String,
      iconType: {
        type: String,
        default: 'material-icons'
      },
    },

    methods: {
      handleClick() {
        this.$refs.alert.remove();
      }
    },

    computed: {
      alertClass() {
        switch (this.type) {
          case 'success':
            return 'alert--success'
            break;

          case 'warning':
            return 'alert--warning';
            break;

          case 'danger':
            return 'alert--danger';
            break;

          case 'info':
            return 'alert--info';
            break;
        
          default:
            return 'alert--default';
            break;
        }
      },

      alertIcon() {
        switch (this.type) {
          case 'success':
            return 'check_circle'
            break;

          case 'warning':
            return 'priority_high';
            break;

          case 'danger':
            return 'error';
            break;

          case 'info':
            return 'info';
            break;
        
          default:
            return this.icon;
            break;
        }
      }
    }
  }
</script>

<style lang="scss">
  div.alert {
    padding: 1rem;
    font-weight: 600;
    min-height: 3.5rem;
    border-radius: $border-radius;

    @include flex(flex-start, center);

    &.alert--default {
      padding: 0;
    }

    &.alert--success {
      color: darken(#A3CB38, 10);
      background-color: #EDF5D7;
    }

    &.alert--warning {
      color: darken(#F79F1F, 5);
      background-color: #FDECD2;
    }

    &.alert--danger {
      color: #EA2027;
      background-color: #FBD2D4;
    }

    &.alert--info {
      color: #0652DD;
      background-color: #CDDCF8;
    }

    & > *:nth-child(2) {
      flex: 1;
    }

    i {
      font-size: 1.5rem;
    }

    .alert__icon {
      margin-right: .5rem;
    }
    
    .alert__close {
      cursor: pointer;
    }
  }
</style>