import type { NextPage } from 'next'
//import { useForm, FormProvider } from 'react-hook-form'
import { AuthorizationLayout } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"

const Registration: NextPage = () => {
  UseHideLoadingPage()
  //const methods = useForm({ resolver: yupResolver(schema) })
  return <AuthorizationLayout title='Реєстрація' text='У вас вже є акаунт?' path='/login' btn='Увійти' >
    {/*<FormProvider { ...methods } >*/}

    {/*</FormProvider>*/}

    131321
  </AuthorizationLayout>
}

export default Registration