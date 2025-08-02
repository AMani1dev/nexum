import { useEffect } from "react";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
    const textArray = Array.from("nexum");
    const text = textArray.map((letter, i) => (
        <span key={i} className="text-whihte d-inline-block ms-2 intro-wrapper__letter">
            {letter}
        </span>
    ));

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".intro-wrapper__letter", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            ease: "power4.inOut",
            duration: 0.432,
            stagger: 0.231
        })
        .to(".intro-wrapper__letter", {
            y: -100,
            opacity: 0,
            ease: "power4.inOut",
            duration: 0.3,
            stagger: 0.214
        })
        .to(".intro-col", {
            y: "-103%",
            ease: "power4.inOut",
            duration: 0.3,
            stagger: 0.214,
            onComplete: () => {
                onFinish(); // Notify App that Intro is done
            }
        });
    }, []);

    return (
        <section className={`uts-z-101 position-fixed  overflow-hidden uts-inset-0 row pe-none user-select-none`}>
            <div className="col intro-col bg-black"></div>
            <div className="col intro-col bg-black"></div>
            <div className="col intro-col bg-black"></div>
            <div className="col intro-col bg-black"></div>

            <span className="position-absolute text-center justify-content-centerd-flex uts-step-400 text-uppercase fw-bold uts-middle">
                {text}
            </span>
        </section>
    );
};

export default Intro;
