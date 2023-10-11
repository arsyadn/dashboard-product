import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = (p: Props) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    p.setSearch(event.target.value);
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <input
            type="text"
            value={p.search}
            onChange={handleSearch}
            className="w-full h-10 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg lg:w-80 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
