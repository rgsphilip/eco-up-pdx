import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/about/About'
import InfoScreen from './components/InfoScreen'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/info' component={InfoScreen}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
