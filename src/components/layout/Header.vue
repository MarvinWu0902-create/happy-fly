<template>
  <div class="bg-white bg-opacity-30">
    <header class="container d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <h1 class="mb-0 logo">
          <RouterLink class="d-block" to="/">Happy Fly</RouterLink>
        </h1>
      </div>
      <div class="d-flex">

        <div class="d-flex my-24">
          <!-- pad & pc -->
          <nav class="d-none d-md-block">
            <ul class="d-flex list-unstyled mb-0">
              <li class="mx-24">
                <h5 class="mb-0">
                  <RouterLink to="/about" :class="{'text-primary':isActive('/about')}">關於我們</RouterLink>
                </h5>
              </li>
              <li class="mx-24">
                <h5 class="mb-0">
                  <RouterLink to="/blog" :class="{'text-primary':isActive('/blog')}">旅行紀事</RouterLink>
                </h5>
              </li>
              <li class="mx-24">
                <h5 class="mb-0">
                  <RouterLink to="/service" :class="{'text-primary':isActive('/service')}">客服中心</RouterLink>
                </h5>
              </li>
            </ul>
          </nav>
          <!-- pad & pc -->

          <!-- phone -->
          <div class="d-block d-md-none cursor-pointer">
            <a data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false" aria-controls="menu">
              <span class="material-icons">menu</span>
            </a>
          </div>
          <!-- phone -->

        </div>

        <!-- dropdown button for pad & pc-->
        <div class="dropdown ms-24 d-none d-md-flex align-items-center ">
          <a class="d-flex align-items-end p-12 rounded-circle bg-neutral-5 bg-primary-3-hover" href="javascript:void(0)" @click="dropbtnClick()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-if="userInfo.length === 0">
              <mask id="mask0_10_79" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_10_79)">
                <path fill="#619FBB"
                  d="M11.9999 11.8984C10.8401 11.8984 9.84963 11.4878 9.02843 10.6666C8.20723 9.84538 7.79663 8.85489 7.79663 7.69511C7.79663 6.53532 8.20723 5.54583 9.02843 4.72663C9.84963 3.90743 10.8401 3.49783 11.9999 3.49783C13.1597 3.49783 14.1502 3.90743 14.9714 4.72663C15.7926 5.54583 16.2032 6.53532 16.2032 7.69511C16.2032 8.85489 15.7926 9.84538 14.9714 10.6666C14.1502 11.4878 13.1597 11.8984 11.9999 11.8984ZM17.9282 20.3049H6.07166C5.44194 20.3049 4.90534 20.0832 4.46186 19.6397C4.01837 19.1962 3.79663 18.6596 3.79663 18.0299V17.2897C3.79663 16.6859 3.95282 16.131 4.26521 15.625C4.57757 15.1189 4.99258 14.7327 5.51023 14.4663C6.55551 13.9457 7.61938 13.5542 8.70183 13.2919C9.78428 13.0295 10.8836 12.8984 11.9999 12.8984C13.1238 12.8984 14.2271 13.0285 15.3097 13.2889C16.3923 13.5492 17.4523 13.9397 18.4896 14.4603C19.0072 14.7261 19.4222 15.1115 19.7346 15.6165C20.047 16.1214 20.2032 16.6792 20.2032 17.2897V18.0299C20.2032 18.6596 19.9814 19.1962 19.538 19.6397C19.0945 20.0832 18.5579 20.3049 17.9282 20.3049ZM6.07166 18.0299H17.9282V17.3196C17.9282 17.1401 17.8823 16.977 17.7907 16.8301C17.699 16.6833 17.5782 16.5691 17.4282 16.4875C16.5521 16.0535 15.6617 15.7259 14.757 15.5049C13.8523 15.2839 12.9332 15.1734 11.9999 15.1734C11.0745 15.1734 10.1555 15.2839 9.24283 15.5049C8.33016 15.7259 7.43977 16.0535 6.57166 16.4875C6.42166 16.5691 6.30082 16.6833 6.20916 16.8301C6.11749 16.977 6.07166 17.1401 6.07166 17.3196V18.0299ZM11.9997 9.62336C12.5299 9.62336 12.9839 9.43458 13.3616 9.05701C13.7393 8.67942 13.9282 8.22553 13.9282 7.69533C13.9282 7.16512 13.7394 6.71214 13.3618 6.33641C12.9842 5.96069 12.5303 5.77283 12.0001 5.77283C11.4699 5.77283 11.0159 5.96106 10.6382 6.33751C10.2605 6.71394 10.0717 7.16647 10.0717 7.69511C10.0717 8.22537 10.2604 8.67932 10.638 9.05693C11.0156 9.43455 11.4695 9.62336 11.9997 9.62336Z" />
              </g>
            </svg>
            <div class="w-24 h-24" v-else>
              <p class="fs-24 lh-1 fw-bold text-center text-neutral-1 mb-0">{{ showName }}</p>
            </div>


          </a>

          <ul :class="dropdownObj" class="dropdown-menu drop-1 shadow">
            <li v-show="userInfo.length === 0">
              <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/login" @click="dropitemClick()">
                <h6 class="px-36 py-12 mb-0 text-center">會員登入</h6>
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/member" @click="dropitemClick()">
                <h6 class="px-36 py-12 mb-0 text-center">會員資料</h6>
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/payment" @click="dropitemClick()">
                <h6 class="px-36 py-12 mb-0 text-center">付款資料</h6>
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/shoppingCart" @click="dropitemClick()">
                <h6 class="px-36 py-12 mb-0 text-center">購物車</h6>
              </RouterLink>
            </li>
            <li v-show="userInfo.length !== 0">
              <a class="dropdown-item bg-primary-3-hover p-0 cursor-pointer" @click="signoutHandler()">
                <h6 class="px-36 py-12 mb-0 text-center">登出</h6>
              </a>
            </li>
          </ul>

        </div>
        <!-- dropdown button for pad & pc-->
      </div>
    </header>

    <!-- dropdown item -->
    <div class="menu-list collapse d-md-none position-absolute w-100 bg-neutral-5" id="menu">
      <div>
        <ul class="d-flex flex-column align-items-center list-unstyled">
          <li>
            <h5 class="my-24"><a href="/about">關於我們</a></h5>
          </li>
          <li>
            <h5 class="my-24"><a href="blog.html">旅行紀事</a></h5>
          </li>
          <li>
            <h5 class="my-24"><a href="/service">客服中心</a></h5>
          </li>

          <li class="dropdown">
            <a class="d-flex align-items-end p-12 rounded-circle bg-neutral-5 bg-primary-3-hover" href="javascript:void(0)"
              @click="dropbtnClick()">

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_10_79" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_10_79)">
                  <path fill="#619FBB"
                    d="M11.9999 11.8984C10.8401 11.8984 9.84963 11.4878 9.02843 10.6666C8.20723 9.84538 7.79663 8.85489 7.79663 7.69511C7.79663 6.53532 8.20723 5.54583 9.02843 4.72663C9.84963 3.90743 10.8401 3.49783 11.9999 3.49783C13.1597 3.49783 14.1502 3.90743 14.9714 4.72663C15.7926 5.54583 16.2032 6.53532 16.2032 7.69511C16.2032 8.85489 15.7926 9.84538 14.9714 10.6666C14.1502 11.4878 13.1597 11.8984 11.9999 11.8984ZM17.9282 20.3049H6.07166C5.44194 20.3049 4.90534 20.0832 4.46186 19.6397C4.01837 19.1962 3.79663 18.6596 3.79663 18.0299V17.2897C3.79663 16.6859 3.95282 16.131 4.26521 15.625C4.57757 15.1189 4.99258 14.7327 5.51023 14.4663C6.55551 13.9457 7.61938 13.5542 8.70183 13.2919C9.78428 13.0295 10.8836 12.8984 11.9999 12.8984C13.1238 12.8984 14.2271 13.0285 15.3097 13.2889C16.3923 13.5492 17.4523 13.9397 18.4896 14.4603C19.0072 14.7261 19.4222 15.1115 19.7346 15.6165C20.047 16.1214 20.2032 16.6792 20.2032 17.2897V18.0299C20.2032 18.6596 19.9814 19.1962 19.538 19.6397C19.0945 20.0832 18.5579 20.3049 17.9282 20.3049ZM6.07166 18.0299H17.9282V17.3196C17.9282 17.1401 17.8823 16.977 17.7907 16.8301C17.699 16.6833 17.5782 16.5691 17.4282 16.4875C16.5521 16.0535 15.6617 15.7259 14.757 15.5049C13.8523 15.2839 12.9332 15.1734 11.9999 15.1734C11.0745 15.1734 10.1555 15.2839 9.24283 15.5049C8.33016 15.7259 7.43977 16.0535 6.57166 16.4875C6.42166 16.5691 6.30082 16.6833 6.20916 16.8301C6.11749 16.977 6.07166 17.1401 6.07166 17.3196V18.0299ZM11.9997 9.62336C12.5299 9.62336 12.9839 9.43458 13.3616 9.05701C13.7393 8.67942 13.9282 8.22553 13.9282 7.69533C13.9282 7.16512 13.7394 6.71214 13.3618 6.33641C12.9842 5.96069 12.5303 5.77283 12.0001 5.77283C11.4699 5.77283 11.0159 5.96106 10.6382 6.33751C10.2605 6.71394 10.0717 7.16647 10.0717 7.69511C10.0717 8.22537 10.2604 8.67932 10.638 9.05693C11.0156 9.43455 11.4695 9.62336 11.9997 9.62336Z" />
                </g>
              </svg>

            </a>

            <ul :class="dropdownObj" class="dropdown-menu drop-2 shadow">
              <li v-show="userInfo.length === 0">
                <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/login" @click="dropitemClick()">
                  <h6 class="px-36 py-12 mb-0 text-center">會員登入</h6>
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/member" @click="dropitemClick()">
                  <h6 class="px-36 py-12 mb-0 text-center">會員資料</h6>
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/payment" @click="dropitemClick()">
                  <h6 class="px-36 py-12 mb-0 text-center">付款資料</h6>
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item bg-primary-3-hover p-0" to="/shoppingCart" @click="dropitemClick()">
                  <h6 class="px-36 py-12 mb-0 text-center">購物車</h6>
                </RouterLink>
              </li>
              <li v-show="userInfo.length !== 0">
                <a class="dropdown-item bg-primary-3-hover p-0 cursor-pointer" @click="signoutHandler()">
                  <h6 class="px-36 py-12 mb-0 text-center">登出</h6>
                </a>
              </li>
            </ul>

          </li>

        </ul>
      </div>
    </div>
    <!-- dropdown item -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink,useRoute } from 'vue-router'
import { createPinia, storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import pinia from '../../stores/index'



const useuserstore = useUserStore(pinia);

const { IsLogin,userInfo } = storeToRefs(useuserstore);

const isdropdownShow = ref(false);

const route=useRoute();

const showName = computed(() => {

  return userInfo.value[0].username[0];
});

const isActive=(path)=>{
  return route.path===path;
}

const dropbtnClick = () => {
  isdropdownShow.value = !isdropdownShow.value;
};

const dropitemClick = () => {
  isdropdownShow.value = false;
};
const signoutHandler = () => {///userInfo清空且document cookie Token清掉
  IsLogin.value=false;
  userInfo.value = [];
  document.cookie = "Token=''";
  isdropdownShow.value = false;
}

const dropdownObj = computed(() => ({
  show: isdropdownShow.value
}));


</script>

<style lang="scss" scoped>
.logo {
  a {
    width: 114.46px;
    height: 48px;
    background-image: url('../../assets/images/logo.svg');
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
  }
}

.dropdown-menu {
  top: 80px;
  border: 0;
  padding: 12px 0;

  &.drop-1 {
    right: 0;
  }

  &.drop-2 {
    top: -150px;
    right: -200px;
  }
}

.menu-list {
  z-index: 999;
}
</style>