import { RotateLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2C2C]">
      <RotateLoader color={"#1C9CEA"} size={13} />
    </div>
  );
};

export default PageLoader;
