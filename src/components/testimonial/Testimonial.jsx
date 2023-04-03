/* eslint-disable react/no-unstable-nested-components */
import { useState } from "react";
import Slider from "react-slick";
import { testimonialOne, testimonialTwo } from "../../assets";
import Title from "../layouts/Title";
import { NextArrow, PrevArrow } from "./SampleArrows";
import SliderCard from "./SliderCards";

const cardData = [
  {
    id: 1,
    personName: "Jone Duone Joe",
    companyName: "Bound - Trolola",
    companyRole: "Operation Officer",
    cardTitle: "Travel Mobile App Design",
    cardSubtitle: "via Upwork - Mar 4, 2015 - Aug 30, 2021 test",
    cardDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Incidunt voluptas animi nihil quos dolorem in, quasi, iure, ipsam cum iusto minus placeat sit laborum sed provident veniam nam aliquid libero?
    A fuga cupiditate quia temporibus ducimus sint reiciendis, facere velit autem praesentium ad esse ullam recusandae non totam!
    Esse neque voluptate eius quisquam beatae reprehenderit nihil ad, molestias doloremque rerum.`,
    image: testimonialOne,
    alt: "testimonialOne",
  },
  {
    id: 2,
    personName: "Jone Duone Joe",
    companyName: "Bound - Trolola",
    companyRole: "Operation Officer",
    cardTitle: "Travel Mobile App Design",
    cardSubtitle: "via Upwork - Mar 4, 2015 - Aug 30, 2021 test",
    cardDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Incidunt voluptas animi nihil quos dolorem in, quasi, iure, ipsam cum iusto minus placeat sit laborum sed provident veniam nam aliquid libero?
    A fuga cupiditate quia temporibus ducimus sint reiciendis, facere velit autem praesentium ad esse ullam recusandae non totam!
    Esse neque voluptate eius quisquam beatae reprehenderit nihil ad, molestias doloremque rerum.`,
    image: testimonialTwo,
    alt: "testimonialTwo",
  },
  {
    id: 3,
    personName: "Jone Duone Joe",
    companyName: "Bound - Trolola",
    companyRole: "Operation Officer",
    cardTitle: "Travel Mobile App Design",
    cardSubtitle: "via Upwork - Mar 4, 2015 - Aug 30, 2021 test",
    cardDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Incidunt voluptas animi nihil quos dolorem in, quasi, iure, ipsam cum iusto minus placeat sit laborum sed provident veniam nam aliquid libero?
    A fuga cupiditate quia temporibus ducimus sint reiciendis, facere velit autem praesentium ad esse ullam recusandae non totam!
    Esse neque voluptate eius quisquam beatae reprehenderit nihil ad, molestias doloremque rerum.`,
    image: testimonialTwo,
    alt: "testimonialTwo",
  },
];

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      />
    ),
  };

  return (
    <section
      id='testimonial'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='WHAT CLIENTS SAY' desc='Testimonial' />
      </div>
      <div className='max-w-6xl mx-auto'>
        <Slider {...settings}>
          {cardData.map(
            ({
              id,
              personName,
              companyName,
              companyRole,
              cardTitle,
              cardSubtitle,
              cardDescription,
              image,
              alt,
            }) => (
              <div className='w-full' key={id}>
                <SliderCard
                  personName={personName}
                  companyName={companyName}
                  companyRole={companyRole}
                  cardTitle={cardTitle}
                  cardSubtitle={cardSubtitle}
                  cardDescription={cardDescription}
                  image={image}
                  alt={alt}
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
