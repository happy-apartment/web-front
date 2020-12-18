import React, {useContext, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {InteractionContext} from "../../PcHome";
import {UPDATE_ECO, UPDATE_EDU, UPDATE_ENV, UPDATE_HBY, UPDATE_HLT, UPDATE_REL, UPDATE_SAF} from "./constants";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({

    category: {
        clear: 'both',
        position: 'relative',
        paddingBottom: '25px',
        marginBottom: '25px',
        borderBottom: '1px solid #ddd',
        width: '100%',
        height: '350',
    },

    section: {
        position: 'relative',
        float: 'left',
        width: 220 + theme.spacing(3) * 3,
        marginRight: '10px',
    },

    title: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: '25px',
        lineHeight: '21px',
        color: '#333',
        fontWeight: '700',
        marginBottom: '10px',
        display: 'block',
        paddingTop: '2%',
    },

    descriptionWrapper: {
        width: '350px',
        position: 'relative',
        display: 'flex',
    },

    description: {
        fontFamily: 'NanumSquareRoundR',
        width: '100%',
        fontSize: '100%',
    },

    subDescription: {
        fontFamily: 'NanumSquareRoundR',
        fontSize: '10px',
        color: '#444448',
    },

    expandButton: {
        position: 'relative',
        width: '5%',
        height: '10px',
    },

    wrapper: {
        width: 200 + theme.spacing(3) * 3,
        position: 'absolute',
        float: 'right',
        marginTop: '0',
        marginLeft: '70px',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '5px',
    },

    slider: {
        marginTop: 0,
        width: '100%',
        marginRight: '20px',
        alignItem: 'center',
        justifyContent: 'center',
    },

    sliderText: {
        fontSize: '100%',
        float: 'right',
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingTop: '2%',
    }
}));

const PrettoSlider = withStyles({
    root: {
        color: '#4770B3',
        height: 8,
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -6,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },

})(Slider);

const getTitle = (type) => {
    switch (type) {
        case UPDATE_HLT:
            return '건강';

        case UPDATE_SAF:
            return '안전';

        case UPDATE_ENV:
            return '환경';

        case UPDATE_ECO:
            return '경제';

        case UPDATE_EDU:
            return '교육';

        case UPDATE_REL:
            return '관계';

        case UPDATE_HBY:
            return '여가';
    }
};

const getDescription = (type) => {
    switch (type) {
        case UPDATE_HLT:
            return '좋은 신체 건강 상태를 유지하면서 평균기대수명까지 삶을 영위할 수 있을 것';

        case UPDATE_SAF:
            return '각종 폭력 및 위험(강도, 사고, 재난)에서 보호 받을 수 있으며 응급 진료 접근성이 있을 것';

        case UPDATE_ENV:
            return '맑고 풍족한 물과 깨끗한 공기를 마시며  살아 갈 수 있을 것';

        case UPDATE_ECO:
            return '직업을 가지고 빈곤하지 않게  살아 갈 수 있을 것';

        case UPDATE_EDU:
            return '이성적으로 사고하고 판단할 수 있고 종교, 문학, 음악 등 원하는 것을 배우고 표현하는데  있어서 제약이 없을 것';

        case UPDATE_REL:
            return '다른 사람들에게 신뢰받고 존중받으며, 이웃, 나아가  조직 및 사회 내 사람들과 함께 상호작용할 수 있을 것';

        case UPDATE_HBY:
            return '일상에서 여유와 웃음을 갖고 문화적 삶을 향유하며 즐거운 시간을 보낼 수 있을 것';
    }
};

const getSubDescription = (type) => {
    switch (type) {
        case UPDATE_HLT:
            return ['주관적 건강수준 인지율',
                '인구 십만명당 정신건강증진기관 수',
                '인구 천명당 의료기관 종사 의사수',
                '건강생활실천율',
                '인구 천명당 의료기관병상수'];

        case UPDATE_SAF:
            return ['사회 안전에 대한 인식',
            '인구 천명당 cctv 대수',
            '인구 십만명당 응급의료기관 및 응급실 운영기관수',
            '단위면적당 지역경찰관서 수',
            '지역안전등급 현황 중 \'교통사고 및 화재\''];

        case UPDATE_ENV:
            return [
                '환경체감도',
            '인구 천명당 1일 산업폐수 방류량',
            '도시지역 중 \'녹지지역 비율\'',
            '미세먼지(PM2.5)',
            '주민 1인당 생활폐기물배출량'];

        case UPDATE_ECO:
            return [
                '1인당 지역내총생산(GRDP)',
                '인구 천명당 사업체수',
                '인구 천명당 종사자수',
                '국민기초생활보장 수급자비율',
                '종사자 천명당 영세자영업자 수'
            ];

        case UPDATE_EDU:
            return [
                '학업성취도(기초학력미달)',
            '교원 1인당 학생수',
            '영유아 천명당 보육시설 수',
            '인구 십만명당 학교수',
            '인구 천명당 사설학원수'];

        case UPDATE_REL:
            return [
                '인구 십만명당 자살률',
            '1인가구(독거노인 제외) 비율 a)',
            '독거노인가구 비율',
            '인구 십만명당 사회적기업 수',
            '가족관계 만족도'];

        case UPDATE_HBY:
            return [
                '여가활용 만족도',
            '노인 천명당 노인여가복지시설 수',
            '인구 십만명당 도서관 수',
            '인구 십만명당 문화기반시설 수',
            '인구 천명당 체육관련 여가시설 수'];
    }
};

const InputSlider = ({selection}) => {

    const classes = useStyles();

    const {weightState, weightDispatch} = useContext(InteractionContext);

    const [visibility, setVisibility] = useState(false);

    const handleVisibility = (e) => {
        setVisibility(!visibility)
    };

    const getState = (type) => {
        switch (type) {
            case UPDATE_HLT:
                return weightState.hlt;

            case UPDATE_SAF:
                return weightState.saf;

            case UPDATE_ENV:
                return weightState.env;

            case UPDATE_ECO:
                return weightState.eco;

            case UPDATE_EDU:
                return weightState.edu;

            case UPDATE_REL:
                return weightState.rel;

            case UPDATE_HBY:
                return weightState.hby;
        }
    };

    const handleSliderChange = (event, newValue, type) => {
        weightDispatch({ type: type, data: newValue})
    };

    return (
        <div className={classes.category}>
            <div className={classes.section}>
                <div
                    className={classes.title}>
                    {getTitle(selection)}
                </div>

                <div className={classes.descriptionWrapper}>
                    <div className={classes.description}>
                        {getDescription(selection)}
                    </div>
                </div>
            </div>

            <div className={classes.wrapper}>

                <PrettoSlider
                    className={classes.slider}
                    value={typeof getState(selection) === 'number' ? getState(selection) : 0}
                    onChange={(event, value) => handleSliderChange(event, value, selection)}
                    valueLabelDisplay="off"
                    aria-label="pretto slider"
                    aria-valuemin={0}
                    aria-valuemax={10}
                    min={0}
                    max={10}
                    step={1}
                />
                <Typography className={classes.sliderText}>
                    {typeof getState(selection) === 'number' ? getState(selection) : 0}
                </Typography>
            </div>
        </div>
    )
};

export default InputSlider;
