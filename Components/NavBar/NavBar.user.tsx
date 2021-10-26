import React from "react"
import { useRouter } from "next/router"
import { Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"
import styles from './NavBar.module.scss'
import { useActions } from "../../hooks/useActions"

interface IUser {
  isAuth: boolean
}

export const NavBarUser: React.FC<IUser> = ({ isAuth }) => {
  const router = useRouter()
  const { addedHref, showLoading } = useActions()

  const handleClick = () => {
    showLoading()
    addedHref(router.asPath)
    router.push('/login').then(r => r)
  }

  return <div onClick={ handleClick } className={styles.avatar}>
    {isAuth ?
      <Avatar size={36} src='http://localhost:3005/images/9uhxGPrfyo0SwC.jpg' /> :
      <Avatar size={36} icon={<UserOutlined />} />
    }
  </div>
}