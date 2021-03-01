import React from 'react';
import { Layout } from 'antd';
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
