<template>

    <div class="container d-block d-md-none">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <a class="d-flex justify-content-center align-items-center fs-16 fs-lg-36 mx-16 mx-lg-48" href="#">
                    <span class="material-symbols-outlined fs-16 mx-16">
                        keyboard_double_arrow_left
                    </span>上一頁</a>
                <a class="d-flex justify-content-center align-items-center fs-16 fs-lg-36 mx-16 mx-lg-48" href="#">
                    下一頁
                    <span class="material-symbols-outlined fs-16 mx-16">
                        keyboard_double_arrow_right
                    </span></a>

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


</template>

<script setup>
const props = defineProps({
    determine: {
        type: Number,
        require: true,
        default: 0
    }
});
</script>

<style lang="scss" scoped></style>