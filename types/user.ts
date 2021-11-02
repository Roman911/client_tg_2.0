interface IUser {
  name: string
  email: string
}

export interface UserState {
  user: IUser | null,
  refreshToken: string
}

export enum UserActionTypes {
  SET_DATA = 'USER:SET_DATA',
  REMOVE_DATA = 'USER:REMOVE_DATA'
}

interface SetDataUserAction { type: UserActionTypes.SET_DATA, payload }

interface RemoveDataUserAction { type: UserActionTypes.REMOVE_DATA }

export type UserAction = SetDataUserAction | RemoveDataUserAction