<template>
  <section class="auth">
    <div class="auth__inner">
      <div class="auth__header">
        <h1 class="auth__header-title">Welcome back</h1>
        <p class="auth__header-description">Please enter your credentials to sign in.</p>
      </div>

      <div class="auth__form">
        <Form class="login__form" action="/login" @formSubmit="login">
          <Input id="login" v-model="auth.login" name="login" type="text" icon="person" placeholder="Enter Name"/>
          <Input id="password" v-model="auth.password" name="password" type="password" icon="lock" placeholder="Enter Password"/>

          <div class="auth__form-row">
            <Checkbox id="checkbox" v-model="auth.checkbox" name="checkbox" label="Remember Me"/>
            <nuxt-link to="/auth/forgot">Forgot password</nuxt-link>
          </div>

          <Button>
            <i class="material-icons">login</i>
            <span>Login</span>
          </Button>
        </Form>
      </div>

      <div class="auth__socials">
        <div class="auth__socials-header">
          Or Continue With
        </div>

        <ul class="auth__socials-items">
          <li class="auth__socials-item">
            <img src="~/assets/icons/google.svg" alt="Google">
          </li>

          <li class="auth__socials-item">
            <img src="~/assets/icons/facebook.svg" alt="Facebook">
          </li>

          <li class="auth__socials-item">
            <img src="~/assets/icons/twitter.svg" alt="Twitter">
          </li>

          <li class="auth__socials-item">
            <img src="~/assets/icons/github.svg" alt="Github">
          </li>
        </ul>
      </div>

      <div class="auth__footer">
        <p>Don't have an account?</p>
        <nuxt-link to="/auth/signup">Signup For Free</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'public',

    data() {
      return {
        auth: {
          login: null,
          password: null,
          checkbox: null,
        },
      }
    },

    methods: {
      login() {
        
      }
    }
  }
</script>

<style lang="scss">
  
</style>