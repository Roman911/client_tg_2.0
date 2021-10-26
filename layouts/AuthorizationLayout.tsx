import React from "react"
import { useRouter } from 'next/router'
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Layout, Typography } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { useTypedSelector } from "../hooks/useTypedSelector"
import logo from "../public/logo.png"
import { Progress } from "../Components"
import styles from './Layout.module.scss'

interface IAuthorizationLayout {
  title: string
  text: string
  path: string
  btn: string
}

export const AuthorizationLayout: React.FC<IAuthorizationLayout> = ({ title, text, path, btn, children }) => {
  const router = useRouter()
  const { loadingPage, getBack } = useTypedSelector(state => state)

  const handleClick = () => {
    router.push(getBack.href).then(r=>r)
  }

  return <Layout className={ styles.authorizationLayout }>
    <Head>
      <meta name="keywords" content='маршрути по україні, веломаршрути, подорожі, цікаві місця' />
      <meta name="description" content='Ми про подорожі' />
      <title>
        { title } | Travel Guide
      </title>
    </Head>
    <Layout.Content>
      <div className={ styles.authorizationLayout__header }>
        <Link href='/'>
          <a><Image src={ logo } layout='intrinsic' alt='logo' width={102} height={44} /></a>
        </Link>
        <CloseOutlined onClick={ handleClick } className={ styles.authorizationLayout__close } />
      </div>
      <div className={ styles.authorizationLayout__content } >
        <Typography.Title className={ styles.authorizationLayout__title }>{ title }</Typography.Title>
        <div className={ styles.authorizationLayout__link }>
          <Typography.Text>{ text }</Typography.Text>
          <Link href={ path }>
            <Typography.Link style={{ marginLeft: 4 }}>{ btn }</Typography.Link>
          </Link>
        </div>
        { children }
      </div>
    </Layout.Content>
    { loadingPage.isLoading && <Progress /> }
  </Layout>
}