import {
  faImages,
  faNewspaper,
  faSearch,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <ul className=" flex gap-4 items-center  py-4 border-b-2 mb-5 border-b-gray-300 dark:text-gray-300  dark:border-b-gray-700 text-gray-700">
      <li>
        <NavLink to={"/search"}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <span className=" mx-1 text-sm md:text-lg">All</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/images"}>
          <FontAwesomeIcon icon={faImages} size="lg" />
          <span className=" mx-1 text-sm md:text-lg">Images</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/videos"}>
          <FontAwesomeIcon icon={faVideo} size="lg" />
          <span className=" mx-1 text-sm md:text-lg">Videos</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/news"}>
          <FontAwesomeIcon icon={faNewspaper} size="lg" />
          <span className=" mx-1 text-sm md:text-lg">News</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
