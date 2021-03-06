import React from 'react';
import SignIn from './SignIn';
import Form from './Form';
import Note from './Note';

import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
/**
 * l'ensemble des routes
 */
const Main = () => (
    <Switch>
       
       <Route exact path="/" component={SignIn} ></Route>
       <Route  path="/Form"  component={Form} ></Route>
       <Route  path="/Note"  component={Note} ></Route>
       <Route  path="/AboutUs"  component={AboutUs} ></Route>
    </Switch>
)
export default Main;