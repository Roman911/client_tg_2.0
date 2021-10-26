import type { NextPage } from 'next'
import React from "react"
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"

const About: NextPage = () => {
  UseHideLoadingPage()

  return <MainLayouts>
    <h1>About</h1>
  </MainLayouts>
}

export default About