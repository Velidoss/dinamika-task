import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from '../About/AboutComponent';
import EditComponent from '../Edit/EditComponent';
import Todos from '../Todos/Todos';

const Main = (props) => {

  const style = {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={style}>
      <Switch>
        <Route exact path='/' render={() => <Todos />} />
        <Route path='/edit' render={() => <EditComponent />} />
        <Route path='/about' render={() => <AboutComponent />} />
      </Switch>
    </div>

  )};

export default Main