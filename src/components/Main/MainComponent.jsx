import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from '../About/AboutComponent';
import EditComponent from '../Edit/EditComponent';
import {useDispatch} from 'react-redux';
import TodosComponent from '../Todos/TodosComponent';
import {getTodos} from '../../store/TodosReducer';

const Main = (props) => {

  const style = {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    justifyContent: 'center',
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div style={style}>
      <Switch>
        <Route path='/edit' render={() => <EditComponent />} />
        <Route path='/about' render={() => <AboutComponent />} />
        <Route path='/' render={() => <TodosComponent />} />
      </Switch>
    </div>

  )};

export default Main