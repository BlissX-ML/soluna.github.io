import { useEffect, useState } from 'react';

export default function ImagesLoad({ src, alt, className }) {
    const [displaySrc, setDisplaySrc] = useState(src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setDisplaySrc(src);
    }, [src]);

    return (
        <img
            src={displaySrc}
            alt={alt}
            className={className}
            style={{ transition: 'filter 0.3s' }}
        />
    );
}
