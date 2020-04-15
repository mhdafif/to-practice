import React from 'react'
// import { LoadingContext } from '../context/LoadingContext';
import { Heading, Grid, GridItem, Paper } from '../styles/styles';

export const Playground = () => {

  // const loadingContext = React.useContext(LoadingContext);
  // const { loading, setLoading } = loadingContext;

  return (
    <div style={{margin: '12px'}}>
      <Grid container spacing={3}>
        <GridItem sm={12} md={8} lg={6}>
          <Paper elevation={0}>
            Asoy
          </Paper>
        </GridItem>
        <GridItem sm={6}>
          <Paper>
            Geboy
          </Paper>
        </GridItem>
      </Grid>
      <Heading>Hello world</Heading>
    </div>
  )
}
