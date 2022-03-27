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
      Lenders decide what they think is the fair value of the collateral, usually by looking at the asset's past performance, sales history or the <a href="https://support.opensea.io/hc/en-us/articles/4405171313171-What-is-a-floor-price-
">floor price</a> of similar NFTs. The floor price refers to the lowest offer price for an NFT from a particular series. Once both parties agree on the terms, the NFT is transferred from the borrower's wallet into an escrow account, and a smart contract facilitates the loan.
      </TabPane>
      <TabPane tab="borrow" key="2">
      Borrowers can expect to get a loan amount of approximately 50% of the value of the NFT, with interest rates ranging from 20% to 80%, depending on the popularity of the NFT.
      </TabPane>
      <TabPane tab="montage" key="3">
      DeFi platforms use smart contracts to give users complete control over their funds. Assets that function as collateral are sent to a secure smart contract, which acts as an impartial, automated third party programmed to facilitate the lending and borrowing process.
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