"use client";
import { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";

const LOADER_DURATION = 1000;

interface AppLoaderProps {
  children: React.ReactNode;
}

const PageLoader = ({ children }: AppLoaderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2C2C]">
        <RotateLoader color={"#1C9CEA"} size={13} />
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
