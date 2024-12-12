import {defineStore} from 'pinia'

export const useSearchStore = defineStore('search',{
    // 真正存储数据的地方
    state(){
        return {
            guessList:[
                {id:0,message:'4060'},
                {id:1,message:'笔记本电脑'},
                {id:2,message:'天玑9400'},
                {id:3,message:'拍照手机'},
                {id:4,message:'ROG'},
                {id:5,message:'台式机'},
                {id:6,message:'显卡'},
                {id:7,message:'手机'},
                {id:8,message:'游戏本'},
            ],
            recommendList:[
                {
                    id:0,
                    name:'ProArt 创16',
                    description:'AI 轻薄创作本 AI9HX 370 RTX4070',
                    price:'14999',
                    beforPrice:'16999',
                    image:'./images/freight3/9.jpg',
                    tag:['自营','保价']
                },
                {
                    id:1,
                    name:'oppo Find X8 Pro',
                    description:'抬手就出片 抓拍氛围感 AI手机 漫步云端 ',
                    price:'5999',
                    beforPrice:'6299',
                    image:'./images/freight2/2.jpg',
                    tag:['自营','保价']
                },
                {
                    id:2,
                    name:'vivo X200',
                    description:'蓝晶x天玑9400 | 蔡司APO超级长焦',
                    price:'6599',
                    beforPrice:'6999',
                    image:'./images/freight2/7.jpg',
                    tag:['自营','保价']
                },
                {
                    id:3,
                    name:'无畏16 银色版',
                    description:'13代标压i5 2.5K 144Hz',
                    price:'5099',
                    beforPrice:'5999',
                    image:'./images/freight3/4.jpg',
                    tag:['自营','保价']
                },
                {
                    id:4,
                    name:'COLORFIRE MEOW R15',
                    description:'R7 7735H RTX4060 144Hz',
                    price:'6399',
                    beforPrice:'6999',
                    image:'./images/freight3/0.jpg',
                    tag:['自营','保价']
                },
                {
                    id:5,
                    name:'HUAWEI Mate 70',
                    description:'鸿蒙AI 红枫原色影像 超可靠玄武架构',
                    price:'5999',
                    beforPrice:'6299',
                    image:'./images/freight2/3.jpg',
                    tag:['自营','保价']
                },
            ],
            resultList:[
                {
                    id:0,
                    name:'vivo X100s Pro',
                    description:'蔡司APO超级长焦 | 蓝晶x天玑9300',
                    price:'5599',
                    beforPrice:'5999',
                    image:'./images/freight2/0.jpg',
                    tag:['自营','保价']
                },
                {
                    id:1,
                    name:'Xiaomi 15',
                    description:'徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台',
                    price:'4999',
                    beforPrice:'5299',
                    image:'./images/freight2/1.jpg',
                    tag:['自营','保价']
                },
                {
                    id:2,
                    name:'oppo Find X8 Pro',
                    description:'抬手就出片 抓拍氛围感 AI手机 漫步云端 ',
                    price:'5999',
                    beforPrice:'6299',
                    image:'./images/freight2/2.jpg',
                    tag:['自营','保价']
                },
                {
                    id:3,
                    name:'HUAWEI Mate 70',
                    description:'鸿蒙AI 红枫原色影像 超可靠玄武架构',
                    price:'5999',
                    beforPrice:'6299',
                    image:'./images/freight2/3.jpg',
                    tag:['自营','保价']
                },
                {
                    id:4,
                    name:'荣耀X60 Pro',
                    description:'十面抗摔防水耐磨 超轻薄 10000mAh',
                    price:'1699',
                    beforPrice:'1999',
                    image:'./images/freight2/4.jpg',
                    tag:['自营','保价']
                },
                {
                    id:5,
                    name:'oppo Reno13 Pro',
                    description:'AI高清实况照片 双芯抢网 IP69',
                    price:'5599',
                    beforPrice:'5999',
                    image:'./images/freight2/5.jpg',
                    tag:['自营','保价']
                },
                {
                    id:6,
                    name:'Xiaomi Civi 3',
                    description:'双生双色设计 | 前置仿生双主摄',
                    price:'2099',
                    beforPrice:'2599',
                    image:'./images/freight2/6.jpg',
                    tag:['自营','保价']
                },
                {
                    id:7,
                    name:'vivo X200',
                    description:'蓝晶x天玑9400 | 蔡司APO超级长焦',
                    price:'6599',
                    beforPrice:'6999',
                    image:'./images/freight2/7.jpg',
                    tag:['自营','保价']
                },
                {
                    id:8,
                    name:'HUAWEI Pocket 2',
                    description:'超平整超可靠 全焦段XMAGE四摄 紫外防晒检测',
                    price:'8699',
                    beforPrice:'8999',
                    image:'./images/freight2/8.jpg',
                    tag:['自营','保价']
                },
                {
                    id:9,
                    name:'荣耀300',
                    description:'单反级雅顾人像 15000万潜望长焦 第三代骁龙8旗舰芯',
                    price:'2499',
                    beforPrice:'2999',
                    image:'./images/freight2/9.jpg',
                    tag:['自营','保价']
                },
                {
                    id:10,
                    name:'COLORFIRE MEOW R15',
                    description:'R7 7735H RTX4060 144Hz',
                    price:'6399',
                    beforPrice:'6999',
                    image:'./images/freight3/0.jpg',
                    tag:['自营','保价']
                },
                {
                    id:11,
                    name:'ROG幻16 Air 锐龙AI版 (2024) GA605',
                    description:'AI9 HX370  RTX4070 240Hz',
                    price:'7699',
                    beforPrice:'7999',
                    image:'./images/freight3/1.jpg',
                    tag:['自营','保价']
                },
                {
                    id:12,
                    name:'OMEN 暗影精灵 10 锐龙版',
                    description:'R9 8945H  RTX4060 144Hz',
                    price:'6699',
                    beforPrice:'6999',
                    image:'./images/freight3/2.jpg',
                    tag:['自营','保价']
                },
                {
                    id:13,
                    name:'机械革命蛟龙 16Pro',
                    description:'R7-7745HX 16G 1T RTX4070 240HZ 2.5K',
                    price:'7199',
                    beforPrice:'7999',
                    image:'./images/freight3/3.jpg',
                    tag:['自营','保价']
                },
                {
                    id:14,
                    name:'无畏16 银色版',
                    description:'13代标压i5 2.5K 144Hz',
                    price:'5099',
                    beforPrice:'5999',
                    image:'./images/freight3/4.jpg',
                    tag:['自营','保价']
                },
                {
                    id:15,
                    name:'暗影精灵 9 SLIM',
                    description:'i9 13900HX RTX4070 165Hz',
                    price:'6099',
                    beforPrice:'6599',
                    image:'./images/freight3/5.jpg',
                    tag:['自营','保价']
                },
                {
                    id:16,
                    name:'iGame Ultra Family',
                    description:'14700KF/32G DDR5/1T SSD/4070 Ti SUPER',
                    price:'14599',
                    beforPrice:'16999',
                    image:'./images/freight3/6.jpg',
                    tag:['自营','保价']
                },
                {
                    id:17,
                    name:'天选 锐龙AI版',
                    description:'AI9HX 370 RTX4070 青',
                    price:'11999',
                    beforPrice:'12999',
                    image:'./images/freight3/7.jpg',
                    tag:['自营','保价']
                },
                {
                    id:18,
                    name:'惠普(HP) 星Book Pro 16',
                    description:'16英寸笔记本电脑 16-ab0041TU-银色',
                    price:'5499',
                    beforPrice:'6299',
                    image:'./images/freight3/8.jpg',
                    tag:['自营','保价']
                },
                {
                    id:19,
                    name:'ProArt 创16',
                    description:'AI 轻薄创作本 AI9HX 370 RTX4070',
                    price:'14999',
                    beforPrice:'16999',
                    image:'./images/freight3/9.jpg',
                    tag:['自营','保价']
                },
            ]
        }
    }
})