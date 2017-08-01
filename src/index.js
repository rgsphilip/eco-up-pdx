import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/about/About';
import InfoScreen from './components/InfoScreen';
import TransitHome from './components/transportation/TransitHome';
import FoodHome from './components/food/FoodHome';
import FoodDiet from './components/food/FoodDiet';
import FoodWaste from './components/food/FoodWaste';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/info' component={InfoScreen}/>
      <Route path='/transit' component={TransitHome}/>
      <Route path='/food' component={FoodHome}/>
      <Route path='/diet' component={FoodDiet}/>
      <Route path='/waste' component={FoodWaste}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
