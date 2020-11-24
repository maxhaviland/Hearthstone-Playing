import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search'
import { Grid, Paper, Card, CardContent, CardMedia } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 275,
    '&:hover': {
      transform: `scale(1.05)`,
      animationDelay: 1.1,
      animation: `$zoom 2000ms ${theme.transitions.easing.easeOut}`,
      cursor: 'pointer'
    }
  },
    "@keyframes zoom": {
    "0%": {
      opacity: 0,
      transform: `scale(1)`,
    },
    '50%': {
      opacity: 0.5,
      transform: `scale(1.02)`,
    },
    "100%": {
      opacity: 1,
      transform: `scale(1)`,
    }
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
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  view: {
    float: 'right',
    marginTop: theme.spacing(2)
  }
}));

const mainCards = () => {
  const classes = useStyles();

  const cardData = [
    {
      id: 0,
      title: 'decks da comunidade',
      description: 'Acompanhe os decks da comunidade e também contribua sendo um membro ativo',
      image: '/assets/images/decks.jpg'
    },
    {
      id: 1,
      title: 'cartas',
      description: 'Encontre as melhores cartas e crie suas coleções!',
      image: '/assets/images/cards.jpg'
    }
  ]

  return (
    <>
      <Grid container spacing={5}>
        {cardData.map(card => (
          <Grid item key={card.id} className={classes.root}>
            <Card elevation={6}>
             
              <CardMedia
                className={classes.media}
                image={card.image}
              />
              <CardContent>
                <Typography component="h5" variant="h5">
                  {card.title}
                  <IconButton className={classes.view}>
                    <VisibilityIcon fontSize="large" />
                  </IconButton>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default mainCards;