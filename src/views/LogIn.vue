<script setup>

</script>

<template>
    <header>
        <pv-button class="translate-x-200" type="submit" label="Register"></pv-button>
    </header>
    <div class=" flex  align-items-center justify-content-center align-content-center flex-wrap">
        <pv-card>
          <template #title> Log In </template>
          <template #content>
            <p class="mb-1">Username</p>
              <pv-input-text type="text" v-model="value"></pv-input-text>
              <p class="mb-1">Password</p>
              <pv-password v-model="value" toggle-mask :feedback="false"></pv-password>
              <p></p>
              <pv-button type="submit" label="Submit"></pv-button>
          </template>
            <template #footer>Don't have an account? <router-link to="/Register">Register</router-link></template>
    </pv-card>
    </div>
</template>

<style scoped>

</style>