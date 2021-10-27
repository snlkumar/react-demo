import './App.scss';
import AppLayout from "./layout/index"
import PublicRoute from './routes/PublicRoute'
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <PublicRoute exact path='/home' component={Home}/>
            </Route>
          </Switch>
          </AppLayout>
      </Router>
    </div>
  );
}

export default App;
