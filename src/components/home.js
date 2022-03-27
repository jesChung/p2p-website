import React from 'react'
import { Button, Row, Col } from 'antd';

function HomeContent() {
    return(
        <div id="homecontent"className='content'> 
            <h1>CutterDAO</h1>
            <p>Make NFTs more interesting : rent, lend and mortgage </p>
            <div className="btnHolder" >
                <Button type="primary"><a href="https://p2p-market-place.vercel.app/">Explore NFT Rentals</a></Button>
                <Button type="primary" className='btnlearn'><a href="https://p2p-market-place.vercel.app/">Learn more</a></Button>
            </div>
        </div>
    );
}

export default HomeContent;