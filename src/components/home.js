import React from 'react'
import { Button, Row, Col } from 'antd';

function HomeContent() {
    return(
        <div id="saya" className='content pb-12'> 
            <h1 className='text-[50px] sm:text-[64px] mb-4 text-center'>Saya 低碳生活</h1>
            <p className='text-[28px] text-center'>個人化減碳服務</p>
            <p className='text-[16px] text-center'>讓世界因你/我更美好</p>
            <div className="btnHolder flex justify-center my-[100px] md:mt-[80px] md:mb-[200px]" >
                <Button type="primary" className='btn-primary btn-primary-home'>如何開始</Button>
                <Button type="primary" className='btn-primary btn-primary-home btnlearn '><a href="https://p2p-market-place.vercel.app/">Learn more</a></Button>
            </div>
        </div>
    );
}

export default HomeContent;