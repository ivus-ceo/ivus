<template>
  <section class="login">
    <div class="login__header">
      <h2 class="login__header-title">Welcome back</h2>
      <p class="login__header-description">Please enter your credentials to sign in.</p>
    </div>

    <Form id="login-form" class="login__form" action="/login">
      <Input id="login" name="login" type="text" icon="person" placeholder="Enter Name"/>
      <Input id="password" name="password" type="password" icon="lock" placeholder="Enter Password"/>
      <Checkbox id="checkbox" name="checkbox" label="Remember Me"/>
    </Form>
  </section>
</template>

<script>
import Checkbox from '../../components/forms/Checkbox.vue'
  export default {
  components: { Checkbox },
    layout: 'public'
  }
</script>

<style lang="scss">
  section.login {
    

    .login__header {
      margin-top: 2rem;
      text-align: center;

      .login__header-title {
        margin-bottom: 1rem;
      }

      .login__header-description {
        margin: 0 auto;
        max-width: 12rem;
      }
    }

    .login__form {
      margin-top: 2rem;
    }
  }
</style>