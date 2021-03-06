import type { NextPage } from 'next'
import React from "react"
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField } from '@mui/material'
import { AuthorizationLayout } from "../layouts"
import { errors } from "../config/errorText"
import { LOGIN } from '../apollo/queries'
import { useActions } from '../hooks/useActions'
import Redirect from "../hooks/useRedirect"
import { MyButtonSubmit } from "../Components/Button/Button"

const schema = yup.object().shape({
  email: yup.string().required(errors.required).email(errors.email),
  password: yup.string().required().min(6, 'Мінімум 6 символів')
})

interface IFormInput {
  email: string
  password: string
}

const defaultValues = {
  email: '',
  password: ''
}

const Login: NextPage = () => {
  const { showNotification, setData, showLoading } = useActions()
  const [ userData, { loading, data, error } ] = useLazyQuery( LOGIN )
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { email, password } = data
    userData({
      variables: { input: { email, password }}
    })
  }

  if (error) showNotification(error.message)
  if (data) {
    setData(data.login)
    localStorage.setItem('userData', JSON.stringify({ ...data.login }))
    showNotification('Ви успішно увійшли!')
    showLoading()
    return <Redirect />
  }

  return <AuthorizationLayout title='Вхід' text='У вас ще нема акаунта?' path='/registration' btn='Створити' >
    <form style={{ textAlign: 'center', marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          error={ !!errors.email }
          id="email"
          style={{ width: '100%' }}
          { ...field }
          label="Email"
          type="text"
          variant="standard"
          helperText={ errors.email?.message }
        />}
      />
      <br/>
      <br/>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          error={ !!errors.password }
          id="password"
          style={{ width: '100%' }}
          { ...field }
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          helperText={ errors.password?.message }
        />}
      />
      <br/>
      <br/>
      <br/>
      <div style={{ textAlign: 'end' }}>
        <MyButtonSubmit btn='Увійти' disabled={ loading } />
      </div>
    </form>
  </AuthorizationLayout>
}

export default Login