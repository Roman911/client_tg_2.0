import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
  user: null,
  refreshToken: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_DATA:
      return {
        ...state,
        user: action.payload
      }
    case UserActionTypes.REMOVE_DATA:
      return {
        ...state,
        user: null,
        refreshToken: ''
      }
    default: return state
  }
}