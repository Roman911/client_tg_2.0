import React from "react"
import { Avatar, Image } from "antd"
import { UserOutlined } from "@ant-design/icons"
import avatar from '../../public/9uhxGPrfyo0SwC.jpg'

interface IUser {
  isAuth: boolean
}

export const NavBarUser: React.FC<IUser> = ({ isAuth }) => {
  return <>
    {isAuth ?
      <Avatar size={36} src={
        <Image
          src={ avatar }
          style={{
            width: 36,
          }}
        />
      } /> :
      <Avatar size={36} icon={<UserOutlined />} />
    }
  </>
}