import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({  // style 요소 선언
    wrapperTop: {
        fontFamily: 'sans-serif',
        fontWeight: '500',
        position:'absolute',
        left: '0',
        top: '0',
        paddingLeft: '3vw',
        width: '27%',
        display: 'flex',
        flexDirection: 'column',
        // transform: 'translate(600px, -120px)'
    },

    section: {
        marginBottom: '3%',
    },

    Area1Color: {
        border:'1px solid',
        borderColor:'transparent',
        padding:'2px',
        backgroundColor: '#fe5050',
        display: 'inline-block'
    },

    Area2Color: {
        border:'1px solid',
        borderColor:'transparent',
        padding:'2px',
        backgroundColor: '#fc9595',
        display: 'inline-block'
    },

    Area3Color: {
        border:'1px solid',
        borderColor:'transparent',
        padding:'2px',
        backgroundColor: '#9E9EA2',
        display: 'inline-block'
    },

    Area4Color: {
        border:'1px solid',
        borderColor:'transparent',
        padding:'2px',
        backgroundColor: '#50AED3',
        display: 'inline-block'
    },

    Area5Color: {
        border:'1px solid',
        borderColor:'transparent',
        padding:'2px',
        backgroundColor: '#4770B3',
        display: 'inline-block'
    },

    Content: {
        textAlign: 'center',
        fontSize: '0.1rem',
        display: 'inline',
        marginLeft: '5px',
    }
}));


const RemarkTop = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapperTop} >
            <div className={classes.section}>
                <div className={classes.Area1Color}> </div>
                <div className={classes.Content}>집값 상위 20%</div>
            </div>
            <div className={classes.section}>
                <div className={classes.Area2Color}> </div>
                <div className={classes.Content}>집값 상위 20~40%</div>
            </div>
            <div className={classes.section}>
                <div className={classes.Area3Color}> </div>
                <div className={classes.Content}>집값 상위 40~60%</div>
            </div>
            <div className={classes.section}>
                <div className={classes.Area4Color}> </div>
                <div className={classes.Content}>집값 상위 60~80%</div>
            </div>
            <div className={classes.section}>
                <div className={classes.Area5Color}> </div>
                <div className={classes.Content}>집값 상위 80~100%</div>
            </div>

        </div>
    )
};

export default RemarkTop;