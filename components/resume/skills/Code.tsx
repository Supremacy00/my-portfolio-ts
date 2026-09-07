import { FaCode } from "react-icons/fa6";

const Code = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-7">
        <span className="text-[30px] text-custom6 border-4 p-1.5 border-cyan-700 rounded-full">
          <FaCode />
        </span>
        <h1 className="text-[18px] text-light dark:text-dark font-semibold">
          Code
        </h1>
      </div>
      <div>
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>Web Dev</h3>
          <p>97%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-[97%] bg-indigo-800 py-0.75"></div>
        </div>
      </div>
      <div className="mt-7">
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>Mobile App</h3>
          <p>90%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-[85%] bg-cyan-700 py-0.75"></div>
        </div>
      </div>
      <div className="mt-7">
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>React & Next Javascript</h3>
          <p>92%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-[92%] bg-custom6 py-0.75"></div>
        </div>
      </div>
      <div className="mt-7">
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>HTML & CSS</h3>
          <p>100%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-full bg-amber-800 py-0.75"></div>
        </div>
      </div>
      <div className="mt-7">
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>Tailwind CSS</h3>
          <p>95%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-[95%] bg-custom4 py-0.75"></div>
        </div>
      </div>
      <div className="mt-7">
        <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
          <h3>JavaScript</h3>
          <p>90%</p>
        </span>
        <div className="relative w-full mt-3">
          <div className="relative w-full bg-custom11 dark:bg-custom12 py-0.75"></div>
          <div className="absolute top-0 w-[75%] bg-lime-800 py-0.75"></div>
        </div>
      </div>
    </div>
  );
};

export default Code;
