import React from 'react';
import TextBtn from './components/TextBtn';
import Background from '../../../images/bg.png';
import Typical from 'react-typical';

const MobileWelcome = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div style={{
                width: '40%',
                height: '20%',
                position: 'absolute',
                top: '5%',
                left: '10%',
                textAlign:'left',
                fontFamily: "NanumSquareRoundR",
                fontWeight: 'bold',
                fontSize: '350%',
                color: '#4770B3'
            }}>
                <p>행복</p>
            </div>
            <div style={{
                width: '40%',
                height: '20%',
                position: 'absolute',
                top: '25%',
                left: '10%',
                textAlign:'left',
                fontFamily: "NanumSquareRoundR",
                fontSize: '120%',
                color: '##50AED3'
            }}>
                <Typical
                    steps={['살(Buy, Live)', 1500, '살(Buy, Live) 수 있을까?', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div style={{
                width: '50%',
                height: '30%',
                position: 'absolute',
                top: '40%',
                left: '10%'
            }}>
                <TextBtn></TextBtn>

            </div>
        </div>
    );
};

export default MobileWelcome;