import { ImBooks } from "react-icons/im";
import { HiCheck } from "react-icons/hi";

const Knowledge = () => {
  return (
    <div className="w-full mt-7 lg:mt-0">
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[30px] text-amber-800 border-4 p-1.5 border-custom4 rounded-full">
          <ImBooks />
        </span>
        <h1 className="text-[18px] text-light dark:text-dark font-semibold">
          Knowledge
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Advertising Services
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Search Engine Marketing
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Hosting Installation
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          SEO Optimization
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Performance Optimization
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Responsive Design
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Communication
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <HiCheck className="text-[25px] text-custom4" />
        <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
          Time Management
        </p>
      </div>
    </div>
  );
};

export default Knowledge;
