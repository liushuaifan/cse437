import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/LogIn.vue'
import VisiTor from '../views/VisitorPage.vue'
import CreateReview from '../views/CreateReview.vue'
import ReView from '../views/ReView.vue'
import ProfilE from '../views/ProfilE.vue'

const routes = [
  {path: '/', name:'VisiTor',component: VisiTor},
  {path: '/signUp', name:'signUp',component: SignUp },
  {path: '/LogIn', name:'LogIn',component: Login },
  {path: '/HomeView', name:'HomeView',component: Homeview },
  {path: '/VisitorPage', name:'VisitorPage',component: VisiTor},
  {path: '/CreateReview', name:'CreateReview',component: CreateReview},
  {path: '/ReView/:reviewId', name:'ReView',component: ReView},
  {path: '/ProfilE', name:'ProfilE',component: ProfilE},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router