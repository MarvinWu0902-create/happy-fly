<template>
    <Banner>
        <InputDate />
    </Banner>
    <TopicContent />
    <ItemContent />
</template>

<script setup>
import Banner from '@/components/index/Banner.vue';
import InputDate from '@/components/index/InputDate.vue';
import TopicContent from '@/components/index/TopicContent.vue';
import ItemContent from '@/components/index/ItemContent.vue';

// import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
// import { onMounted } from 'vue';

// const route = useRoute();

// onBeforeRouteUpdate((to, from, next) => {
//     console.log('Updated route', route.params);
//     next();
// });

</script>

<style lang="scss" scoped></style>