import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

export default function GetUser() {
  const { mutate, isPending, isError, data, error } = useMutation({
    mutationFn: (values) => getUser(values),
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const Formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  async function getUser(values) {
    try {
      return await axios.get(
        `https://plansplus.runasp.net/api/Admin/GetUserData?Email=${values.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
    
}
console.log(data?.data.data);


  return (
    <>
      <div>
        <div className="flex justify-center">
          <h1 className="text-2xl text-center mt-10 mb-4 px-8 text-gray-100 py-2 rounded-lg bg-mainColor inline">
            Get User
          </h1>
        </div>

        <div className="">
          <form className="max-w-md mx-auto" onSubmit={Formik.handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#279A41] hover:bg-[#1F2C43] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
              <input
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                type="search"
                name="email"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
            {Formik.errors.email && Formik.touched.email && (
              <p className="text-red-500 text-[15px]  mt-4">
                {Formik.errors.email}
              </p>
            )}
          </form>
        </div>

        {isPending ? (
          <>
           <div classname="flex flex-col items-center justify-center  ">
  <div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />

    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
    <span className="sr-only">Loading...</span>
  </div>
</div>

          </>
        ) : (
          <></>
        )}
        {
            data?.data.succeeded ? 
               <>
               <div className=" flex justify-center items-center mt-10 ">
                

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

    <img className="rounded-t-lg" src={`${data?.data.data.profilePic}`} alt />
  
  <div className="p-5">
   
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.data.data.displayedName}</h5>
  
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold text-lg">Bio : </span> {data?.data.data.bio}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold text-lg ">Email : </span>{data?.data.data.email}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="font-semibold text-lg">UserName : </span>{data?.data.data.userName}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="font-semibold text-lg">Role: </span>{data?.data.data.role}</p>
    <div className="flex justify-end gap-4">
        <button  className="bg-[#279A41] hover:bg-[#1F2C43] transition-all text-white font-bold py-2 px-4 rounded">Assin User Role</button>
        <button className="bg-[#279A41] hover:bg-[#1F2C43] transition-all text-white font-bold py-2 px-4 rounded">Assin Modrator Role </button>
    </div>
      
    
 
  </div>
</div>


               </div>
               </>:""}
      </div>
    </>
  );
}
