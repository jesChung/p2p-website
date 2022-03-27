import React from 'react'
import { Button, Image, Row, Col } from 'antd';

import colorful from '../../src/img/colorful.png';



function Description() {
    return(
        <div id="description" className='des-content'> 
            <Row>
                <Col md={{ span: 12 }} sm={{span: 24}}>
                    <Image src={colorful} preview={false}></Image>,
                </Col>
                <Col md={{ span: 12 }} sm={{span: 24}} 
                     style={{padding: "70px 50px"}}
                >
                    <div className='des-content-word'>
                    <h1>Enhance your NFT liquidity</h1>
                    <p>Lending and renting allows you to list your NFT on the marketplace with your desired rental terms. Collateralized renting requires the borrower to deposit collateral to rent your NFT while non-collateralized renting does not require any collateral.  </p>
                    <Button type="primary"><a href="http://google.com">Try it</a></Button>
            </div>
                </Col>
            </Row>
        </div>
    );
}

export default Description;