import React from 'react';
import MediaQuery from 'react-responsive';
import PcHappy from './pc/PcHappy';
// import MobileHome from './mobile/MobileHome';

export default function HomeContainer (props) {
    // TODO : PC와 모바일을 대응하려면 디바이스의 width를 기준으로 대응하면됨, 테스트는 safari 브라우저에서 하는게 가장 좋음
    return (
        <MediaQuery
            minWidth={600}
        >
            {
                (match) => match ?
                    <PcHappy/>
                    :
                    <p>MobileHappy</p>
            }
        </MediaQuery>
    )
}