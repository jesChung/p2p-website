import React from 'react'
import { Button, Row, Col } from 'antd';

function HomeContent() {
    return(
        <div id="homecontent" className='content mt-[280px] pb-12'> 
            <h1 className='text-[64px] mb-4 text-center'>CutterDAO</h1>
            <p className='text-[16px] text-center'>Make NFTs more interesting : rent, lend and mortgage </p>
            <div className="btnHolder flex justify-center mt-[80px] mb-[200px]" >
                <Button type="primary" className='btn-primary btn-primary-home'><a href="https://p2p-market-place.vercel.app/">Explore NFT Rentals</a></Button>
                <Button type="primary" className='btn-primary btn-primary-home btnlearn '><a href="https://p2p-market-place.vercel.app/">Learn more</a></Button>
            </div>
        </div>
    );
}

export default HomeContent;