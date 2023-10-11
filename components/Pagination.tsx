import React, { useEffect, useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";

const Pagination = ({ setPage, totalItems, active, setActive }) => {
  const [isNextDisable, setIsNextDisable] = useState(false);
  const [isPrevDisable, setIsPrevDisable] = useState(false);

  const prev = () => {
    if (active === 1) {
      return setIsPrevDisable(true);
    } else {
      setActive((prevState) => prevState - 1);
      setPage((prevState) => prevState - 10);
    }
  };

  const next = () => {
    if (active === 10) {
      return setIsNextDisable(true);
    } else {
      setActive((prevState) => prevState + 1);
      setPage((prevState) => prevState + 10);
    }
  };

  return (
    <div className="flex items-center content-center w-full">
      <div onClick={prev} disabled={isPrevDisable}>
        <div className={`h-4 w-4 ${isPrevDisable && "opacity-50"}`}>
          <p className="mb-0">Prev</p>
        </div>
      </div>
      <div className="font-normal mx-9">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">
          {totalItems <= 10 ? 1 : Math.ceil(totalItems / 10)}
        </strong>
      </div>
      <div size="sm" variant="outlined" onClick={next} disabled={active === 10}>
        <div className={`h-4 w-4 ${isNextDisable && "opacity-50"}`}>
          <p className="mb-0">Next</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
