<template>
    <div class="position-relative  blog-img w-100 h-px-300 d-flex  align-items-center">

        <h2 class="ms-28 my-20 my-md-60  ms-md-60 border-start border-dark border-5 ps-8 ps-md-16 lh-1 fs-24 fs-md-48">
            BLOG
        </h2>

        <div class="position-absolute w-50 left-25">
            <input class="form-control  w-100 text-center rounded-5 bg-neutral-5 bg-opacity-75" type="text"
                placeholder="搜尋文章...">
            <a href="#">
                <span class="material-symbols-outlined position-absolute top-50 end-0 translate-middle">
                    search
                </span>
            </a>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.blog {
    &-img {
        background-image: url('@/assets/images/blog.jpg');
        background-size: cover;
        background-position: center;
    }
}
.form-control:focus::placeholder {
  color: transparent;
}
 
</style>