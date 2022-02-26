<template>
  <section class="auth">
    <div class="auth__inner">
      <div class="auth__header">
        <h1 class="auth__header-title">Create account</h1>
        <p class="auth__header-description">We'll create your free and brand new account.</p>
      </div>

      <div class="auth__form">
        <Form class="signup__form" action="/signup" @formSubmit="signup">
          <Input id="email" :errors="auth.errors" v-model="auth.email" name="email" type="text" icon="email" placeholder="Enter E-Mail"/>
          <Input id="password" :errors="auth.errors" v-model="auth.password" name="password" type="password" icon="lock" placeholder="Enter Password"/>
          <Input id="repeated-password" :errors="auth.errors" v-model="auth.repeatedPassword" name="repeatedPassword" type="password" icon="lock" placeholder="Repeat Password"/>

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
          email: null,
          password: null,
          repeatedPassword: null,
          checkbox: null,
          // errors: {
          //   'email': ['Email incorrect', 'Your email sucks'],
          //   'password': ['Password incorrect'],
          //   'repeated-password': ['Password incorrect again']
          // },
        },
      }
    },

    methods: {
      signup() {
        // this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)          
        //   .then((userCredential) => {
        //     // Signed in 
        //     var user = userCredential.user;
        //     console.log(userCredential);
        //   })
        //   .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(error);
        //   });
      },

      isPasswordsMatch() {
        return ;
      },

      isCheckboxChecked() {
        return this.auth.checkbox;
      },

      getValidationErrors() {
        if (this.auth.password !== this.auth.repeatedPassword) {
          
        }

        // this.auth.errors.push({ id: 'email', message: 'asdasdsaadsad' });
      },
    }
  }
</script>

<style lang="scss">
  
</style>