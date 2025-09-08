import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './DropContent.module.css'

import { recapAsideContext } from '../../../store/RecapAsideManageContext.jsx';
import { RECAP_NAV } from '../../../data/recap/recap.js';
import DropContentItems from './DropContentItems.jsx';


export default function DropContent() {
    const ctx = useContext(recapAsideContext);
    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(key) {
        ctx.setActiveKey(key);
        if (location.pathname !== '/home/recap') {
            navigate('recap');
        }
        ctx.toggleDrop();
    }

    return (
        <div className={`${classes.content} ${ctx.dropState ? classes.show : ''}`}>
            <ul className={classes.list}>
                {RECAP_NAV.map(els => (
                    <li key={els.key}>
                        <DropContentItems curItem={els.key} handleClick={handleClick} >
                            {els.dropTitle}
                        </DropContentItems>
                    </li>
                ))}
            </ul>
        </div>
    )
}