import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Index';
import Anuncio from './pages/Anuncio/Anuncio';
const Routes = () => (
    
        <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/anuncio/:id" component = {Anuncio}/>
        </Switch>
);
//https://api.mercadolibre.com/sites/MLB/search?q=iphone
export default Routes;


//<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
//<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>