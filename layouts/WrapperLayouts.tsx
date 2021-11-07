import React from "react"
import { Notification, Progress } from "../Components"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAuth } from "../hooks/useAuth"

export const WrapperLayouts: React.FC = ({ children }) => {
  const { isLoading } = useTypedSelector(state => state.loadingPage)
  useAuth()

  return <div>
    { children }
    { isLoading && <Progress /> }
    <Notification />
  </div>
}