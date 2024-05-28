import React from "react";
import { useDispatch } from "react-redux";
import { setField } from "../Features/cardSlice";
const Search = () => {
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleSearch}>
          <input
            onChange={(e) => {
              let value = e.target.value;
              dispatch(setField(value));
            }}
            type="search"
            placeholder="Search here..."
            className="border border-blue-300 rounded-s-md p-2 w-96 text-black outline-none"
          />
          <button
            type="submit"
            className="bg-stone-500 p-[9px] cursor-pointer rounded-e-md ">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
