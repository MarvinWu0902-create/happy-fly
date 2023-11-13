<template>
    <section class="d-flex justify-content-center align-items-stetch bg-left-linear pb-108 pt-172">
        <div class="container">
            <div class="row g-4">

                <!-- title -->
                <div class="col-sm-1 col-lg-1">
                    <h2 class="fs-32 fw-bold writing-vertical">
                        <span class="text-primary">●</span>
                        焦點話題
                    </h2>
                </div>
                <!-- title -->

                <!-- left -->
                <div class="col-sm-1 col-lg-6 ">
                    <a href="#"
                        class="text-white d-flex flex-column flex-md-row justify-content-end justify-content-md-between align-items-start align-items-md-end h-100 p-32 left-bg-img rounded">
                        <div>
                            <h3 class="fs-28 fw-sm-20">普吉悅槤酒店</h3>
                            <h3 class="fs-24 fw-sm-16">4 天直飛普吉島</h3>
                        </div>
                        <div>
                            <h5 class="fs-20 fw-sm-16 fw-med f-sans"><span class="text-orange me-4">NT$ 19,900</span>起</h5>
                        </div>
                    </a>
                </div>
                <!-- left -->

                <!-- right -->
                <ul class="col-sm-1 col-lg-5 mb-0">
                    <li class="row g-5" v-for="(data, index) of renderData" :key="data.src" v-show="index !== 0">
                        <div :class="{ 'mb-16': index !== renderData.length - 1 }" class="col-6 col-md-5 mt-16 mt-lg-0">
                            <a href="#">
                                <img :src="data.src" class="img-fluid rounded img-hover" :alt="data.src">
                            </a>
                        </div>
                        <div :class="{ 'mb-16': index !== renderData.length - 1 }" class="col-6 col-md-7 mt-16 mt-lg-0">
                            <a href="#">
                                <h4 class="fs-24 fw-sm-20">{{ data.maintitle }}</h4>
                                <h5 class="fs-20 fw-sm-16">{{ data.subtitle }}</h5>
                                <h5 class="fs-20 fw-sm-16 fw-med f-sans text-neutral-2">
                                    <span class="text-orange me-4">NT${{ Number(data.price).toLocaleString() }}</span>起
                                </h5>
                            </a>
                        </div>
                    </li>
                </ul>
                <!-- right -->

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';


const renderData = ref([
    { maintitle: '普吉悅槤酒店', subtitle: '4 天直飛普吉島', price: 19900, src: './src/assets/images/imageFocus01.png' },
    { maintitle: '輕鬆遊曼谷五日', subtitle: '海上郵輪餐廳釣墨魚', price: 34900, src: './src/assets/images/imageFocus02.png' },
    { maintitle: '峇里風情六人成行', subtitle: '烏布閒情旅行、山林田野泛舟', price: 23900, src: './src/assets/images/imageFocus03.png' },
    { maintitle: '芬蘭極光十日', subtitle: '極地捕撈帝王蟹大餐體驗', price: 88000, src: './src/assets/images/imageFocus04.png' }
]);
const show = ref(0);
</script>

<style lang="scss" scoped>
.writing-vertical {
    writing-mode: initial;

    @include pc() {
        writing-mode: vertical-lr;
    }
}

.left-bg-img {
    max-width: 636px;
    min-height: 233px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url('@/assets/images/imageFocus01.png');
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
    background-position: bottom, center;
}

.img-hover {
    width: 100%;
    transition: 0.3s ease-in;
}

.bg-left-linear {

    background-image: url("@/assets/images/FOCUS.svg"), linear-gradient(to right, #EDF3F7 50%, #EDF3F7 50%);
    background-repeat: no-repeat, repeat;
    background-size: 323px 66px, cover;
    background-position: left bottom, center;

    @include pc() {
        background-image: url("@/assets/images/FOCUS.svg"), linear-gradient(to right, #EDF3F7 50%, transparent 50%);
        background-size: 623px 143px, cover;
        background-position: left 10% bottom, center;
    }
}

// .bg-right-linear {
//   background-image: url("@/assets/images/SALE.svg"), linear-gradient(to left, #EDF3F7 70%, transparent 50%);
//   background-repeat: no-repeat, no-repeat;
//   background-size: 111px 363px, auto 470px;
//   background-position: right bottom, bottom;

//   @include pc() {
//     background-image: url("@/assets/images/SALE.svg"), linear-gradient(to left, #EDF3F7 70%, transparent 50%);
//     background-repeat: no-repeat, no-repeat;
//     background-size: 48px 157px, auto 350px;
//     background-position: right bottom 40%, center 110px;
//   }
// }
</style>