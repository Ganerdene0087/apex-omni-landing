import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";

const cards = [
  {
    title: "Эрсдэл бага",
    description:
      "Хараат бус хөрөнгө итгэмжлэн удирдагч компани нь хугацааны туршид зээлийн багцийн хэвийн байдалд хяналт тавин мэдээллээр хангаж, эрсдэлээс урьдчилан сэргийлнэ.",
  },
  {
    title: "Татварын хөнгөлөлт",
    description:
      "ХБҮЦ-ны хүүгийн орлогын албан татвар нь 5 хувь байна. Энэ нь бусад тогтмол өгөөжтэй бүтээгдэхүүнүүдтай харьцуулахад 5 нэгж хувийн хөнгөлөлттэй билээ.",
  },
  {
    title: "Өгөөж өндөр",
    description:
      "19.6%-ийн хүүтэй буюу ижил төстэй хугацаа бүхий хамгийн өндөр хадгаламжийн хүүнээс 5.9%-аар өндөр байна.",
  },
  {
    title: "Хөрвөх чадвар өндөр",
    description:
      "МХБ дээр нээлттэй арилжаалагдах тул хугацааны дундуур борлуулах, шилжүүлэх боломжтой.",
  },
  {
    title: "Хүн бүр оролцох боломжтой",
    description:
      "Хүн бүр авах боломжтой нээлттэй зах зээлд арилжаалагдаж буй хамгийн хямд нэгжийн үнэ бүхий тогтмол өгөөжтэй хөрөнгө оруулалтын бүтээгдэхүүн юм.",
  },
  {
    title: "Улирал тутам хүүгийн төлөлт",
    description:
      "Улирал тутам хүүгийн төлөлттэй тул хөрөнгө оруулагчид дахин хөрөнгө оруулах, хүүгээс хүү тооцуулах боломжтой.",
  },
];

const Carousel = () => {
  return (
    <div className="w-full flex flex-col flex-1 bg-gradient-to-r from-black via-gray-900 to-gray-800 justify-center">
      <div className="text-center mb-8 text-white text-4xl">ДАВУУ ТАЛУУД</div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-64 rounded-3xl p-6 text-white text-center shadow-2xl bg-slate-900/90`}
              >
                <h3 className="text-lg md:text-3xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-lg">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
