import type { NextPage } from 'next'
import React from "react"
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Form, Input, Button, Checkbox } from 'antd'
import { AuthorizationLayout } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"
import { errors } from "../config/errorText"

const schema = yup.object().shape({
  email: yup.string().required(errors.required).email(errors.email),
  password: yup.string().required()
})

const defaultValues = {
  email: '',
  password: '',
  remember: true
}

const Login: NextPage = () => {
  UseHideLoadingPage()
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) })
  const { errors } = methods.formState

  const onSubmit = data => { console.log(data) }

  return <AuthorizationLayout title='Вхід' text='У вас ще нема акаунта?' path='/registration' btn='Створити' >
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <br/>
      <Controller
        name='email'
        control={ methods.control }
        render={
        ({ field }) => <Form.Item
          label="email"
          name="email"
          validateStatus={ errors.email && "error" }
          help={ errors.email?.message }
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input { ...field } />
        </Form.Item>
      } />
      <Controller
        name='password'
        control={ methods.control }
        render={
          ({ field }) => <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input.Password { ...field } />
          </Form.Item>
        } />
      <Controller
        control={ methods.control }
        name="remember"
        render={
        ({ field }) => <div>
          <Checkbox defaultChecked={true} { ...field }>Запам'ятати мене</Checkbox>
        </div>
      } />

      <Button block type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  </AuthorizationLayout>
}

export default Login