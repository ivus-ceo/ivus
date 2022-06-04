<template>
  <BaseSection title="Create account" 
               subtitle="We'll create your free and brand new account." 
               class="section-auth">
    
    <div class="section-auth__form">
      <BaseForm action="/signup" class="section-auth__form-signup" @formSubmit="signup">
        <BaseInput id="email"
                    name="email"
                    icon="email" 
                    :alerts="auth.email.alerts" 
                    v-model="auth.email.value"
                    placeholder="Enter E-Mail"/>

        <BaseInput id="password"
                    name="password" 
                    type="password" 
                    icon="lock"
                    :alerts="auth.password.alerts"
                    v-model="auth.password.value"
                    placeholder="Enter Password"/>

        <BaseInput id="repeated-password"
                    name="repeatedPassword" 
                    type="password" 
                    icon="lock"
                    :alerts="auth.repeatedPassword.alerts" 
                    v-model="auth.repeatedPassword.value"
                    placeholder="Repeat Password"/>

        <div class="auth__form-row">
          <BaseCheckbox id="checkbox"
                    name="checkbox"
                    v-model="auth.checkbox" 
                    label="I agree with Terms and Privacy">
            <span>I agree with Terms and Privacy</span>
          </BaseCheckbox>
        </div>

        <BaseButton :isLoading="auth.button.isLoading">
          <i class="material-icons">login</i>
          <span>Signup</span>
        </BaseButton>
      </BaseForm>
    </div>

    <div class="section-auth__footer">
      <p>Already have an account?</p>
      <nuxt-link to="/auth/login">Login</nuxt-link>
    </div>
    
  </BaseSection>
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

        this.$store.commit('setUser', 123)

        // this.$fire.auth.createUserWithEmailAndPassword(this.auth.email.value, this.auth.password.value)          
        //   .then((userCredential) => {
        //     // console.log(userCredential, userCredential.user);
        //     this.$store.commit('setUser', userCredential.user)
        //     // var user = userCredential.user;
        //   })
        //   .catch((error) => {
        //     // var errorCode = error.code;
        //     // var errorMessage = error.message;
        //   });
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