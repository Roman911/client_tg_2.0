import { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'antd'
import { Links } from './links.config'
import styles from './NavBar.module.scss'

interface ILink {
  path: string
  title: string
  route: string
}

export const NavBar: NextComponentType = () => {
  const router = useRouter()
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
      <div style={{ width: 100, color: '#fff' }}>
        123213
      </div>
    </div>
  </>
}