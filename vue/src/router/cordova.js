const d2rKnowledge = () => import(/* webpackChunkName: "d2r-knowledge" */ '@/pages/d2r/Knowledge/Main')

const routes = [
  {
    name: 'd2r-knowledge',
    path: '/',
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
            component: d2rKnowledge
          }
        ]
      }
    ]
  }
]

export default routes