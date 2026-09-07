import Code from "./Code";
import Knowledge from "./Knowledge";

const Skills = () => {
  return (
    <div className="font-IBM">
      <div className="p-7">
        <h1 className="text-[20px] text-light dark:text-dark font-semibold">
          Skills
        </h1>
      </div>
      <div className="w-full h-px bg-gray-200 dark:bg-custom2" />
      <div className="p-7">
        <div className="lg:flex lg:justify-between lg:gap-8 xxl:gap-12">
          <Code />
          <Knowledge />
        </div>
      </div>
    </div>
  );
};

export default Skills;
