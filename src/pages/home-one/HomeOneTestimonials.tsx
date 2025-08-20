"use client";
import image1 from "@/../public/images/home-one/home-one-testimonial-1.png";
import image2 from "@/../public/images/home-one/home-one-testimonial-2.png";
import image3 from "@/../public/images/home-one/home-one-testimonial-3.png";
import image4 from "@/../public/images/home-one/home-one-testimonial-4.png";
import image5 from "@/../public/images/home-one/home-one-testimonial-5.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeOneTestimonialCard from "./HomeOneTestimonialCard";

export const sliderData = [
  {
    image: image1,
    text: "“It's been 2 years since I found Bankio, and it's such a relief as a small business owner to not worry about unnecessary fees. I lost my credit card once, and the service was so quick.",
    name: "Andrew Russel",
    title: "VP of Marketing",
  },
  {
    image: image2,
    text: "“Bankio has made managing my finances so much easier. The user-friendly interface and excellent customer support make it the perfect choice for individuals and businesses alike.",
    name: "Emily Thompson",
    title: "Freelance Designer",
  },
  {
    image: image3,
    text: "“I switched to Bankio for my personal and business banking needs, and I couldn't be happier. The app is intuitive, and I love the convenience it offers.",
    name: "John Davis",
    title: "Entrepreneur",
  },
  {
    image: image4,
    text: "“Bankio's security features give me peace of mind. I can focus on my work without worrying about the safety of my financial information. Highly recommended!",
    name: "Sophia Miller",
    title: "Software Engineer",
  },
  {
    image: image5,
    text: "“As a startup founder, Bankio has been a game-changer for managing expenses and handling transactions. The real-time updates and analytics are incredibly valuable.",
    name: "Alex Turner",
    title: "CEO, Tech Innovations",
  },
];

const HomeOneTestimonials = () => {
  return (
    <section className="spy120px relative overflow-hidden">
      <div className="container">
        <SectionSubTitle text="Testimonial" />
        <SectionTitle text="What people say" className="mt-3" />
        <div className="spt60px">
          <Swiper
            // slidesPerView={1}
            spaceBetween={24}
            speed={1400}
            loop={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderNext",
              prevEl: ".customerSliderPrev",
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={`rtrtr${index}`}>
                <HomeOneTestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Lines /> */}
    </section>
  );
};

export default HomeOneTestimonials;
