import { useDebounce } from "use-debounce";
import { useContextResults } from "../context/ResultContextProvider";
import { useEffect, useState } from "react";

const Input = () => {
  const [term, setTerm] = useState("Javascript Mastery");
  const { setSearchTerm } = useContextResults();
  const [debouncedTerm] = useDebounce(term, 50);
  useEffect(() => {
    if (debouncedTerm) {
      setSearchTerm(debouncedTerm);
    }
  }, [debouncedTerm, setSearchTerm]);
  return (
    <input
      value={debouncedTerm}
      onChange={(e) => {
        setTerm(e.target.value);
      }}
      type="text"
      className=" p-3 px-5 w-full md:w-1/2  rounded-full border-2  -ml-2 dark:bg-[#303134] dark:border-gray-700"
      placeholder="Search With Google "
    />
  );
};

export default Input;
