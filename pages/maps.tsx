import type { NextPage } from 'next'
import React from "react"
import { Typography } from "@mui/material"
import ReactMapGL from 'react-map-gl'
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"
import styles from "../styles/Home.module.scss"

const Maps: NextPage = () => {
  UseHideLoadingPage()

  const [ viewport, setViewport ] = React.useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10
  })

  return <MainLayouts>
    <Typography variant="h1" className={ styles.title } component="div" gutterBottom>
      Цікаві місця
    </Typography>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  </MainLayouts>
}

export default Maps