import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Title = ({ title, additionClasses }) => {
  let wrapperRef = useRef(null);


  useEffect(() => {
    gsap.set(`.animated-word`, {
        opacity: 0,
        x: 10,
        y: 51,
        z: -60,
        rotateY: 60,
        rotateX: -40,
        transformOrigin: "50% 50% -150px",
        willChange: "opacity, transform",
      });
      

    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        `.animated-word`,
        {
            opacity : 1 ,
            rotateX: 0,
            rotateY: 0,
            y : 0 ,
            x : 0 ,
          ease: "power2.inOut",
          stagger: 0.02,
        });
    }, wrapperRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={wrapperRef} className={`overflow-hidden py-4 ${additionClasses} display-5 `}>

      {
      title.split("<br />").map((line, i) => (
        <div className="d-flex justify-content-center px-1 flex-wrap gap-3" key={i}>
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              className={"animated-word d-inline-block text-dark"}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))
          }
        </div>
      ))
      }
    </div>
  );
};

export default Title;
