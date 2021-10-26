export interface GetBackState {
  href: string
}

export enum GetBackActionTypes {
  ADDED_HREF = 'GET_BACK:ADDED_HREF',
  REMOVE_HREF = 'GET_BACK:REMOVE_HREF'
}

interface AddedHrefAction {
  type: GetBackActionTypes.ADDED_HREF,
  payload: string
}

interface RemoveHrefAction {
  type: GetBackActionTypes.REMOVE_HREF
}

export type GetBackAction = AddedHrefAction | RemoveHrefAction