import { NotificationAction, NotificationActionTypes, NotificationState } from "../../types/notification"

const initialState: NotificationState = {
  isOpen: false,
  text: ''
}

export const notificationReducer = (state = initialState, action: NotificationAction): NotificationState => {
  switch (action.type) {
    case NotificationActionTypes.SHOW:
      return {
        ...state,
        isOpen: true,
        text: action.payload
      }
    case NotificationActionTypes.HIDE:
      return {
        ...state,
        isOpen: false
      }
    default: return state
  }
}