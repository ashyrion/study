/* eslint-disable semi */
import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import StudyOne from '@/components/StudyOne';
// import time from '@/components/time';
import countBox from '@/components/countBox';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'StudyOne',
    //   component: StudyOne
    // },
    // {
    //   path: '/',
    //   name: 'time',
    //   component: time
    // },
    {
      path: '/',
      name: 'countBox',
      component: countBox
    }
  ]
});
