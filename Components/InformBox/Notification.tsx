import React from "react"
import { Slide, Snackbar } from "@mui/material"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />
}

export const Notification: React.FC = () => {
  const { isOpen, text } = useTypedSelector(state => state.notification)
  const { hideNotification } = useActions()

  const handleClose = () => {
    hideNotification()
  }

  return <Snackbar
    anchorOrigin={
      { vertical: 'top', horizontal: 'right' }
    }
    autoHideDuration={ 3000 }
    open={ isOpen }
    onClose={ handleClose }
    TransitionComponent={TransitionLeft}
    message={ text }
    key={ 'TransitionRight' }
  />
}