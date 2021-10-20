import type { NextPage } from 'next'
import { AuthorizationLayout } from "../layouts"

const Login: NextPage = () => {
  return <AuthorizationLayout title='Вхід' text='У вас ще нема акаунта?' path='/registration' btn='Створити' >
    131321
  </AuthorizationLayout>
}

export default Login