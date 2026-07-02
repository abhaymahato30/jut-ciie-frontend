import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroProps {
slides: any[];
}

const Hero = ({ slides }: HeroProps) => {
const getSubtitle = (subtitle: any) => {
if (!subtitle?.length) return "";


return subtitle
  .map((block: any) =>
    block.children
      ?.map((child: any) => child.text)
      .join("")
  )
  .join(" ");


};

return ( <section id="home" className="relative">
<Swiper
modules={[Autoplay, Pagination, EffectFade]}
effect="fade"
loop
speed={1000}
autoplay={{
delay: 5000,
disableOnInteraction: false,
}}
pagination={{
clickable: true,
}}
className="h-[75vh] md:h-[85vh]"
>
{slides?.map((slide) => ( <SwiperSlide key={slide.id}> <div className="relative h-full overflow-hidden">
<img
  src={slide.image?.url}
  alt={slide.title}
  className="absolute inset-0 h-full w-full object-cover"
/>


          <div className="absolute inset-0 bg-black/60" />

          <div className="container-custom relative z-10 flex h-full items-center px-6">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-accent">
                Jharkhand University of Technology
              </span>

            <h1
  className="
    mt-6
    font-heading
   
    font-bold
    leading-tight
    !text-white
    drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
 text-3xl md:text-5xl lg:text-6xl
  "
>
  {slide.title}
</h1>

              <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
                {getSubtitle(slide.subtitle)}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-secondary px-8 py-4 font-medium text-white transition hover:opacity-90">
                  {slide.buttonText || "Apply Now"}
                </button>

                <button className="rounded-xl border border-white/30 px-8 py-4 text-white transition hover:bg-white/10">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


);
};

export default Hero;
