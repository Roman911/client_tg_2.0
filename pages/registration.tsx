import React from "react"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useMutation } from "@apollo/react-hooks"
import { TextField, Typography } from "@mui/material"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useActions } from "../hooks/useActions"
import { AuthorizationLayout } from "../layouts"
import { errors } from "../config/errorText"
import { REGISTRATION } from "../apollo/mutations"
import { MyButtonSubmit } from "../Components/Button/Button"

const schema = yup.object().shape({
  email: yup.string().required(errors.required).email(errors.email),
  name: yup.string().required().min(3).max(20),
  password: yup.string().required(),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Паролі мають співпадати')
})

interface IFormInput {
  email: string
  name: string
  password: string
  passwordConfirmation: string
}

const defaultValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: ''
}

const Registration: NextPage = () => {
  const router = useRouter()
  const { showNotification } = useActions()
  const [ registration, { data, loading, error } ] = useMutation( REGISTRATION )
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({ defaultValues, resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { email, name, password } = data
    registration({
      variables: { input: { name, email, password }}}
    )
  }

  if (error) showNotification(error.message)
  if (data) router.push('/activate')

  return <AuthorizationLayout title='Новий акаунт' text='У вас вже є обліковий запис?' path='/login' btn='Увійти' >
    <form style={{ textAlign: 'center', marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          error={ !!errors.name }
          id="name"
          style={{ width: '100%' }}
          { ...field }
          label="Введіть ім'я"
          type="text"
          variant="standard"
          helperText={ errors.name?.message }
        />}
      />
      <br/>
      <br/>
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
      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          error={ !!errors.passwordConfirmation }
          id="passwordConfirmation"
          style={{ width: '100%' }}
          { ...field }
          label="Повторіть пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          helperText={ errors.passwordConfirmation?.message }
        />}
      />
      <br/>
      <br/>
      <br/>
      <div style={{ textAlign: 'end' }}>
        <MyButtonSubmit btn='Створити' disabled={ loading } />
      </div>
    </form>
    <br/>
    <br/>
    <br/>
    <Typography variant="caption" display="block" gutterBottom textAlign='center'>
      * Реєстрація на сайті дозволить Вам створювати свої маршрути і ділитися цікавими локаціями, голосувати, стежити за новинами інших учасників та багато іншого.
    </Typography>
    <Typography variant="caption" display="block" gutterBottom textAlign='center'>
      ** Після заповнення анкети Вам буде надіслано лист, яким ми перевіримо, що вказана Вами адреса існує та належить Вам. Натисніть на посилання активації, наведеної в листі, для того, щоб мати можливість пройти авторизацію на сайті.
    </Typography>
  </AuthorizationLayout>
}

export default Registration