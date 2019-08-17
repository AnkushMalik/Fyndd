import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Header } from './components/header/header.component'
import { Login } from './pages/login/Login.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current_user: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ current_user: user })
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header current_user={this.state.current_user} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/account' component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;
