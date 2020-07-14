import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const indexView = () => import('@/components/content/indexView.vue')
const routes = [
    {
        path: '/',
        redirect:'/indexView'
    },
    {
        path: '/indexView',
        component: indexView
    }
]


const router = new VueRouter({
    routes
})
export default router