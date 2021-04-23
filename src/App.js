import Landing from './views/Landing/Landing';
import './App.scss';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import { useEffect } from 'react';
import { confirmAuth, declineAuth } from './redux/features';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let k = localStorage.getItem('token');
    console.log(k)
    if (k != null)
      dispatch(confirmAuth())
  }, [])


  const isLoading = useSelector((state) => state.featureSlice.isLoading);
  const auth = useSelector((state) => state.featureSlice.isAuthenticated);
  return (
    <div className="App">
      <ReactNotification />
      <LoadingOverlay
        active={isLoading}
        spinner
        text='Loading...'
      >
        <Router>
          <Switch>
            <Route render={() => {
              if (auth)
                return <Dashboard />
              return <Login></Login>
            }} path="/login">
            </Route>
            <Route path="/home">
              <Dashboard />
            </Route>
            <Route render={() => {
              if (auth)
                return <Dashboard />
              return <Register />
            }} path="/register">
            </Route>
            <Route render={() => {
              if (auth)
                return <Dashboard />
              return <Landing />
            }} path="/">
            </Route>
          </Switch>
        </Router>
      </LoadingOverlay>
    </div>
  );
}

export default App;
