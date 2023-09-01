import React from "react";
import TechnicalDevelopmentImage from "../Assets/Technical Development.png";
import { withTranslation } from "react-i18next";

function TechnicalDevelopment({ t }) {
  return (
    <div className="mt-10 mb-10">
      <div className="pt-10 pb-10 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 flex flex-row justify-between items-center ">
        <div className="w-[50%] flex justify-center">
          <img
            src={TechnicalDevelopmentImage}
            className="w-[200px] md:h-[400px] md:w-[400px]"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <p className="font-bold text-base xs:text-3xl sm:text-2xl lg:text-4xl text-end sm:mb-10">
            <span className="sm:border-b-2 sm:border-b-[#707070] sm:pb-4">
              {t("TechnicalDevelopment")}
            </span>
          </p>
          <p className="font-semibold text-xs sm:text-base mt-5  text-end leading-[1.5] md:leading-[2]">
          {t("Focusing on fun learning")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(TechnicalDevelopment);
