export interface NotificationState {
  isOpen: boolean,
  text: string
}

export enum NotificationActionTypes {
  SHOW = 'NOTIFICATION:SHOW',
  HIDE = 'NOTIFICATION:HIDE'
}

interface ShowNotificationAction { type: NotificationActionTypes.SHOW, payload }

interface HideNotificationAction { type: NotificationActionTypes.HIDE }

export type NotificationAction = ShowNotificationAction | HideNotificationAction