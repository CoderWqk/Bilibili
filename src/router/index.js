import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/login/Login.vue');
const Register = () => import('@/views/register/Register.vue');
const Profile = () => import('@/views/profile/Profile.vue');
const ProfileEdit = () => import('@/views/profile/ProfileEdit.vue');
const Home = () => import('@/views/home/Home.vue');
const Article = () => import('@/views/home/Article.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/profile',
    component: Profile,
    meta: {
      istoken: true
    }
  }, {
    path: '/profileEdit',
    component: ProfileEdit,
    meta: {
      istoken: true
    }
  }, {
    path: '/home',
    component: Home,
    meta: {
      keepalive: true
    }
  }
  , {
    path: '/article/:id',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((!sessionStorage.getItem("id") || !sessionStorage.getItem("token")) && to.meta.istoken == true) {
    // next('/login');
    router.push('/login');
    return
  }
  next();
})


export default router
