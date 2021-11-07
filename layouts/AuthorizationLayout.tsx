import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useRouter } from 'next/router'
import { Container, Box, Typography } from '@mui/material'
import LinkMui from '@mui/material/Link'
import CloseIcon from '@mui/icons-material/Close'
import { useTypedSelector } from "../hooks/useTypedSelector"
import styles from './Layout.module.scss'
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"
import { WrapperLayouts } from "./WrapperLayouts"
import Redirect from "../hooks/useRedirect";

interface IAuthorizationLayout {
  title: string
  text: string
  path: string
  btn: string
}

export const AuthorizationLayout: React.FC<IAuthorizationLayout> = ({ title, text, path, btn, children }) => {
  UseHideLoadingPage()
  const router = useRouter()
  const { getBack, user } = useTypedSelector(state => state)

  const handleClick = () => {
    router.push(getBack.href)
  }

  if (user.userData) return <Redirect />

  return <WrapperLayouts>
    <Box className={ styles.authorizationLayout }>
      <Head>
        <meta name="keywords" content='маршрути по україні, веломаршрути, подорожі, цікаві місця' />
        <meta name="description" content='Ми про подорожі' />
        <title>
          { title } | Travel Guide
        </title>
      </Head>
      <Container maxWidth="xl">
        <div className={ styles.authorizationLayout__header }>
          <Link href='/'>
            <a><Image src='/logo.png' layout='intrinsic' alt='logo' width={102} height={44} /></a>
          </Link>
          <CloseIcon onClick={ handleClick } className={ styles.authorizationLayout__close } />
        </div>
        <Box className={ styles.authorizationLayout__content }>
          <Typography variant="h2" gutterBottom component="div" className={ styles.authorizationLayout__title }>{ title }</Typography>
          <div className={ styles.authorizationLayout__link }>
            <Typography variant="subtitle1" gutterBottom component="span">{ text }</Typography>
            <Link href={ path }>
              <LinkMui style={{ marginLeft: 6, cursor: 'pointer' }}>{ btn }</LinkMui>
            </Link>
          </div>
          { children }
        </Box>
      </Container>
    </Box>
  </WrapperLayouts>
}