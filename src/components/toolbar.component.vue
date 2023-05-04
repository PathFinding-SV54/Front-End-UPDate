<template>
    <pv-toolbar>
        <template #start>
            <img src="../assets/Logo UPC - color_bg.png" height="60" width="60" />
            <h2 class="app-name">UPDate</h2>
        </template>

        <template #end>
            <pv-button icon="pi pi-user" severity="success" class="mr-2" />
            <pv-button icon="pi pi-users" severity="help" class="mr-2" />
            <pv-button icon="pi pi-star" severity="warning" />
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