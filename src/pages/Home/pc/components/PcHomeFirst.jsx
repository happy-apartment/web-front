import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {

    },

    p1: {
        fontSize: '120px',
        textAlign: 'center',
        fontWeight:'bold',
        color: '#4770B3',
        fontFamily: "NanumSquareRoundR",
    },

    p2: {
        fontSize: '70px',
        textAlign: 'center',
        color: '#50AED3',
        fontFamily: "NanumSquareRoundR",
    }
}));

const PcHomeFirst = () => {

    const classes = useStyles();

    return (
        <div className={classes.wrapper} id="welcome-wrapper">
            <p className={classes.p1} id="welcome-text-1" width="1000">행복</p>
            <p className={classes.p2} id="welcome-text-2" width="1000">살(Buy, live) 수 있을까?</p>
        </div>
    )
};

export default PcHomeFirst;