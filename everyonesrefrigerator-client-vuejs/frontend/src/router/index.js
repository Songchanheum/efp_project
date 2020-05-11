import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreatUser from '../views/auth/CreateUser.vue'
// import ChatLogin from '../views/chat/ChatLogin.vue'
// import ChatRoom from '../views/chat/ChatRoom.vue'

Vue.use(VueRouter)

const requireAuth = (path) => async (to, from, next) => {
  const require = await store.getters.isAuthenticated
  if (require) {
    return next()
  }
  next('/sign?returnPath=scs/' + path)
}

const About = () => {
  return import('../views/About.vue')
}
const Singin = () => {
  return import('../views/auth/SignIn.vue')
}
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => About()
  },
  {
    path: '/sign',
    name: 'SingIn',
    component: () => Singin()
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreatUser
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatLogin,
    redirect: '/chat/login',
    children: [
      {
        path: 'login',
        component: ChatLogin,
        beforeEnter: requireAuth('chat/login')
      },
    ]
  },
  {
    path: '/char-room/:username',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: requireAuth('chat/login')
  }

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
