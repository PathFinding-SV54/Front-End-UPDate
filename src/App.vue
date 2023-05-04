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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
main {
    margin-top: 110px;
    margin-bottom: 100px;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
