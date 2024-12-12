// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

// 引入一个一个可能要呈现组件
import HomeView from '@/views/HomeView.vue';
import VideoView from '@/views/VideoView.vue';
import CartView from "@/views/CartView.vue";
import SearchView from '@/views/SearchView.vue';
import DetailView from "@/views/DetailView.vue";
import UserView from '@/views/User/UserView.vue';
import Setting from '@/views/User/Setting.vue';
import Login from '@/views/User/Login.vue';
import Order from '@/views/User/Order.vue';
import SettleView from "@/views/SettleView.vue";

// 第二步：创建路由器
const router = createRouter({
    history:createWebHistory(), //路由器的工作模式（稍后讲解）
    routes:[ //一个一个的路由规则
        {
            name:'Home',
            path:'/home',
            component:HomeView,
            meta:{
                isShow:true
            }
        },
        {
            name:'Video',
            path:'/video',
            component:VideoView,
            meta:{
                isShow:true
            }
        },
        {
            name:'Cart',
            path:'/cart',
            component:CartView,
            meta:{
                isShow:true
            }
        },
        {
            name:'User',
            path:'/user',
            component:UserView,
            meta:{
                isShow:true
            }
        },
        {
            name:'Setting',
            path:'/setting',
            component:Setting,
            meta:{
                isShow:false
            }
        },
        {
            name:'Login',
            path:'/login',
            component:Login,
            meta:{
                isShow:false
            }
        },
        {
            name: 'Order',
            path:'/order',
            component:Order,
            meta:{
                isShow:false
            }
        },
        {
            name:'Search',
            path:'/search',
            component:SearchView,
            meta:{
                isShow:false
            }
        },{
            name:'Detail',
            path:'/detail',
            component:DetailView,
            meta: {
                isShow: false
            }
        },
        {
            name:'Settle',
            path:'/settle',
            component:SettleView,
            meta: {
                isShow: false
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

// 暴露出去router
export default router
