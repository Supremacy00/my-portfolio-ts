import Image from "next/image";
import { blogData } from "@/constant/data";

const Blogs = () => {
  return (
    <section className="font-IBM mx-auto max-w-162.5 mt-5 lg:mt-0  lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-162.5">
        <div className="bg-white dark:bg-secondary rounded-[30px] lg:h-162.5 lg:overflow-y-scroll scrollbar-custom">
          <div className="top-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">B</span>log
                </h1>
                <div className="w-40 h-0.5 bg-custom5" />
              </span>
              <div className="w-full h-px bg-gray-200 dark:bg-custom2" />
            </div>
            <article className="grid grid-cols-1 gap-5 pb-12 lg:grid-cols-2 px-7 pt-7">
              {blogData.map((blog) => (
                <article key={blog.id}>
                  <div className="group w-full border border-gray-200 dark:border-custom2 rounded-2xl p-5">
                    <div className="w-full aspect-200/120 rounded-lg overflow-hidden bg-custom1 dark:bg-custom2  lg:h-45">
                      <Image
                        src={blog.blogPhoto}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out cursor-pointer custom-cursor group-hover:scale-110 group-hover:-rotate-2 transform-gpu group-hover:relative"
                      />
                    </div>
                    <div className="mt-5 lg:text-center">
                      <h1 className="custom-cursor text-[18px] font-semibold text-light dark:text-dark inline-block group-hover:text-custom5 dark:group-hover:text-custom5 transition-colors duration-300 ease-in-out cursor-pointer">
                        {blog.title}
                      </h1>
                      <p className="text-base mt-1.5 text-light2 dark:text-dark2 leading-7 mb-5 line-clamp-3">
                        {blog.description}
                      </p>
                      <span className="flex justify-between items-center flex-wrap text-[14px] text-light dark:text-dark">
                        <h3 className=" border border-custom5 p-0.75">
                          {blog.date}
                        </h3>
                        <h3 className="text-custom5">{blog.category}</h3>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </article>
          </div>
          <div className="bottom-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
