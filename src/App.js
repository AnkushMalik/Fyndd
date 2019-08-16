import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Header } from './components/header/header.component'
import { Login } from './pages/login/Login.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/account' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
