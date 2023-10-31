import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useContextResults } from "../context/ResultContextProvider";
import Search from "./Search";
import Videos from "./Videos";
import News from "./News";
import Images from "./Images";
const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useContextResults();
  let location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}?q=${searchTerm}&page=1`);
    }
  }, [searchTerm, location.pathname]);
  
  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return <Search results={results} />;
    case "/videos":
      return <Videos results={results} />;
    case "/news":
      return <News results={results} />;
    case "/images":
      return <Images results={results} />;

    default:
      break;
  }
};

export default Results;
