/* eslint-disable react/prop-types */

const Search = ({ results }) => {
  return (
    <div>
      {results?.organic?.map((link) => (
        <div key={link.position} className=" py-4 px-2">
          <a href={link.link} target="_blank" rel="noreferrer">
            <p className="text-sm">{link.link}</p>
            <p className=" text-lg hover:underline text-blue-700 dark:text-blue-300">
              {link.title}
            </p>
            <p className=" text-sm text-gray-600">{link.snippet}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Search;
