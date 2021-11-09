import React from "react"
import Link from 'next/link'
import { Avatar, Drawer, Typography } from "@mui/material"
import styles from './Avatar.module.scss'
import { MyButtonLink } from '../'
import { useActions } from "../../hooks/useActions"

interface IAvatar {
  name: string
  avatar: null | string
}

const sidebarMenuItems = [
  {
    title: 'Профіль',
    route: '/profile'
  },
  {
    title: 'Мої публікації',
    route: '/profile-active'
  },
  {
    title: 'Налаштування',
    route: '/profile/setting'
  },
  {
    title: 'Обране',
    route: '/selection'
  }
]

export const UserAvatar: React.FC<IAvatar> = ({ name, avatar }) => {
  const [open, setOpen] = React.useState(false)
  const { removeData } = useActions()

  const handleChange = () => {
    setOpen(prev => !prev)
  }

  const logout = () => {
    handleChange()
    localStorage.removeItem('userData')
    setTimeout(() => {
      removeData()
    }, 200)
  }

  return <>
    <div className={ styles.avatar } onClick={ handleChange } >
      { avatar ?
        <Avatar alt={ name } src={ `http://localhost:3005/images/${ avatar }` } />
        :
        <Avatar>
      { name[0].toUpperCase() }
        </Avatar> }
    </div>
    <Drawer
      anchor='right'
      open={ open }
      onClose={ handleChange }
    >
      <div className={ styles.drawer } >
        <Avatar className={ styles.drawer__avatar } alt={ name } src={ `http://localhost:3005/images/${ avatar }` } sx={{ width: 80, height: 80 }} />
        <Typography className={ styles.drawer__name } variant="h6" gutterBottom component="div">{ name }</Typography>
        <Typography variant="caption" display="block" gutterBottom>Рейтинг: 6</Typography>
        <div className={ styles.drawer__buttonGrup }>
          <MyButtonLink btn='Додати статю' href='/create-post' />
          <MyButtonLink btn='Додати локацію' href='/create-location' />
        </div>
        <ul>
          {sidebarMenuItems.map((item, index) => {
            return <li key={ index }>
              <Link href={ item.route } ><a>{ item.title }</a></Link>
            </li>
          })}
          <li>
            <div className={ styles.drawer__close } onClick={ logout }>
              Вийти
            </div>
          </li>
        </ul>
      </div>
    </Drawer>
  </>
}