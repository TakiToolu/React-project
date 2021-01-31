const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', //对应的 path
    icon: 'icon-shouye', // 图标名称
   },
  { title: '商品', key: '/products', icon:'icon-shuji',
    children: [ // 子菜单列表
      { title: '品类管理', key: '/category', icon: 'icon-leimupinleifenleileibie' },
      { title: '商品管理', key: '/product', icon: 'icon-shangpin' },
    ]
  },
  { title: '用户管理', key: '/user', icon: 'icon-yonghu' },
  { title: '角色管理', key: '/role', icon: 'icon-jiaose1', },
  {
    title: '图形图表',
    key: '/charts',
    icon: 'icon-list-2-copy',
    children: [
      {title: '柱形图', key: '/charts/bar', icon: 'icon-zhuxingtu'},
      {title: '折线图', key: '/charts/line', icon: 'icon-zhexiantu'},
      {title: '饼图', key: '/charts/pie', icon: 'icon-bingtu'}],
  }];
export default menuList;