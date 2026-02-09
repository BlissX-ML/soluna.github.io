import { useEffect, useState } from 'react';

export default function ImagesLoad({
    lowquality,
    highquality,
    alt,
    className
}) {
    const [src, setSrc] = useState(lowquality);

    useEffect(() => {
        const img = new Image();
        img.src = highquality;
        img.onload = () => setSrc(highquality);
    }, [highquality]);

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ transition: 'filter 0.3s' }}
        />
    );
}
