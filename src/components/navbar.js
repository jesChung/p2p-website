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
        <a target="_blank" href="http://google.com">
          NFT
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
                <div className="header">
                    <div className="logo">
                        <Image src={logo} preview={false} ></Image>
                    </div>
                    <div className='mobileHidden'>
                        <Anchor targetOffset="48" >
                            <Link href="#description" title="Description" />
                            <Link href="#features" title="Features">
                            </Link>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Extra  
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                            <Button><a href="https://p2p-market-place.vercel.app/history">Lend NFTs</a></Button>
                        </Anchor>
                    </div>

                    <div
                        className="mobileVisible"
                        // style={{
                        // width: "100%",
                        // display: "flex",
                        // justifyContent: "space-between"
                        // }}
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
                            <Image src={logo} preview={false} ></Image>
                        </div>
                        <Button
                            type="primary"
                            color='#ff556e'
                            onClick={this.toggleCollapsed}
                            style={{ marginBottom: 16 }}
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
                            // width: 265,
                            position: "absolute",
                            left: "0",
                            top: "80px",
                            display: this.state.visible ? "block" : "none"
                        }}
                        mode="inline"
                        >
                            <Menu.Item key="1" >
                                <a href="#description" >Description</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="#features">Feature</a>
                            </Menu.Item>

                            <SubMenu key="sub1" icon={<></> } title="Extra >" >
                                <Menu.Item key="3" >
                                <a href="http://google.com">NFT</a>
                                </Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item key="3">
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Extra  
                                        <DownOutlined />
                                    </a>
                                </Dropdown>
                            </Menu.Item>  */}

                            <Menu.Item key="4">
                                <Button className='btnLend' style={{
                                    borderRadius: 36,
                                    Color: '#ff556e',
                                    borderColor: '#ff556e'}}>
                                <a href="https://p2p-market-place.vercel.app/">Lend NFTs</a>
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