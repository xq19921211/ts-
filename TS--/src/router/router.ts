/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */

export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index'
    }
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('@/views/system/index.vue'),
    meta: {
        title: '系统设置',
        icon: 'setting',
        keepAlive: true,
    },
    children: [ 
      { path: 'information',
            name: 'information',
            component: () => import('@/views/system/information/index.vue'),
            meta: {
              title: '信息管理',
              keepAlive: true,
            }
          },
          {
            path: 'display',
            name: 'display',
            component: () => import('@/views/system/display/index.vue'),
            meta: {
              title: '显示管理',
              keepAlive: true,
            },
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('@/views/system/setting/index.vue'),
            meta: {
              title: '设置管理',
              keepAlive: true,
            },
          },
          {
            path: 'generate',
            name: 'generate',
            component: () => import('@/views/system/generate/index.vue'),
            meta: {
              title: '生成管理',
              keepAlive: true,
            },          
          }
    ]
  },               
]
