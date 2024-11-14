import React from "react";
import HeroImage from "../Assets/insurance-cover-vector.png";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-950">
              View your coverages,
              <br className="hidden lg:inline-block" />
              all in one place
            </h1>
            <p class="mb-8 leading-relaxed">
              It is the sum that provides financial protection to the insured,
              or their family in case of adversities, such as death, accident,
              illness or disability. That said, insurance coverage sets the
              limit of the financial cover one can avail. One cannot make claims
              that exceed insurance coverage.
            </p>
            <div class="flex justify-center">
              <button class="ml-4 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-950 rounded text-lg gap-2">
                Know more
                <svg
                  width="42"
                  height="35"
                  viewBox="0 0 42 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 17.5H33.25M33.25 17.5L21 7.29169M33.25 17.5L21 27.7084"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={HeroImage}
              alt="heroimage"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
