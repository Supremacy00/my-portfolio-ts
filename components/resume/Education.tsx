import { FaSchool } from "react-icons/fa";
import { educationData } from "../../constant/data";

const Education = () => {
  return (
    <div className="mt-7 sm:mt-0">
      <div className="flex items-center gap-3">
        <FaSchool className="text-[30px] text-custom4" />
        <h1 className="text-[20px] font-semibold text-light dark:text-dark">
          Education
        </h1>
      </div>
      <article className="grid grid-cols-1 gap-5 mt-5">
        {educationData.map((item, index) => (
          <article key={index} className="w-full">
            <div className="w-full p-5 border border-gray-200 dark:border-custom2 rounded-2xl ">
              <h3 className="text-[14px] font-medium text-light2 dark:text-dark2 mb-2.5">
                {item.year}
              </h3>
              <h1 className="text-[18px] font-semibold text-light dark:text-dark mb-1">
                {item.title}{" "}
                <span className="text-light2 dark:text-dark2">
                  {item.title2}
                </span>
              </h1>
              <h3 className="text-base text-light2 dark:text-dark2 ">
                {item.location}
              </h3>
            </div>
          </article>
        ))}
      </article>
    </div>
  );
};

export default Education;
