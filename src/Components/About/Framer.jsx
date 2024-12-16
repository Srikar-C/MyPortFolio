import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import items from "../About/Items";
import about from "./about.module.css";
import Pattern from "./Pattern";
import { RxCross2 } from "react-icons/rx";

export default function Framer() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={`flex flex-col md:flex-row gap-10 `}>
      <div
        className={`${
          selectedId !== null
            ? "fixed top-0 left-0 w-screen h-screen bg-[#e2dcdc] z-[400] opacity-75"
            : "hidden"
        }`}
        onClick={() => {
          setSelectedId(null);
          document.body.style.overflow = "auto";
        }}
      ></div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => {
            setSelectedId(item.id);
            document.body.style.overflow = "hidden";
          }}
          className={`${about.box2} flex flex-col gap-4`}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          <motion.div className="flex gap-3 items-center">
            <motion.span>{item.icon}</motion.span>
            <motion.h5>{item.heading}</motion.h5>
          </motion.div>
          <motion.div>
            {item.titles.map((list) => {
              return (
                <motion.li
                  key={list.sid}
                  className="text-[14px] md:text-[16px]"
                >
                  {list.what}
                </motion.li>
              );
            })}
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className={`${about.box2} m-0 z-[500] fixed md:w-[80vw] w-[90vw] mx-auto top-0 left-0 right-0 p-[20px] md:p-[40px] `}
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            {items
              .filter((item) => item.id === selectedId)
              .map((item) => (
                <div key={item.id}>
                  <motion.div className="flex gap-3 items-center">
                    <motion.span>{item.icon}</motion.span>
                    <motion.h5>{item.heading}</motion.h5>
                  </motion.div>
                  <Pattern items={item.titles} />
                  <motion.button
                    onClick={() => {
                      setSelectedId(null);
                      document.body.style.overflow = "auto";
                    }}
                    style={{
                      position: "absolute",
                      right: "5%",
                      top: "5%",
                      padding: "10px 20px",
                      color: "#000",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <RxCross2 className="text-[30px] font-semibold p-1 border-2 border-black rounded-full" />
                  </motion.button>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
