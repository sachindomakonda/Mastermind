import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { GrFormClose } from "react-icons/gr";
import { withTranslation } from "react-i18next";
function BookNow({ t }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      age: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      address: Yup.string().required("Address is required"),
      age: Yup.string().required("Age is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      const mailtoLink = `mailto:saleh@youngstarslabs.com?subject=New Form Submission&body=Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0APhone: ${values.phone}%0D%0AAddress: ${values.address}%0D%0AAge: ${values.age}`;

      window.location.href = mailtoLink;
      resetForm();
    },
  });

  return (
    <div className="flex justify-center items-center mt-28 md:mt-32 lg:mt-40">
      <form
        className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 w-[80%] md:w-[70%] lg:w-[50%]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-between">
          <p></p>
          <p className="font-black  text-[#c13645] text-xl mb-4">{t("Sign")}</p>
          <div className="font-black text-center text-[#c13645] text-xl mb-4 cursor-pointer">
            <GrFormClose />
          </div>
        </div>
        <div className="mb-4">
          <input
            id="email"
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email Address"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-[#c13645] text-xs italic">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            id="name"
            name="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Full Name"
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-[#c13645] text-xs italic">
              {formik.errors.name}
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            id="phone"
            name="phone"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Phone Number"
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-[#c13645] text-xs italic">
              {formik.errors.phone}
            </p>
          )}
        </div>

        <div className="flex justify-between w-[100%]">
          <div className="mb-4 w-[48%] ">
            <input
              id="address"
              name="address"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Address"
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-[#c13645] text-xs italic">
                {formik.errors.address}
              </p>
            )}
          </div>
          <div className="mb-4 w-[48%]">
            <input
              id="age"
              name="age"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Age"
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age && (
              <p className="text-[#c13645] text-xs italic">
                {formik.errors.age}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-[#c13645] hover:bg-[#eb2034] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            {t("Book Now")}
            {/* <a href="mailto:mubbasheryasin125@gmail.com">Book Now</a> */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default withTranslation()(BookNow);
