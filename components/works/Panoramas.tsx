import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { worksData } from "../../constant/data";
import Link from "next/link";
import EmptyWorks from "../_ui/EmptyWorks";

const Panoramas = () => {
  if (worksData.panoramas.length === 0) {
    return <EmptyWorks title="Panoramas" />;
  }
  return (
    <section>
      <AnimatePresence>
        <article className="grid grid-cols-1 gap-5 pb-12 lg:grid-cols-2 px-7 pt-7">
          {worksData.panoramas.map((work) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="group w-full border border-gray-200 dark:border-custom2 rounded-2xl p-5">
                <Link
                  href={work.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full aspect-200/120 rounded-lg overflow-hidden lg:h-37.5">
                    <Image
                      src={work.workPhoto}
                      alt={work.title}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110 group-hover:-rotate-1"
                    />
                    <div className="cursor-pointer custom-cursor">
                      <div className="absolute top-0 bg-linear-to-r from-[#1C9CEA33] w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                      <span className="text-[27px] text-dark absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                        {work.icon}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="mt-5 text-center">
                  <span>
                    <Link
                      href={work.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="custom-cursor text-[18px] font-semibold text-light dark:text-dark inline-block group-hover:text-custom5 dark:group-hover:text-custom5 transition-colors duration-300 ease-in-out cursor-pointer">
                        {work.title}
                      </h1>
                    </Link>
                    <h3 className="text-[14px] text-light2 dark:text-dark2 mt-1">
                      {work.category}
                    </h3>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </article>
      </AnimatePresence>
    </section>
  );
};

export default Panoramas;
