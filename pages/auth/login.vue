<template>
  <section class="login">
    <div class="login__inner">
      <div class="login__header">
        <h1 class="login__header-title">Welcome back</h1>
        <p class="login__header-description">Please enter your credentials to sign in.</p>
      </div>

      <div class="login__form">
        <Form id="login-form" action="/login">
          <Input id="login" name="login" type="text" icon="person" placeholder="Enter Name"/>
          <Input id="password" name="password" type="password" icon="lock" placeholder="Enter Password"/>

          <div class="login__form-row">
            <Checkbox id="checkbox" name="checkbox" label="Remember Me"/>
            <nuxt-link to="/auth/forgot">Forgot password</nuxt-link>
          </div>

          <Button>
            <i class="material-icons">login</i>
            <span>Login</span>
          </Button>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'public'
  }
</script>

<style lang="scss">
  section.login {

    .login__inner {
      display: flex;
      padding: 0 5rem;
      flex-direction: column;
      height: calc(100vh - 5rem);

      .login__header {
        width: 100%;
        margin-top: 5rem;
        text-align: center;

        .login__header-title {
          font-weight: bolder;
        }

        .login__header-description {
          margin-top: 1rem;
        }
      }

      .login__form {
        width: 100%;
        margin-top: 2rem;

        @include flex(center);

        #login-form {
          width: 100%;
        }

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
  }
</style>