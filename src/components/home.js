import React from 'react'
import { Button, Row, Col } from 'antd';

function HomeContent() {
    return(
        <div id="homecontent"className='content'> 
            <h1>Make Crypto liquidity</h1>
            <p>Make NFTs more interesting : rent, lend and mortgage </p>
            <div className="btnHolder" >
                <Button type="primary"><a href="http://google.com">Explore NFT Rentals</a></Button>
                <Button type="primary" className='btnlearn'><a href="http://google.com">Learn more</a></Button>
            </div>
        </div>
    );
}

export default HomeContent;