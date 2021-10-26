import { LoadingPageAction, LoadingPageActionTypes } from '../../types/loadingPage'

export const showLoading = (): LoadingPageAction => {
  return { type: LoadingPageActionTypes.SHOW }
}

export const hideLoading = (): LoadingPageAction => {
  return { type: LoadingPageActionTypes.HIDE }
}