import { LoadingPageAction, LoadingPageState, LoadingPageActionTypes } from "../../types/loadingPage"

const initialState: LoadingPageState = {
  isLoading: false
}

export const loadingPageReducer = (state = initialState, action: LoadingPageAction): LoadingPageState => {
  switch (action.type) {
    case LoadingPageActionTypes.SHOW:
      return {
        ...state,
        isLoading: true
      }
    case LoadingPageActionTypes.HIDE:
      return {
        ...state,
        isLoading: false
      }
    default: return state
  }
}