import React from 'react'
import { Button, Row, Col, Image, BackTop } from 'antd';
import { Tabs } from 'antd';

import black from '../../src/img/black.png';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const FeaturesTabs = () => (
    <Tabs defaultActiveKey="1" centered onChange={callback}>
      <TabPane tab="lend" key="1">
        lend xxx
      </TabPane>
      <TabPane tab="borrow" key="2">
        borrow xxx
      </TabPane>
      <TabPane tab="montage" key="3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ducimus similique non architecto, assumenda deleniti repudiandae, vero culpa officiis eaque esse quibusdam nulla vel sequi aut possimus, dolore iste ipsam.
      </TabPane>
    </Tabs>
);

const style = {
    height: 40,
    width: 40,
    lineHeight: '50px',
    borderRadius: '50%',
    backgroundColor: '#333333',
    color: 'white',
    textAlign: 'center',
    fontSize: '30px',
};

function Features() {
    return(
        <div id="features"className='feature-content'> 

            <Row>
                <Col md={{ span: 12 }} sm={{span: 24}} xs={{span: 24}}>
                    <FeaturesTabs />

                    {/* <Button >Try it</Button>
                    <Button >Try it</Button>
                    <Button >Try it</Button>
                    <p> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p> */}
                </Col>
                <Col md={{ span: 12 }} sm={{span: 24}}>
                    <Image src={black} preview={false}></Image>,

                </Col>
            </Row>
            <BackTop>
                <div style={style}>^</div>
            </BackTop>
        </div>
    );
}

export default Features;