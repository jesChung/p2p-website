import React from 'react';
import 'antd/dist/antd.css';
// import './App.css'
import '../src/styles.css';


import { Layout, Menu,} from 'antd';
import Navbar from './components/navbar';
import HomeContent from './components/home'
import Context from './components/context';
import Description from './components/description'
import Features from './components/features';
const { Header, Content, Footer } = Layout;
// import Footer from "antd/lib/Footer";


function App() {
  return (
    <Layout className="mainLayout ">
      <Header className='fixed left-0 right-0 z-999'>
        <Navbar/>
      </Header>
      <Content>
        <HomeContent />
        <Context />
        <Description />
        <Features />
      </Content>
      <Footer className='text-center'>Copyright © 2022 All rights reserved - By Jacky </Footer>
    </Layout>
  );
}

export default App;
