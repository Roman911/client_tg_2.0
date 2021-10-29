import * as GetBackActionCreators from './getBack'
import * as LoadingPageActionCreators from "./loadingPage"
import * as NotificationCreators from './notification'

export default {
  ...LoadingPageActionCreators,
  ...GetBackActionCreators,
  ...NotificationCreators
}