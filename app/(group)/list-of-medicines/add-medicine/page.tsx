"use client";

import React from "react";
import { Formik } from "formik";
import { Button } from "../../../../components/ui/button";

interface Props {
  email: string;
}

const Basic = ({ email }: Props) => {
  return (
    <div>
      
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          /* if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;*/
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-[#EDF1F5] h-screen  px-8 "
          >
            <div className=" flex justify-between items-center space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p>A quick data overview of the inventory.</p>
        </div>
      </div>
            <div className="flex items-center gap-[26px] mb-[15px]">
              <div>
                <label
                  className="text-sm font-normal text-[#1D242E]"
                  htmlFor="email"
                >
                  Medicine Name
                </label>
                <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="bg-inherit w-11/12 border-none outline-none"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div>
                <label
                  className="text-sm font-normal text-[#1D242E]"
                  htmlFor="email"
                >
                  Medicine ID
                </label>
                <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="bg-inherit w-11/12 border-none outline-none"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[26px] mb-[15px]">
              <div>
                <label
                  className="text-sm font-normal text-[#1D242E]"
                  htmlFor="email"
                >
                  Medicine Group
                </label>
                <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="bg-inherit w-11/12 border-none outline-none"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div>
                <label
                  className="text-sm font-normal text-[#1D242E]"
                  htmlFor="email"
                >
                  Medicine Quantity
                </label>
                <div className="flex justify-between p-4 w-[440px] rounded-sm bg-[#E3EBF3]">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="bg-inherit w-11/12 border-none outline-none"
                  />
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
            </div>
            <div className="mb-[15px]">
              <label
                className="text-sm font-normal text-[#1D242E]"
                htmlFor="email"
              >
                How to use
              </label>
              <div className="flex justify-between p-4 w-[905px] rounded-sm bg-[#E3EBF3]">
                <textarea
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="bg-inherit w-11/12 border-none outline-none"
                />
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div>
              <label
                className="text-sm font-normal text-[#1D242E]"
                htmlFor="email"
              >
                Side Effects
              </label>
              <div className="flex justify-between p-4 w-[905px] rounded-sm bg-[#E3EBF3]">
                <textarea
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="bg-inherit w-11/12 border-none outline-none"
                />
                {errors.email && touched.email && errors.email}
              </div>
            </div>

            {/*<input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
        {errors.password && touched.password && errors.password}*/}
            {/*<button type="submit" disabled={isSubmitting}>
              Submit
      </button>*/}
            <Button type="submit" disabled={isSubmitting} className="bg-[#F0483E] flex items-center justify-center mt-10">
              Save Details
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
