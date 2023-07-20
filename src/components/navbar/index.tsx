import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import doorLogo from '@/assets/door_logo.png'
import Image from 'next/image'

// import Link from 'next/link'
const Navbar = (props: any) => {
  // let { appState } = useContext(AppContext)
  const [appState] = useState<{ loged: Boolean }>({ loged: false })
  //选中的头部菜单
  const [selectedKeys, setSelectedKeys] = useState<string[]>(props.selectedKeys)

  /*
   * 设置头部菜单选中时的样式
   */
  useEffect(() => {
    setSelectedKeys(props.selectedKeys)
  }, [props.selectedKeys])

  /*
   * 下拉显示时的菜单样式修改
   */
  const handleOpenChange = () => {
    const activeSubMenu = document.getElementsByClassName(
      'ant-menu-submenu-active'
    )
    if (activeSubMenu && activeSubMenu.length > 0) {
      const menuWraper = document.getElementById('app-menu-wrap')
      if (menuWraper) menuWraper.classList.add('menu-wrap-active')
    } else {
      const menuWraper = document.getElementById('app-menu-wrap')
      if (menuWraper) menuWraper.classList.remove('menu-wrap-active')
    }
  }

  /*
   * logo点击跳转
   */
  function handleGoToAdmin() {
    if (!appState.loged) {
      // history.push('/login')
    } else {
      // history.push('/service-list')
    }
  }

  /*
   * 用户信息
   */
  function UserInfoView() {
    if (!appState.loged) {
      return (
        <div>
          <span className="register-btn">
            <a href={`/registry`}>注册</a>
          </span>
          <span className="dividing-line">|</span>
          <span className="login-btn">
            <a href={`/login`}>登录</a>
          </span>
        </div>
      )
    } else {
      return (
        <Menu mode="horizontal" onOpenChange={handleOpenChange}>
          <Menu.SubMenu
            popupClassName="door-header-sub-menu"
            key="resources-home"
            title={''}>
            <Menu.Item key="null"></Menu.Item>
            <Menu.Item key="intro">
              <a href={`/user`}>个人信息</a>
            </Menu.Item>
            <Menu.Item key="intro">
              <span onClick={() => {}}>退出登录</span>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      )
    }
  }

  /**
   * 处理菜单点击
   */
  function handleSelectedMenuItem() {
    // debugger
  }
  return (
    <div
      className="app-menu-wrap"
      style={{ background: props.backgroundColor }}>
      <div className="app-logo" onClick={() => {}}>
        <Image src={doorLogo} alt="首页" />
        <span className="app-logo-title">开放平台</span>
      </div>
      <div className="app-menu">
        <Menu
          onOpenChange={handleOpenChange}
          selectedKeys={selectedKeys}
          onClick={handleSelectedMenuItem}
          mode="horizontal">
          {/* forceSubMenuRender */}
          <Menu.Item key="/main/door?menuType=door">首页</Menu.Item>
          <Menu.Item key="/main/announce?type=null&menuType=announce">
            公告栏
          </Menu.Item>
          <Menu.SubMenu
            popupClassName="door-header-sub-menu"
            key="resources-home?menuType=resources"
            title="资源中心"
            onTitleClick={props.handleSelectedMenuItem}>
            <Menu.Item key="/main/resources?menuType=resources">
              资源中心
            </Menu.Item>
            <Menu.Item key="/main/doc/platform?menuType=intro&selectdMenuKey=platform">
              新手教程
            </Menu.Item>
            <Menu.Item key="/main/doc/docApiListAll?menuType=doc&selectdMenuKey=docApiListAll">
              文档中心
            </Menu.Item>
            <Menu.Item key="/main/doc/faq?menuType=faq&selectdMenuKey=faq_null&typeName=所有FAQ&typeId=null">
              技术支持
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
      <div className="app-admin person-info">
        <div className="admin-entry" onClick={handleGoToAdmin}>
          控制台
        </div>
        <UserInfoView />
      </div>
    </div>
  )
}

export default Navbar
