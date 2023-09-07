import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import CensusList from "./components/census/CensusList.vue";
import CensusDetail from "./components/census/CensusDetail.vue";
import DashboardPage from "./components/pages/DashboardPage.vue";
import HistoryPage from "./components/pages/HistoryPage.vue";
import SettingPage from "./components/pages/SettingPage.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faTableColumns, faUsers, faClockRotateLeft, faGear, faHouseChimney, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faChevronRight, faChevronLeft, faArrowsRotate, faCircleInfo, faPencil, faMagnifyingGlass, faCircleExclamation, faBan)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      name: "main", 
      component: CensusList, 
      path: "/", 
      children: []
    },
    { 
      name: "detail", 
      component: CensusDetail, 
      path: "/census-detail", 
      children: [] 
    },
    { 
      name: "dashboard", 
      component: DashboardPage, 
      path: "/dashboard", 
      children: [] 
    },
    { 
      name: "history", 
      component: HistoryPage, 
      path: "/history", 
      children: [] 
    },
    { 
      name: "setting", 
      component: SettingPage, 
      path: "/setting", 
      children: [] 
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
