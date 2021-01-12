import './css/App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Board from './routes/Board';
import Navigator from './components/Navigator';



function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/board/:id" component={Board} />
    </BrowserRouter>
  );
}

export default App;