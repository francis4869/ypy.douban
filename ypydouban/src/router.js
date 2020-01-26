import VueRouter from 'vue-router'
import Vue from 'vue'



import Home from './components/pages/Home'
import Events from './components/pages/Events'
import List from './components/pages/List'
import Pger from './components/pages/Pger'
import Video from './components/pages/Video.vue'


Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/index', component: Home },
        { path: '/Events', component: Events },
        { path: '/List', component: List },
        { path: '/Pger', component: Pger },
        { path: '/Video', component: Video }
    ]
})

export default router;