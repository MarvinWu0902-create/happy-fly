import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';

import App from './App.vue'
import router from './router'

// import 'bootstrap'
import './assets/scss/all.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
const app = createApp(App)


app.use(router);
app.use(createPinia())

// router.beforeEach(async (to, from) => {
//     // 執行取得Token函式
//     const isAuthenticated = await verifyHandler();
    
//     if (!isAuthenticated.status && to.name !== 'login') {
//         return { name: 'login' } //沒驗證過回到login就對了
//     } 
//     else if (isAuthenticated.status && to.name === 'login') {///如果驗證過了但還要前往首頁
//         return false;
//     }
//     else if (isAuthenticated.status) {
//         return true; //驗證完成
//     }

//     // 沒驗證而且前往login 不做任何事
// });


// 我只需要登入過就不能前往登入頁面除非將Token拔掉(isAuthenticated===false)

router.beforeEach(async(to,from)=>{
    const isAuthenticated = await verifyHandler();
    if(isAuthenticated.status&&to.name==='login'){
        return false
    }else{
        return true
    }
});









//驗證用戶是否有Token 
const verifyHandler = async () => {

    const token = document.cookie.split("; ").find((row) => row.startsWith("Token="))?.split("=")[1];

    const status = await axios.get('http://localhost:8000/users/verify', {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            if (res.data.message === '成功') {
                console.log(res);
                return { status: true, user: res.data.user }
            } else {
                console.log(res);
                return { status: false, user: res.data.user }
            }
        })
        .catch((err) => {
            console.log(err);
            return { status: false }
        });

    return status

}

//
app.mount('#app');
