"use client";

import React from "react";
import { Formik } from "formik";

interface Props {
  email: string;
}

const Basic = ({ email }: Props) => {
  return (
    <div>
      <div className=" flex justify-between items-center space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p>A quick data overview of the inventory.</p>
        </div>
      </div>
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
          <form onSubmit={handleSubmit} className="flex-1 bg-[#F7FAFD]  px-8 ">
            <div className="flex items-center gap-[26px] mb-[15px]">
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

            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
