import React from 'react';

import { Row, Col, Image, Button } from 'antd';
import rent from '../../src/img/lending.png';
import lend from '../../src/img/exchange.png';
import mortgage from '../../src/img/stable.png';

// const items = [
//   {
//     key: '1',
//     img: <Image src={lend}></Image>,
//     title: 'Rent',
//     content: 'Rent NFTs to access unique experience',
//     button: 'Rent NFTs',
//     // type='primary'
//   },
//   {
//     key: '2',
//     img: <Image src={rent}></Image>,
//     title: 'Lend',
//     content: 'Lend your NFTs and earn passive income',
//     button: 'Lend NFTs',
//     // type='primary'
//   },
//   {
//     key: '3',
//     img: <Image src={mortgage}></Image>,
//     title: 'Mortgage',
//     content: 'Let\'s help you afford your favorite NFTs',
//     button: 'Coming soon',
//     // type='primary'
//   },
// ]

  


function Context() {
    return (
        <div id="context">
            <div className="titleHolder">
            <h2>CutterDAO is for everyone</h2>
            <p>CutterDAO allows any metaverse or marketplace to generate new revenue streams, 
             reimagine user experiences, and empower communities.</p>
        </div>
        {/* <Row gutter={[32, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.img}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <Button type='primary'>{item.button}</Button>
                </div>
              </Col>

            );
          })}
        </Row> */}
        <Row gutter={[32, 16]} className="contextRow">
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content">
              <div className="icon">
                <Image src={lend} preview={false}></Image>
              </div>
              <h3>Rent</h3>
              <p>Rent NFTs to access unique experience</p>
              <Button type="primary"><a href="https://p2p-market-place.vercel.app/">Rent NFTs</a></Button>
            </div>
            </Col>
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content">
              <div className="icon">
                <Image src={rent} preview={false}></Image>
              </div>
              <h3>Lend</h3>
              <p>Lend your NFTs and earn passive income</p>
              <Button type="primary"><a href="https://p2p-market-place.vercel.app/">Lend NFTs</a></Button>
            </div>
            </Col>
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content">
              <div className="icon">
                <Image src={mortgage} preview={false}></Image>
              </div>
              <h3>Mortgage</h3>
              <p>Let's help you afford your favorite NFTs</p>
              <Button type="primary" disabled>Coming soon</Button>
            </div>
          </Col>
        </Row>
      </div>
        

    );
}

export default Context;
