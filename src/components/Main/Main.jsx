import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from '../About/AboutComponent';
import EditComponent from '../Edit/EditComponent';
import {useDispatch} from 'react-redux';
import Todos from '../Todos/Todos';
import {getTodos} from '../../store/TodosReducer';

const Main = (props) => {

  const style = {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

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