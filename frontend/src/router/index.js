import { createRouter, createWebHashHistory } from 'vue-router'
import homeView from '../views/home-view.vue'
import aboutView from '../views/about-view.vue'
import loginView from '../views/login-view.vue'
import listView from '../views/list-view.vue'
import itemAppView from '../views/item-app-view.vue'
import itemDetailsView from '../views/item-details-view.vue'
import itemEditView from '../views/item-edit-view.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/item',
      name: 'item-app',
      component: itemAppView,
      children: [
        {
          path: 'list',
          name: 'list',
          component: listView,
        },
        {
          path: ':itemId',
          name: 'item-details',
          component: itemDetailsView,
        },
        {
          path: 'edit/:itemId?',
          name: 'item-edit',
          component: itemEditView,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView,
    },
  ],
})

export default router
