import VueRouter from 'vue-router'
import Vue from 'vue'



import Home from './pages/Home'
import Events from './pages/Events'
import List from './pages/List'
import Pger from './pages/Pger'
import Video from './pages/Video.vue'


Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: Home },
        { path: '/Events', component: Events },
        { path: '/List', component: List },
        { path: '/Pger', component: Pger },
        { path: '/Video', component: Video }
    ]
})

export default router;