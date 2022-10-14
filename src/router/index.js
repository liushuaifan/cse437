import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/LogIn.vue'
import VisiTor from '../views/VisitorPage.vue'

const routes = [
  {path: '/', name:'Home',component: Homeview},
  {path: '/signUp', name:'signUp',component: SignUp },
  {path: '/LogIn', name:'LogIn',component: Login },
  {path: '/HomeView', name:'HomeView',component: Homeview },
  {path: '/VisitorPage', name:'VisitorPage',component: VisiTor},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router