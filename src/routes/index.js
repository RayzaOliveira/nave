import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'
import Header from '../components/Header'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      localStorage.getItem('token') ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/home/add" component={Add} />
        <PrivateRoute exact path="/home/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
