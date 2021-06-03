import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './tailwind.css'

// import { AppHeader } from './@Ui'
import Category from './Features/nestedRoute/Category'
import Login from './Features/login/Login'

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/categori/:id">
        <Login />
      </Route>
      <Route path="/">
        <Redirect to="/login"></Redirect>
      </Route>
    </Switch>
  )
}

export default App
