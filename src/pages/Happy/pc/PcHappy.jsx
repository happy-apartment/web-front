import React from 'react';
import Background from '../../../images/happy.png';

function PcHappy() {
    return (
        <div style={{
            width: '1920px',
            height: '1080px',
            flex: 1,
            padding: 10,
            backgroundImage: `url(${Background})`
        }}>
        </div>
    );
}

export default PcHappy;
