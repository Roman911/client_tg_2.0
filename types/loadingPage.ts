export interface LoadingPageState {
  isLoading: boolean
}

export enum LoadingPageActionTypes {
  SHOW = 'LOADING_PAGE:SHOW_LOADING',
  HIDE = 'LOADING_PAGE:HIDE_LOADING'
}

interface ShowLoadingAction {
  type: LoadingPageActionTypes.SHOW
}

interface HideLoadingAction {
  type: LoadingPageActionTypes.HIDE
}

export type LoadingPageAction = ShowLoadingAction | HideLoadingAction