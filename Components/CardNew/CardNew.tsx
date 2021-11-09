import React from "react"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import VisibilityIcon from "@mui/icons-material/Visibility"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import GradeIcon from "@mui/icons-material/Grade"
import styles from './CardNew.module.scss'

export const CardNew: React.FC = () => {
  return <Card sx={{ maxWidth: 345 }}>
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
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardContent className={ styles.card__content }>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions className={ styles.card__actions } disableSpacing>
      <IconButton aria-label="add to favorites">
        <VisibilityIcon sx={{ fontSize: 15 }} />
        <Typography variant="caption" display="block" className={ styles.typography } gutterBottom>
          10
        </Typography>
      </IconButton>
      <IconButton aria-label="share">
        <ChatBubbleOutlineIcon sx={{ fontSize: 14 }} />
        <Typography variant="caption" display="block" className={ styles.typography } gutterBottom>
          5
        </Typography>
      </IconButton>
      <IconButton aria-label="share" style={{ marginLeft: 'auto' }}>
        <Typography variant="caption" display="block" className={ styles.typography } gutterBottom>
          2
        </Typography>
        <GradeIcon sx={{ fontSize: 15 }} />
      </IconButton>
    </CardActions>
  </Card>
}