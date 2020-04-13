import React from 'react'
// import { LoadingContext } from '../context/LoadingContext';
import { Heading, Grid, GridItem } from '../styles/styles';

export const Playground = () => {

  // const loadingContext = React.useContext(LoadingContext);
  // const { loading, setLoading } = loadingContext;

  return (
    <>
      <Grid container spacing={1}>
        <GridItem sm={12} md={8} lg={6}>
          Asoy
        </GridItem>
        <GridItem sm={6}>
          Geboy
        </GridItem>
      </Grid>
      <Heading>Hello world</Heading>
    </>
  )
}
