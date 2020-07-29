// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Screens 
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
// CSS
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={CadastroVideo} exact path='/cadastro/video' />
      <Route component={CadastroCategoria} exact path='/cadastro/categoria' />
      <Route component={Home} exact path='/' />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
