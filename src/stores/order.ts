import {defineStore} from 'pinia'

export const useOrderStore = defineStore('order',{
    // 真正存储数据的地方
    state(){
        return {
            order0:[
                {
                    id:0,
                    num:1,
                    name:'机械革命蛟龙 16Pro',
                    description:'R7-7745HX 16G 1T RTX4070 240HZ 2.5K',
                    price:'7199',
                    beforPrice:'7999',
                    image:'./images/freight3/3.jpg',
                    tag:['自营','保价']
                },
                {
                    id:1,
                    num:1,
                    name:'COLORFIRE MEOW R15',
                    description:'R7 7735H RTX4060 144Hz',
                    price:'6399',
                    beforPrice:'6999',
                    image:'./images/freight3/0.jpg',
                    tag:['自营','保价']
                },
                {
                    id:2,
                    num:1,
                    name:'暗影精灵 9 SLIM',
                    description:'i9 13900HX RTX4070 165Hz',
                    price:'6099',
                    beforPrice:'6599',
                    image:'./images/freight3/5.jpg',
                    tag:['自营','保价']
                },
                {
                    id:3,
                    num:1,
                    name:'iGame Ultra Family',
                    description:'14700KF/32G DDR5/1T SSD/4070 Ti SUPER',
                    price:'14599',
                    beforPrice:'16999',
                    image:'./images/freight3/6.jpg',
                    tag:['自营','保价']
                },
                {
                    id:4,
                    num:1,
                    name:'惠普(HP) 星Book Pro 16',
                    description:'16英寸笔记本电脑 16-ab0041TU-银色',
                    price:'5499',
                    beforPrice:'6299',
                    image:'./images/freight3/8.jpg',
                    tag:['自营','保价']
                },
                {
                    id:5,
                    num:1,
                    name:'Xiaomi Civi 3',
                    description:'双生双色设计 | 前置仿生双主摄',
                    price:'2099',
                    beforPrice:'2599',
                    image:'./images/freight2/6.jpg',
                    tag:['自营','保价']
                },
            ],
            order1:[
                {
                    id:3,
                    num:1,
                    name:'暗影精灵 9 SLIM',
                    description:'i9 13900HX RTX4070 165Hz',
                    price:'6099',
                    beforPrice:'6599',
                    image:'./images/freight3/5.jpg',
                    tag:['自营','保价']
                },
                {
                    id:5,
                    num:1,
                    name:'Xiaomi Civi 3',
                    description:'双生双色设计 | 前置仿生双主摄',
                    price:'2099',
                    beforPrice:'2599',
                    image:'./images/freight2/6.jpg',
                    tag:['自营','保价']
                },
            ],
            order2:[
                {
                    id:2,
                    num:1,
                    name:'暗影精灵 9 SLIM',
                    description:'i9 13900HX RTX4070 165Hz',
                    price:'6099',
                    beforPrice:'6599',
                    image:'./images/freight3/5.jpg',
                    tag:['自营','保价']
                },
            ],
            order3:[

                {
                    id:0,
                    num:1,
                    name:'机械革命蛟龙 16Pro',
                    description:'R7-7745HX 16G 1T RTX4070 240HZ 2.5K',
                    price:'7199',
                    beforPrice:'7999',
                    image:'./images/freight3/3.jpg',
                    tag:['自营','保价']
                },
                {
                    id:4,
                    num:1,
                    name:'惠普(HP) 星Book Pro 16',
                    description:'16英寸笔记本电脑 16-ab0041TU-银色',
                    price:'5499',
                    beforPrice:'6299',
                    image:'./images/freight3/8.jpg',
                    tag:['自营','保价']
                },
            ],
            order4:[
                {
                    id:1,
                    num:1,
                    name:'COLORFIRE MEOW R15',
                    description:'R7 7735H RTX4060 144Hz',
                    price:'6399',
                    beforPrice:'6999',
                    image:'./images/freight3/0.jpg',
                    tag:['自营','保价']
                },
            ],

        }
    }
})