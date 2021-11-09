import type { NextPage } from 'next'
import { Box, Grid, Typography, Paper } from '@mui/material'
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"
import { CardNew } from "../Components"
import styles from '../styles/Home.module.scss'

const arr = [1,2,3,4,5,6,7,8,9]

const Home: NextPage = () => {
  UseHideLoadingPage()
  return <MainLayouts >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h1" className={ styles.title } component="div" gutterBottom>
            Новини
          </Typography>
          <Grid container spacing={2}>
            {arr.map((item,index) => {
              return <Grid key={index} item xs={3}>
                <CardNew />
              </Grid>
            })}
          </Grid>
          <Typography variant="h2" className={ styles.title } component="div" gutterBottom>
            Маршрути
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
            <Grid item xs={3}>1231321321321</Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} >
            <Typography variant="h6" gutterBottom component="div">
              Популярні статі
            </Typography>
          </Paper>
          <Paper elevation={3} >
            <Typography variant="h6" gutterBottom component="div">
              Популярні маршрути
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </MainLayouts>
}

export default Home