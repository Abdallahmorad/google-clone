/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

export const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let data = JSON.stringify({
    q: "apple inc",
  });

  const getResults = async (type) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-API-KEY": "3a7a2c65194e6a7c0b09c5d29141bab8c61d312f",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`https://google.serper.dev${type}`, options);
      const data = await response.json();
      console.log(data);
      setResults(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, searchTerm, getResults, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;

export const useContextResults = () => useContext(ResultContext);
