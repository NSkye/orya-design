import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import ContactMe from '@/pages/ContactMe'
import Portfolio from '@/pages/Portfolio'
import SmartCarProject from '@/pages/SmartCarProject'

export default new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contact-me', component: ContactMe },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/smart-car-project',
      component: SmartCarProject
    }
  ]
})
