import React from 'react';
import { makeStyles } from "@material-ui/core";

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

    rectangle: {
        display: 'block',
        backgroundColor: "#AA4444",
        height: '4%',
    }
}));

const PcHomeCanvas = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.graphic}>
                <div className={classes.rectangle}>Rect0</div>
                <div className={classes.rectangle}>Rect1</div>
                <div className={classes.rectangle}>Rect2</div>
                <div className={classes.rectangle}>Rect3</div>
                <div className={classes.rectangle}>Rect4</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect</div>
                <div className={classes.rectangle}>Rect24</div>
            </div>
        </div>
    )
};

export default PcHomeCanvas;