import './App.css';
import React, {useEffect} from 'react';
import { Layout } from 'antd';
import {getTodos} from './store/TodosReducer';
import Todos from './components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import todosSelector from './store/selectors/todosSelector';

function App() {

  const { Header, Content, Footer } = Layout;

  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Layout>
        <Header>
          Menu
        </Header>
        <Content>
          {
            todos && <Todos 
            todosData={todos}
          />
          }

        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </>
  );
}

export default App;
