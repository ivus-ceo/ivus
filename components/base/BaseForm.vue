<template>
  <form :id="id" :action="action" @submit.prevent="handleSubmit">
    <slot/>
  </form>
</template>

<script>
  export default {
    name: 'BaseForm',

    props: {
      id: String,
      action: String,
    },

    methods: {
      handleSubmit(e) {
        this.$emit('formSubmit', e);
      }
    }
  }
</script>