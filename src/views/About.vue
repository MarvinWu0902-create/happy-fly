<template>
    <div class="img-about d-flex align-items-center">
        <h2 class="ms-28 my-20 my-md-60  ms-md-60 border-start border-dark border-5 ps-8 ps-md-16 lh-1 fs-24 fs-md-48">ABOUT
            US</h2>
    </div>

    <div class="container d-none d-lg-block">
        <div class="row  my-96">
            <h2 class="col-12 d-flex align-items-center mb-48 fs-48 text-neutral-1 pb-16 border-bottom border-neutral-2 border-5">
                <span class="material-symbols-outlined fs-48">
                    keyboard_arrow_right
                </span>
                發想初衷
            </h2>
            <div class="col-6">
                <aboutImg>
                    <template #left-img>
                        <img class="col-6 my-16" src="@/assets/images/about-2.jpg" alt="">
                    </template>
                    <template #right-img>
                        <img class="col-6 my-16" src="@/assets/images/about-3.jpg" alt="">
                    </template>
                    <template #left-icon>
                        {{ 'partly_cloudy_day' }}
                    </template>
                    <template #right-icon>
                        {{ 'diversity_1' }}
                    </template>
                </aboutImg>
            </div>

            <div class="col-6 d-flex flex-column justify-content-center">
                <h2 class="text-primary mb-20 d-flex align-items-center">
                    <span class="material-symbols-outlined fs-32 me-16">
                        label
                    </span>
                    美的旅程
                </h2>
                <p class="fs-24 mb-16 text-neutral-1">在這個充滿無限可能的世界裡，我們為您揭開一幅令人心動的旅程藍圖</p>
                <p class="fs-24 text-neutral-1">「尋找美的旅程，從這裡開始」是我們的口號，旨在為您提供一場前所未有的旅遊體驗</p>
            </div>
        </div>

        <div class="row  my-96">
            <div class="col-6 my-16 d-flex flex-column justify-content-center">
                <h2 class="text-primary mb-20 d-flex align-items-center">
                    <span class="material-symbols-outlined fs-32 me-16">
                        label
                    </span>
                    旅途的引導者
                </h2>
                <p class="fs-24 mb-16 text-neutral-1">我們深信，每次旅行都是一次尋找的過程，一次沉浸在未知世界的探索</p>
                <p class="fs-24 mb-16 text-neutral-1">這是一個品味不同風情的契機，也是創造難忘回憶的時刻</p>
                <p class="fs-24 text-neutral-1">無論您是獨自探險、與摯愛同行，還是結伴而行，我們的旅遊網站將是您踏上屬於自己的旅途的引導者</p>
            </div>

            <div class="col-6">
                <aboutImg>
                    <template #left-img>
                        <img class="col-6 my-16" src="@/assets/images/about-2.jpg" alt="">
                    </template>
                    <template #right-img>
                        <img class="col-6 my-16" src="@/assets/images/about-3.jpg" alt="">
                    </template>
                    <template #left-icon>
                        {{ 'partly_cloudy_day' }}
                    </template>
                    <template #right-icon>
                        {{ 'diversity_1' }}
                    </template>
                </aboutImg>
            </div>
        </div>

        <div class="row  my-96">
            <div class="col-6">
                <aboutImg>
                    <template #left-img>
                        <img class="col-6 my-16" src="@/assets/images/about-2.jpg" alt="">
                    </template>
                    <template #right-img>
                        <img class="col-6 my-16" src="@/assets/images/about-3.jpg" alt="">
                    </template>
                    <template #left-icon>
                        {{ 'partly_cloudy_day' }}
                    </template>
                    <template #right-icon>
                        {{ 'diversity_1' }}
                    </template>
                </aboutImg>
            </div>

            <div class="col-6 d-flex flex-column justify-content-center">
                <h2 class="text-primary mb-20 d-flex align-items-center">
                    <span class="material-symbols-outlined fs-32 me-16">
                        label
                    </span>
                    難忘的冒險
                </h2>
                <p class="fs-24 mb-16 text-neutral-1">我們為您精心策劃每個行程，提供豐富的旅遊資訊和可靠的服務，讓您無需煩惱，專心享受每一刻</p>
                <p class="fs-24 mb-16 text-neutral-1">我們的網站不僅僅是旅行的指南，更是啟發您的創意和好奇心的靈感之源</p>
                <p class="fs-24 text-neutral-1">無論是走訪文化古城，探索自然奇景，或是品味當地美食，我們致力於為您帶來難忘的冒險</p>
            </div>
        </div>



    </div>

    <div class="container d-block d-lg-none">
        <div class="row">
            <div class="col-12 ">
                <div class="row">
                    <h2 class="col-md-8 col-lg-6 mb-48 fs-48 border-bottom border-primary border-5">發想初衷</h2>
                    <div class="fs-20 text-neutral-1">
                        <p>在這個充滿無限可能的世界裡，我們為您揭開一幅令人心動的旅程藍圖。「尋找美的旅程，從這裡開始」是我們的口號，旨在為您提供一場前所未有的旅遊體驗。</p>
                        <p>我們深信，每次旅行都是一次尋找的過程，一次沉浸在未知世界的探索。這是一個品味不同風情的契機，也是創造難忘回憶的時刻。無論您是獨自探險、與摯愛同行，還是結伴而行，我們的旅遊網站將是您踏上屬於自己的旅途的引導者。
                        </p>
                        <p> 我們為您精心策劃每個行程，提供豐富的旅遊資訊和可靠的服務，讓您無需煩惱，專心享受每一刻。我們的網站不僅僅是旅行的指南，更是啟發您的創意和好奇心的靈感之源。無論是走訪文化古城，探索自然奇景，或是品味當地美食，我們致力於為您帶來難忘的冒險。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import aboutImg from '../components/about/aboutImg.vue'

</script>

<style lang="scss" scoped>
.copywriting {

    top: 20%;
    right: 5%;

    @media (min-width: 1140px) {
        bottom: 20%;
        right: 5%;
    }
}

.img-about {
    width: 100%;
    height: 300px;
    background-image: url('@/assets/images/about-header.jpg');
    background-size: cover;
    background-position: 50% 50%;
}

// .transition-all {
//     transition: all 0.5s ease-in-out;
// }
</style>