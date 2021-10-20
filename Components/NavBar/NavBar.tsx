import React from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Links } from './links.config'
import styles from './NavBar.module.scss'
import { NavBarUser } from './NavBar.user'

interface ILink {
  path: string
  title: string
  route: string
}

export const NavBar: React.FC = () => {
  const router = useRouter()
  const isAuth = true

  return <>
    <div className={ styles.logo }>
      <Link href='/' >
        <a>
          <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo"/>
        </a>
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '100%', marginLeft: 20 }}>
        {Links.map((item: ILink, index: number) => {
          const key = index + 1
          return <Menu.Item key={key} onClick={() => router.push(item.path)}>{ item.title }</Menu.Item>
        })}
      </Menu>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 80 }}>
        <SearchOutlined style={{ color: 'white', fontSize: 16 }} />
        {/*<Input.Search placeholder="input search text" onSearch={(e) => console.log(e)} style={{ width: 200 }} />*/}
        <NavBarUser isAuth={ isAuth } />
      </div>
    </div>
  </>
}