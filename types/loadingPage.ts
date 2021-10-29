export interface LoadingPageState {
  isLoading: boolean
}

export enum LoadingPageActionTypes {
  SHOW = 'LOADING_PAGE:SHOW',
  HIDE = 'LOADING_PAGE:HIDE'
}

interface ShowLoadingAction {
  type: LoadingPageActionTypes.SHOW
}

interface HideLoadingAction {
  type: LoadingPageActionTypes.HIDE
}

export type LoadingPageAction = ShowLoadingAction | HideLoadingAction