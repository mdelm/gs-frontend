import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const index = React.lazy(() => import('./views/pages/home/index'))
const ColonneMatieres = React.lazy(() => import('./project/Donnees/noteMoyenne/ColonneMatieres'))
const LigneModule = React.lazy(() => import('./project/Donnees/noteMoyenne/LigneModule'))


class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/index" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              <Route exact path="/index" name="index" render={props => <index {...props}/>} />
              

              <Route exact path="/ColonneMatieres" name="ColonneMatieres" render={props => <ColonneMatieres {...props}/>} />
              <Route exact path="/LigneModule" name="LigneModule" render={props => <LigneModule {...props}/>} />
             
            </Switch> 
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
