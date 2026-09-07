"use client";
import { useEffect } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

interface BlogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRANSITION_MS = 600;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const BlogDrawer = ({ isOpen, onClose }: BlogDrawerProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: `opacity ${TRANSITION_MS}ms ${EASING}`,
        }}
      />

      {/* Drawer — full-screen below sm, side panel from sm up */}
      <aside
        className="absolute right-0 top-0 h-full w-full sm:w-90 sm:max-w-[90vw] overflow-visible bg-white shadow-none sm:shadow-2xl dark:bg-secondary"
        style={{
          transform: `translate3d(${isOpen ? "0" : "100%"}, 0, 0)`,
          transition: `transform ${TRANSITION_MS}ms ${EASING}`,
          willChange: "transform",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-white via-white/80 to-transparent dark:from-secondary dark:via-secondary/80 sm:hidden"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`group custom-cursor absolute z-20 flex items-center justify-center bg-white shadow-md text-light hover:bg-custom5 hover:text-white dark:bg-secondary dark:text-dark dark:hover:bg-custom5 dark:hover:text-white
            left-1/2 top-4 h-12 w-12 -translate-x-1/2 rounded-full cursor-pointer
            sm:-left-17.5 sm:shadow-none sm:top-0 sm:h-16.5 sm:w-17.5 sm:translate-x-0 sm:rounded-l-full sm:rounded-r-none
            ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{
            opacity: isOpen ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ${EASING}, background-color 300ms ease-out, color 300ms ease-out`,
          }}
        >
          <IoClose className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto px-7 pt-20 pb-8 sm:pt-8 font-IBM">
          {/* Search Bar */}
          <div className="relative mb-8">
            <IoSearch className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2 text-lg text-light2 transition-colors duration-300 dark:text-dark2" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-transparent border-0 border-b border-gray-200 py-2.5 pl-8 pr-2 text-[15px] text-light placeholder:text-light2 outline-none transition-colors duration-300 focus:border-custom5 dark:border-custom2 dark:text-dark dark:placeholder:text-dark2 dark:focus:border-custom5"
            />
          </div>

          {/* Recent Posts */}
          <div className="mb-10">
            <h3 className="mb-4 text-base font-medium text-light dark:text-dark">
              Recent Posts
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5 text-center dark:border-custom2">
              <p className="text-[14px] text-light2 dark:text-dark2">
                No recent posts yet.
              </p>
            </div>
          </div>

          {/* Recent Comments */}
          <div className="mb-10">
            <h3 className="mb-4 text-base font-medium text-light dark:text-dark">
              Recent Comments
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5 text-center dark:border-custom2">
              <p className="text-[14px] text-light2 dark:text-dark2">
                No recent comments yet.
              </p>
            </div>
          </div>

          {/* Archives */}
          <div className="mb-10">
            <h3 className="mb-4 text-base font-medium text-light dark:text-dark">
              Archives
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5 text-center dark:border-custom2">
              <p className="text-[14px] text-light2 dark:text-dark2">
                No archives yet.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="pb-10">
            <h3 className="mb-4 text-base font-medium text-light dark:text-dark">
              Categories
            </h3>

            <div className="rounded-2xl border border-gray-200 p-5 text-center dark:border-custom2">
              <p className="text-[14px] text-light2 dark:text-dark2">
                No categories yet.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDrawer;
