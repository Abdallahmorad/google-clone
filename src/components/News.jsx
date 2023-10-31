/* eslint-disable react/prop-types */
const News = ({ results }) => {
  return (
    <div>
      {results?.news?.map((link) => (
        <div key={link.position} className=" py-4 ">
          <a href={link.link} target="_blank" rel="noreferrer">
            <p className="text-sm">{link.link}</p>
            <p className=" text-lg hover:underline text-blue-700 dark:text-blue-300">
              {link.title}
            </p>
            <p className=" text-sm text-gray-600">{link.snippet}</p>
            <p className="  text-gray-800 text-lg">Source :{link.source}</p>
            <p className=" text-sm text-gray-600">{link.date}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
