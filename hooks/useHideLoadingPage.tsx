import React from "react"
import { useTypedSelector } from "./useTypedSelector"
import { useActions } from "./useActions"

export const UseHideLoadingPage = () => {
  const { isLoading } = useTypedSelector(state => state.loadingPage)
  const { hideLoading } = useActions()

  React.useEffect(() => {
    if (isLoading) hideLoading()
  }, [])

  return null
}