import classes from './RenderNoneContent.module.scss';
import NoContent from '../../components/icons/NoContent';

export default function RenderNoneContent() {
    return (
        <div className={classes.content}>
            <NoContent />
            <div>
                <p>这部分暂时没有内容哦~</p>
            </div>
        </div>
    );
}
