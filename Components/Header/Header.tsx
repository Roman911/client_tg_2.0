import React from "react"
import { useRouter } from 'next/router'
import Image from "next/image"
import Link from "next/link"
import { AppBar, Box, Toolbar, Tabs, Tab, IconButton } from "@mui/material"
import { AccountCircle } from '@mui/icons-material'
import styles from "./Header.module.scss"
import { useActions } from "../../hooks/useActions"
import { Links } from "./links.config"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { UserAvatar } from '../'

interface ILink {
  path: string
  title: string
  route: string
}

export const Header: React.FC = () => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { showLoading } = useActions()
  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = (path) => {
    showLoading()
    router.push(path)
  }

  return <AppBar className={ styles.header } >
    <Toolbar className={ styles.header__menu }>
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
            {Links.map((item: ILink, index: number) => {
              return <Tab key={ index } className={ styles.navBar__link } label={ item.title } onClick={() => handleClick(item.path)} />
            })}
          </Tabs>
        </Box>
      </div>
      {userData ?
        <UserAvatar name={ userData.name } avatar={ userData.avatar } />
         :
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={() => handleClick('/login')}
        >
          <AccountCircle sx={{ fontSize: 30 }} />
        </IconButton>
      }
    </Toolbar>
  </AppBar>
}