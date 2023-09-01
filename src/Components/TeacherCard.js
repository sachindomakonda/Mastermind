import React from "react";
import { BsPlayCircle } from "react-icons/bs";

import { withTranslation } from "react-i18next";

function TeacherCard({data, t}) {
  // const data = props.data;
  return (
    <div className="h-[300px] lg:h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 w-[100%]">
      <div className="h-[320px] flex justify-between items-center">
        <BsPlayCircle className="text-6xl text-[#c13645] " />
      </div>
      <div className="h-[180px] flex flex-col justify-center items-center bg-[#ededed] w-[100%]">
        <p className="font-bold">{t(`${data.name}`)}</p>
        <p className="font-medium">{t(`${data.profession}`)}  </p>
      </div>
    </div>
  );
}

export default withTranslation()(TeacherCard);
