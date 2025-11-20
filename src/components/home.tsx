import Apex from "../assets/apex.png";
import Omni from "../assets/omni.png";
import { motion, useTransform, useScroll } from "framer-motion";

const Home = () => {
  const { scrollY } = useScroll();

  const apexX = useTransform(scrollY, [0, 500], [0, -600]);
  const omniX = useTransform(scrollY, [0, 500], [0, 600]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full items-center h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <div className="flex items-center justify-between w-full px-16 py-8 overflow-hidden">
        <motion.img
          src={Apex}
          style={{ width: "10%", height: "auto", x: apexX }}
          alt="Apex"
        />
        <motion.img
          src={Omni}
          style={{ width: "10%", height: "auto", x: omniX }}
          alt="Omni"
        />
      </div>
      <div className="flex flex-1 w-[90%] items-center justify-center">
        <div className="flex flex-col w-[50%] text-4xl md:text-6xl text-center items-center text-white">
          <div>OMNI ASSET II</div>
          <div className="text-base md:text-lg text-center mt-8 md:mt-16">
            АПЕКС КАПИТАЛ БОЛОН ОМНИ КАПИТАЛ ХАМТРАН ГАРГАЖ БУЙ ХӨРӨНГӨӨР
            БАТАЛГААЖСЭН ҮНЭТ ЦААС
          </div>
          <div className="text-4xl md:text-6xl my-8 md:my-12">2025.06.25</div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => scrollToSection("invest")}
          >
            <div className="text-xl md:text-2xl">Хөрөнгө оруулах</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
