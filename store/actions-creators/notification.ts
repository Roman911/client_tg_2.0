import { NotificationAction, NotificationActionTypes } from '../../types/notification'

export const showNotification = (text: string): NotificationAction => {
  return { type: NotificationActionTypes.SHOW, payload: text }
}

export const hideNotification = (): NotificationAction => {
  return { type: NotificationActionTypes.HIDE }
}