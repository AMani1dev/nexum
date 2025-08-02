import { useEffect, useState, useRef, lazy } from "react";
import SmoothScroll from "./utils/SmoothScroll";
import {
  HeroInverted,
  // Title,
  ImgReveal,
  TsInverted,
  InfScrollDa,
  Intro,
} from "./components";

  const BASE = import.meta.env.VITE_BASE_URL || "/";

console.log(BASE)

// Lazy-loaded components
const SlicedImage = lazy(() => import("./components/SlicedImage"));
const HzScroll = lazy(() => import("./components/HzScroll"));
const Title = lazy(() => import("./components/Title"));

// Data Arrays
const firstArray = [
  { content: `${BASE}images/inf-scroll/1.webp` },
  { content: `${BASE}images/inf-scroll/2.webp` },
  { content: `${BASE}images/inf-scroll/3.webp` },
  { content: `${BASE}images/inf-scroll/4.webp` },
  { content: `${BASE}images/inf-scroll/5.webp` },
  { content: `${BASE}images/inf-scroll/6.webp` },
  { content: `${BASE}images/inf-scroll/7.webp` },
];

const secondArray = [...firstArray];

const imgRows = [
  {
    position: "left",
    src: `${BASE}images/image-reveal/img-reveal-1.webp`,
    alt: "reveal img",
  },
  {
    position: "right",
    src: `${BASE}images/image-reveal/img-reveal-2.webp`,
    alt: "reveal img",
  },
  {
    position: "left",
    src: `${BASE}images/image-reveal/img-reveal-3.webp`,
    alt: "reveal img",
  },
];

const cardsInfo = [
  {
    id: 1,
    imgSrc: `${BASE}images/inf-scroll/1.webp`,
    title: "immersive worlds",
    description:
      "Step into dimensions where every move and moment keeps you hooked.",
    transforms: [
      [10, 50, 0, 10],
      [15, -5, -25, 20],
    ],
  },
  {
    id: 2,
    imgSrc: `${BASE}images/inf-scroll/2.webp`,
    title: "epic storytelling",
    description:
      "Discover narratives that evolve with your actions in real-time play.",
    transforms: [
      [0, 45, -10, 15],
      [15, -5, -10, 20],
    ],
  },
  {
    id: 3,
    imgSrc: `${BASE}images/inf-scroll/3.webp`,
    title: "competitive edge",
    description:
      "Climb the leaderboards and challenge rivals with precision control.",
    transforms: [
      [0, 52, -10, 5],
      [15, -5, -10, 20],
    ],
  },
  {
    id: 4,
    imgSrc: `${BASE}images/inf-scroll/4.webp`,
    title: "stunning graphics",
    description:
      "Visual fidelity pushed to the max — every frame a cinematic shot.",
    transforms: [
      [0, 52, -10, 5],
      [15, -5, -10, 20],
    ],
  },
  {
    id: 5,
    imgSrc: `${BASE}images/inf-scroll/5.webp`,
    title: "seamless control",
    description:
      "Fluid movement and instant feedback built for peak performance.",
    transforms: [
      [0, 52, -10, 5],
      [15, -5, -10, 20],
    ],
  },
];

// Lazy component using Intersection Observer
const LazyComponent = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};


const App = () => {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (introDone) {
      const audio = new Audio(`${BASE}audio/audio.mp3`);
      audio.loop = true;
      audio.play().catch((err) => {
        console.warn("Audio autoplay was blocked:", err);
      });
    }
  }, [introDone]);

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      <HeroInverted />

      {introDone && (
        <>
          <SmoothScroll />

          <Title
            title={
              "We build, invest and collaborate <br /> to craft the world's <br /> largest shared adventure."
            }
            additionClasses=""
          />

          <ImgReveal imgRows={imgRows} />

          <Title
            title={
              "Level up your <br /> experience with next-gen <br /> gaming visuals."
            }
            additionClasses=""
          />

          <TsInverted topText="Start" bottomText="Dominate the Game" />

          <Title
            title={
              "From strategy to speed — <br /> we craft worlds where <br /> players become legends."
            }
            additionClasses=""
          />

          <InfScrollDa firstArray={firstArray} secondArray={secondArray} />

          <Title
            title={
              "Unleash the future of play <br /> with stunning design and <br /> seamless interaction."
            }
            additionClasses=""
          />

          <LazyComponent>

            <SlicedImage
              width="200px"
              aspectRatio="9 / 16"
              src={`${BASE}images/slicedImage/sliced.webp`}
            />
          </LazyComponent>


          <LazyComponent>
            <HzScroll
              fluidText="here we are again !"
              cardsInfo={cardsInfo}
              additionalClasses=""
            />
          </LazyComponent>
        </>
      )}
    </>
  );
};

export default App;
