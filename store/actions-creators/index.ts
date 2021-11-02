import * as GetBackActionCreators from './getBack'
import * as LoadingPageActionCreators from "./loadingPage"
import * as NotificationCreators from './notification'
import * as UserCreators from './user'

export default {
  ...LoadingPageActionCreators,
  ...GetBackActionCreators,
  ...NotificationCreators,
  ...UserCreators
}