<template>
  <section class="auth">
    <div class="auth__inner">
      <div class="auth__header">
        <h1 class="auth__header-title">Create account</h1>
        <p class="auth__header-description">We'll create your free and brand new account.</p>
      </div>

      <div class="auth__form">
        <Form class="signup__form" action="/signup" @formSubmit="signup">
          <Input id="email" 
                 :alerts="auth.email.alerts" 
                 v-model="auth.email.value"
                 name="email" type="text" 
                 icon="email" 
                 placeholder="Enter E-Mail"/>
          
          <Input id="password" 
                 :alerts="auth.password.alerts" 
                 v-model="auth.password.value"
                 name="password" 
                 type="password" 
                 icon="lock" 
                 placeholder="Enter Password"/>
          
          <Input id="repeated-password" 
                 :alerts="auth.repeatedPassword.alerts" 
                 v-model="auth.repeatedPassword.value"
                 name="repeatedPassword" 
                 type="password" 
                 icon="lock" 
                 placeholder="Repeat Password"/>

          <div class="auth__form-row">
            <Checkbox id="checkbox" 
                      v-model="auth.checkbox" 
                      name="checkbox" 
                      label="I agree with Terms and Privacy"/>
          </div>

          <Button :isLoading="auth.button.isLoading">
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
          email: {
            value: '',
            alerts: []
          },
          password: {
            value: '',
            alerts: []
          },
          repeatedPassword: {
            value: '',
            alerts: []
          },
          checkbox: {
            value: '',
            alerts: []
          },
          button: {
            isLoading: false,
          }
        },
      }
    },

    methods: {
      signup() {
        this.auth.button.isLoading = true;

        if (this.validateSignupForm()) {
          this.auth.button.isLoading = false;
          return;
        }

        this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)          
          .then((userCredential) => {
            var user = userCredential.user;
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      },

      validateSignupForm() {
        let hasErrors = false;

        if (this.auth.password.value !== this.auth.repeatedPassword.value) {
          hasErrors = true;       
          this.auth.repeatedPassword.alerts.push({ type: 'danger', message: `Passwords don't match` });
        }

        return hasErrors;
      }
    }
  }
</script>