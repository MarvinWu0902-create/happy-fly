<template>
    <div class="row">

        <!-- <img class="col-6 my-16" src="@/assets/images/about-2.jpg" alt=""> -->
        <slot name="left-img"></slot>
        <div class="col-6 d-flex justify-content-center align-items-center">
            <!-- :class="{ 'fs-64': isHover, 'fs-48': !isHover, 'text-orange': isHover }" -->
            <span class="material-symbols-outlined fs-64">
                <!-- partly_cloudy_day -->
                <slot name="left-icon"></slot>
            </span>
        </div>
    </div>

    <div class="row">
        <div class="col-6 d-flex justify-content-center align-items-center">
            <span class="material-symbols-outlined fs-64">
                <!-- diversity_1 -->
                <slot name="right-icon"></slot>
            </span>
        </div>
        <!-- <img class="col-6 my-16" src="@/assets/images/about-3.jpg" alt=""> -->
        <slot name="right-img"></slot>
    </div>
</template>

<script setup>
// import { onMounted, ref, watch } from 'vue'
// const isHover = ref(false);

// onMounted(() => {
//     setInterval(() => {
//         isHover.value = !isHover.value;
//     }, 500);
// });

</script>

<style lang="scss" scoped>
.transition-all {
    transition: all 0.5s ease-in-out;
}
</style>