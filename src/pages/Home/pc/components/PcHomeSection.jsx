import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: "10vh",
        lineHeight: 1.5,
        color: "#767678",
        overflow: "visible",
    },

    title: {
        fontFamily:'NanumSquareRoundR',
        fontSize: "x-large",
        fontWeight: "bold",
        marginBottom: "1vh",
        color: "#4770B3",
        lineHeight: "1.2em"
    },

    description: {
        fontFamily:'NanumSquareRoundR',
        fontSize: "medium",
        fontWeight: "normal",
        marginBottom: "1vh",
        color: "#9292A2",
        lineHeight: "1.2em",
    },
}));

const PcHomeSection = ({title, descriptions}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.section} step`}>
            <div className={classes.title}>{title}</div>
            <p className={classes.description}>
                {descriptions.map(d => {
                    return <span>{d}<br/></span>;
                })}
            </p>
        </div>
    )
};

export default PcHomeSection;



