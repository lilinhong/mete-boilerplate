// 在这个地方引入按需加载的组件
// lazyload components here
import React from 'react'

import HomePage from 'bundle-loader?lazy&name=Home!pages/Home'
import FeaturePage from 'bundle-loader?lazy&name=Sub1!pages/Feature'

import Bundle from '../components/Lazyload'
const DefaultLoading = () => <div style={{height: '100px'}}>正在加载</div>
const loadComponent = (Component, Loading = DefaultLoading) => () => (
  <Bundle load={Component}>
    {
    (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
  )
const nav = [
  {
    title: 'Index Page',
    route: '/',
    component: loadComponent(HomePage)
  },
  {
    title: 'Page1',
    route: '/features',
    component: loadComponent(FeaturePage)

    // child: [
    //   {
    //     title: 'Sub1',
    //     route: '/page1/sub1',
    //     component: loadComponent(Sub1)
    //   }, {
    //     title: 'Sub2',
    //     route: '/page1/sub2',
    //     component: loadComponent(Sub2)
    //   }
    // ]
  }
]
export default nav
