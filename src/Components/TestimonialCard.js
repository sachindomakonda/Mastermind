// import React from "react";

// function TestimonialCard(props) {
//   const data = props.data;
//   return (
//     <div className="w-full">
//       <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 ">
//         <div className="border-2 border-[#d9d9d9] rounded-xl h-[465px] flex flex-col justify-around items-center md:justify-center md:items-center ">
//           <div className="flex justify-center items-center">
//             <img
//               src={data.image}
//               alt=""
//               className="w-32 lg:w-40 rounded-full border border-[#707070]"
//             />
//           </div>
//           <div>
//             <p className="text-center pl-4 lg:pl-10 pr-4 lg:pr-10 md:pt-5">
//               {data.text}
//             </p>
//             <div className="mt-4 text-center">
//               <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
//               <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
//               <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
//               <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
//               <span className="fa fa-star border-orange-400 pr-2 text-xl"></span>
//             </div>
//             <p className="text-center text-[#c13645] font-semibold pt-4">
//               {data.name}
//             </p>
//             <p className="text-center font-semibold text-lg pt-4 ">
//               {data.profession}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialCard;





import React from "react";
import { withTranslation } from "react-i18next";


function TestimonialCard({data, t}) {
  
  return (
    <div className="w-full">
      <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 ">
        <div className="border-2 border-[#d9d9d9] rounded-xl h-[465px] flex flex-col justify-around items-center md:justify-center md:items-center ">
          <div className="flex justify-center items-center">
            <img
              src={data.image}
              alt=""
              className="w-32 lg:w-40 rounded-full border border-[#707070]"
            />
          </div>
          <div>
            <p className="text-center pl-4 lg:pl-10 pr-4 lg:pr-10 md:pt-5">
            {t(`${data.text}`)}
            </p>
            <div className="mt-4 text-center">
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star border-orange-400 pr-2 text-xl"></span>
            </div>
            <p className="text-center text-[#c13645] font-semibold pt-4">
              {t(`${data.name}`)}
            </p>
            <p className="text-center font-semibold text-lg pt-4 ">
             {t(`${data.profession}`)}           
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(TestimonialCard);