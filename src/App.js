import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import HeroSearch from './components/HeroSearch/HeroSearch';
import UserContext from './context/UserContext';
import { useState } from 'react';
import  TeamContext  from './context/TeamContext';
import DetailsSuperhero from './components/DetailsSuperhero/DetailsSuperhero';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token")
    }
    return null
  })
  const [team, setTeam] = useState([])
    

  return (
    <UserContext.Provider value={[user, setUser]}>
      <TeamContext.Provider value={[team, setTeam] } >
        <div className="App">

          <Router>
            <Header />
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/home">
                <PrivateRoute page={<Home/> } />
              </Route>
              <Route exact path="/search">
                <PrivateRoute page={<HeroSearch/> } />
              </Route>
              <Route exact path="/details/:id">
                <PrivateRoute page={<DetailsSuperhero/> } />
              </Route>
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Router>
        </div>


      </TeamContext.Provider>


    </UserContext.Provider>
  );
}

export default App;
