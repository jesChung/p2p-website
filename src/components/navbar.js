import React, { Component } from 'react';
import { Menu, Button, Dropdown, Row, Col, Image } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from '../img/CuterDAO.png';

const { Link } = Anchor;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" href="https://tidal-tangerine-2d4.notion.site/public-version-CutterDAO-Lightpaper-8c2ce8bff43947dc8f1977b4a90cb6eb">
        white paper
        </a>
      </Menu.Item>
    </Menu>
)

const { SubMenu } = Menu;

const handleClick = e => {
    console.log('click', e);
}

class Navbar extends Component {
    state = {
        collapsed: false,
        click: false,
        visible: false

    };
    
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
          visible: !this.state.visible
        });
    };
    
    render() { 
        return (
            <div className="container-fluid">
                <div className="header justify-between flex pt-[25px] pr-[25px] pb-[8px] pl-[32px] items-center">
                    <div className="logo" >
                        {/* <Image src={logo} preview={false} className='hidden md:block'></Image> */}
                        <div>Saya 低碳生活</div>
                    </div>
                    <div className='mobileHidden hidden md:block'>
                        <Anchor targetOffset="48" className='font-bold' >
                            <Link href="#saya" title="Saya" className='px-[20px] hover:text-[#ff556e] text-[18px]'/>
                            <Link href="#about us" title="about us" className='px-[20px] text-[18px]'>
                            </Link>
                            <Link href="#service" title="service" className='px-[20px] text-[18px]'>
                            </Link>
                            {/* <Dropdown overlay={menu} className='px-5 items-center text-black hover:text-[#ff556e] text-[18px]'>
                                <a className="ant-dropdown-link " onClick={e => e.preventDefault()} className='py-[7px] pl-4'>
                                service 
                                    <DownOutlined />
                                </a>
                            </Dropdown> */}
                            <Button className='ant-btn-default'>Developing</Button>
                        </Anchor>
                    </div>
                    
                    <div
                        className="mobileVisible w-full	justify-between	flex md:hidden"
                    >
                        <div
                        className="mBtnCtnContainer"
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                        >
                        <div className="logo2">
                            <Image src={logo} preview={false} className='w-[30px]'></Image>
                        </div>
                        <Button
                            type="primary"
                            color='#ff556e'
                            onClick={this.toggleCollapsed}
                            style={{ marginBottom: 16 }}
                            className='flex focus:bg-[#ff556e] focus:border-[#ff556e] rounded-none border-[#f7fafd] text-[#333] py-6 px-9 '
                        >
                            {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                            )}
                        </Button>
                        </div>
                        <Menu className='mobileMenu'
                        defaultOpenKeys={['sub1']}
                        inlineCollapsed={this.state.collapsed}
                        onClick={handleClick}
                        style={{
                            backgroundColor: '#f7fafd',
                            position: "absolute",
                            left: "0",
                            top: "80px",
                            display: this.state.visible ? "block" : "none",
                            width: "710px"
                        }}
                        mode="inline"
                        className='mr-[50px] ml-[180px] p-0 left-[50px]'
                        >
                            <Menu.Item key="1" className='p-0 left-[50px]'>
                                <a href="#saya" >Saya</a>
                            </Menu.Item>
                            <Menu.Item key="2" className='p-0 left-[50px]'>
                                <a href="#about us">about us</a>
                            </Menu.Item>
                            <Menu.Item key="2" className='p-0 left-[50px]'>
                                <a href="#service">service</a>
                            </Menu.Item>

                            {/* <SubMenu key="sub1" icon={<></> } title="Extra >" className='p-0 left-[50px]'>
                                <Menu.Item key="3" >
                                <a href="http://google.com">NFT</a>
                                </Menu.Item>
                            </SubMenu> */}
                            <Menu.Item key="4" className='p-0 left-[50px]'>
                                <Button className='btnLend text-center ant-btn-default' style={{
                                    borderRadius: 36,
                                    Color: '#ff556e',
                                    borderColor: '#ff556e'}}>
                                <a href="https://p2p-market-place.vercel.app/">Developing</a>
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;