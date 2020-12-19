import React from 'react';
import { makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
   container: {
       height: "30vh",
       padding: "0 auto"
   },

    arrowUp: {
       width: "3vw",
        height: "3vw",
       display: "block",
        fill: "#9E9EA2"

    },

    arrowDown: {
       width: "3vw",
        height: "3vw",
        display: "block",
        fill: "#9E9EA2"
    },

}));

const ScrollCircle = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.container} scroll-circles`}>
            <ArrowDropUpIcon className={classes.arrowUp} />
            <ArrowDropDownIcon className={classes.arrowDown}/>
        </div>
    )
};

export default ScrollCircle;