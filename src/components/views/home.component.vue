<template>
    <div class="home-banner grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1">{{ $t("New experience") }}</span>
                <div class="text-6xl text-primary font-bold mb-3">{{ $t("College life") }}</div>
                <p class="mt-0 mb-4 text-700 line-height-3">{{ $t("Discover,Plan & Friends") }}</p>

                <router-link to="/login">
                    <pv-button label="Sign in" type="button" class="mr-3 p-button-raised"></pv-button>
                </router-link>

                <router-link to="/signup">
                    <pv-button label="Sign up" type="button" class="p-button-outlined"></pv-button>
                </router-link>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
            <img src="src/assets/college-friends-hanging.jpg" alt="Image" class="home-image md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
</template>

<script>
export default {
    name: "home.component",
}
</script>

<style scoped>
.home-banner {
    height: 50vh;
    min-height: 600px;
    max-height: 800px;
}

.home-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>