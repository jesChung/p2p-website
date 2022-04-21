import React from 'react'
import { Button, Image, Row, Col } from 'antd';

import colorful from '../../src/img/colorful.png';



function Description() {
    return(
        <div id="description" className='des-content pb-[180px]'> 
            <Row>
                <Col md={{ span: 12 }} sm={{span: 24}}>
                    <Image src={colorful} preview={false} className='p-[50px]'></Image>,
                </Col>
                <Col md={{ span: 12 }} sm={{span: 24}} 
                     style={{padding: "70px 50px"}}
                >
                    <div className='des-content-word'>
                    <h1 className='text-[40px] pt-[40px] pr-[20px] pb-[30px] pl-[10px]'>Enhance your NFT liquidity</h1>
                    <p className='text-[16px] pl-[10px] mb-[50px] text-left'>Lending and renting allows you to list your NFT on the marketplace with your desired rental terms. Collateralized renting requires the borrower to deposit collateral to rent your NFT while non-collateralized renting does not require any collateral.  </p>
                    <Button type="primary" className='btn-primary px-[34px] py-[19px] mt-5 font-bold' >
                        <a href="https://p2p-market-place.vercel.app/">Try it</a>
                    </Button>
            </div>
                </Col>
            </Row>
        </div>
    );
}

export default Description;