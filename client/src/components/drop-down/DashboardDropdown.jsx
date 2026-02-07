import { useDashboardPlanStates } from '../../store/zustand/dashboard-dropdown';
import DropdownArrow from '../icons/DropdownArrow';
import classes from './DashboardDropdown.module.scss';

export default function DashboardDropdown({ title, planLearnData }) {
    const { isOpen, toogleOpen, handleSelect } = useDashboardPlanStates();

    return (
        <>
            <button
                className={classes.default}
                onClick={e => {
                    e.stopPropagation();
                    toogleOpen();
                }}
            >
                <span>{title}</span>
                <span
                    className={`${classes.arrow} ${isOpen ? classes.open : ''}`}
                >
                    <DropdownArrow />
                </span>
            </button>

            <ul
                className={`${classes.options} ${isOpen ? classes.active : ''}`}
            >
                {planLearnData.map(plan => (
                    <li key={plan?.key}>
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                handleSelect(plan?.key);
                            }}
                        >
                            {plan.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
