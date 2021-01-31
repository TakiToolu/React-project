import React ,{Component} from 'react';
import './left_nav.less'
import Logo from '../../assets/images/logo.png'
import {Link,withRouter} from 'react-router-dom'
import { Menu, } from 'antd';
import {
  createFromIconfontCN
} from '@ant-design/icons';
import menuList from '../../config/menuConfig'

const IconFont=createFromIconfontCN({ scriptUrl: [
    '//at.alicdn.com/t/font_2029705_tvs2qwzww1.js',
  ]})

const { SubMenu } = Menu;

class LeftNav extends Component{
  constructor(props){
    super(props);
  }
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getMenuNodes=(menuList)=>{
    let path=this.props.location.pathname;//.history;
    // console.log('当前path:',path);
    return menuList.reduce((pre,item)=>{
      if(!item.children){
        pre.push((
            <Menu.Item key={item.key} >
              <Link to={item.key}>
                <IconFont type={item.icon}></IconFont>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
        ))
      }else{
        const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key
        }
        pre.push((
            <SubMenu  key={item.key}  title={
              <Link to={item.key}>
                <IconFont type={item.icon}/>
                 <span>{item.title}</span>
              </Link>
            }>
              {this.getMenuNodes(item.children)}
            </SubMenu>
        ))
      }
      return pre
    },[]);
  }
 componentWillMount() {
    this.menuNodes=this.getMenuNodes(menuList);
  }

  render(){
    let path = this.props.location.pathname;

    // 得到需要打开菜单项的key
    const openKey = this.openKey;
    console.log('render()',path,openKey)
    return (
        <div  className="nav" collapsed={this.state.collapsed.toString()}>
          <Link to="/" className="nav-header" style={{ width: '100%' }}>
            <img src={Logo} alt=""/>
            <h1>系统后台</h1>
          </Link>
          <Menu

              defaultOpenKeys={[openKey]}
              mode="inline"
              theme="dark"
              selectedKeys={[path]}

              // inlineCollapsed={this.state.collapsed}
          >
            {this.menuNodes}
          </Menu>
        {/*<Menu>*/}
        {/*  <div style={{ width: '100%' }}>*/}
        {/*    <Menu*/}
        {/*        defaultSelectedKeys={['1']}*/}
        {/*        defaultOpenKeys={['sub1']}*/}
        {/*        mode="inline"*/}
        {/*        theme="dark"*/}
        {/*        inlineCollapsed={this.state.collapsed}*/}
        {/*    >*/}
        {/*      <Menu.Item key="1" icon={<PieChartOutlined />}>*/}
        {/*        首页*/}
        {/*      </Menu.Item>*/}
        {/*      <SubMenu key="sub1" icon={<DesktopOutlined/>} title="书籍">*/}
        {/*        <Menu.Item key="2" icon={<AppstoreOutlined />}>*/}
        {/*          <span>书籍列表</span>*/}
        {/*        </Menu.Item>*/}
        {/*        <Menu.Item key="3" icon={<AppstoreOutlined />}>*/}
        {/*          <span>分类管理</span>*/}
        {/*        </Menu.Item>*/}
        {/*      </SubMenu>*/}
        {/*      <Menu.Item key="2" icon={<ContainerOutlined />}>*/}
        {/*        <Link to='/role'>*/}
        {/*          <span>角色管理</span>*/}
        {/*        </Link>*/}
        {/*      </Menu.Item>*/}
        {/*      <Menu.Item key="3" icon={<MailOutlined />}>*/}
        {/*        <Link to='/user'>*/}
        {/*          <span>用户管理</span>*/}
        {/*        </Link>*/}
        {/*      </Menu.Item>*/}
        {/*    </Menu>*/}
        {/*  </div>*/}
        {/*</Menu>*/}
        </div>
    )
  }
}

export default withRouter(LeftNav)