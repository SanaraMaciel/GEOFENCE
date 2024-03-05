import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path = "/" component = {Home} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;