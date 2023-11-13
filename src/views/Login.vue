<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 d-none d-md-flex gift shadow p-36">
                <div class="d-flex flex-column justify-content-center text-primary-3 ms-16 ">
                    <h2 class="fs-48 animate__animated animate__fadeInDown">會員獨享禮遇</h2>
                    <p class="fs-24 fw-bold animate__animated animate__fadeInLeft">
                        專屬優惠價<br>
                        生日禮<br>
                        免費旅遊卷<br>
                        信用卡分期、優惠<br>
                        快速訂購，旅行說走就走<br>
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center bg-primary-3 shadow bg-opacity-50 p-16">
                        <div class="row">
                            <h2 class="my-60 text-center fs-48">會員登入</h2>
                            <form class="mb-40 needs-validation" action="#" novalidate>
                                <div class="d-flex flex-column align-items-center">

                                    <div class="input-container">
                                        <input v-model="email"
                                            class="fs-24 border-primary shadow-sm mb-48 rounded p-8 w-100" type="text"
                                            placeholder="請輸入帳號" required>
                                        <a href="#">
                                            <span class="material-icons-outlined icon-position">
                                                visibility_off
                                            </span>
                                        </a>

                                    </div>


                                    <div class="input-container">
                                        <div class="input-group d-flex">
                                            <input v-model="password"
                                                class="fs-24 border-primary shadow-sm rounded p-8 w-100 mb-48"
                                                type="password" placeholder="請輸入密碼" required>
                                            <a href="#">
                                                <span class="material-icons-outlined icon-position">
                                                    visibility_off
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-primary text-primary-3 fs-24 py-8 px-16 mx-8"
                                        @click.prevent="loginHandler()">登入</button>

                                    <a class="btn btn-primary text-primary-3 fs-24 py-8 px-16 mx-8"
                                        href="pwdForgot.html">忘記密碼</a>
                                </div>
                            </form>
                            <a class="d-block fs-24 mb-36 text-center" href="register.html">立即註冊</a>
                            <a class="d-block fs-24 mb-36 text-center" href="#">或使用其他帳戶登入</a>

                            <div class="d-flex justify-content-center mb-64">

                                <a class="d-flex align-items-end mx-20" href="#">
                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#619FBB"
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                </a>
                                <a class="d-flex align-items-end mx-20" href="#">
                                    <svg width="64" height="64" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg"
                                        fill="#619FBB">
                                        <path fill="#619FBB"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg>
                                </a>


                            </div>
                        </div>


                    </div>

                    <div class="col-md-12 d-none d-md-block d-md-flex justify-content-between bg-white p-36">
                        <a href="#">還不是我們的會員嗎?</a>
                        <a href="register.html">立即註冊</a>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" :class="{ show: loginMsg, 'd-block': loginMsg }">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-1 ms-auto">
                                <button type="button" class="btn-close" @click="modalClose()"></button>
                            </div>

                            <div class="col-12">
                                <div class="d-flex justify-content-center">
                                    <div :class="{ 'bg-primary-2': IsLogin, 'bg-pink': !IsLogin }"
                                        class="d-flex justify-content-center align-items-center rounded-circle icon-size">
                                        <span class="material-symbols-outlined fs-64">
                                            {{ showIcon }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-center my-12 my-md-24 success-text">{{ loginMsg
                            }}</h2>
                            <h5 class="text-center text-neutral-2" v-show="IsLogin">倒數{{ countdown }}秒鐘跳轉至首頁...</h5>
                            <div class="col-8 m-auto mb-12 mb-md-24">
                                <div class="d-flex justify-content-around">
                                    <button type="button"
                                        class="btn btn-primary text-neutral-5 lead-index d-block text-center mx-4"
                                        v-if="IsLogin" @click="routerpushHanlder('home')">立即前往</button>
                                    <button type="button"
                                        class="btn btn-primary text-neutral-5 lead-index d-block text-center mx-4" v-else
                                        @click="modalClose()">確認</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    </div>



</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { createPinia, storeToRefs } from 'pinia'
import router from '../router'
import axios from 'axios'
import 'material-symbols';
import { useUserStore } from '@/stores/user';
import pinia from '../stores/index';


// import 'bootstrap/dist/js/bootstrap.min.js';

// const pinia = createPinia();

const useuserstore = useUserStore(pinia);

const { IsLogin, userInfo } = storeToRefs(useuserstore);

const email = ref('');
const password = ref('');
const loginMsg = ref('');

//  loginMsg.value '成功' or '用戶不存在'
const showIcon = computed(() => {
    if (IsLogin.value) {
        return 'Done'
    } else {
        return 'Close'
    }
});

const loginHandler = () => {
    axios.post('http://localhost:8000/users/login', {
        email: email.value,
        password: password.value
    })
        .then((res) => {
            loginMsg.value = res.data.message;
            if (res.data.message !== '用戶不存在') {

                userInfo.value = [res.data.user];
                IsLogin.value = true;

                document.cookie = `Token=${res.data.token}`;
            }
        })
        .catch((err) => {
            console.log(err);
        })
};

const countdown = ref(1);
const isrightnowPush = ref(false);
const timer = ref(null);

watch(IsLogin, (newval) => {
    if (newval) {
        timer.value = setInterval(() => {
            if (countdown.value > 0) {
                countdown.value--;
            } else {
                if (!isrightnowPush.value) {
                    clearInterval(timer.value);
                    router.push({ name: 'home' });
                }
            }
        }, 1000);
    }
})

const routerpushHanlder = (name) => {
    isrightnowPush.value = true;
    clearInterval(timer.value);
    router.push({ name: name });
}


const modalClose = () => {
    loginMsg.value = false;
}

</script>

<style lang="scss" scoped>
.gift {
    background-image: url('@/assets/images/gift.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.input-container {
    position: relative;
}

.icon-position {
    position: absolute;
    top: 30%;
    right: 5%;
    transform: translateY(-50%);
}

.icon-size {
    width: 60px;
    height: 60px;

    @include pad {
        width: 120px;
        height: 120px;
    }
}
</style>