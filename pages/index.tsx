import type { NextPage } from 'next'
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardHeader, Avatar, IconButton, CardActions } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import GradeIcon from '@mui/icons-material/Grade'
import { MainLayouts } from "../layouts"
import { UseHideLoadingPage } from "../hooks/useHideLoadingPage"

const Home: NextPage = () => {
  UseHideLoadingPage()
  return <div>
    <MainLayouts >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h1" style={{ fontWeight: 100, fontSize: '5.5rem', letterSpacing: '10px', textTransform: 'uppercase', color: 'gray', marginBottom: -50 }} component="div" gutterBottom>
              Новини
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="http://localhost:3005/images/3I8j0Tq4sGxj5f.jpg"
                    alt="green iguana"
                  />
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent style={{ paddingTop: 0 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <VisibilityIcon sx={{ fontSize: 15 }} />
                      <Typography variant="caption" display="block" style={{ marginBottom: 0 }} gutterBottom>
                        10
                      </Typography>
                    </IconButton>
                    <IconButton aria-label="share">
                      <ChatBubbleOutlineIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" display="block" style={{ marginBottom: 0 }} gutterBottom>
                        5
                      </Typography>
                    </IconButton>
                    <IconButton aria-label="share" style={{ marginLeft: 'auto' }}>
                      <GradeIcon sx={{ fontSize: 15 }} />
                      <Typography variant="caption" display="block" style={{ marginBottom: 0 }} gutterBottom>
                        2
                      </Typography>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>1231321321321</Grid>
              <Grid item xs={3}>1231321321321</Grid>
              <Grid item xs={3}>1231321321321</Grid>
              <Grid item xs={3}>1231321321321</Grid>
              <Grid item xs={3}>1231321321321</Grid>
              <Grid item xs={3}>1231321321321</Grid>
            </Grid>
            <Typography variant="h2" style={{ fontWeight: 100, letterSpacing: '10px', textTransform: 'uppercase', color: 'gray', marginBottom: -50 }} component="div" gutterBottom>
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
            <div style={{ background: '#fff', border: '1px solid red' }}>123131331</div>
          </Grid>
        </Grid>
      </Box>
    </MainLayouts>
  </div>
}

export default Home