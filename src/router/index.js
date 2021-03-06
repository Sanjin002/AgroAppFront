import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Hello from '@/components/Hello'
import Crops from '@/components/Crops'
import Forecast from '@/components/Forecast'
import Graf from '@/components/Graf'
import SowingCalendar from '@/components/SowingCalendar'



Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/crops',
    	name: 'Crops',
    	component: Crops,
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast,
    },
    {
      path: '/graf',
      name: 'Graf',
      component: Graf,
    },
    {
      path:'/sowingcalendar',
      name: 'SowingCalendar',
      component: SowingCalendar
    }
  ]
})
