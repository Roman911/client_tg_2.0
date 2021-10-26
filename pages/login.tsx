import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
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

const Login: NextPage = () => {
  UseHideLoadingPage()

  const methods = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (values) => {
    console.log('vfdvfd',values)
  }

  return <AuthorizationLayout title='Вхід' text='У вас ще нема акаунта?' path='/registration' btn='Створити' >
    <Form
      onSubmit={ methods.handleSubmit(onSubmit) }
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </AuthorizationLayout>
}

export default Login