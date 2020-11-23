import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'

import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const mainCards = () => {
  const classes = useStyles();

  const cardData = [
    {
      id: 0,
      title: 'decks da comunidade',
      description: '',
      image: '/assets/images/cards/decks.jpg'
    },
    {
      id: 1,
      title: 'cartas',
      description: '',
      image: '/assets/images/cards/cards.jpg'
    }
  ]

  return (
    <>
      <Grid container spacing={5}>
        {cardData.map(card => (
          <Grid item key={card.id}>
            <Paper elevation={6} className={classes.root}>
              <div>
                <Typography component="h5" variant="h5" align="center">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {card.description}
                </Typography>
                <div>
                  <IconButton aria-label="previous">
                    <SearchIcon />
                  </IconButton>
                </div>
              </div>
              <img
                component="img"
                width={250}
                height={250}
                src={card.image}
                alt={card.title}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default mainCards;