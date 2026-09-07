import { useMyComponentContext } from "@/context/ComponentContext";
import WorksLayout from "./WorksLayout";

const Works = () => {
  const { isComponentVisible, handleIsComponentVisibility } =
    useMyComponentContext();
  return (
    <section className="font-IBM mx-auto max-w-162.5 mt-5 lg:mt-0 lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-162.5">
        <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] lg:h-162.5 lg:overflow-y-scroll scrollbar-custom ">
          <div className="top-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">W</span>orks
                </h1>
                <div className="w-40 h-0.5 bg-custom5" />
              </span>
              <div className="w-full h-px bg-gray-200 dark:bg-custom2" />
            </div>
            <div>
              <p className="py-5 text-base leading-7 text-light2 dark:text-dark2 px-7">{`Dive into my coding projects, where I've translated ideas into fully functional applications.`}</p>
              <div className="flex w-full justify-center lg:justify-end">
                <div className="w-fit custom-cursor flex flex-wrap items-center gap-5 px-7 text-base">
                  <h3
                    className={`${
                      isComponentVisible === "All"
                        ? "text-custom5"
                        : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                    } cursor-pointer transition-colors duration-300 ease-in-out`}
                    onClick={() => handleIsComponentVisibility("All")}
                  >
                    All
                  </h3>
                  <h3
                    className={`${
                      isComponentVisible === "Innovations"
                        ? "text-custom5"
                        : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                    } cursor-pointer transition-colors duration-300 ease-in-out`}
                    onClick={() => handleIsComponentVisibility("Innovations")}
                  >
                    Innovations
                  </h3>
                  <h3
                    className={`${
                      isComponentVisible === "Panoramas"
                        ? "text-custom5"
                        : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                    } cursor-pointer transition-colors duration-300 ease-in-out`}
                    onClick={() => handleIsComponentVisibility("Panoramas")}
                  >
                    Panoramas
                  </h3>
                  <h3
                    className={`${
                      isComponentVisible === "Symphonies"
                        ? "text-custom5"
                        : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                    } cursor-pointer transition-colors duration-300 ease-in-out`}
                    onClick={() => handleIsComponentVisibility("Symphonies")}
                  >
                    Symphonies
                  </h3>
                </div>
              </div>
              <div>
                <WorksLayout />
              </div>
            </div>
          </div>
          <div className="bottom-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Works;
