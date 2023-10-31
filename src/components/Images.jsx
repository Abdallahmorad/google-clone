/* eslint-disable react/prop-types */

const Images = ({ results }) => {
  return (
    <div className="flex  items-center flex-wrap gap-5  justify-center  md:justify-between">
      {results?.images?.map((image) => (
        <div
          key={image.position}
          className=" w-[250px] h-[250px] border rounded-lg border-gray-500 "
        >
          <a href={image.link} target="_blank" rel="noreferrer">
            <img
              src={image.imageUrl}
              alt=""
              className=" rounded-lg h-[70%] w-full"
            />
            <p className=" text-lg hover:underline break-words text-blue-700 dark:text-blue-300 p-2">
              {image.title.length > 50 ? image.title.slice(0, 30) : image.title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Images;
