import React, {useContext, useReducer, useState} from "react";
import * as d3 from "d3";
import { makeStyles } from "@material-ui/core";
import Sliders from './Sliders';
import Button from '@material-ui/core/Button';
import {IndexContext, InteractionContext} from "../../MobileHome";
import {UPDATE_INIT} from "./constants";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {UPDATE_ECO, UPDATE_EDU, UPDATE_ENV, UPDATE_HBY, UPDATE_HLT, UPDATE_REL, UPDATE_SAF} from "./constants";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles(theme => ({  // style 요소 선언
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },

    formWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: "7%",
        '&& .MuiFormLabel-root': {
            fontSize: '0.7em',
        }
    },

    select: {
        display: "inline",
        height: "20px",
        fontSize: "0.5em",
        '&& .MuiOutlinedInput-input': {
            padding: "5px 3px"
        },
        '&& .MuiSelect-iconOutlined' : {
            right: '-10px'
        },
        '&& .MuiSvgIcon-root': {
            width: '0.7em',
            height: '0.7em',
        }

    },

    buttonWrapper: {
        position: 'relative',
        right: '-2vw',


        '&& .MuiButton-label': {
            width: '80%',
        },

        '&& .MuiButton-text': {
            padding: '0px 0px',
        }
    },

    sendButton: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: '0.5rem',
        borderColor: '#4770B3',
        backgroundColor: '#ffffff',
        color: '#4770B3',
    },

}));

const Interaction = ({callback}) => {

    const classes = useStyles();

    const { weightState, weightDispatch } = useContext(InteractionContext);

    const send = (event) => {
        console.log("send", weightState);
        callback(weightState);
    };

    const initialize = (event) => {
        weightDispatch({type: UPDATE_INIT, data: ''});
    };

    const getState = (type) => {
        switch (type) {
            case UPDATE_HLT:
                return weightState.hlt;

            case UPDATE_SAF:
                return weightState.saf;

            case UPDATE_ENV:
                return weightState.env;

            case UPDATE_ECO:
                return weightState.eco;

            case UPDATE_EDU:
                return weightState.edu;

            case UPDATE_REL:
                return weightState.rel;

            case UPDATE_HBY:
                return weightState.hby;
        }
    };

    const handleChange = (event, type) => {
        weightDispatch({ type: type, data: event.target.value});
    };

    return (
        <div className={classes.wrapper} id="slider-wrapper">
            <div className={classes.formWrapper}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>건강</InputLabel>
                    <Select className={classes.select}
                        value={getState(UPDATE_HLT)}
                        onChange={ (event) => handleChange(event, UPDATE_HLT)}
                        label="건강"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>안전</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_SAF)}
                        onChange={ (event) => handleChange(event, UPDATE_SAF)}
                        label="안전"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>환경</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_ENV)}
                        onChange={ (event) => handleChange(event, UPDATE_ENV)}
                        label="환경"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>경제</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_ECO)}
                        onChange={ (event) => handleChange(event, UPDATE_ECO)}
                        label="경제"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>교육</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_EDU)}
                        onChange={ (event) => handleChange(event, UPDATE_EDU)}
                        label="교육"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>관계</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_REL)}
                        onChange={ (event) => handleChange(event, UPDATE_REL)}
                        label="관계"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>여가</InputLabel>
                    <Select
                        className={classes.select}
                        value={getState(UPDATE_HBY)}
                        onChange={ (event) => handleChange(event, UPDATE_HBY)}
                        label="여가"
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
                <div className={classes.buttonWrapper} id="slider-button-wrapper">
                    <Button
                        className={classes.sendButton}
                        onClick={send}
                        onTouchStart={send}>
                        적용하기
                    </Button>
                </div>
            </div>

        </div>
    )
};

export default Interaction;