import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import favorites from '../../data/favorites.json'
import { SectionTitle } from '../section-title'
import { SectionFavorite } from '../section-favorite'

export const Favorites = () => {
  return (
    <Grid
      templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      templateRows={['1fr', '1fr', 'repeat(3, 1fr)']}
      gap={4}
    >
      <GridItem colSpan={[1, 2, 1]} rowSpan={[1, 3]}>
        <SectionTitle title="Favorites" />
      </GridItem>
      {Object.values(favorites).map((favorite) => {
        return (
          <GridItem colSpan={1}>
            <SectionFavorite
              pretext={favorite.pretext}
              heading={favorite.title}
              items={favorite.items}
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}
