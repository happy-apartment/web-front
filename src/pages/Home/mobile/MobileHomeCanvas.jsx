import React, {useEffect, useMemo, useCallback, useContext, useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { IndexContext } from './MobileHome';
import { BarChart } from './components/BarChart'
import { Scatter } from "./components/scatter";
import MobileHomeFirst from "./components/MobileHomeFirst";
import InteractionBarChart from "./components/Interaction/InteractionBarChart";
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
    canvasRoot: {
        width: "100%",
        display: "inline-block",
        position: "fixed",

        '&::before': {
            content: '""',
            display: 'block',
            paddingTop: '100%',
        }
    },

    graphic: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        paddingLeft: "1.5vw",
        paddingRight: "1.5vw",
    },

}));

const MobileHomeCanvas = ({weight}) => {

    const classes = useStyles();

    const { indexState, indexDispatch } = useContext(IndexContext);

    return (
        <div className={classes.canvasRoot}>
            <div className={classes.graphic}>
                {(function () {
                    switch (indexState) {
                        // 여기에 스크립트 순서에 맞게 보여주고 싶은 컴포넌트를 넣으시면 됩니다.
                        case 0:
                            // src/components/BarChart 안에 BarChart.jsx 로 찾아가주세요
                            return (<MobileHomeFirst/>);

                        case PRICE_BAR: // BarChart - House Price
                        case HAPPY_BAR: // BarChart - House Price => Happiness
                            return (<BarChart index={indexState}/>);

                        case ECO_SCATTER: // 여가지수 - 집값
                        case EDU_SCATTER: // 안전
                        case ENV_SCATTER: // 교육
                        case HLT_SCATTER: // 관계
                        case HBY_SCATTER: //
                        case REL_SCATTER:
                        case SAF_SCATTER:
                            return (<Scatter index={indexState}/>);
                        case INTERACTION:
                            return (<InteractionBarChart weight={weight}/>);
                        default:
                            return (<p></p>);
                    }
                })()}
            </div>
        </div>
    )
};

export default MobileHomeCanvas;