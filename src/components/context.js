import React from 'react';

import { Row, Col, Image, Button } from 'antd';
import paper from '../../src/img/paper.jpg';
import people from '../../src/img/people.jpg';
import house from '../../src/img/house.jpg';

function Context() {
    return (
        <div id="service" className='567:mb-[128px] mb-[64px]'>
          {/* <div className="titleHolder">
            <h2 className='mt-5 mb-[15px] text-center text-[40px]'>生活碳排紀錄</h2>
            <p className='mx-[93px] mb-9 text-center text-base whitespace-pre-line'>
              食衣住行育樂</p>
          </div> */}
        <Row gutter={[32, 16]} className="contextRow px-12 row">
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content ">
              <div className="icon ">
                <Image src={paper} preview={false} className='block m-auto '></Image>
              </div>
              <h3 className='text-[27px]'>生活碳排紀錄</h3>
              <p>食衣住行育樂</p>
              {/* <Button type="primary" className='context btn-primary py-[19px] px-[34px] mx-[35%] flex sm:mx-[40%] items-center md:mx-[20%] lg:mx-[25%] xl:mx-[33%]'><a href="https://p2p-market-place.vercel.app/">Rent NFTs</a></Button> */}
            </div>
            </Col>
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content">
              <div className="icon">
                <Image src={people} preview={false} className='block m-auto'></Image>
              </div>
              <h3 className='text-[27px]'>ESG 知識科普</h3>
              <p>與各大與各大基金/協會協會合作倡議</p>
              {/* <Button type="primary" className='btn-primary py-[19px] px-[34px] flex mx-[35%] sm:mx-[40%] md:mx-[20%] lg:mx-[25%] xl:mx-[33%]'><a href="https://p2p-market-place.vercel.app/">Lend NFTs</a></Button> */}
            </div>
            </Col>
            <Col md={{ span: 8 }} sm={{span: 24}} xs={{span: 24}}>
            <div className="content">
              <div className="icon">
                <Image src={house} preview={false} className='block m-auto'></Image>
              </div>
              <h3 className='text-[27px]'>住家能源自主</h3>
              <p>企業能源自主</p>
              <Button type="primary" disabled className='btn-primary py-[19px] px-[34px] flex mx-[35%] sm:mx-[40%] md:mx-[20%] lg:mx-[25%] xl:mx-[33%]'>Coming soon</Button>
            </div>
          </Col>
        </Row>
      </div>
        

    );
}

export default Context;
