import React from "react";
import Style from "../../styles/common.module.css";
function Loader({ size = "h-16 w-16" }) {
  return (
    <>
      <div className="flex flex-col justify-center h-full ">
        <div className=" w-full max-w-2xl mx-auto flex flex-row justify-center">
          <div
            className={
              Style.loader +
              " ease-linear rounded-full border-8 border-t-8 border-gray-200 " +
              size
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
