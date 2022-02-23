<template>
  <section class="login">
    <div class="login__inner">
      <div class="login__header">
        <h1 class="login__header-title">Welcome back</h1>
        <p class="login__header-description">Please enter your credentials to sign in.</p>
      </div>

      <div class="login__form">
        <Form id="login-form" action="/login" @formSubmit="login">
          <Input id="login" v-model="auth.login" name="login" type="text" icon="person" placeholder="Enter Name"/>
          <Input id="password" v-model="auth.password" name="password" type="password" icon="lock" placeholder="Enter Password"/>

          <div class="login__form-row">
            <Checkbox id="checkbox" v-model="auth.checkbox" name="checkbox" label="Remember Me"/>
            <nuxt-link to="/auth/forgot">Forgot password</nuxt-link>
          </div>

          <Button>
            <i class="material-icons">login</i>
            <span>Login</span>
          </Button>
        </Form>
      </div>

      <div class="login__socials">
        <div class="login__socials-header">
          Or Continue With
        </div>

        <ul class="login__socials-items">
          <li class="login__socials-item">
            <img src="~/assets/icons/google.svg" alt="Google">
          </li>

          <li class="login__socials-item">
            <img src="~/assets/icons/facebook.svg" alt="Facebook">
          </li>

          <li class="login__socials-item">
            <img src="~/assets/icons/twitter.svg" alt="Twitter">
          </li>

          <li class="login__socials-item">
            <img src="~/assets/icons/github.svg" alt="Github">
          </li>
        </ul>
      </div>

      <div class="login__footer">
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
        console.log(this.auth.login, this.auth.password, this.auth.checkbox);
      }
    }
  }
</script>

<style lang="scss">
  section.login {
    height: 100%;
    
    .login__inner {
      height: 100%;

      .login__header {
        margin-top: 6rem;
        text-align: center;

        .login__header-title {
          margin-bottom: 1rem;
        }

        .login__header-description {
          margin-bottom: 2rem;
        }
      }

      .login__form {
        margin: 0 auto;
        max-width: 21rem;

        #login-form {
          width: 100%;

          .input {
            margin-bottom: 1rem;
          }

          .login__form-row {
            margin-top: 2rem;
            
            @include flex(space-between);
          }

          .button {
            margin-top: 1rem;
          }
        }
      }

      .login__socials {
        margin: 0 auto;
        max-width: 21rem;
        margin-top: 4rem;

        .login__socials-header {
          font-weight: 600;
          text-align: center;
          text-transform: uppercase;

          @include flex(space-between, center);

          &:before, 
          &:after {
            content: '';
            width: 4.05rem;
            height: .15rem;
            display: block;
            background-color: $color-dark-blue;
          }
        }

        ul.login__socials-items {
          margin-top: 1rem;

          @include flex(center);

          .login__socials-item {
            cursor: pointer;
            margin-right: 1rem;
            box-shadow: $box-shadow;
            background-color: #fff;
            border-radius: $border-radius;

            @include square(3rem);
            @include flex(center, center);

            &:last-child {
              margin-right: 0;
            }

            &:hover img,
            &:focus img {
              filter: invert(33%) sepia(81%) saturate(3748%) hue-rotate(324deg) brightness(100%) contrast(106%);
            }

            img {
              width: 1rem;
              transition: $transition-time $transition-mode;
              filter: invert(7%) sepia(40%) saturate(5410%) hue-rotate(222deg) brightness(82%) contrast(115%);
            }
          }
        }
      }

      .login__footer {
        margin-top: 1rem;
        text-align: center;
      }
    }
  }
</style>