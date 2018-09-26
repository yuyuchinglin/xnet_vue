import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/login';
import Homepage from '@/components/pages/hp';
import Article from '@/components/pages/article';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name:'Login',
            component:Login,
        },
        {
            path: '/',
            name:'Homepage',
            component:Homepage,
        },
        {
            path: '/article/:id',
            name:'Article',
            component:Article,
        },
    ],
})