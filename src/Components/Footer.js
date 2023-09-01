import React from "react";
import websiteLogo from "../Assets/websiteLogo.png";
import Instagram from "../Assets/Instagram.png";
import Snapchat from "../Assets/Snapchat.png";
import TikTok from "../Assets/tiktokIcon.png";
import Whatsapp from "../Assets/whatsappIcon.png";

function Footer({ t }) {
  return (
    <div className="bg-[#d9d9d9] pt-10 md:pt-20 pb-10 md:pb-20 ">
      <div className="flex max-md:flex-col justify-between items-center mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-32 md:ml-32 ">
        <div className="flex">
          <img src={websiteLogo} alt="" className="w-40 md:w-60" />
        </div>
        <div className="flex max-md:mt-10">
          <a href="https://instagram.com/youngstarslabs?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
            <img
              src={Instagram}
              alt=""
              className="md:w-12 w-8 h-8 md:h-12 mr-10 cursor-pointer"
            />
          </a>
          <a href="https://www.snapchat.com/add/youngstarslabs?share_id=RKWLO6+/STCZVJ5TwrAMGQ&locale=en_EG&sid=85a3866cdb8e4d0abbfa5b8cf6b9fe38" target="_blank">
            <img
              src={Snapchat}
              alt=""
              className="md:w-12 w-8 h-8 md:h-12 mr-10 cursor-pointer"
            />
          </a>
          <a href="https://www.tiktok.com/@youngstarslabs?_t=8d0KpuaANb3&_r=1" target="_blank">
            <img
              src={TikTok}
              alt=""
              className="md:w-12 w-8 h-8 md:h-12 mr-10 cursor-pointer"
            />
          </a>
          <a
            href="https://wa.me/971506877336"
          >
            <img
              src={Whatsapp}
              alt=""
              className="md:w-12 w-8 h-8 md:h-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
