<script>
export default {
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
        }
    }
}
</script>

<template>
    <div class="login-card-container">
        <pv-card class="login-card">
          <template #title> {{$t("LogIn")}} </template>
          <template #content>
              <div class="form-fields">
                  <label for="username" class="block">{{ $t("Username") }}</label>
                  <pv-input-text v-model="username" id="username" type="text" class="w-full" aria-labelledby="username"></pv-input-text>

                  <label for="password" class="block mt-3">{{ $t("Password") }}</label>
                  <pv-password v-model="password" id="password" :toggle-mask="true" :feedback="false" class="w-full" input-class="w-full" aria-labelledby="password"></pv-password>
              </div>
              <div class="button-container">
                  <pv-button type="submit" label="Login" class="w-full mt-4"></pv-button>
              </div>
          </template>
            <template #footer>{{ $t("NoAccount") }}<router-link to="/Register">{{ $t("Register") }}</router-link></template>
    </pv-card>
    </div>
</template>

<style scoped>
* {
    /*outline: red dashed 1px*/
}

.login-card-container {
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
}

.login-card {
    display: flex;
    justify-content: center;
}

</style>