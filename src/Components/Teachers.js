import React, { useEffect, useState } from "react";
// import testimonial_image from "../Assets/testimonial_image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TeacherContent } from "./TeacherContent";
import TeacherCard from "./TeacherCard";

import { withTranslation } from "react-i18next";
function Teachers({ t }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
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
    <div id="students" >
      <p className="text-[#c13645] max-sm:text-base text-2xl md:text-4xl text-center font-semibold">
        {t("Happy teachers and parents")}
      </p>
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

        <div className="flex flex-row justify-evenly w-full">
          {TeacherContent.slice(start, end).map((item) => (
            <TeacherCard data={item} />
          ))}
        </div>
        <div>
          <AiOutlineRight
            className="text-2xl sm:text-4xl text-[#c13645] "
            onClick={() => {
              if (TeacherContent.length > end) {
                setStart(start + 1);
                setEnd(end + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Teachers);
