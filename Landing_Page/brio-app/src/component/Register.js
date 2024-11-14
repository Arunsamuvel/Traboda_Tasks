import React from "react";

const Register = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-red-950">
            We have the answer to your happy and secure future
          </h1>
          <p class="leading-relaxed mt-4 text-red-950 text-2xl font-medium">
            Login and manage your policies on the Go !
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-red-0 border-red-950 border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-red-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-red-950">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-white rounded border border-red-950 
        // focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-red-950">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-red-950 
        focus:border-red-500 focus:ring-indigo-200 focus:ring-red-200 focus:ring-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-900 rounded text-lg">
            Submit
          </button>
          <p class="text-xs text-gray-500 mt-3">
            *I consent to be contacted by Star Health Insurance for health
            insurance product inquiries, overriding my NCPR/DND registration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
