import React from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import Image from "next/image"
//import { Menu } from 'antd'
//import { SearchOutlined } from '@ant-design/icons'
import { Links } from './links.config'
import styles from './NavBar.module.scss'
import { NavBarUser } from './NavBar.user'
import { useActions } from "../../hooks/useActions"
import {AppBar, Toolbar} from "@mui/material"

interface ILink {
  path: string
  title: string
  route: string
}

export const NavBar: React.FC = () => {
  const router = useRouter()
  const { showLoading } = useActions()
  const isAuth = false

  return <>
    <AppBar position="static" style={{ background: '#001529' }} >
      <Toolbar>
        <div className={ styles.logo }>
          { router.asPath !== '/' ?
            <Link href='/' >
              <a onClick={showLoading}>
                <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo"/>
              </a>
            </Link> :
            <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo"/>
          }
        </div>
        <div>123131</div>
      </Toolbar>

    </AppBar>

    {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>*/}
    {/*  <Menu onClick={showLoading} theme="dark" mode="horizontal" selectedKeys={[router.asPath]} defaultSelectedKeys={['/']} style={{ width: '100%', marginLeft: 20 }}>*/}
    {/*    {Links.map((item: ILink) => {*/}
    {/*      return <Menu.Item key={ item.path } onClick={() => router.push(item.path)}>{ item.title }</Menu.Item>*/}
    {/*    })}*/}
    {/*  </Menu>*/}
    {/*  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 80 }}>*/}
    {/*    <SearchOutlined style={{ color: 'white', fontSize: 16 }} />*/}
    {/*    /!*<Input.Search placeholder="input search text" onSearch={(e) => console.log(e)} style={{ width: 200 }} />*!/*/}
    {/*    <NavBarUser isAuth={ isAuth } />*/}
    {/*  </div>*/}
    {/*</div>*/}
  </>
}