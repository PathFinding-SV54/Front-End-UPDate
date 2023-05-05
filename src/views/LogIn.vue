<script setup>

</script>

<template>
    <header>
        <pv-button class="translate-x-200" type="submit" label="Register"></pv-button>
    </header>
    <div class=" flex  align-items-center justify-content-center align-content-center flex-wrap">
        <pv-card>
          <template #title> {{$t("LogIn")}} </template>
          <template #content>
            <p class="mb-1">{{ $t("Username") }}</p>
              <pv-input-text type="text" v-model="value"></pv-input-text>
              <p class="mb-1">{{ $t("Password") }}</p>
              <pv-password v-model="value" toggle-mask :feedback="false"></pv-password>
              <p></p>
              <pv-button type="submit" label="Submit"></pv-button>
          </template>
            <template #footer>{{ $t("NoAccount") }}<router-link to="/Register">{{ $t("Register") }}</router-link></template>
    </pv-card>
    </div>
</template>

<style scoped>

</style>