<template>
  <HeaderView/>
  <RouterView></RouterView>
  <FooterView/>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import HeaderView from '@/components/layout/Header.vue';
import FooterView from '@/components/layout/Footer.vue';



// const route = useRoute();

// const showLayout = computed(() => {
//   return !route.path.includes('/login')
// });

</script>

<style lang="scss" scoped>
@import "./assets/scss/all.scss";
</style>
