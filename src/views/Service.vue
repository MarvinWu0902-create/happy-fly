<template>
    <div class="img-service w-100 h-px-300 d-flex align-items-center">
        <h2 class="ms-28 my-20 my-md-60 ms-md-60 border-start border-dark border-5 ps-8 ps-md-16 lh-1 fs-24 fs-md-48">
            CUSTOMER SERVICE</h2>
    </div>
    <div class="container">

        <div class="row my-60">
            <h2 class="fs-48 text-center">/ 常見問題 /</h2>
            <h3 class="fs-48 col-12 text-center">COMMON PROBLEM</h3>
        </div>

        <div class="row mb-24 px-12">
            <a class="btn btn-primary" @click="serviceHandler('buy')">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="fs-24 mb-0 text-neutral-5">訂購流程</p>
                    <span class="material-symbols-outlined fs-36 text-neutral-5">
                        keyboard_arrow_{{ serviceList['buy'].icon }}
                    </span>
                </div>
            </a>
            <Transition>
                <div v-show="serviceList['buy'].show">
                    <div class="card border-0 card-body">
                        <p>選購遊程→登入/註冊新會員→認訂單明細→付款確認(專屬人員服務)→知與相關服務。</p>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="row mb-24 px-12">
            <a class="btn btn-primary" @click="serviceHandler('pay')">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="fs-24 mb-0 text-neutral-5">付款方式</p>
                    <span class="material-symbols-outlined fs-36 text-neutral-5">
                        keyboard_arrow_{{ serviceList['pay'].icon }}
                    </span>
                </div>
            </a>
            <Transition>
                <div v-show="serviceList['pay'].show">
                    <div class="card border-0 card-body">
                        <p>請依照合約內容所列的匯款帳戶為準，並請於匯款前與所屬服務區域的服務人員確認其匯款之匯款帳戶以保障您的權益，完成繳款後請儘快與專屬服務人員聯繫。</p>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="row mb-24 px-12">
            <a class="btn btn-primary" @click="serviceHandler('member')">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="fs-24 mb-0 text-neutral-5 ">會員好康有哪些？</p>
                    <span class="material-symbols-outlined fs-36 text-neutral-5">
                        keyboard_arrow_{{ serviceList['member'].icon }}
                    </span>
                </div>
            </a>
            <Transition>
                <div v-show="serviceList['member'].show">
                    <div class="card border-0 card-body">
                        <p>會員獨享禮遇、會員專屬優惠價、會員生日禮、會員免費旅遊卷、會員信用卡分期及信用卡優惠、會員快速訂購，旅行說走就走。</p>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="row mb-24 px-12">
            <a class="btn btn-primary" @click="serviceHandler('pay-list')">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="fs-24 mb-0 text-neutral-5 ">訂單繳款的方式有哪些？</p>
                    <span class="material-symbols-outlined fs-36 text-neutral-5">
                        keyboard_arrow_{{ serviceList['pay-list'].icon }}
                    </span>
                </div>
            </a>
            <Transition>
                <div v-show="serviceList['pay-list'].show">
                    <div class="card border-0 card-body">
                        <p>我們提供多種方便的付款方式，以確保您能夠選擇最適合您的方式進行支付。</p>
                        <p>以下是一些常見的付款方式：</p>
                        <p>1.信用卡/借記卡支付： 您可以使用您的信用卡或借記卡透過我們的安全支付門戶進行線上支付。我們支援 Visa、MasterCard、American Express 等主要信用卡品牌。
                        </p>
                        <p>2.銀行轉帳： 如果您更喜歡通過銀行轉帳來支付，您可以選擇將費用匯款到我們提供的銀行帳戶。請注意，銀行轉帳可能需要一些時間來處理。</p>
                        <p>3.現金支付： 對於某些旅遊項目，我們也提供現場現金支付的選項。您可以在指定地點支付訂單費用。</p>
                        <p>4.預付款和分期付款： 如果您希望將付款分成幾個階段進行，我們也提供預付款和分期付款的選項，以便更好地適應您的財務需求。</p>
                        <p>我們非常重視您的付款安全和方便性，因此我們的付款系統經過嚴格的安全性措施和加密保護。如果您有任何付款相關的問題或特殊需求，請隨時聯繫我們的客戶服務團隊，我們將竭誠為您提供幫助。</p>
                        <p>請注意，付款方式可能因地理位置和具體旅遊項目而有所不同。在您選擇付款方式時，請確保選擇最適合您的方式進行支付。如果您有任何疑問，我們隨時樂意為您解答。</p>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="row mb-24 px-12">
            <a class="btn btn-primary" @click="serviceHandler('cancel')">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="fs-24 mb-0 text-neutral-5 ">訂購後，如果想取消或變更改行程、日期或航班，該如何處理？</p>
                    <span class="material-symbols-outlined fs-36 text-neutral-5">
                        keyboard_arrow_{{ serviceList['cancel'].icon }}
                    </span>
                </div>
            </a>
            <Transition>
                <div v-show="serviceList['cancel'].show">
                    <div class="card border-0 card-body">
                        <p>1.必須依照預定日期、航班、行程搭乘；若因旅客自願性更改行程導致與原訂位記錄不同，必須依照航空公司之更改規則。</p>
                        <p>2.此票為不可更改時，則必須將原機票依航空公司之退票規定辦理，產生之退票手續費需由旅客自負，再另外付款開立新機票。</p>
                        <p>3.此票為可更改時，若有產生機票差額，旅客必須補足差額及支付航空公司罰金與東南手續費，方可重新開立新行程的機票 (廉價航空皆為不能更改之票種)。</p>
                    </div>
                </div>
            </Transition>
        </div>



    </div>
</template>

<script setup>
import { ref } from 'vue';

const serviceList = ref({
    buy: { show: true, icon: 'down' },
    pay: { show: true, icon: 'down' },
    member: { show: true, icon: 'down' },
    'pay-list': { show: true, icon: 'down' },
    cancel: { show: true, icon: 'down' },
})

const serviceHandler = (service) => {
    serviceList.value[service].show = !serviceList.value[service].show;

    if (serviceList.value[service].icon === 'down') {
        serviceList.value[service].icon = 'up';
    } else {
        serviceList.value[service].icon = 'down';
    }

};
</script>

<style lang="scss" scoped>
.img-service {
    background-image: url('@/assets/images/service.jpg');
    background-size: cover;
    background-position: center;
}

.border-5 {
    --bs-border-width: 1px;

    @include pad {
        --bs-border-width: 5px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>