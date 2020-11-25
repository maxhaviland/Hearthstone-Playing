import React, { useState } from 'react';
import Link from 'next/link'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search'
import { Grid, Paper, Card, CardContent, CardMedia } from '@material-ui/core'
import VisibilityOnIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 300,
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
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  view: {
    float: 'right',
    marginTop: theme.spacing(1.2),
    zIndex: 9999
  },
  content: {
    height: 120
  }
}));

const mainCards = ({ card }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const handleExpanded = () => setExpanded(!expanded);

  const Icon = (props) => !expanded ? <VisibilityOnIcon {...props}/> : <VisibilityOffIcon {...props}/>

  return card && (
    <Link href={card.page}>
      <Card elevation={6} className={classes.root}>
      {expanded && (
        <CardMedia
          className={classes.media}
          image={card.image}
        />
      )}
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {card.title}
          <Link href="javascript:void(0);">
            <IconButton 
              onClick={handleExpanded} 
              className={classes.view}
            >
              <Icon fontSize="large" />
          </IconButton>
          </Link>

        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  </Link>
  )
}

export default mainCards;