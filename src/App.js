import React from 'react';
import 'antd/dist/antd.css';
import './App.css'

import { Layout, Menu,} from 'antd';
import Navbar from './components/navbar';
import HomeContent from './components/home'
import Context from './components/context';
import Description from './components/description'
import Features from './components/features';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <HomeContent />
        <Context />
        <Description />
        <Features />
      </Content>
      <Footer>Copyright © 2022 All rights reserved - By Jessie </Footer>
    </Layout>
  );
}

export default App;
