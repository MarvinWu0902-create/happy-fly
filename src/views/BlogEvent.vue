<template>
    <div>
        <searchArticle />
        <div class="container">
            <div class="row">
                <ul class="col-12 col-md-8 my-48 d-flex flex-column justify-content-between list-unstyled">
                    <li>
                        <div class="card border-0 my-24 rounded-3 bg-neutral-5">

                            <div class="card-header bg-white text-center p-0">
                                <h1 class="card-title">{{ eventData.articleTitle }}</h1>
                            </div>
                            <img :src="eventData.image" class="card-img-top img-left px-12 py-16" alt="tailand">

                            <div class="card-body">
                                <p class="card-text">{{ eventData.content }}</p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div class="card border-0 my-24 rounded-3 bg-neutral-5">

                            <img :src="eventData.info[0].images[0].url" class="card-img-top img-left px-12 py-16"
                                alt="food">

                            <div class="card-body">
                                <p class="card-text">{{ eventData.info[0].content }}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card border-0 my-24 rounded-3 bg-neutral-5">

                            <div class="d-flex flex-column flex-lg-row">

                                <img class="img-left w-100 w-lg-50 p-16" :src="eventData.info[1].images[0].url" alt="">
                                <img class="img-left w-100 w-lg-50 p-16" :src="eventData.info[1].images[1].url" alt="">

                            </div>

                            <div class="card-body">
                                <p class="card-text">{{ eventData.info[1].content }}</p>
                            </div>

                        </div>
                    </li>
                </ul>

                <div class="container d-block d-md-none">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <a class="d-flex justify-content-center align-items-center fs-16 fs-lg-36 mx-16 mx-lg-48"
                                href="#">
                                <span class="material-symbols-outlined fs-16 mx-16">
                                    keyboard_double_arrow_left
                                </span>上一頁</a>
                            <a class="d-flex justify-content-center align-items-center fs-16 fs-lg-36 mx-16 mx-lg-48"
                                href="#">
                                下一頁
                                <span class="material-symbols-outlined fs-16 mx-16">
                                    keyboard_double_arrow_right
                                </span></a>

                        </div>
                    </div>
                </div>



                <div class="col-12 col-md-4 my-48 d-flex flex-wrap flex-md-column justify-content-between">



                    <div class="d-none d-md-block card border-0 rounded-3 bg-neutral-5 my-48">

                        <div class="card-header bg-white text-center p-0">
                            <div class="d-flex justify-content-center align-items-center">
                                <span class="material-symbols-outlined fs-64 text-primary">
                                    emoji_people
                                </span>
                                <h5 class="fs-36 mb-0">我們是誰</h5>
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            <img src="../assets/images/team.jpg" class="card-img-top img-cover img-hover" alt="team">
                        </div>

                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title text-center fw-bold">xx旅行遨遊世界</h5>
                            <p class="card-text">
                                穿越時空，遇見未知。我們是時間旅行者，帶您穿梭於歷史與未來的奇妙冒險。
                            </p>
                            <a href="blogEvent.html" class="btn btn-primary w-50 text-neutral-5 fw-bold">更多介紹</a>
                        </div>

                    </div>


                    <div class="d-flex flex-grow-1 flex-wrap flex-md-column justify-content-center justify-content-md-end">

                        <div class="d-block d-md-none card border-0 my-24 rounded-3 bg-neutral-5 mx-8 mx-md-0 w-100">

                            <div class="card-header bg-white text-center p-0">
                                <div class="d-flex justify-content-center align-items-center">
                                    <span class="material-symbols-outlined fs-64 text-primary">
                                        emoji_people
                                    </span>
                                    <h5 class="fs-16 fs-md-36 mb-0">我們是誰</h5>
                                </div>
                            </div>
                            <img src="../assets/images/team.jpg" class="card-img-top img-cover" alt="team">

                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title text-center fw-bold">xx旅行遨遊世界</h5>
                                <p class="card-text">
                                    穿越時空，遇見未知。我們是時間旅行者，帶您穿梭於歷史與未來的奇妙冒險。
                                </p>
                                <a href="blogEvent.html"
                                    class="btn btn-primary w-100 w-md-50 text-neutral-5 fw-bold">更多介紹</a>
                            </div>
                        </div>

                        <commodityItem v-for="data of commodityData" :key="data.title" :title="data.title"
                            :subtitle="data.subtitle" :time="data.time" :image="data.image" />
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-48 d-none d-md-block">
            <div class="row">
                <div class="col-8 d-flex justify-content-center align-items-center">
                    <a class="d-flex justify-content-center align-items-center fs-24 fs-lg-36 mx-36 mx-lg-48" href="#">
                        <span class="material-symbols-outlined fs-24 fs-lg-36 mx-16">
                            keyboard_double_arrow_left
                        </span>上一頁</a>
                    <a class="d-flex justify-content-center align-items-center fs-24 fs-lg-36 mx-36 mx-lg-48" href="#">
                        下一頁
                        <span class="material-symbols-outlined fs-24 fs-lg-36 mx-16">
                            keyboard_double_arrow_right
                        </span></a>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { storeToRefs } from 'pinia'
import pinia from '@/stores/index.js';
import { RouterLink, useRoute } from 'vue-router';

import searchArticle from '../components/blog/searchArticle.vue';
import commodityItem from '../components/blog/commodityItem.vue';

import { UseblogStore } from '@/stores/blog/blogFetch.js';

const useblogstore = UseblogStore(pinia);

const { blogData, commodityData } = storeToRefs(useblogstore);

const route = useRoute();

const eventData = computed(() => {
    return blogData.value.filter((i) => i.title === route.params.title)[0];
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