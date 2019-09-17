import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Data from './data'
import NavWrapper from './components/NavWrapper'

function App() {

  const [data] = React.useState(Data)

  return (
    <div className="App">
      <BrowserRouter>
        <NavWrapper data={data} />
        <Route path="/:nav/:id" render={props=><div>{props.match.params.id}</div>} />
      </BrowserRouter>
    </div>
  )
}

export default App
