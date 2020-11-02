import './App.css';
import MainPage from './Components/MainPage';
import { Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import About from './Components/About';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
          <Switch>
            <Route activeClassName='active_class' exact path='/' component={()=><MainPage name='mainPage'/> }/>
            <Route activeClassName='active_class' path='/about' component={()=><About name='about'/> }/>
          </Switch>
      
    </div>
  );
}

export default App;
