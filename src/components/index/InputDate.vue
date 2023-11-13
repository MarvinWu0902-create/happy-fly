<template>
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-stetch position-absolute top-100 start-50 translate-middle shadow-sm bg-white rounded-4 w-90 custom-w px-12 px-md-36 py-12 py-md-36">
        <div class="d-flex justify-content-between align-items-center w-100 w-md-150">
            <!-- 出發地 -->
            <div class="form-floating w-50 me-0 me-md-24">
                <input type="text" class="form-control input-bg-down" name="destination" placeholder="請選擇"
                    :value="departareaInputValue" @click="departHandler()">
                <label for="destination" class="text-dark">出發地
                </label>

                <div :class="{ 'd-block': isDepartShow }"
                    class="position-relative input-bg-down-content js-content w-md-150 w-100">
                    <div class="input-bg-down-content-item bg-white border border-1 rounded p-16">

                        <ul class="nav nav-tab-border tabs-hover mb-16">

                            <li class="nav-item">
                                <button :class="{ active: departStatus.isExterShow }" class="nav-link " type="button"
                                    @click="exterHandler('depart')">國外旅遊</button>
                            </li>

                            <li class="nav-item">
                                <button :class="{ active: departStatus.isInterShow }" class="nav-link" type="button"
                                    @click="interHandler('depart')">國內旅遊</button>
                            </li>

                        </ul>

                        <div class="tab-content bg-primary-3 rounded p-24">

                            <div :class="{ show: departStatus.isExterShow }" class="tab-pane fade active"
                                v-show="departStatus.isExterShow">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                    <div class="col" v-for="area of externalAry">
                                        <a href="javascript:void(0)" @click="departareaHandler(area)">{{ area }}</a>
                                    </div>
                                </div>

                            </div>

                            <div :class="{ show: departStatus.isInterShow }" class="tab-pane fade active"
                                v-show="departStatus.isInterShow">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                    <div class="col" v-for="area of intervalAry">
                                        <a href="javascript:void(0)" @click="departareaHandler(area)">{{ area }}</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <!-- 出發地 -->


            <!-- 目的地 -->
            <div class="form-floating w-50 me-0 me-md-24">
                <input type="text" class="form-control input-bg-down" name="destination" placeholder="請選擇"
                    :value="destinareaInputValue" @click="destinHandler()">
                <label for="destination" class="text-dark">目的地
                </label>

                <div :class="{ 'd-block': isDestinShow }"
                    class="position-relative input-bg-down-content js-content w-md-150 w-100">
                    <div class="input-bg-down-content-item bg-white border border-1 rounded p-16">

                        <ul class="nav nav-tab-border tabs-hover mb-16">

                            <li class="nav-item">
                                <button :class="{ active: destinStatus.isExterShow }" class="nav-link " type="button"
                                    @click="exterHandler('destin')">國外旅遊</button>
                            </li>

                            <li class="nav-item">
                                <button :class="{ active: destinStatus.isInterShow }" class="nav-link" type="button"
                                    @click="interHandler('destin')">國內旅遊</button>
                            </li>

                        </ul>

                        <div class="tab-content bg-primary-3 rounded p-24">

                            <div :class="{ show: destinStatus.isExterShow }" class="tab-pane fade active"
                                v-show="destinStatus.isExterShow">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                    <div class="col" v-for="area of externalAry">
                                        <a href="javascript:void(0)" @click="destinareaHandler(area)">{{ area }}</a>
                                    </div>
                                </div>

                            </div>

                            <div :class="{ show: destinStatus.isInterShow }" class="tab-pane fade active"
                                v-show="destinStatus.isInterShow">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                    <div class="col" v-for="area of intervalAry">
                                        <a href="javascript:void(0)" @click="destinareaHandler(area)">{{ area }}</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <!-- 目的地 -->
        </div>

        <!-- Date -->
        <!-- <div class="form-floating w-100 mt-12 mt-md-0 me-0 me-md-24">
            <input type="text" class="btn-search form-control text-start input-bg-img " id="interval" placeholder="請選擇"
                value="請選擇" name="datefilter">
            <label for="interval" class="text-dark">出發區間</label>
        </div> -->
        <div class="d-flex align-items-center w-100 mt-12 mt-md-0 me-0 me-md-24">
            <VueDatePicker v-model="dateData" format="yyyy-MM-dd" range multi-calendars/>
        </div>
        <!-- Date -->

        <!--search btn -->
        <a type="button"
            class="btn rounded text d-flex align-items-center justify-content-center bg-primary-3 bg-primary-hover mt-12 mt-md-0"
            href="javascript:void(0)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-px-26">
                <g class="svg-search">
                    <path
                        d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" />
                </g>
            </svg>
        </a>

    </div>
</template>

<script setup>
import { ref } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// import 'daterangepicker/daterangepicker.css'; 
// import 'daterangepicker';

const externalAry = ['港澳中國', '東北亞', '東南亞', '美加', '紐澳', '歐洲', '其他城市'];
const intervalAry = ['台北', '台中', '台南', '高雄', '苗栗', '屏東', '桃園', '新竹', '宜蘭'];

const departStatus = ref({
    isExterShow: true,
    isInterShow: false
});
const destinStatus = ref({
    isExterShow: true,
    isInterShow: false
});

const isDepartShow = ref(false);
const isDestinShow = ref(false);


const departHandler = () => {
    isDepartShow.value = !isDepartShow.value;
    isDestinShow.value=false;
};
const destinHandler = () => {
    isDestinShow.value = !isDestinShow.value;
    isDepartShow.value=false;
};


const exterHandler = (status) => {
    if (status === 'depart') {
        departStatus.value.isExterShow = true;
        departStatus.value.isInterShow = false;
    } else {
        destinStatus.value.isExterShow = true;
        destinStatus.value.isInterShow = false;
    }
};

const interHandler = (status) => {
    if (status === 'depart') {
        departStatus.value.isInterShow = true;
        departStatus.value.isExterShow = false;
    } else {
        destinStatus.value.isInterShow =    true;
        destinStatus.value.isExterShow = false;
    }

};


const destinareaInputValue = ref('');
const destinareaHandler = (area) => {
    destinareaInputValue.value = area;
    isDestinShow.value = false;
};
const departareaInputValue = ref('');
const departareaHandler = (area) => {
    departareaInputValue.value = area;
    isDepartShow.value = false;
};

const dateData=ref('');

</script>

<style lang="scss" scoped>

@mixin imgInputSet {
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 18px 20px;
}


.input-bg {

    &-img {
        background-image: url('@/assets/images/iconDate.svg');
        @include imgInputSet;
    }

    &-down {
        background-image: url('@/assets/images/iconArrowDown.svg');
        @include imgInputSet;

        &-content {
            display: none;

            &-item {
                position: absolute;
                z-index: 3001;
                top: 7px;
            }
        }

    }
}

.position-initial {
    position: initial;
}
.custom-w{
    max-width: 1296px;
}
.svg-search {
  fill:#619FBB;
}
.btn{
    &:hover .svg-search{
        fill: white;
    }
}

.nav-tab-border {
  .active {
    border-bottom: 3px solid  #B4E0F4;
  }
}




</style>