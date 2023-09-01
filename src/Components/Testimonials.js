import React, { useEffect, useState } from "react";
// import testimonial_image from "../Assets/testimonial_image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TestimonialsContent } from "./TestimonialsContent";
import TestimonialCard from "./TestimonialCard";
function Testimonials() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  console.log(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setStart(0);
        setEnd(1);
      } else if (window.innerWidth > 780 && window.innerWidth <= 1275) {
        setStart(0);
        setEnd(2);
      } else if (window.innerWidth > 1275) {
        setStart(0);
        setEnd(3);
      }
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);




  return (
    <div className="flex flex-row justify-between items-center mb-20 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 mt-6 md:mt-10">
      <div className="block mr-2 md:mr-10">
        <AiOutlineLeft
          className="text-4xl text-[#c13645] "
          onClick={() => {
            if (start > 0) {
              setStart(start - 1);
              setEnd(end - 1);
            }
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        {TestimonialsContent.slice(start, end).map((item) => (
          <TestimonialCard data={item} />
        ))}
      </div>

      <div>
        <AiOutlineRight
          className="text-2xl sm:text-4xl text-[#c13645] "
          onClick={() => {
            if (TestimonialsContent.length > end) {
              setStart(start + 1);
              setEnd(end + 1);
            }
          }}
        />
      </div>

      {/* <button >Courses</button> */}

    </div>
  );
}

export default Testimonials;
