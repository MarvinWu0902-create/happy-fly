<template>
    <div>
        <section class="bg-primary-3 py-96 overflow-hidden">
            <div class="container">
                <h2 class="fs-32 fw-bold">
                    {{ filterData.title }}
                </h2>
                <div class="row">
                    <!-- left img -->
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <img :src="filterData.image" class="img-fluid w-100" alt="#">
                    </div>
                    <!-- right text -->
                    <div class="col-12 col-md-6">
                        <div class="d-flex flex-column justify-content-between h-100">


                            <div class="mt-20">
                                <h4>行程含 {{ filterData.attractions }} 個主要景點</h4>
                                <ol :style="{ 'list-style': 'initial' }">
                                    <li v-for="item of attractions">{{ item }}</li>
                                </ol>
                            </div>


                            <div class="row align-items-end">
                                <div class="col">
                                    <h4 class="fs-16 fs-lg-24">出發日期：<br>{{ filterData.startDate }}</h4>
                        
                                    <h4 class="fs-16 fs-lg-24">旅遊天數：<br>{{ filterData.time }}</h4>
                                </div>
                                <div class="col">
                                    <div class="d-flex flex-column justify-content-end align-items-center">
                                        <a type="button"
                                            class="btn bg-neutral-5 bg-primary-hover rounded-pill fs-20 text-primary text-white-hover py-16 px-24  mt-24"
                                            href="traveler.html">立即預約
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- 商品說明 -->
        <section class="py-96 overflow-hidden">
            <div class="container">
                <!-- title -->
                <h2 class="fs-32 fw-bold text-center">
                    / 商品說明 /
                </h2>
                <!-- 行程特色 -->
                <div class="py-28">
                    <h4>
                        行程特色
                    </h4>
                    <hr>
                    <ol class="list-group list-group-numbered fs-20">
                        <li v-for="(item, index) of filterData.features"
                            :class="{ 'list-group-item border-0 px-0 px-md-16': index !== filterData.length - 1, 'mt-16': index === filterData.length }">
                            {{ item.title }} : {{ item.description }}
                        </li>
                    </ol>

                </div>

                <!--推薦景點 -->
                <div class="py-28">
                    <h4>推薦景點</h4>
                    <hr>
                    <div v-for="(item, index) of filterData.recommends"
                        class="d-flex flex-column justify-content-between align-items-center py-20 py-md-48 py-lg-96"
                        :class="{ 'flex-md-row': index % 2 === 1, 'flex-md-row-reverse': index % 2 === 0 }">

                        <div class="w-100 w-md-20">
                            <img :src="item.image" class="img-fluid w-100" alt="#">
                        </div>

                        <div class="w-100 w-md-70">
                            <p class="fs-20 mt-16 mt-md-0">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
                <!--  特色餐點  -->
                <div class="py-28">
                    <h4>特色餐點</h4>
                    <hr>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">

                        <div class="col mt-16" v-for="item of filterData.meals">
                            <div class="card border border-1">
                                <div class="overflow-hidden">
                                    <img :src="item.image" class="img-fluid img-hover w-100" alt="#">
                                </div>
                                <div class="card-body text-center">
                                    <p class="card-title fs-20">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--住宿資訊  -->
                <div class="py-28">
                    <h4>住宿資訊</h4>
                    <hr>

                    <div v-for="(item, index) of filterData.accommodations"
                        class="d-flex flex-column justify-content-between align-items-center py-20 py-md-48 py-lg-96"
                        :class="{ 'flex-md-row': index % 2 === 0, 'flex-md-row-reverse': index % 2 === 1 }">

                        <div class="w-100 w-md-20">
                            <img :src="item.image" class="img-fluid w-100" alt="#">
                        </div>

                        <div class="w-100 w-md-70">
                            <p class="fs-20 mt-16 mt-md-0">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!--行程說明 -->
                <div class="py-28">
                    <h4>
                        行程說明
                    </h4>
                    <hr>

                    <div v-for="(item, index) of filterData.itineraryByDay">

                        <div :class="{ 'pt-lg-96': index === 1 }"
                            class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-20 pt-md-48 overflow-hidden">
                            <div class="w-100 w-md-20 border border-1">
                                <p class="fs-20 text-center my-16 px-16">Day {{ item.day }}</p>
                            </div>
                            <div class="w-100 w-md-80 border border-1">
                                <p class="fs-20 text-center text my-16 text-nowrap text-truncate px-16">
                                    {{ item.description }}</p>
                            </div>

                        </div>

                        <div
                            class="d-flex flex-column flex-md-row-reverse justify-content-between align-items-center mt-40">

                            <div class="w-100 w-md-20">
                                <img :src="item.image" class="img-fluid w-100" alt="#">
                            </div>
                            <div class="w-100 w-md-70">
                                <ol class="list-group list-group-numbered fs-20">
                                    <li v-for="innerItem of item.activities" class="list-group-item border-0">
                                        {{ innerItem.description }}
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { storeToRefs } from 'pinia'
import pinia from '@/stores/index.js';
import { RouterLink, useRoute } from 'vue-router';


import { UseblogStore } from '@/stores/blog/blogFetch.js';

const useblogstore = UseblogStore(pinia);

const { commodityData } = storeToRefs(useblogstore);

const route = useRoute();



const filterData = computed(() => {
    return commodityData.value.filter((i) => i.title === route.params.title)[0];
});

const attractions = computed(() => {
    return filterData.value.features.map((i) => i.title)
});


</script>

<style lang="scss" scoped></style>