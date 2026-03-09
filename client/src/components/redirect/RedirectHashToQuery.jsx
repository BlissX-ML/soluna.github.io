import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectHashToQuery() {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        const search = window.location.search;

        // 如果 URL 里有 hash，但没有 ?hash= 参数
        if (hash && !search.includes('hash')) {
            navigate(`?hash=${hash}`, { replace: true });
        }
    }, [navigate]);

    return null;
}
