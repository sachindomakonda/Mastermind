import React from "react";
import YoungStarsMissionImage from "../Assets/Young Stars Mission.png";

import { withTranslation } from "react-i18next";
function YoungStarsMission({ t }) {
  return (
    <div className="bg-[#d9d9d9] ">
      <div className="pt-10 pb-10 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 flex flex-row justify-between items-center ">
        <div className="w-[65%]">
          <p className="font-extrabold text-xl xs:text-3xl sm:text-4xl text-[#c13645]">
            {t("Stars Mission")}
          </p>
          <p className="font-semibold text-xs sm:text-base mt-5 leading-[1.5] md:leading-[2]">
           {t("Welcome to Young Stars")}
          </p>
        </div>
        <div className="w-[35%] flex justify-center">
          <img src={YoungStarsMissionImage} className="md:w-[70%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(YoungStarsMission);
