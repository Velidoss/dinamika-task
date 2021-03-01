import './App.css';
import { Layout } from 'antd';

function App() {

  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout>
        <Header>
          Menu
        </Header>
        <Content>
          <div>
            Content
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
