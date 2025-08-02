import styles from "./index.module.css";

export default function HeroInverted() {
const BASE = import.meta.env.VITE_BASE_URL || "/";

  return (
    <div className={`${styles["hero-inv"]} mx-auto position-relative`}>

      <div className={`
        ${styles["logo__wrapper"]} || 
        position-absolute top-0 start-50 translate-middle || text-black
        px-4 py-1 || fs-3 || z-1 || pe-none user-select-none 
      `}>
        nexum
      </div>

      <div className={`${styles["hero-inv__content"]} h-100`}>
        <video
          src={`${BASE}videos/hero-1.mp4`}
          autoPlay
          playsInline 
          loop
          muted
          preload="auto"
          className="w-100 h-100 object-fit-cover"
          poster="/images/image-reveal/img-reveal-2.webp"
        />
      </div>

    </div>
  );
}
