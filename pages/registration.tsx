import type { NextPage } from 'next'
import { AuthorizationLayout } from "../layouts"

const Registration: NextPage = () => {
  return <AuthorizationLayout title='Реєстрація' text='Вже є акаунт?' path='/login' btn='Авторизуватися' >
    131321
  </AuthorizationLayout>
}

export default Registration