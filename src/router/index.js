import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/register',
    component: () => import('views/register/Register.vue'),
  },
  {
    path: '/login',
    component: () => import('views/login/Login.vue'),
  },
  {
    path: '/channel',
    component: () => import('views/channel/Channel.vue'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/dynamic',
    component: () => import ('views/dynamic/Dynamic.vue'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/purchase',
    component: () => import('views/purchase/Purchase.vue'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/user',
    component: () => import('views/user/User.vue'),
    meta: {
      showTabBar: true,
      istoken: true
    }
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue'),
    meta: {
      istoken: true
    }
  },
  {
    path: '/profileEdit',
    component: () => import('views/profile/ProfileEdit.vue'),
    meta: {
      istoken: true
    }
  },
  {
    path: '/detail/:id' ,
    component: () => import('views/detail/Detail.vue'),

  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to,from,next) => {
  if((!localStorage.getItem('token') || !localStorage.getItem('id')) && to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请先登录')
    return
  }
  next()  
})

export default router
