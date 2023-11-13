<template>
    <div class="position-relative text-center bg-banner-img h-vh-80">
        <div class="text-white position-absolute top-50 start-50  translate-middle w-100">
            <h1 class="fs-48 text-shadow-1">日韓一路玩到底</h1>
            <h2 class="fs-32 text-shadow-1">早鳥優惠 5 折</h2>
            <div class="d-flex justify-content-center align-items-center">
                <a href="javascript:void(0)" class="btn btn-primary rounded-pill fs-20 text-white py-16 px-24">加入會員
                    <img src="@/assets/images/iconArrowRight.svg" alt="iconArrowRight"
                        class="bg-white rounded-circle ms-12 w-px-20 h-px-20">
                </a>
            </div>
        </div>
        <slot></slot>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bg-banner-img {
    // background-image: url('@/assets/images/Banner-M.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    // @include pc {
        background-image: url('@/assets/images/Banner.png');
    // }
}
</style>