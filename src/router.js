import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Progress from "@/components/Progress/Progress"
import Routines from "@/components/Routines/Routines"
import CreateRoutine from "@/components/Routines/CreateRoutine"
import Profile from "@/components/User/Profile"
import Signin from "@/components/User/Signin"
import Signup from "@/components/User/Signup"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/routines',
      name: 'routines',
      component: Routines
    },
    {
      path: '/routines/create',
      name: 'createroutine',
      component: CreateRoutine
    },
    {
      path:'/profile',
      name: 'profile',
      component: Profile
    },
    {
      path:'/signup',
      name: 'signup',
      component: Signup
    },
    {
      path:'/signin',
      name: 'signin',
      component: Signin
    }
  ],
  mode:'history'
});
