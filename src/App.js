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
    <Layout className="mainLayout bg-[#f7fafd]">
      <Header className='bg-[#f7fafd] h-auto leading-7' 
      style={{position: "fixed", left: 0, right: 0, zIndex: 999}}>
        <Navbar/>
      </Header>
      <Content className='mt-[180px] md:mt-[210px] xl:mt-[280px]'>
        <HomeContent />
        <Context />
        {/* <Description />
        <Features /> */}
      </Content>
      <Footer className='text-center bg-[#f7fafd]'>Copyright © 2022 All rights reserved - By Saya </Footer>
    </Layout>
  );
}

export default App;
