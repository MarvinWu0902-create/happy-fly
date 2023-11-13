<template>
    <div class="outer overflow-hidden">
        <div class="con d-flex h-100 w-100 position-relative" :style="{ left: relativePx }">
            <img class="w-100" src="../assets/images/image01.png" alt="">
            <img class="w-100" src="../assets/images/image02.png" alt="">
            <img class="w-100" src="../assets/images/image03.png" alt="">
        </div>
    </div>

    <button @click="clickHandler('left')">左邊</button>
    <button class="indicator rounded-circle bg-primary bg-opacity-25 border border-0" @click="showIndex = 0"></button>
    <button class="indicator rounded-circle bg-primary bg-opacity-25 border border-0" @click="showIndex = 1"></button>
    <button class="indicator rounded-circle bg-primary bg-opacity-25 border border-0" @click="showIndex = 2"></button>
    <button @click="clickHandler('right')">右邊</button>
    relativePx:{{ relativePx }}
    showIndex:{{ showIndex }}

</template>

<script setup>
import { ref, computed } from 'vue';

const showIndex = ref(0);
const imgWidth = 600;
const imgCount = 3;

const relativePx = computed(() => {
    return (showIndex.value * imgWidth * -1) + 'px'
})


const clickHandler = (direction) => {

    if (direction === 'left') {
        if (showIndex.value - 1 === -1) {
            showIndex.value = imgCount - 1
        } else {
            showIndex.value--
        }
    }

    if (direction === 'right') {
        if (showIndex.value + 1 === imgCount) {
            showIndex.value = 0
        } else {
            showIndex.value++
        }
    }
}






</script>

<style lang="scss" scoped>
.outer {
    width: 600px;
    height: 300px;
}

.con {
    transition: all 0.5s;

    img {
        flex-shrink: 0;
        object-fit: cover;
    }
}

.indicator {
    height: 10px;
    width: 10px;
}

</style>