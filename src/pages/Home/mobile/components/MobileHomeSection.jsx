import React from 'react';
import { makeStyles } from "@material-ui/core";
import {descriptions, titles} from "../texts/content-text";
import Interaction from "./Interaction/Interaction";

const useStyles = makeStyles((theme) => ({
    section: {
        position: 'fixed',
        lineHeight: 1.5,
    },

    title: {
        fontFamily:'NanumSquareRoundR',
        fontSize: "1.25em",
        fontWeight: "bold",
        marginBottom: "1vh",
        color: "#4770B3",
        lineHeight: "1.2em"
    },

    description: {
        fontFamily:'NanumSquareRoundR',
        fontSize: "1em",
        fontWeight: "normal",
        marginBottom: "1vh",
        color: "#9292A2",
        lineHeight: "1.2em",
    },
}));

const MobileHomeSection = ({ index, callback }) => {
    const classes = useStyles();

    console.log("description:", descriptions);
    console.log("index:", index);
    return (
        <div className={classes.section}>
            <p className={classes.title}>{titles[index]}</p>
            <p className={classes.description}>
                {descriptions[index].map(d => {
                    return <span>{d}<br/></span>;
                })}
            </p>
            {index === (titles.length - 1) ? <Interaction callback={callback} /> : null}
        </div>
    )
};

export default MobileHomeSection;



