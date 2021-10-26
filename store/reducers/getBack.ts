import { GetBackAction, GetBackActionTypes, GetBackState } from "../../types/getBack"

const initialState: GetBackState = {
  href: '/'
}

export const getBackReducer = (state = initialState, action: GetBackAction): GetBackState => {
  switch (action.type) {
    case GetBackActionTypes.ADDED_HREF:
      return {
        ...state,
        href: action.payload
      }
    case GetBackActionTypes.REMOVE_HREF:
      return {
        ...state,
        href: '/'
      }
    default: return state
  }
}