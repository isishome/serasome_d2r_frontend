export const routes = [
  {
    name: 'pnf',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/PNF.vue')
  },
  {
    path: '/',
    component: () => import('@/pages/Layout.vue'),
    children: [
      {
        name: 'd2r-main',
        path: '',
        components: {
          carousel: () => import('@/components/Carousel.vue'),
          default: () => import('@/pages/Main.vue')
        }
      },
      {
        name: 'd2r-bbs',
        path: 'bbs/:sec',
        component: () => import('@/pages/Bbs.vue'),
        props: true,
        meta: {
          checkGrade: 'list'
        },
        children: [
          {
            name: 'd2r-read',
            path: 'read/:pid',
            component: () => import('@/pages/Bbs.vue'),
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
            component: () => import('@/pages/Bbs.vue'),
            meta: {
              checkGrade: 'write'
            },
            children: [
              {
                name: 'd2r-modify',
                path: ':pid',
                component: () => import('@/pages/Bbs.vue'),
                props: true,
                meta: {
                  checkGrade: 'write'
                }
              }]
          },
        ]
      },
      {
        name: 'd2r-knowledge',
        path: '/knowledge',
        component: () => import('@/pages/knowledge/Main.vue'),
        children: [
          {
            name: 'd2r-knowledge-section',
            path: ':section',
            component: () => import('@/pages/knowledge/Section.vue'),
            props: true,
            children: [
              {
                name: 'd2r-knowledge-part',
                path: ':part',
                component: () => import('@/pages/knowledge/Part.vue'),
                props: true,
                children: [
                  {
                    name: 'd2r-knowledge-store',
                    path: ':sid',
                    component: () => import('@/pages/knowledge/Part.vue'),
                    props: true
                  }
                ]
              }
            ]
          }
        ]
      },
      // {
      //   name: 'd2r-search',
      //   path: '/search',
      //   component: () => import('@/pages/Search.vue'),
      //   props: true
      // }
      // {
      //   name: 'd2r-calc',
      //   path: 'calc',
      //   component: () => import('@/pages/Calc'),
      //   meta: {
      //     noAD: true,
      //     independent: true
      //   }
      // },
    ]
  }
]