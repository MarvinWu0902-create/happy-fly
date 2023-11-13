<template>
    <section v-for="(title, index) of renderTitle" class="d-flex justify-content-center align-items-stetch my-48">
        <div class="container">

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-12">
                <h2 class="fs-32 fw-bold mb-0">
                    <span class="text-primary">●</span>
                    {{ title }}
                </h2>

                <ul class="nav nav-tab-border tabs-hover">
                    <li class="nav-item">
                        <button :class="{ active: activeButtons.includes(`Exter${index}`) }" class="nav-link" type="button"
                            @click="ExterHandler(index)">國外旅遊</button>
                    </li>
                    <li class="nav-item">
                        <button :class="{ active: activeButtons.includes(`Inter${index}`) }" class="nav-link" type="button"
                            @click="InterHandler(index)">國內旅遊</button>
                    </li>
                </ul>
                <!-- btn-more -->
                <a href="#"
                    class="d-none d-lg-flex align-items-center btn bg-primary-3 bg-primary-hover rounded-pill fs-20 text-primary text-white-hover py-10 px-16 ">查看更多
                    <img src="@/assets/images/iconArrowRight.svg" alt="iconArrowRight"
                        class="bg-white rounded-circle ms-12 w-px-20 h-px-20">
                </a>
                <!-- btn-more -->
            </div>

            <!-- tabs -->
            <swiper id="mySlider" :loop="true" :modules="modules" :slides-per-view="slideView" :space-between="30"
                navigation>
                <!-- @swiper="onSwiper" @slideChange="onSlideChange" -->
                <swiper-slide v-for="data of exterData" v-if="activeButtons.includes(`Exter${index}`)">
                    <div class="card border border-1 h-100">
                        <div class="overflow-hidden">
                            <img :src="data.src" class="card-img-top img-hover" :alt="data.src">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ data.maintitle }}</h5>
                            <p class="card-text">{{ data.subtitle }}</p>
                        </div>
                        <div class="card-footer border-0">
                            <a href="#" class="btn btn-outline-orange w-100">NT${{ Number(data.price).toLocaleString()
                            }}起
                            </a>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide v-for="data of interData" v-if="activeButtons.includes(`Inter${index}`)">

                    <div class="card border border-1 h-100">
                        <div class="overflow-hidden">
                            <img :src="data.src" class="card-img-top img-hover" :alt="data.src">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ data.maintitle }}</h5>
                            <p class="card-text">{{ data.subtitle }}</p>
                        </div>
                        <div class="card-footer border-0">
                            <a href="#" class="btn btn-outline-orange w-100">NT${{ Number(data.price).toLocaleString() }}起
                            </a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- tabs -->

            <!-- btn-more -->
            <div class="d-flex d-lg-none justify-content-center align-items-center">
                <a href="#" class="btn bg-primary-3 btn-hover1 rounded-pill fs-20 text-primary py-16 px-24  mt-24">查看更多
                    <img src="@/assets/images/iconArrowRight.svg" alt="iconArrowRight"
                        class="bg-white rounded-circle ms-12 w-px-20 h-px-20">
                </a>
            </div>
            <!-- btn-more -->
        </div>

    </section>
</template>

<script setup>

import { ref, computed, watch, onMounted } from 'vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';



import 'swiper/scss';
import 'swiper/css/bundle'
// import 'swiper/css/bundle';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, A11y];

const renderTitle = ref(['全球走透透', '主題旅遊', '限時優惠']);

const windowWidth = ref(window.innerWidth);

const interData = ref([
    { maintitle: '賽福瑞六人成行', subtitle: '安帕瓦螢火蟲五日', price: 20900, src: './src/assets/images/image01.png' },
    { maintitle: '美麗海水族館.波上宮4日', subtitle: '贈送半潛水艇', price: 24900, src: './src/assets/images/image02.png' },
    { maintitle: '艾菲爾鐵塔景觀餐廳8日', subtitle: '周杰倫 MV 莎瑪麗丹百貨', price: 57900, src: './src/assets/images/image03.png' },
    { maintitle: '五星中越峴港', subtitle: '會安古鎮美山聖地', price: 29999, src: './src/assets/images/image04.png' }
]);
const exterData = ref([
    { maintitle: '賽福瑞六人成行', subtitle: '安帕瓦螢火蟲五日', price: 20900, src: './src/assets/images/image05.png' },
    { maintitle: '美麗海水族館.波上宮4日', subtitle: '贈送半潛水艇', price: 24900, src: './src/assets/images/image06.png' },
    { maintitle: '艾菲爾鐵塔景觀餐廳8日', subtitle: '周杰倫 MV 莎瑪麗丹百貨', price: 57900, src: './src/assets/images/image07.png' },
    { maintitle: '五星中越峴港', subtitle: '會安古鎮美山聖地', price: 29999, src: './src/assets/images/image08.png' }
]);


const activeButtons = ref(['Exter0', 'Exter1', 'Exter2']);


const slideView = computed(() => {
    let views = 0;
    windowWidth.value < 768
        ? views = 2
        : views = 3;
    // if (windowWidth.value < 992 && windowWidth.value > 768) {
    //     return 3;
    // } else if (windowWidth.value < 768) {
    //     return 2;
    // } else {
    //     return 3;
    // }
    return views
});


watch(slideView, (newval, oldval) => {
    console.log('slideView', newval, oldval);
});


const ExterHandler = (index) => {
    const filterAry = activeButtons.value.filter((i) => i !== `Inter${index}`);
    if (!filterAry.includes(`Exter${index}`)) activeButtons.value = [...filterAry, `Exter${index}`];
}

const InterHandler = (index) => {
    const filterAry = activeButtons.value.filter((i) => i !== `Exter${index}`);
    if (!filterAry.includes(`Inter${index}`)) activeButtons.value = [...filterAry, `Inter${index}`];
}

watch(activeButtons, (newval, oldval) => {
    console.log('activeButtons', newval, oldval);
});



// const onSwiper = (swiper) => {
//     console.log(swiper);
// };
// const onSlideChange = () => {
//     console.log('slide change');
// };


onMounted(() => {
    window.addEventListener('resize', (e) => {
        windowWidth.value = e.target.innerWidth;
    })
});

</script>

<style lang="scss" scoped>
.nav-tab-border {
    .active {
        border-bottom: 3px solid #B4E0F4;
    }
}

.swiper-slide {
    height: auto;
}

img {
    &:hover {
        transform: scale(1.2);
        transition: 0.3s ease-in;
    }
}
</style>

<style lang="scss">
#mySlider .swiper-button-prev,
#mySlider .swiper-button-next {
    top: 20%;

    @include pad {
        top: 25%;
    }
    @include pc {
        top: 35%;
    }

    color: #88888860;
    --swiper-navigation-size: 36px;

    &:hover {
        color: #619FBB;
    }
}

#mySlider .swiper-button-prev {
    left: 5px;
}

#mySlider .swiper-button-next {
    right: 5px;
}
</style>
