<template>
  <section class="auth">
    <div class="auth__inner">
      <div class="auth__header">
        <h1 class="auth__header-title">Create account</h1>
        <p class="auth__header-description">We'll create your free and brand new account.</p>
      </div>

      <div class="auth__form">
        <Form id="signup-form" action="/signup" @formSubmit="signup">
          <Input id="login" v-model="auth.login" name="login" type="text" icon="person" placeholder="Enter Name"/>
          <Input id="email" v-model="auth.email" name="email" type="text" icon="email" placeholder="Enter E-Mail"/>
          <Input id="password" v-model="auth.password" name="password" type="password" icon="lock" placeholder="Enter Password"/>

          <div class="auth__form-row">
            <Checkbox id="checkbox" v-model="auth.checkbox" name="checkbox" label="I agree with Terms and Privacy"/>
          </div>

          <Button>
            <i class="material-icons">login</i>
            <span>Signup</span>
          </Button>
        </Form>
      </div>

      <div class="auth__footer">
        <p>Already have an account?</p>
        <nuxt-link to="/auth/login">Login</nuxt-link>
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
          email: null,
          password: null,
          checkbox: null,
        },
      }
    },

    methods: {
      signup() {
        
      }
    }
  }
</script>

<style lang="scss">
  
</style>