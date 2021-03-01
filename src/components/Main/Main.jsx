import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from '../About/AboutComponent';
import EditComponent from '../Edit/EditComponent';
import Todos from '../Todos/Todos';

const Main = (props) => {

  return (
    <Switch>
      <Route exact path='/' render={() => <Todos />} />
      <Route path='/edit' render={() => <EditComponent />} />
      <Route path='/about' render={() => <AboutComponent />} />
    </Switch>
  )};

export default Main