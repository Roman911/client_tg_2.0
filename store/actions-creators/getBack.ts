import {GetBackAction, GetBackActionTypes} from '../../types/getBack'

export const addedHref = (payload: string): GetBackAction => {
  return { type: GetBackActionTypes.ADDED_HREF, payload }
}

export const removeHref = (): GetBackAction => {
  return { type: GetBackActionTypes.REMOVE_HREF }
}