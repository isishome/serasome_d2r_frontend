const pnf = () => import(/* webpackChunkName: "d2r-default" */ '@/pages/d2r/PNF')
const d2rMain = () => import(/* webpackChunkName: "d2r-default" */ '@/pages/d2r/Main')
const d2rCarousel = () => import(/* webpackChunkName: "d2r-default" */ '@/components/d2r/Carousel')

const d2rBbs = () => import(/* webpackChunkName: "d2r-router" */ '@/pages/d2r/Bbs')
const d2rAccount = () => import(/* webpackChunkName: "d2r-router" */ '@/pages/d2r/Account')
const d2rKnowledge = () => import(/* webpackChunkName: "d2r-router" */ '@/pages/d2r/Knowledge/Main')
const d2rStorage = () => import(/* webpackChunkName: "d2r-router" */ '@/pages/d2r/Storage')
const d2rSearch = () => import(/* webpackChunkName: "d2r-router" */ '@/pages/d2r/Search')
//const d2rCalc = () => import(/* webpackChunkName: "d2r-calc" */ '@/pages/d2r/Calc')

const routes = [
  {
    name: 'pnf',
    path: '*',
    component: pnf,
    meta: {
      independent: true
    }
  },
  {
    name: 'd2r-main',
    path: '/',
    components: {
      carousel: d2rCarousel,
      default: d2rMain
    },
    meta: {
      noAD: true
    }
  },
  // {
  //   name: 'd2r-calc',
  //   path: '/d2r/calc',
  //   component: d2rCalc,
  //   meta: {
  //     noAD: true,
  //     independent: true
  //   }
  // },
  {
    path: '/cube',
    redirect: '/knowledge/Items/Cube',
  },
  {
    path: '/rune',
    redirect: '/knowledge/Items/Rune',
  },
  {
    path: '/craft',
    redirect: '/knowledge/Items/Craft',
  },
  {
    path: '/skills',
    redirect: '/knowledge/Skills',
  },
  {
    name: 'd2r-bbs',
    path: '/bbs/:sec',
    component: d2rBbs,
    props: true,
    meta: {
      checkGrade: 'list'
    },
    children: [
      {
        name: 'd2r-read',
        path: 'read/:pid',
        component: d2rBbs,
        props: true,
        meta: {
          checkGrade: 'read',
          progress: true,
          topScroll: true
        }
      },
      {
        name: 'd2r-write',
        path: 'write',
        component: d2rBbs,
        meta: {
          requireAuth: true,
          checkGrade: 'write'
        },
        children: [
          {
            name: 'd2r-modify',
            path: ':pid',
            component: d2rBbs,
            props: true,
            meta: {
              requireAuth: true,
              checkGrade: 'write'
            }
          }]
      },
    ]
  },
  {
    name: 'd2r-account',
    path: '/account',
    component: d2rAccount,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'd2r-knowledge',
    path: '/knowledge',
    component: d2rKnowledge,
    props: true,
    meta: {
      topScroll: true
    },
    children: [
      {
        name: 'd2r-knowledge-section',
        path: ':section',
        component: d2rKnowledge,
        children: [
          {
            name: 'd2r-knowledge-part',
            path: ':part',
            component: d2rKnowledge,
            children: [
              {
                name: 'd2r-knowledge-data',
                path: ':sid',
                component: d2rKnowledge,
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'd2r-storage',
    path: '/storage',
    component: d2rStorage,
    props: true,
    meta: {
      requireAuth: true
    },
    children: [
      {
        name: 'd2r-storage-account',
        path: ':aid',
        component: d2rStorage,
        children: [
          {
            name: 'd2r-storage-character',
            path: ':cid',
            component: d2rStorage
          }]
      }]
  },
  {
    name: 'd2r-search',
    path: '/search',
    component: d2rSearch,
    props: true
  }
]

export default routes