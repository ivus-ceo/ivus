<template>
  <section class="section">
    <div class="section__inner">
      <div class="section__header">
        <h1 v-if="title" class="section__header-title">{{ title }}</h1>
        <p v-if="subtitle" class="section__header-subtitle">{{ subtitle }}</p>
      </div>

      <div class="section__content">
        <slot/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BaseSection',
    
    props: {
      title: String,
      subtitle: String,
    }
  }
</script>