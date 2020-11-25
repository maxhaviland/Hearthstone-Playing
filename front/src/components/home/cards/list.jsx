import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import ListItem from './listItem';


const mainCards = () => {
  const cardData = [
    {
      id: 0,
      title: 'decks da comunidade',
      description: 'Acompanhe os decks da comunidade e também contribua sendo um membro ativo',
      image: '/assets/images/decks.jpg',
      page: '/decks',
    },
    {
      id: 1,
      title: 'cartas',
      description: 'Encontre as melhores cartas e crie suas coleções!',
      image: '/assets/images/cards.jpg',
      page: '/cards'
    }
  ]

  const Icon = (props) => expanded ? <VisibilityOnIcon {...props}/> : <VisibilityOffIcon {...props}/>

  return (
    <>
      <Grid container spacing={5}>
        {cardData.map(card => (
          <Grid 
            item 
            key={card.id} 
            md={6}
            >
            <ListItem card={card} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default mainCards;