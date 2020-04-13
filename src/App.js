import React from 'react'
import { LoadingState } from './context/LoadingState'
import { Playground } from './playground/Playground'
// import { Card } from './components/ui/Card'
import './App.css';

export const App = () => {
  return (
    <React.Fragment>
     <LoadingState>
       <Playground />
     </LoadingState>
     {/* <Card /> */}
    </React.Fragment>
  )
}