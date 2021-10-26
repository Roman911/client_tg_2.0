import type { NextPage } from 'next'
import React from "react"
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"

const Maps: NextPage = () => {
  UseHideLoadingPage()

  return <MainLayouts>
    <h1>Maps</h1>
  </MainLayouts>
}

export default Maps