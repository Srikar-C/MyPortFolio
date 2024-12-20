import NavBottom from "./NavBottom";
import NavTop from "./NavTop";
import app from "../../App.module.css";

export default function Nav() {
  return (
    <div
      className={`relative flex h-fit md:h-[100vh] flex-col bg-[#ffffffb6] `}
    >
      <div className="" id="home">
        <NavTop />
        <NavBottom />
      </div>
      <div className={`${app.custom_shape_divider_bottom_1725515299} z-[8]`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="100%" stopColor="#104c91" />
              <stop offset="50%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>
    </div>
  );
}
