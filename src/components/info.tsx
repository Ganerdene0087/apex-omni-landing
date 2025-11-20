import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCards from "./animatedCards";

const Info = () => {
  const numberClass = "text-2xl md:text-6xl font-bold";
  const containerClass =
    "flex flex-col p-2 md:p-8 flex-1 items-center justify-start relative";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col w-full h-screen items-center bg-gradient-to-r from-black via-gray-900 to-gray-800 py-16">
      <motion.div
        ref={ref}
        className="flex flex-row w-full justify-between text-white text-center relative"
        variants={animation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
      >
        <div className={containerClass}>
          <div className={numberClass}>14</div>
          <div className="mt-2 text-xs md:text-base">тэрбум ₮ санхүүжилт</div>
          <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
        </div>

        <div className={containerClass}>
          <div className={numberClass}>24</div>
          <div className="mt-2 text-xs md:text-base">сарын хугацаа</div>
          <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
        </div>

        <div className={containerClass}>
          <div className={numberClass}>100K</div>
          <div className="mt-2 text-xs md:text-base">нэгжийн үнэ </div>
          <div className="absolute top-0 right-0 h-full w-px bg-white/30"></div>
        </div>

        <div className={containerClass}>
          <div className={numberClass}>19.2</div>
          <div className="mt-2 text-xs md:text-base">хувийн өгөөж</div>
        </div>
      </motion.div>

      <AnimatedCards />
    </div>
  );
};

export default Info;
