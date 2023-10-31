/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

const Videos = ({ results }) => {
  return (
    <div>
      {results?.videos?.map((video) => (
        <div key={video.title}>
          <a href={video.link} target="_blank" rel="noreferrer">
            <p className=" text-2xl hover:underline text-blue-700 dark:text-blue-300">
              {video.title}
            </p>
            <div className="  gap-3 md:flex">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="my-2"
              >
                <ReactPlayer
                  url={video.link}
                  width="250px"
                  height="150px"
                  controls
                />
              </div>
              <div className=" my-2 break-words">
                <p className=" text-lg text-gray-600">{video.snippet}</p>
                <p className=" text-sm text-gray-600">{video.date}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Videos;
