import React from "react";
import Robotics from "../Assets/Robotics.png";
import Programming from "../Assets/Programming.png";
import Artificial_Intelligence from "../Assets/Artificial Intelligence.png";
import "./style.css";

import { withTranslation } from "react-i18next";
function Services({ t }) {
  return (
    <div id="courses" className="mt-10 md:mt-20 flex flex-col md:flex-row justify-around items-center mr-4 md:mr-14 ml-4 md:ml-14 mb-24">
      <div className="flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center mr-4 ml-4 sm:mr-6 sm:ml-6 md:mr-10 md:ml-10 mt-6 sm:mt-0">
        <img
          src={Robotics}
          className="w-48 md:w-72 mr-10 sm:mr-20 md:mr-0"
          alt=""
        />
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-end md:text-center md:mt-5">
            {t("Text5")}
          </p>
          <p className="text-end md:text-center mt-3 md:mt-7 font-medium">
            {t("StudentsExperience")}
          </p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center mr-4 ml-4 sm:mr-6 sm:ml-6 md:mr-10 md:ml-10 mt-6 sm:mt-0">
        <img
          src={Programming}
          className="w-48 md:w-72 mr-0 md:mr-0 programming_mobile_image_responsiveness"
          alt=""
        />
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-left md:text-center md:mt-5 programming_mobile_text_responsiveness">
          {t("Text6")}
          </p>
          <p className="text-left md:text-center mt-3 md:mt-7 font-medium">
            {t("Teaching The Fundemental")}
          </p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center mr-4 ml-4 sm:mr-6 sm:ml-6 md:mr-10 md:ml-10 mt-6 sm:mt-0">
        <img
          src={Artificial_Intelligence}
          className="w-48 md:w-72 mr-10 sm:mr-20 md:mr-0"
          alt=""
        />
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-end md:text-center md:mt-5">
          {t("Text7")}
          </p>
          <p className="text-end md:text-center mt-3 md:mt-7 font-medium">
            {t("Understanding what")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Services);
