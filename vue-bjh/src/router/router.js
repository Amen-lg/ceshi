import App from '@/App.vue'

const index = r  => require.ensure([], () => r(require('@/pages/index/index')), 'index')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: './index'
    },
    {
      path: '/index',
      name:'index',
      component: index
    }]
}]
