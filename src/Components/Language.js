import React from "react";
import i18next from "i18next";
const Language = () => {
  return (
    <div>
      <div className="flex justify-end mt-5 mr-4 sm:mr-20 ">
        <select
          className="w-28 px-2 py-2 leading-tight bg-white border border-gray-400 rounded focus:outline-none focus:border-black-500"
          onChange={(e) => i18next.changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
