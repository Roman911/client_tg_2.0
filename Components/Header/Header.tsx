import React from "react"
import { useRouter } from 'next/router'
import Image from "next/image"
import Link from "next/link"
import { AppBar, Avatar, Box, Toolbar, Tabs, Tab, IconButton} from "@mui/material"
import { AccountCircle } from '@mui/icons-material'
import styles from "./Header.module.scss"
import { useActions } from "../../hooks/useActions"
import { Links } from "../NavBar/links.config"

interface ILink {
  path: string
  title: string
  route: string
}

export const Header: React.FC = () => {
  const router = useRouter()
  const { showLoading } = useActions()
  const [ value, setValue ] = React.useState(0)
  const isAuth = false

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = (path) => {
    showLoading()
    router.push(path)
  }

  return <AppBar className={ styles.header } >
    <Toolbar maxWidth='xl' className={ styles.header__menu }>
      <div className={ styles.navBar }>
        <div className={ styles.navBar__logo }>
          { router.asPath !== '/' ?
            <Link href='/' >
              <a onClick={showLoading}>
                <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo"/>
              </a>
            </Link> :
            <Image src="/logo.png" layout="fixed" width={90} height={40} alt="Travel guide logo"/>
          }
        </div>
        <Box sx={{ width: '100%' }}>
          <Tabs value={ value } onChange={ handleChange } textColor="inherit" style={{ height: 64 }} centered>
            {Links.map((item: ILink) => {
              return <Tab className={ styles.navBar__link } label={ item.title } onClick={() => handleClick(item.path)} />
            })}
          </Tabs>
        </Box>
      </div>
      {isAuth ?
        <Avatar alt="Remy Sharp" src="http://localhost:3005/images/9uhxGPrfyo0SwC.jpg" /> :
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{ fontSize: 30 }} onClick={() => handleClick('/login')} />
        </IconButton>
      }
    </Toolbar>
  </AppBar>
}