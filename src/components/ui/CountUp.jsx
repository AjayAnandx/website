import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({
    from = 0,
    to = 100,
    separator = ",",
    direction = "up",
    duration = 1,
    className = "",
    suffix = ""
}) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;

        hasAnimated.current = true;
        const startValue = direction === "up" ? from : to;
        const endValue = direction === "up" ? to : from;
        const range = endValue - startValue;
        const startTime = Date.now();
        const durationMs = duration * 1000;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + range * easeOut);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, from, to, direction, duration]);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };

    return (
        <span ref={ref} className={className}>
            {formatNumber(count)}{suffix}
        </span>
    );
};

export default CountUp;
