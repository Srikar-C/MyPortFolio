import { useState } from "react";
import "./nav.css";
export default function NavTop() {
  const [color, setColor] = useState(true);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  const [toggle, setToggle] = useState(false);
  function handleHamb() {
    setToggle(!toggle);
  }
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    setIsCheckboxChecked(false);
  }
  return (
    <div
      className={`navigation fixed w-screen md:w-[100%] ${
        color
          ? "bg-black border-none ease-in-out duration-700"
          : "bg-gray-300 duration-700 ease-in-out"
      }  h-[10vh] flex flex-row items-center justify-between z-50`}
    >
      <div className="nav-logo ml-[50px]">
        <svg
          width="200"
          height="70"
          viewBox="0 0 472 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_53_73)">
            <path
              d="M44.4532 17.0668H34.0768C33.9348 15.9446 33.6294 14.9361 33.1606 14.0412C32.7061 13.1463 32.1024 12.3793 31.3495 11.7401C30.6109 11.1009 29.7373 10.6179 28.7288 10.2912C27.7345 9.95028 26.6265 9.77983 25.4049 9.77983C23.2601 9.77983 21.4064 10.3054 19.8439 11.3565C18.2956 12.4077 17.1024 13.9347 16.2643 15.9375C15.4262 17.9403 15.0072 20.3551 15.0072 23.1818C15.0072 26.1222 15.4262 28.5937 16.2643 30.5966C17.1166 32.5852 18.3169 34.0838 19.8652 35.0923C21.4277 36.0866 23.253 36.5838 25.341 36.5838C26.52 36.5838 27.5995 36.4347 28.5797 36.1364C29.574 35.8239 30.4405 35.3764 31.1791 34.794C31.9319 34.1974 32.5569 33.4801 33.0541 32.642C33.5512 31.7898 33.8922 30.8239 34.0768 29.7443L44.4532 29.8082C44.2402 31.7543 43.6649 33.6648 42.7274 35.5398C41.8041 37.4148 40.5328 39.1122 38.9135 40.6321C37.2941 42.152 35.3339 43.3594 33.0328 44.2543C30.7316 45.1491 28.1038 45.5966 25.1493 45.5966C21.2146 45.5966 17.6919 44.7301 14.5811 42.9972C11.4845 41.25 9.0342 38.7074 7.23022 35.3693C5.44045 32.017 4.54556 27.9545 4.54556 23.1818C4.54556 18.3807 5.45466 14.3182 7.27284 10.9943C9.09102 7.65625 11.5555 5.12074 14.6663 3.38778C17.7913 1.64062 21.2856 0.767044 25.1493 0.767044C27.7771 0.767044 30.199 1.12926 32.4149 1.85369C34.645 2.57812 36.6052 3.63636 38.2956 5.02841C40.0001 6.42045 41.3851 8.125 42.4504 10.142C43.5157 12.1591 44.1833 14.4673 44.4532 17.0668ZM48.8056 45V1.36364H59.0542V18.9844H76.5897V1.36364H86.8383V45H76.5897V27.358H59.0542V45H48.8056ZM100.843 45H89.827L104.614 1.36364H118.208L132.995 45H121.979L111.581 12.1236H111.24L100.843 45ZM99.5429 27.8267H123.151V35.6676H99.5429V27.8267ZM136.026 45V1.36364H146.274V36.6477H164.556V45H136.026ZM168.386 45V1.36364H178.635V36.6477H196.916V45H168.386ZM210.462 45H199.446L214.233 1.36364H227.827L242.614 45H231.598L221.201 12.1236H220.86L210.462 45ZM209.162 27.8267H232.77V35.6676H209.162V27.8267ZM280.578 14.3395C280.436 12.7344 279.783 11.4844 278.618 10.5895C277.468 9.6946 275.841 9.24716 273.739 9.24716C272.347 9.24716 271.182 9.43892 270.245 9.82244C269.307 10.1918 268.597 10.696 268.114 11.3352C267.645 11.9744 267.411 12.706 267.411 13.5298C267.382 14.2116 267.517 14.8153 267.816 15.3409C268.128 15.8523 268.568 16.3068 269.137 16.7045C269.719 17.0881 270.415 17.4219 271.225 17.706C272.034 17.9901 272.929 18.2386 273.909 18.4517L277.702 19.3253C279.804 19.794 281.672 20.4119 283.306 21.179C284.953 21.9318 286.345 22.848 287.482 23.9276C288.618 24.9929 289.485 26.2287 290.081 27.6349C290.678 29.0412 290.983 30.625 290.997 32.3864C290.983 35.1278 290.287 37.4858 288.909 39.4602C287.546 41.4205 285.578 42.9332 283.007 43.9986C280.451 45.0497 277.361 45.5753 273.739 45.5753C270.117 45.5753 266.956 45.0284 264.257 43.9347C261.573 42.8409 259.485 41.1932 257.993 38.9915C256.502 36.7756 255.735 33.9986 255.692 30.6605H265.514C265.6 32.0668 265.983 33.2457 266.665 34.1974C267.361 35.1491 268.299 35.8665 269.478 36.3494C270.671 36.8324 272.049 37.0739 273.611 37.0739C275.06 37.0739 276.303 36.875 277.34 36.4773C278.377 36.0795 279.172 35.5256 279.726 34.8153C280.294 34.1051 280.585 33.2884 280.6 32.3651C280.585 31.4986 280.323 30.767 279.811 30.1705C279.3 29.5597 278.519 29.0341 277.468 28.5938C276.431 28.1534 275.117 27.7486 273.526 27.3793L268.924 26.2926C265.174 25.4119 262.212 24.0057 260.039 22.0739C257.88 20.142 256.8 17.5284 256.8 14.233C256.8 11.5483 257.524 9.19744 258.973 7.1804C260.436 5.16335 262.446 3.59375 265.003 2.47159C267.574 1.33523 270.5 0.767044 273.781 0.767044C277.134 0.767044 280.046 1.33523 282.517 2.47159C285.003 3.60795 286.928 5.19886 288.291 7.24432C289.669 9.27557 290.372 11.6406 290.401 14.3395H280.578ZM294.721 45V1.36364H312.555C315.836 1.36364 318.663 1.95312 321.035 3.1321C323.407 4.29687 325.233 5.96591 326.511 8.1392C327.789 10.2983 328.429 12.8622 328.429 15.831C328.429 18.8281 327.775 21.3849 326.468 23.5014C325.162 25.6037 323.301 27.2088 320.886 28.3168C318.471 29.4105 315.595 29.9574 312.257 29.9574H300.858V21.8182H310.424C312.044 21.8182 313.4 21.6051 314.494 21.179C315.588 20.7528 316.412 20.0994 316.966 19.2188C317.534 18.3239 317.818 17.1946 317.818 15.831C317.818 14.4673 317.534 13.331 316.966 12.4219C316.412 11.4986 315.581 10.8097 314.473 10.3551C313.379 9.88636 312.022 9.65199 310.403 9.65199H304.97V45H294.721ZM319.075 25.0781L329.941 45H318.713L308.081 25.0781H319.075ZM342.779 1.36364V45H332.531V1.36364H342.779ZM347.781 45V1.36364H358.03V19.9858H358.605L373.307 1.36364H385.43L369.813 20.8594L385.686 45H373.435L362.334 27.6776L358.03 33.0469V45H347.781ZM396.947 45H385.932L400.719 1.36364H414.312L429.099 45H418.084L407.686 12.1236H407.345L396.947 45ZM395.648 27.8267H419.256V35.6676H395.648V27.8267ZM432.131 45V1.36364H449.964C453.246 1.36364 456.072 1.95312 458.445 3.1321C460.817 4.29687 462.642 5.96591 463.92 8.1392C465.199 10.2983 465.838 12.8622 465.838 15.831C465.838 18.8281 465.185 21.3849 463.878 23.5014C462.571 25.6037 460.71 27.2088 458.295 28.3168C455.881 29.4105 453.004 29.9574 449.666 29.9574H438.267V21.8182H447.834C449.453 21.8182 450.81 21.6051 451.903 21.179C452.997 20.7528 453.821 20.0994 454.375 19.2188C454.943 18.3239 455.227 17.1946 455.227 15.831C455.227 14.4673 454.943 13.331 454.375 12.4219C453.821 11.4986 452.99 10.8097 451.882 10.3551C450.788 9.88636 449.432 9.65199 447.812 9.65199H442.379V45H432.131ZM456.484 25.0781L467.351 45H456.122L445.49 25.0781H456.484Z"
              fill="url(#paint0_linear_53_73)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_53_73"
              x="0.545532"
              y="0.76709"
              width="470.805"
              height="52.8295"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_73"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_73"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_53_73"
              x1="26.5"
              y1="45"
              x2="457"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DBB76B" />
              <stop offset="0.53" stop-color="#FAF8E9" />
              <stop offset="0.975" stop-color="#DEB972" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className={`nav-links hidden md:flex ${
          color ? "text-white" : "text-black"
        } w-[400px] mr-[100px] justify-between text-xl`}
      >
        <a href="#" className="font-semibold">
          Home
        </a>
        <a
          href="#about"
          className={`text-gray-600 ${
            color ? "hover:text-white" : "hover:text-black"
          }  font-semibold  `}
        >
          About
        </a>
        <a
          href="#skills"
          className={`text-gray-600 ${
            color ? "hover:text-white" : "hover:text-black"
          }  font-semibold`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`text-gray-600 ${
            color ? "hover:text-white" : "hover:text-black"
          }  font-semibold`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-gray-600 ${
            color ? "hover:text-white" : "hover:text-black"
          }  font-semibold`}
        >
          Contact
        </a>
      </div>
      <div className="demo flex md:hidden" onClick={handleHamb}>
        <div className="menu-icon flex md:hidden">
          <input
            className="menu-icon__cheeckbox flex md:hidden"
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="hambsDrop flex md:hidden absolute flex-col">
        <div
          className={`dropdown fixed w-screen md:w-[100%] mt-[5vh] flex-col text-center text-white bg-slate-400 text-2xl flex md:hidden ${
            toggle ? "block" : "none"
          } ${toggle ? "h-fit" : "h-0"} ${
            toggle ? "overflow-none" : "overflow-hidden"
          }`}
        >
          <a
            href="#"
            onClick={handleToggle}
            className={`font-semibold my-2 ${toggle ? "block" : "none"}}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleToggle}
            className={`font-semibold my-2 ${toggle ? "block" : "none"}}`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleToggle}
            className={`font-semibold my-2 ${toggle ? "block" : "none"}}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={handleToggle}
            className={`font-semibold my-2 ${toggle ? "block" : "none"}}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleToggle}
            className={`font-semibold my-2 ${toggle ? "block" : "none"}}`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
