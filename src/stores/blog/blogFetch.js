import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import {
    apiGetblogData,
    apiGetcommodityData
} from '@/api/index.js'

export const UseblogStore = defineStore('blogdata', () => {
    // 之後用json-server抓資料
    const blogData = ref([]);
    const commodityData = ref([]);

    apiGetblogData()
        .then((res) => {
            blogData.value = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    apiGetcommodityData()
        .then((res) => {
            commodityData.value = res.data;
        })
        .catch((err) => {
            console.log(err);
        })





    // const commodityData = ref([
    //     {
    //         cardtitle: '合掌村夢幻點燈',
    //         cardsubtitle: '燈祭/戲雪/雪見舟',
    //         time: '7天6夜',
    //         url: '/src/assets/images/Shirakawa.jpg',
    //         startdate: '2023/02/05',
    //         attractions: 11,
    //         recommends: [
    //             { image: '/src/assets/images/image01.jpg', description: '合掌村夢幻點燈：合掌村位於日本的白川鄉，是被列入世界文化遺產的古老村莊。在冬季的夜晚，合掌村的傳統民居會被點亮，營造出一個夢幻般的氛圍。數以千計的燈籠照亮了整個村落，讓您沉浸在濃郁的日本傳統氛圍中。' },
    //             { image: '/src/assets/images/image02.jpg', description: '這個燈光節慶是日本冬季的一大亮點。您可以在這個節慶中欣賞到壯麗的燈光裝置和燈籠，為冬季的夜晚增添了色彩和氛圍。這是一個結合了現代燈光技術和傳統文化的盛典，讓您驚艷不已。' },
    //             { image: '/src/assets/images/image03.jpg', description: '金澤是日本的古都，其兼六園是一處歷史悠久的庭園，被譽為日本三名園之一。在冬季，園內的景色獨具風味，樹木被雪覆蓋，悠久的建築與雪景交相輝映，讓人沉醉其中。' }
    //         ],
    //         features: [
    //             { title: '合掌村夢幻點燈', description: '合掌村位於日本的白川鄉，是被列入世界文化遺產的古老村莊。在冬季的夜晚，合掌村的傳統民居會被點亮，營造出一個夢幻般的氛圍。數以千計的燈籠照亮了整個村落，讓您沉浸在濃郁的日本傳統氛圍中' },
    //             { title: '冬華彩燈祭', description: '這個燈光節慶是日本冬季的一大亮點。您可以在這個節慶中欣賞到壯麗的燈光裝置和燈籠，為冬季的夜晚增添了色彩和氛圍。這是一個結合了現代燈光技術和傳統文化的盛典，讓您驚艷不已。' },
    //             { title: '金澤兼六園', description: '金澤是日本的古都，其兼六園是一處歷史悠久的庭園，被譽為日本三名園之一。在冬季，園內的景色獨具風味，樹木被雪覆蓋，悠久的建築與雪景交相輝映，讓人沉醉其中。' },
    //             { title: '牧歌之里戲雪', description: '牧歌之里是一個充滿濃厚鄉村氣息的度假村。在冬季，這裡舉辦戲雪活動，讓您參與各種有趣的雪上活動，如雪地滑雪、雪人製作等，是一個適合親子遊玩的地方。' },
    //             { title: '庄川峽雪見舟', description: '庄川峽是一處美麗的峽谷，而在冬季，庄川峽會舉辦雪見舟活動。您可以坐上特製的雪見舟，欣賞著被積雪覆蓋的峽谷美景，這種獨特的體驗讓您感受到冬季的浪漫與寧靜' }
    //         ],
    //         meals: [
    //             { image: '/src/assets/images/image04.jpg', description: '金澤烏冬' },
    //             { image: '/src/assets/images/image05.jpg', description: '金澤烏冬' },
    //             { image: '/src/assets/images/image06.jpg', description: '金澤烏冬' },
    //             { image: '/src/assets/images/image07.jpg', description: '金澤烏冬' }
    //         ],
    //         accommodations: [
    //             {
    //                 name: '住宿名稱',
    //                 description: '住宿描述、特色等等',
    //                 imageURL: '/src/assets/images/image08.jpg',
    //             },
    //             {
    //                 name: '住宿名稱',
    //                 description: '住宿描述、特色等等',
    //                 imageURL: '/src/assets/images/image09.jpg',
    //             },
    //             {
    //                 name: '住宿名稱',
    //                 description: '住宿描述、特色等等',
    //                 imageURL: '/src/assets/images/image10.jpg',
    //             }
    //         ],
    //         itineraryByDay: [
    //             {
    //                 day: 1,
    //                 title: '合掌村夢幻點燈',
    //                 description: '合掌村夢幻點燈～冬華彩燈祭、金澤兼六園、牧歌之里戲雪、庄川峽雪見舟',
    //                 activities: [
    //                     { description: '機場' },
    //                     { description: '飛機餐' },
    //                     { description: '酒店' },
    //                     { description: '晚餐愛知縣鰻魚三吃' },
    //                     { description: '名花之里(冬華競演彩燈季)' },
    //                     { description: '酒店' }
    //                 ]
    //             },
    //             {
    //                 day: 2,
    //                 title: '合掌村夢幻點燈',
    //                 description: '合掌村夢幻點燈～冬華彩燈祭、金澤兼六園、牧歌之里戲雪、庄川峽雪見舟',
    //                 activities: [
    //                     { description: '機場' },
    //                     { description: '飛機餐' },
    //                     { description: '酒店' },
    //                     { description: '晚餐愛知縣鰻魚三吃' },
    //                     { description: '名花之里(冬華競演彩燈季)' },
    //                     { description: '酒店' }
    //                 ]
    //             },
    //             {
    //                 day: 3,
    //                 title: '合掌村夢幻點燈',
    //                 description: '合掌村夢幻點燈～冬華彩燈祭、金澤兼六園、牧歌之里戲雪、庄川峽雪見舟',
    //                 activities: [
    //                     { description: '機場' },
    //                     { description: '飛機餐' },
    //                     { description: '酒店' },
    //                     { description: '晚餐愛知縣鰻魚三吃' },
    //                     { description: '名花之里(冬華競演彩燈季)' },
    //                     { description: '酒店' }
    //                 ]
    //             },

    //         ]

    //     },
    //     {
    //         cardtitle: '芬蘭極光奇幻之旅',
    //         cardsubtitle: '帝王蟹/北極光/赫爾辛基教堂',
    //         time: '13天12夜',
    //         url: '/src/assets/images/Finland.jpg'
    //     },
    //     {
    //         cardtitle: '野性非洲動物嘉年華',
    //         cardsubtitle: '大草原/野生國家公園/部落文化',
    //         time: '15天14夜',
    //         url: '/src/assets/images/Africa.jpg'
    //     }
    // ]);



    return {
        blogData,
        commodityData

    }
})