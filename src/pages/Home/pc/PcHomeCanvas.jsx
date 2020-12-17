import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core";
import { IndexContext } from './PcHome';

import {
    PRICE_BAR,
    HAPPY_BAR,
    ECO_SCATTER,
    EDU_SCATTER,
    ENV_SCATTER,
    HLT_SCATTER,
    HBY_SCATTER,
    REL_SCATTER,
    SAF_SCATTER,
    INTERACTION,
} from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "30vw",
        minWidth: "500px",
        maxWidth: "1000px",
        display: "inline-block",
        position: "fixed",

        '&::before': {
            content: '""',
            display: 'block',
            paddingTop: '100%',
        }
    },

    graphic: {
        backgroundColor: "#112295",
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },

}));

const PcHomeCanvas = () => {
    const classes = useStyles();

    const { state, dispatch } = useContext(IndexContext);

    return (
        <div className={classes.root}>
            <div className={classes.graphic}>
                {(function () {
                    switch (state) {
                        // 여기에 스크립트 순서에 맞게 보여주고 싶은 컴포넌트를 넣으시면 됩니다.
                        case 0:
                            // src/components/BarChart 안에 BarChart.jsx 로 찾아가주세요
                            // return (<Welcome/>);
                            return (<p>Welcome</p>);

                        case PRICE_BAR: // BarChart - House Price
                        case HAPPY_BAR: // BarChart - House Price => Happiness
                            // return (<BarChart index={index} result={result} color={color}/>);
                            return (<p>Bar Chart</p>);

                        case ECO_SCATTER: // 여가지수 - 집값
                        case EDU_SCATTER: // 안전
                        case ENV_SCATTER: // 교육
                        case HLT_SCATTER: // 관계
                        case HBY_SCATTER: //
                        case REL_SCATTER:
                        case SAF_SCATTER:
                            // return (<Scatter index={index} result={result} color={color}/>);
                            return (<p>Scatter</p>);
                        case INTERACTION:
                            // return (<InteractionBarChart interactionWeight={interactionWeight}/>);
                            return (<p>Interaction</p>);
                        default:
                            return (<p></p>);
                    }
                })()}
            </div>
        </div>
    )
};

export default PcHomeCanvas;