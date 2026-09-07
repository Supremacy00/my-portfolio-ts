import MainPageLayout from "@/components/mainPageLayout/MainPageLayout";
import MobileLayout from "@/components/mobileLayout/MobileLayout";
import CustomCursor from "@/components/custom/CustomCursor";
import MatrixCanvasEffect from "@/utils/matrixCanvasEffect";

const MainPage = () => {
  return (
    <main>
      <CustomCursor />
      <MainPageLayout />
      <MobileLayout />
      <MatrixCanvasEffect />
    </main>
  );
};

export default MainPage;
