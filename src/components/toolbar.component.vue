<template>
    <pv-toolbar>
        <template #start>
            <img src="../assets/Logo UPC - color_bg.png" height="60" width="60" />
            <h2 class="app-name">UPDate</h2>
        </template>

        <template #end>
            <router-link to="/login">
                <pv-button icon="pi pi-user" severity="success" class="mr-2" />
            </router-link>
            <router-link to="/new-community">
                <pv-button icon="pi pi-users" severity="help" class="mr-2" />
            </router-link>
            <router-link to="/new-activity">
                <pv-button icon="pi pi-star" severity="warning" class="mr-2" />
            </router-link>
            <router-link to="/suscription">
                <pv-button icon="pi pi-users" severity="success" class="mr-2" />
            </router-link>
        </template>
    </pv-toolbar>
</template>

<script>
export default {
    name: "toolbar.component"
}
</script>

<style scoped>
.app-name {
    margin-left: 16px
}
</style>