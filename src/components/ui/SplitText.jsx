import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
    text,
    className = '',
    delay = 100,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    onLetterAnimationComplete
}) => {
    const ref = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    // Custom text splitting function
    const splitTextIntoElements = () => {
        if (splitType.includes('chars')) {
            return text.split('').map((char, index) => (
                <span
                    key={index}
                    className="split-char"
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ));
        } else if (splitType.includes('words')) {
            return text.split(' ').map((word, index) => (
                <span key={index} className="split-word" style={{ display: 'inline-block' }}>
                    {word}
                    {index < text.split(' ').length - 1 && '\u00A0'}
                </span>
            ));
        }
        return text;
    };

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            const el = ref.current;

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
            const sign =
                marginValue === 0
                    ? ''
                    : marginValue < 0
                        ? `-=${Math.abs(marginValue)}${marginUnit}`
                        : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            const targets = el.querySelectorAll('.split-char, .split-word, .split-line');

            if (targets.length > 0) {
                gsap.fromTo(
                    targets,
                    { ...from },
                    {
                        ...to,
                        duration,
                        ease,
                        stagger: delay / 1000,
                        scrollTrigger: {
                            trigger: el,
                            start,
                            once: true,
                            fastScrollEnd: true,
                        },
                        onComplete: () => {
                            onLetterAnimationComplete?.();
                        },
                    }
                );
            }

            return () => {
                ScrollTrigger.getAll().forEach(st => {
                    if (st.trigger === el) st.kill();
                });
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded,
                onLetterAnimationComplete
            ],
            scope: ref
        }
    );

    const renderTag = () => {
        const style = {
            textAlign,
            wordWrap: 'break-word',
        };
        const classes = `split-parent ${className}`;
        const content = splitTextIntoElements();

        switch (tag) {
            case 'h1':
                return (
                    <h1 ref={ref} style={style} className={classes}>
                        {content}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 ref={ref} style={style} className={classes}>
                        {content}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 ref={ref} style={style} className={classes}>
                        {content}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 ref={ref} style={style} className={classes}>
                        {content}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 ref={ref} style={style} className={classes}>
                        {content}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 ref={ref} style={style} className={classes}>
                        {content}
                    </h6>
                );
            default:
                return (
                    <p ref={ref} style={style} className={classes}>
                        {content}
                    </p>
                );
        }
    };
    return renderTag();
};

export default SplitText;
