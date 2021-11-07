import React from "react"
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

interface IMyButtonLink {
  btn: string
  href: string
}

interface IMyButtonSubmit {
  btn: string
  disabled: boolean
}

const CustomButton = styled(Button)({
  backgroundColor: '#c52133',
  borderColor: '#c52133',
  borderRadius: 2,
  padding: '7px 20px',
  fontSize: 12,
  fontWeight: 400,
  margin: 7,
  '&:hover': {
    backgroundColor: '#bd1b2c',
    borderColor: '#bd1b2c',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#c52133',
    borderColor: '#c52133',
  }
})

export const MyButtonLink: React.FC<IMyButtonLink> = ({ btn, href }) => {
  return <CustomButton variant="contained" >
    <Link href={ href } >
      <a>
        { btn }
      </a>
    </Link>
  </CustomButton>
}

export const MyButtonSubmit: React.FC<IMyButtonSubmit> = ({ btn, disabled }) => {
  return <CustomButton type='submit' variant="contained" disabled={ disabled } >
    { btn }
  </CustomButton>
}