import React from "react";
import { useForm } from "react-hook-form";
import { services } from "../utils";

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("my data =", data);
    // call submit api
  };

  return (
    <>
      <div className="form-banner absolute top-[25%] left-0 right-0 z-20">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flexible-form mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center">
              <div className="form-part w-[35%] ml-9 text-center pt-4 pb-8 px-10 bg-black bg-opacity-50 rounded-[30px]">
                <h1 className="">
                  {" "}
                  <span> Register </span> Now
                </h1>
                <h4 className="text-white">make a booking now</h4>
                <div className="main-form-part">
                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-12">
                      <div className="mt-4">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="block custom-form flex-1 border-0 "
                            placeholder="Full Name"
                            {...register("name", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block custom-form flex-1 border-0 "
                            placeholder="Email Address"
                            {...register("email", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                          <input
                            type="number"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="block custom-form flex-1 border-0 "
                            placeholder="Phone Number"
                            {...register("phoneNumber", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <select
                          id="services"
                          className=" block w-full  custom-form"
                          {...register("services", { required: true })}
                        >
                          <option value="">Choose Services</option>
                          {services.map((data) => (
                            <option value={data.value} key={data.label}>
                              {data.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mt-7">
                        <button className="rounded-[10px] gradient-button-common py-2 px-11 text-white text-[28px]">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-banner pl-16">
                <h2 className="text-white">
                  {" "}
                  <span className="text-theme">KARAOKE</span> <br /> PROGRAM{" "}
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
