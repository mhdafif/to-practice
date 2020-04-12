import React from 'react'
import { LoadingState } from './context/LoadingState'
// import { Playground } from './playground/Playground'
import './App.css';

export const App = () => {
  return (
    <React.Fragment>
     <LoadingState>
       {/* <Playground /> */}
     </LoadingState>
    </React.Fragment>
  )
}