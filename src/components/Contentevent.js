import React from "react";
import Image from "next/image";
import { images } from "../utils";

function ContentEvent() {
  return (
    <>
      <div className="event-content w-[50%]">
        <h2 className="">
          No.1 Events <br /> <span> Management </span>
        </h2>
        <p className="pt-16 text-2xl text-[#333333]">
          Lorem ipsum dollor site amet the best consectuer adipiscing elites sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat insignia the consectuer adipiscing elit.
        </p>
      </div>
      <div className="box-main">
        <div className="grid grid-cols-3 gap-3">
          {images.length > 0 &&
            images.map((imgData, index) => (
              <div
                className="box h-44 w-44 flex items-center justify-center bg-white shadow-xl rounded-2xl flex-col"
                key={index}
              >
                <Image className="mb-4" src={imgData.img} alt="Event" />
                <h5 className="text-[#333333] text-xs ">{imgData.title}</h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ContentEvent;
