import './App.css';
import React, {useEffect} from 'react';
import { Layout } from 'antd';
import {getTodos} from './store/TodosReducer';
import { useSelector, useDispatch } from 'react-redux';
import todosSelector from './store/selectors/todosSelector';
import MenuComponent from './components/Menu/MenuComponent';
import Main from './components/Main/Main';

function App() {

  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout>
        <Header>
          <MenuComponent />
        </Header>
        <Content>
          <Main />
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </>
  );
}

export default App;
