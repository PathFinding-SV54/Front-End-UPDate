<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Toolbar from "@/components/toolbar.component.vue";
import Footer from "@/components/footer.component.vue";
</script>

<template>
    <header>
        <Toolbar></Toolbar>
    </header>

    <main>
        <RouterView />
    </main>

    <footer>
        <Footer></Footer>
    </footer>

</template>

<style scoped>
header {
    position: sticky;
    top: 8px;
}
main {
    margin-top: 10px;
    margin-bottom: 80px;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
