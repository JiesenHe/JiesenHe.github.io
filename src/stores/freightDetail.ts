import {defineStore} from 'pinia'

export const useFreightDetailStore = defineStore('freightDetail',{
    // 真正存储数据的地方
    state(){
        return {
            Swipe:[
                {id: 0, path: './images/freightDetail/detail-swipe-0.png'},
                {id: 1, path: './images/freightDetail/detail-swipe-1.png'},
                {id: 2, path: './images/freightDetail/detail-swipe-2.png'},
                {id: 3, path: './images/freightDetail/detail-swipe-3.png'},
                {id: 4, path: './images/freightDetail/detail-swipe-4.png'},
            ],
            price:'5999',
            tags:['白金会员退换货包邮费','积分最多可抵100元','30天保价格'],
            name:'Manli GeForce RTX™ 4070 Ti Super 雪狐',
            description:' 8448流处理器  |  706 TOPS AI 算力  |  16GB GDDR6X  |  21Gpbs显存  |  纯白外观  |  终身售后',
            flow:[
                {id:0,name:'支付定金',detail:'提前锁定购买资格'},
                {id:1,name:'产品发布',detail:'发售日开启售卖'},
                {id:2,name:'支付尾款',detail:'发布会后24小时'},
                {id:3,name:'发货',detail:'发货时间为1-3个工作日'},
            ],
            specification:[
                {id:0,name:'产品名称',detail:'Manli GeForce RTX™ 4070 Ti Super 16GB 雪狐'},
                {id:1,name:'产品型号',detail:'M-NRTX4070TIS/6RMHPPP-M3596'},
                {id:2,name:'晶片名称',detail:'GeForce RTX™ 4070 Ti Super'},
                {id:3,name:'基本/加速时脉',detail:'2340/2610MHz'},
                {id:4,name:'NVIDIA CUDA® 核心',detail:'8448'},
                {id:5,name:'记忆体配置',detail:'16GB GDDR6X'},
                {id:6,name:'记忆体速度',detail:'21.0Gbps'},
                {id:7,name:'记忆体介面',detail:'256-bit'},
                {id:8,name:'记忆体频宽',detail:'672GB/s'},
                {id:10,name:'显卡宽度',detail:'2-Slot'},
                {id:11,name:'风扇设计',detail:'三风扇'},
                {id:12,name:'输出端口',detail:'3 x DisplayPort, HDMI'},
                {id:13,name:'显卡尺寸',detail:'315 x 120 x 42mm'},
                {id:14,name:'显卡功率',detail:'285W'},
                {id:15,name:'GPU 最高温度',detail:'90℃'},
                {id:16,name:'包装尺寸',detail:'380*190*90mm'},
                {id:17,name:'其他',detail:''},
            ],
            detailImage:[
                {id:0,path:'./images/freightDetail/detail-information-0.jpg'},
                {id:1,path:'./images/freightDetail/detail-information-1.jpg'},
                {id:2,path:'./images/freightDetail/detail-information-2.jpg'},
                {id:3,path:'./images/freightDetail/detail-information-3.jpg'},
                {id:4,path:'./images/freightDetail/detail-information-4.jpg'},
                {id:5,path:'./images/freightDetail/detail-information-5.jpg'},
                {id:6,path:'./images/freightDetail/detail-information-6.jpg'},
            ]
        }
    }
})