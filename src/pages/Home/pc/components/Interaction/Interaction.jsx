import React, {useContext, useReducer} from "react";
import * as d3 from "d3";
import { makeStyles } from "@material-ui/core";
import Sliders from './Sliders';
import Button from '@material-ui/core/Button';
import {IndexContext, InteractionContext} from "../../PcHome";
import {UPDATE_INIT} from "./constants";


const useStyles = makeStyles(theme => ({  // style 요소 선언
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },

    buttonWrapper: {
        position: 'relative',
    },

    totalP: {
        display: 'inline',
        fontSize: '20px',
        fontWeight: '700',
        width: '30%',
    },

    sendButton: {
        fontFamily: 'NanumSquareRoundR',
        width: '30%',
        borderColor: '#4770B3',
        backgroundColor: '#ffffff',
        paddingLeft: '30px',
        paddingRight: '30px',
        color: '#4770B3'
    },
    initButton: {
        fontFamily: 'NanumSquareRoundR',
        width: '30%',
        borderColor: '#4770B3',
        backgroundColor: '#ffffff',
        paddingLeft: '30px',
        paddingRight: '30px',
        marginLeft:'30px',
        marginRight: '60px',
        color: '#4770B3'
    }
}));

const Interaction = ({callback}) => {

    const classes = useStyles();

    const { weightState, weightDispatch } = useContext(InteractionContext);

    const send = (event) => {

        // const total = weightState.hlt + weightState.saf + weightState.env + weightState.eco + weightState.edu + weightState.rel + weightState.hby;
        callback(weightState);
        // if (d3.format('0.2f')(total) === '1.00') {
        // if ((total) === '50') {
        //     callback(weightState)
        // } else {
        //     alert("합이 50이 되어야 합니다.")
        // }
    };

    const initialize = (event) => {
        weightDispatch({type: UPDATE_INIT, data: ''});
    };

    return (
        <div className={classes.wrapper} id="slider-wrapper">
            <Sliders/>

            <div className={classes.buttonWrapper} id="slider-button-wrapper">
                {/*<p className={classes.totalP}>{d3.format('d')(weightState.hlt + weightState.saf + weightState.env + weightState.eco + weightState.edu + weightState.rel + weightState.hby)}</p>*/}
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.initButton}
                    onClick={initialize}>
                    초기화
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.sendButton}
                    onClick={send}>
                    적용하기
                </Button>
            </div>

        </div>
    )
};

export default Interaction;
