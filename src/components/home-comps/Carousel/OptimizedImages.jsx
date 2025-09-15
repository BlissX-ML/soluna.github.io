export default function OptimizedImages({ webp, src, alt, className }) {
    return (
        <picture>
            {webp && <source srcSet={webp} type="image/webp" />}
            <img src={src} loading="lazy" alt={alt} className={className} />
        </picture>
    )
}