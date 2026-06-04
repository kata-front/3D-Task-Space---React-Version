import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const useInfoAnimate = ({
    infoRef,
    aboutSpanRef,
    listRef
}: {
    infoRef: React.RefObject<HTMLDivElement>,
    aboutSpanRef: React.RefObject<HTMLSpanElement>,
    listRef: React.RefObject<HTMLOListElement>,
}) => {
    useGSAP(() => {
        const items = gsap.utils.toArray(listRef.current?.children);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: infoRef.current,
                start: 'top 60%',
                end: 'bottom bottom',
                scrub: 2
            }
        })
        
        tl.from(aboutSpanRef.current, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power3.inOut",
        });

        tl.from(items, {
            opacity: 0,
            xPercent: 100,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.1
        });
    }, [ infoRef, aboutSpanRef, listRef ])
}

export default useInfoAnimate