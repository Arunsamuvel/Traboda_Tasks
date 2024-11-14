import React from "react";
import Logo from "./logo/Logo";

const Contact = () => {
  return (
    <footer>
      <div className="flex justify-around items-center gap-4">
        <Logo />
        <div className="email flex items-center justify-center gap-4 hover:cursor-pointer">
          <div>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 12.0029C44 9.80293 42.2 8.00293 40 8.00293H8C5.8 8.00293 4 9.80293 4 12.0029M44 12.0029V36.0029C44 38.2029 42.2 40.0029 40 40.0029H8C5.8 40.0029 4 38.2029 4 36.0029V12.0029M44 12.0029L24 26.0029L4 12.0029"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="">jayaramakrishnan888@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 hover:cursor-pointer">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 13H35.02M14 4H34C39.5228 4 44 8.47715 44 14V34C44 39.5228 39.5228 44 34 44H14C8.47715 44 4 39.5228 4 34V14C4 8.47715 8.47715 4 14 4ZM32 22.74C32.2468 24.4045 31.9625 26.1044 31.1875 27.598C30.4125 29.0916 29.1863 30.3028 27.6833 31.0593C26.1802 31.8159 24.4769 32.0792 22.8156 31.8119C21.1543 31.5445 19.6195 30.7602 18.4297 29.5703C17.2398 28.3805 16.4555 26.8457 16.1881 25.1844C15.9208 23.5231 16.1841 21.8198 16.9407 20.3167C17.6972 18.8137 18.9084 17.5875 20.402 16.8125C21.8956 16.0375 23.5955 15.7532 25.26 16C26.9578 16.2518 28.5297 17.0429 29.7434 18.2566C30.9571 19.4703 31.7482 21.0422 32 22.74Z"
              stroke="#1E1E1E"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="">@Jayaramakrishnan</p>
        </div>
        <div className="flex items-center justify-center gap-4 hover:cursor-pointer">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 33.84V39.84C44.0022 40.397 43.8882 40.9483 43.665 41.4586C43.4419 41.969 43.1146 42.4271 42.7041 42.8037C42.2937 43.1802 41.8091 43.4669 41.2815 43.6454C40.7538 43.8238 40.1947 43.8901 39.64 43.84C33.4857 43.1712 27.574 41.0682 22.38 37.7C17.5476 34.6293 13.4507 30.5323 10.38 25.7C6.99994 20.4824 4.89647 14.5419 4.23999 8.35995C4.19001 7.80688 4.25574 7.24947 4.43299 6.7232C4.61024 6.19693 4.89513 5.71333 5.26952 5.30319C5.64391 4.89306 6.0996 4.56537 6.60757 4.34099C7.11554 4.11662 7.66467 4.00047 8.21999 3.99995H14.22C15.1906 3.9904 16.1316 4.33411 16.8675 4.96702C17.6035 5.59992 18.0841 6.47884 18.22 7.43995C18.4732 9.36008 18.9429 11.2454 19.62 13.0599C19.8891 13.7758 19.9473 14.5538 19.7878 15.3017C19.6283 16.0496 19.2577 16.7362 18.72 17.28L16.18 19.8199C19.0271 24.827 23.1729 28.9728 28.18 31.82L30.72 29.28C31.2638 28.7422 31.9503 28.3716 32.6982 28.2121C33.4462 28.0526 34.2241 28.1109 34.94 28.3799C36.7545 29.0571 38.6399 29.5267 40.56 29.78C41.5315 29.917 42.4188 30.4064 43.0531 31.1549C43.6873 31.9035 44.0243 32.8591 44 33.84Z"
              stroke="#1E1E1E"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="">+91 90920 98088</p>
        </div>
      </div>
      <div className="text-center">© 2024 Copyright:BRio</div>
    </footer>
  );
};

export default Contact;
