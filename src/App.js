import React from 'react'
import { LoadingState } from './context/LoadingState'
import { Playground } from './playground/Playground'
// import { Card } from './components/ui/Card'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <React.Fragment>
     <LoadingState>
       <Router>
         <Switch>
           <Route exact path="/playground" component={Playground} />
         </Switch>
       </Router>
     </LoadingState>
     {/* <Card /> */}
    </React.Fragment>
  )
}