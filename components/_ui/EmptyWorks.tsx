interface EmptyWorksProps {
  category: string;
  title?: string;
  description?: string;
}

const EmptyWorks = ({ category, title, description }: EmptyWorksProps) => {
  const content = {
    All: {
      title: "No Works Yet",
      description:
        "I'm currently adding more products and digital experiences to my portfolio.",
    },
    Professional: {
      title: "No Professional Work Yet",
      description:
        "I'm currently adding professional products and applications I've worked on.",
    },
    Innovations: {
      title: "No Innovations Yet",
      description:
        "I'm currently working on some experimental ideas and innovative projects.",
    },
    Panoramas: {
      title: "No Panoramas Yet",
      description:
        "I'm currently working on some larger projects and digital experiences.",
    },
    Symphonies: {
      title: "No Symphonies Yet",
      description:
        "I'm currently working on some applications and mobile experiences.",
    },
  };

  const defaultContent = content[category as keyof typeof content] ?? {
    title: `No ${category} Yet`,
    description: `I'm currently working on some ${category.toLowerCase()}.`,
  };

  return (
    <div className="flex min-h-75 flex-col items-center justify-center px-7 text-center lg:pt-14">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-2xl dark:bg-custom2">
        🚀
      </div>

      <h2 className="text-[18px] font-semibold text-light dark:text-dark">
        {title ?? defaultContent.title}
      </h2>

      <p className="mt-2 max-w-md text-[14px] leading-6 text-light2 dark:text-dark2">
        {description ?? defaultContent.description}
      </p>
    </div>
  );
};

export default EmptyWorks;
