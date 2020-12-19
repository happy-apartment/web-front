import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core";
import { IndexContext } from "./MobileHome";

import MobileHomeSection from "./components/MobileHomeSection";


const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "150px",
    },

    wrapper: {
        position: 'relative',
        paddingLeft: "1.5vw",
        paddingRight: "1.5vw",
    },

}));

const MobileHomeContent = ({callback}) => {

    const classes = useStyles();

    const { indexState, indexDispatch } = useContext(IndexContext);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper} id="section-wrapper">
                <MobileHomeSection index={indexState} callback={callback} />
            </div>
        </div>
    )
};

export default MobileHomeContent;