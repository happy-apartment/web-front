import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import history from '../../../../history';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" size="large" onClick={() => history.push('/Happy')}>행복이란?</Button>
            <Button variant="contained" color="primary" size="large" onClick={() => history.push('/Home')} endIcon={<KeyboardArrowRightIcon />}>데이터 보러가기</Button>
        </div>
    );
}
