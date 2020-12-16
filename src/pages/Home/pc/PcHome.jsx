import React from 'react';
import { makeStyles } from "@material-ui/core";
import PcHomeContent from "./PcHomeContent";
import PcHomeCanvas from "./PcHomeCanvas";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#AFECB0",
        paddingTop: "2vh",
    },

    wrapper: {
        width: "60vw",
        display: "block",
        margin: "0 auto"
    }

}));

const PcHome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <PcHomeContent/>
                <PcHomeCanvas/>
            </div>
        </div>
    )
};

export default PcHome;