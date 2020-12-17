import React, {createContext, useReducer} from 'react';
import { makeStyles } from "@material-ui/core";
import PcHomeContent from "./PcHomeContent";
import PcHomeCanvas from "./PcHomeCanvas";
import { UPDATE_INDEX } from '../../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#AFECB0",
        paddingTop: "2vh",
    },

    wrapper: {
        width: "60vw",
        display: "block",
        margin: "0 auto",
        marginTop: "5vh",
    }

}));

export const IndexContext = createContext();

const initialIndex = -1;

const reducer = (state, action) => {
    if (action.type === UPDATE_INDEX) {
        return action.data
    }
};

const PcHome = () => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, initialIndex);

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <IndexContext.Provider value={{state, dispatch}}>
                    <PcHomeContent/>
                    <PcHomeCanvas/>
                </IndexContext.Provider>
            </div>
        </div>
    )
};

export default PcHome;