interface EmptyWorksProps {
  title: string;
}

const EmptyWorks = ({ title }: EmptyWorksProps) => {
  const descriptionTitle =
    title === "Projects" ? "projects" : `${title.toLowerCase()} projects`;

  return (
    <div className="flex min-h-75 flex-col items-center justify-center px-7 text-center lg:pt-14">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-2xl dark:bg-custom2">
        🚀
      </div>

      <h2 className="text-[18px] font-semibold text-light dark:text-dark">
        No {title} Yet
      </h2>

      <p className="mt-2 max-w-md text-[14px] leading-6 text-light2 dark:text-dark2">
        I&apos;m currently working on some {descriptionTitle}. Check back soon
        to see what I&apos;ve been building.
      </p>
    </div>
  );
};

export default EmptyWorks;
