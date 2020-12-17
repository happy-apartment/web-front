import React, {createContext, useCallback, useReducer, useState} from 'react';
import { makeStyles } from "@material-ui/core";
import MobileHomeContent from "./MobileHomeContent";
import MobileHomeCanvas from "./MobileHomeCanvas";
import {
    UPDATE_ECO,
    UPDATE_EDU,
    UPDATE_ENV,
    UPDATE_HBY,
    UPDATE_HLT,
    UPDATE_INDEX, UPDATE_INIT,
    UPDATE_REL,
    UPDATE_SAF
} from "../../../constants";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#AFECB0",
    },

    wrapper: {
        // backgroundColor: "#AFEC12",
        width: "100%",
        height: "100%",
        paddingTop: "1vh",
        display: "block",
    },
}));

export const IndexContext = createContext();

const initialIndex = -1;

const indexReducer = (state, action) => {
    if (action.type === UPDATE_INDEX) {
        return action.data
    }
};

export const InteractionContext = React.createContext();

const initialWeight = {
    hlt: 7,
    saf: 7,
    env: 7,
    eco: 7,
    edu: 7,
    rel: 7,
    hby: 8,
};

const weightReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_HLT:
            return {
                ...state,
                hlt: action.data
            };

        case UPDATE_SAF:
            return {
                ...state,
                saf: action.data
            };

        case UPDATE_ENV:
            return {
                ...state,
                env: action.data
            };

        case UPDATE_ECO:
            return {
                ...state,
                eco: action.data
            };

        case UPDATE_EDU:
            return {
                ...state,
                edu: action.data
            };

        case UPDATE_REL:
            return {
                ...state,
                rel: action.data
            };

        case UPDATE_HBY:
            return {
                ...state,
                hby: action.data
            };

        case UPDATE_INIT:
            return {
                hlt: 7,
                saf: 7,
                env: 7,
                eco: 7,
                edu: 7,
                rel: 7,
                hby: 8,
            };

        default:
            return initialWeight;
    }
};

const MobileHome = () => {
    const classes = useStyles();

    const [indexState, indexDispatch] = useReducer(indexReducer, initialIndex);
    const [weightState, weightDispatch] = useReducer(weightReducer, initialWeight);

    const [ weight, setWeight ] = useState({
        hlt: 7,
        saf: 7,
        env: 7,
        eco: 7,
        edu: 7,
        rel: 7,
        hby: 8,
    });

    const changeBarChartByWeight = useCallback((weight) => {
        setWeight(weight);
    });

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <IndexContext.Provider value={{indexState, indexDispatch}}>
                    <InteractionContext.Provider value={{weightState, weightDispatch}}>
                        <MobileHomeCanvas weight={weight}/>
                        <MobileHomeContent callback={changeBarChartByWeight}/>
                    </InteractionContext.Provider>
                </IndexContext.Provider>
            </div>
        </div>
    )
};

export default MobileHome;