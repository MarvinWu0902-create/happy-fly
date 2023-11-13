<template>
    <div class="card border-0 my-24 rounded-3 bg-neutral-5 position-relative">
        <div class="position-absolute top-30 top-lg-40 start-50 translate-middle bg-neutral-1 bg-opacity-50 rounded p-12">
            <h5 class="text-center fs-24 fs-lg-36 text-neutral-3 fw-bold">{{ props.title }}</h5>
            <p class="text-center fs-16 fs-lg-24 text-neutral-3 ">{{ props.subtitle }}</p>
        </div>

        <img :src="props.image" class="card-img-top img-left rounded-circle rounded-lg-pill px-12 py-16" alt="tailand">

        <div class="card-body">
            <h5 class="card-title">{{ props.articleTitle }}</h5>
            <p class="card-text">{{ props.content }}</p>
        </div>

        <RouterLink class="d-flex ps-16 pb-16 fw-bold" :to="`/blogevent/泰國必買伴手禮`">
            <!-- props.title -->
            <span class="material-symbols-outlined fw-bold">
                arrow_forward 
            </span>
            完整文章
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
const props = defineProps({
    title: {
        type: String,
        require: true,
        default: ''
    },
    subtitle: {
        type: String,
        require: true,
        default: ''
    },
    articleTitle: {
        type: String,
        require: true,
        default: ''
    },
    content: {
        type: String,
        require: true,
        default: ''
    },
    image: {
        type: String,
        require: true,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
.img-left{
    height: 500px;
    object-fit: cover;
}
</style>