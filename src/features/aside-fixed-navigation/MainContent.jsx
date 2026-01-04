import { useAppSelector } from '../../store/reducer/hooks';
import classes from './MainContent.module.scss';

export default function MainContent({ children }) {
    const { isOpen } = useAppSelector(state => state?.asideToggle)

    return (
        <main
            className={`${classes.mainContent} ${classes.mdx} ${isOpen ? '' : classes.close}`}
        >
            {children}
        </main>
    )
}