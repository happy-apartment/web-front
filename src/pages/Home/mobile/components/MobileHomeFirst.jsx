import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {

    },

    p1: {
        fontFamily: "NanumSquareRoundR",
        width: '100%',
        fontSize: '20vw',
        textAlign: 'center',
        fontWeight:'bold',
        color: '#4770B3',
    },

    p2: {
        fontFamily: "NanumSquareRoundR",
        width: '100%',
        fontSize: '6vw',
        textAlign: 'center',
        color: '#50AED3',
    }
}));

const MobileHomeFirst = () => {

    const classes = useStyles();

    return (
        <div className={classes.wrapper} id="welcome-wrapper">
            <p className={classes.p1} id="welcome-text-1">행복</p>
            <p className={classes.p2} id="welcome-text-2">살(Buy, live) 수 있을까?</p>
        </div>
    )
};

export default MobileHomeFirst;