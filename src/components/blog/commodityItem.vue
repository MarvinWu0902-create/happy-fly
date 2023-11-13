<template>

        <div class="card border-0 my-24 rounded-3 bg-neutral-5 mx-8 mx-md-0 w-100">

            <div class="card-header bg-white text-center p-0" v-show="props.order === 0">
                <div class="d-flex justify-content-center align-items-center">
                    <span class="material-symbols-outlined fs-64 text-primary">
                        directions_run
                    </span>
                    <h5 class="fs-16 fs-md-36 mb-0">精選旅程</h5>
                </div>
            </div>

            <div class="overflow-hidden">
                <img :src="props.image" class="card-img-top img-cover img-hover" alt="">
            </div>
            <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <div class="d-flex flex-column align-items-center">
                    <h5 class="card-title text-center fw-bold">{{ props.title }}</h5>
                    <p class="card-text mb-16">
                        {{ props.subtitle }}
                    </p>
                </div>
                <!-- <a href="blogEvent.html" class="btn btn-primary w-100 w-lg-50 text-neutral-5  fw-bold">{{ props.time }}</a> -->
                <RouterLink class="btn btn-primary w-100 w-lg-50 text-neutral-5  fw-bold" :to="'/itineraryDetail/合掌村夢幻點燈'">
                    {{ props.time }}
                </RouterLink>
            </div>
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
    time: {
        type: String,
        require: true,
        default: ''
    },
    image: {
        type: String,
        require: true,
        default: ''
    },
    order: {
        type: Number,
        require: true,
        default: 0
    }
});
</script>

<style lang="scss" scoped>
.img {
    &-cover {
        height: 300px;
        object-fit: cover;
    }

    &-hover:hover {
        transform: scale(1.2);
        transition: 0.3s ease-in;
    }
}
</style>