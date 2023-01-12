import React from 'react';
import ChatApp from './Components/ChatApp/index'
import Login from './Components/Login'
import {Route,Switch } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/index'


import './App.css';


function App() {
  return (
      <>
        <Switch>
          <Route exact path="/login"> <Login /> </Route>
          <ProtectedRoute exact path='/' component={ChatApp} />
        </Switch>
      </>
  );
}

export default App;
