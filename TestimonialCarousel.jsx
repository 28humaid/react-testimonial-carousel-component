import React, { useState } from "react";
import { Box, Typography, Card, Avatar, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = {
  testimonialCarousel: {
    mainHeading: "You Are The Center Of Our Universe",
    subHeading: "Testimonials",
    testimonials: [
      {
        name: "Diana Michel",
        role: "Coordinator",
        text: "This cohort has been amazing! I am so much more confident as a mother. Thank you, mama hero! !!!",
        img: "https://img.freepik.com/premium-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
      },
      {
        name: "Jean Doe",
        role: "Project Manager",
        text: "Taking over my late mother's legacy as a woman was tough. Thanks, mama hero!",
        img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
      },
      {
        name: "Steffi Smith",
        role: "HR Manager",
        text: "The guidance from mama hero was invaluable in helping me achieve several motherhood goals.",
        img: "https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg",
      },
      {
        name: "Joey Root",
        role: "Field Executive",
        text: "Lorem ipsum is a placeholder text commonly used to demonstrate the use of typography.",
        img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      },
    ],
  },
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive settings
  const isLargeScreen = useMediaQuery("(min-width:1200px)");  
  const isMediumScreen = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const isSmallScreen = useMediaQuery("(min-width:600px) and (max-width:899px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)");
  const itemsPerPage = isLargeScreen || isMediumScreen ? 3 : 1;

  return (
    <Box textAlign="center" position="relative" py={3} px="5%">
      {/* MAIN HEADING */}
      {/* <Typography variant="h3" fontWeight={600} py={4} sx={{ fontSize: { md: "2.5rem", xs: "1.5rem" } }}>
        {data.testimonialCarousel.mainHeading}
      </Typography> */}

      {/* SUBHEADING */}
      {/* <Typography variant="h3" fontWeight={600} pb={5} sx={{ fontSize: { md: "2rem", xs: "1rem" } }}>
        {data.testimonialCarousel.subHeading}
      </Typography> */}

      {/* CAROUSEL */}
      <Swiper
        spaceBetween={24}
        slidesPerView={itemsPerPage}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {data.testimonialCarousel.testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ paddingTop: isLargeScreen || isMediumScreen ? 55 : 25, paddingBottom: 1}}>
            <Card
              sx={{
                backgroundColor: (isLargeScreen || isMediumScreen) && index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length
                  ? "rgba(82, 49, 104, 0.1)"
                  : "rgb(233, 233, 233)",
                borderRadius: "10px",
                p: 2,
                marginTop: isLargeScreen || isMediumScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? 0 : 6
                  : 2,
                textAlign: "center",
                // boxShadow:
                //   "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
                width: isLargeScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "97%" : "89%"
                  : isMediumScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "96%" : "80%"
                  : "79vw",
                height: isExtraSmallScreen || isSmallScreen
                  ? "55vh"
                  : isLargeScreen || isMediumScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "375px" : "300px"
                  : "auto",
                marginLeft: isLargeScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "-4%" : "0%"
                  : isMediumScreen
                  ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "-8%" : "0%"
                  : "0%",
                marginBottom: 2,
                overflow:'visible'
              }}
            >
              {/* Avatar Image */}
              <Box sx={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", top: { md: "-50px", sm: "-40px", xs: "-40px"}}}>
                <Avatar
                  src={testimonial.img}
                  sx={{
                    width: { md: 70, xs: 40 },
                    height: { md: 70, xs: 40 },
                    border:'2px solid rgb(245, 140, 169)'
                  }}
                />
              </Box>

              {/* Text Content */}
              <Box sx={{ px: "7%", textAlign: "center",display:'flex',flexDirection:'column', gap:1 }}>
                {/* Name */}
                <Typography variant="h6" fontWeight="bold" fontFamily={"Poppins"}>
                  {testimonial.name}
                </Typography>

                {/* Role */}
                <Typography variant="h6" fontFamily={"Poppins"} color={"grey"}>
                  {testimonial.role}
                </Typography>

                {/* Testimonial Text */}
                <Typography
                  variant="body1"
                  fontStyle="italic"
                  fontSize={
                    isLargeScreen
                      ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "18px" : "16px"
                      : isMediumScreen
                      ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? "16px" : "14px"
                      : "12px"
                  }
                  fontWeight={
                    isLargeScreen || isMediumScreen
                      ? index === (activeIndex + 1) % data.testimonialCarousel.testimonials.length ? 500 : 400
                      : 300
                  }
                  color="black"
                  sx={{
                    fontFamily:"Poppins",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    wordBreak: "break-word",
                  }}
                >
                  {testimonial.text}
                </Typography>
              </Box>

            </Card>
          </SwiperSlide>
        ))}
        <Typography variant="body1" color={"transparent"}>I AM FOOTER</Typography>
      </Swiper>
    </Box>
  );
};

export default TestimonialCarousel;
