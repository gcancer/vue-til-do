import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter); // Vue.use는 플러그인을 초기화(실행) 하기 위해 필요한 코드

//export: new 연산자 객체가 밖으로 나감
//default: 하나의 파일만
//VueRouter에 의해 제어되는 페이지의 정보를 담는 배열 or 속성

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*', // 나머지 모든 URL에 대해 반응하겠다.,
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
