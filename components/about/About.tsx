import { aboutData } from "../../constant/data";

const About = () => {
  const leftColumn = aboutData.filter((_, index) => index % 2 === 0);
  const rightColumn = aboutData.filter((_, index) => index % 2 !== 0);

  return (
    <section className="mx-auto max-w-162.5 font-IBM lg:max-w-full">
      <div className="max-w-full overflow-hidden rounded-[30px] bg-white dark:bg-secondary lg:h-162.5">
        <div className="h-full overflow-y-auto rounded-[30px] scrollbar-custom">
          <div className="sticky top-0 right-0 z-10 hidden w-full bg-white py-2 lg:block dark:bg-secondary" />

          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] font-semibold text-light dark:text-dark">
                  <span className="text-custom5">A</span>bout Me
                </h1>

                <div className="h-0.5 w-40 bg-custom5" />
              </span>

              <div className="h-px w-full bg-gray-200 dark:bg-custom2" />

              <p className="p-7 text-base leading-7 text-light2 dark:text-dark2">
                <span className="text-[17px] font-semibold">
                  Hello! I&apos;m Musa Abdulmuqaddas.{" "}
                </span>
                I&apos;m a passionate Front-End developer who specializes in
                creating dynamic and user-friendly web applications using React
                JavaScript. With a keen eye for design and a strong command of
                various technologies, I craft stunning user interfaces and
                ensure seamless user experiences.
              </p>
            </div>

            <div className="p-7">
              <h2 className="text-[20px] font-semibold text-light dark:text-dark">
                My Expertise
              </h2>

              <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start">
                {/* Left column */}
                <div className="flex flex-col gap-5">
                  {leftColumn.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-gray-200 p-5 dark:border-custom2 sm:flex sm:gap-4"
                    >
                      <div className={`${item.color} shrink-0 text-[30px]`}>
                        {item.icon}
                      </div>

                      <div className="mt-5 min-w-0 sm:mt-0 sm:flex-1">
                        <h3 className="text-[18px] font-semibold text-light dark:text-dark">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[15px] leading-6 text-light2 dark:text-dark2">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-5">
                  {rightColumn.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-gray-200 p-5 dark:border-custom2 sm:flex sm:gap-4"
                    >
                      <div className={`${item.color} shrink-0 text-[30px]`}>
                        {item.icon}
                      </div>

                      <div className="mt-5 min-w-0 sm:mt-0 sm:flex-1">
                        <h3 className="text-[18px] font-semibold text-light dark:text-dark">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[15px] leading-6 text-light2 dark:text-dark2">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 right-0 z-10 hidden w-full bg-white py-2 lg:block dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default About;
