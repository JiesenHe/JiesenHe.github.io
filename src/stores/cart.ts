import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart',{
    // 真正存储数据的地方
    state(){
        return {
            shopList:[
                {
                    shopId:'0',
                    shopName:'荣耀旗舰店',
                    goodList:[
                        {
                            id:0,
                            name:'荣耀300 Pro+',
                            description:'单反级雅顾人像 15000万潜望长焦 第三代骁龙8旗舰芯',
                            price:2499,
                            quantity:1,
                            image:'./images/freight2/9.jpg',
                            tag:['首发','保价']
                        },{
                            id:1,
                            name:'荣耀X60 Pro',
                            description:'十面抗摔防水耐磨 超轻薄 10000mAh',
                            price:1699,
                            quantity:2,
                            image:'./images/freight2/4.jpg',
                            tag:['自营','保价']
                        }
                    ]
                },
                {
                    shopId:'1',
                    shopName:'七彩虹旗舰店',
                    goodList:[
                        {
                            id:0,
                            name:'iGame Ultra Family',
                            description:'14700KF/32G DDR5/1T SSD/4070 Ti SUPER',
                            price:14599,
                            quantity:1,
                            image:'./images/freight3/6.jpg',
                            tag:['自营','隔日达']
                        },
                    ]
                },
                {
                    shopId:'2',
                    shopName:'ASUS华硕旗舰店',
                    goodList:[
                        {
                            id:0,
                            name:'ProArt 创16',
                            description:'AI 轻薄创作本 AI9HX 370 RTX4070',
                            price:14999,
                            quantity:1,
                            image:'./images/freight3/9.jpg',
                            tag:['运费险','保价']
                        },{
                            id:1,
                            name:'无畏16 银色版',
                            description:'13代标压i5 2.5K 144Hz',
                            price:5099,
                            quantity:1,
                            image:'./images/freight3/4.jpg',
                            tag:['自营','保价']
                        },
                    ]
                },

            ],
        }
    }
})