import React, { useMemo } from 'react';
import { makeStyles } from "@material-ui/core";
import PcHomeSection from './components/PcHomeSection';
import { titles, descriptions } from './texts/content-text';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#45BD20",
        width: "30vw",
        minWidth: "470px",
        maxWidth: "500px",
        height: "150vh",
        display: "inline-block",
    },

    wrapper: {
        // backgroundColor: "#123456",
        paddingTop: "2vw",
        paddingLeft: "1.5vw",
        paddingRight: "1.5vw",
    },
}));

const PcHomeContent = () => {
    const classes = useStyles();

    const sections = useMemo(() => {
        return titles.map((t, i) => <PcHomeSection key={i} title={t} descriptions={descriptions[i]}/>)
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} id="section-wrapper">
                {sections}
            </div>
        </div>
    )
};

export default PcHomeContent;