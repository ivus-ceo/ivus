<template>
  <BaseSection title="Welcome back" 
               subtitle="Please enter your credentials to sign in." 
               class="section-auth">
    
    <div class="section-auth__form">
      <BaseForm action="/login" class="section-auth__form-login" @formSubmit="login">
        <BaseInput id="login"
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

        <div class="auth__form-row">
          <BaseCheckbox id="checkbox"
                    name="checkbox"
                    v-model="auth.checkbox" 
                    label="I agree with Terms and Privacy">
            <span>Remember Me</span>
          </BaseCheckbox>
          
          <nuxt-link to="/auth/forgot">Forgot password</nuxt-link>
        </div>

        <BaseButton :isLoading="auth.button.isLoading">
          <i class="material-icons">login</i>
          <span>Login</span>
        </BaseButton>
      </BaseForm>
    </div>

    <div class="section-auth__socials">
      <div class="auth__socials-header">
        Or Continue With
      </div>

      <ul class="auth__socials-items">
        <li class="auth__socials-item">
          <img src="@/assets/icons/google.svg" alt="Google">
        </li>

        <li class="auth__socials-item">
          <img src="@/assets/icons/facebook.svg" alt="Facebook">
        </li>

        <li class="auth__socials-item">
          <img src="@/assets/icons/twitter.svg" alt="Twitter">
        </li>

        <li class="auth__socials-item">
          <img src="@/assets/icons/github.svg" alt="Github">
        </li>
      </ul>
    </div>

    <div class="section-auth__footer">
      <p>Don't have an account?</p>
      <nuxt-link to="/auth/signup">Signup For Free</nuxt-link>
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
            alerts: [],
          },
          password: {
            value: '',
            alerts: [],
          },
          checkbox: {
            value: '',
          },
          button: {
            isLoading: false,
          }
        },
      }
    },

    methods: {
      login() {
        
      }
    }
  }
</script>