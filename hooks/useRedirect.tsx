import React from "react"
import { useRouter } from "next/router"
import { useTypedSelector } from "./useTypedSelector"

function Redirect() {
  const { href } = useTypedSelector(state => state.getBack)
  const router = useRouter()

  React.useEffect(() => {
    router.push(href).then()
  }, [])

  return null
}

export default Redirect