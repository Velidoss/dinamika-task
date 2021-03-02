import React from 'react';
import { Layout } from 'antd';
import MenuComponent from './components/Menu/MenuComponent';
import MainComponent from './components/Main/MainComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {

  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout>
        <Header>
          <MenuComponent/>
        </Header>
        <Content>
          <MainComponent/>
        </Content>
        <Footer>
          <FooterComponent/>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
