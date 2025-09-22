import Title from './Title.jsx'
import classes from './TitlesComp.module.scss'

export default function TitlesComp({ state, changeState }) {

    return (
        <div className={classes.select}>
            <Title
                onClick={() => changeState('future')}
                active={`${state === 'future' ? classes.selectActive : ''}`}
            >
                未来计划
            </Title>

            <Title
                onClick={() => changeState('done')}
                active={`${state === 'done' ? classes.selectActive : ''}`}
            >
                已完成计划
            </Title>
        </div>
    )
}