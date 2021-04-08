import Landing from './views/Landing/Landing';
import './App.scss';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const isLoading = useSelector((state) => state.featureSlice.isLoading);
  return (
    <div className="App">
      <LoadingOverlay
        active={isLoading}
        spinner
        text='Loading...'
      >
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            <Route path="/home">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </LoadingOverlay>
    </div>
  );
}

export default App;
