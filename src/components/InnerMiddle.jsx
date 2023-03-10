import React from "react";
import innerMiddleImage from "/yogas/yoga_mo.png";

const InnerMiddle = () => {
  return (
    <div className="bg-slate-900 text-white m-8 flex justify-between">
      <div className="w-3/5 p-8">
        <div className="text-3xl font-bold mb-8 md:text-5xl ">
          The Inner Middle.
        </div>
        <div className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          obcaecati corporis dolores sed id illum, provident est vero numquam
          neque.
        </div>
        <hr className="border border-white my-8" />
        <div>
          <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold px-16 py-4 rounded-lg uppercase my-8">
            Read More
          </button>
        </div>
      </div>
      <img src={innerMiddleImage} alt="" width={400} />
    </div>
  );
};

export default InnerMiddle;
