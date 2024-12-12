import {defineStore} from 'pinia'

export const useFunctionStore = defineStore('function',{
    // 真正存储数据的地方
    state(){
        return {
            function:[
                {
                    id:0,
                    name:'智慧办公',
                    images:'./images/icon/header-0.webp',
                    path:''
                }, {
                    id:1,
                    name:'智能家居',
                    images:'./images/icon/header-1.webp',
                    path:''
                }, {
                    id:2,
                    name:'智能手机',
                    images:'./images/icon/header-2.webp',
                    path:''
                },{
                    id:3,
                    name:'运动健康',
                    images:'./images/icon/header-3.webp',
                    path:''
                },{
                    id:4,
                    name:'智慧出行',
                    images:'./images/icon/header-4.webp',
                    path:''
                },{
                    id:5,
                    name:'学生优惠',
                    images:'./images/icon/header-5.webp',
                    path:''
                },{
                    id:6,
                    name:'企业商用',
                    images:'./images/icon/header-6.webp',
                    path:''
                },{
                    id:7,
                    name:'配件中心',
                    images:'./images/icon/header-7.webp',
                    path:''
                }
            ],
            swipes:[
                {id: 0, path: './images/home-swipe/Swipe-0.jpg'},
                {id: 1, path: './images/home-swipe/Swipe-1.jpg'},
                {id: 2, path: './images/home-swipe/Swipe-2.jpg'},
                {id: 3, path: './images/home-swipe/Swipe-3.jpg'},
            ],
        }
    }
})