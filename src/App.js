import React from 'react';
import 'antd/dist/antd.css'
import './App.scss';

import { Layout } from 'antd';
import Users from './pages/User';
import GithubImg from './assets/img/github.png'

const { Footer, Content } = Layout;

function App() {
  return (
    <>
    <Layout>
      <Content>
        <Users />
      </Content>
      <Footer className="footer">
        <div className="footer-content">
          <strong>@JhonatanMoreno</strong>
          <a href="https://github.com/jhonatanmle/bluepoint-test">
            <img src={GithubImg} alt="Github" />
          </a>
        </div>
      </Footer>
    </Layout>
  </>
  );
}

export default App;
