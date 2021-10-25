import type { NextPage } from 'next'
import { useRouter } from "next/router"

const Activate: NextPage = () => {
  const router = useRouter()
  const link = router.query.id

  return <div><h1>{ link }</h1></div>
}

export default Activate