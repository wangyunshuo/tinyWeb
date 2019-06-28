let A = () => import(/* webpackChunkName: "index" */ '../views/a.vue')
let B = () => import(/* webpackChunkName: "index" */ '../views/b.vue')
let routeData = [
  {
    path: '/a',
    component: A,
  },
  {
    path: '/b',
    component: B
  }
]
export default routeData
