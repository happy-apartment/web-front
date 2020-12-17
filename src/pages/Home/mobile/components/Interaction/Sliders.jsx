import React from 'react';
import { makeStyles } from "@material-ui/core";
import InputSlider from './InputSlider';
import {
    UPDATE_HLT, UPDATE_SAF, UPDATE_ENV, UPDATE_ECO, UPDATE_EDU, UPDATE_REL, UPDATE_HBY
} from './constants';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '50px',
    }
}));

const Sliders = () => {

    const classes = useStyles();

    return (
        <div className={classes.container} id="slider-container">
                <InputSlider selection={UPDATE_HLT}/>
                <InputSlider selection={UPDATE_SAF}/>
                <InputSlider selection={UPDATE_ENV}/>
                <InputSlider selection={UPDATE_ECO}/>
                <InputSlider selection={UPDATE_EDU}/>
                <InputSlider selection={UPDATE_REL}/>
                <InputSlider selection={UPDATE_HBY}/>
        </div>
    )
};

export default Sliders;