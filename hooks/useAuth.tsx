import React from 'react'
import { useActions } from './useActions'
import { useTypedSelector } from "./useTypedSelector"

const storageName = 'userData'

export const useAuth = () => {
  const { userData } = useTypedSelector(state => state.user)
  const { setData } = useActions()
  React.useEffect(() => {
    if (!userData) {
      const data = JSON.parse(localStorage.getItem(storageName) as string)
      if (data) setData(data)
    }
  }, [ userData ])
}