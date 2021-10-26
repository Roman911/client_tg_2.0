import type { NextPage } from 'next'
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"

const Home: NextPage = () => {
  UseHideLoadingPage()
  return <div>
    <MainLayouts >
      Index
    </MainLayouts>
  </div>
}

export default Home