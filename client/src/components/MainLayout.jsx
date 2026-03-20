import Sidebar from "../components/Sidebar";
import BottomNav from "./BottomNav";
import RightSide from "./RightSide";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:flex min-h-screen">

        {/* Fixed left sidebar */}
        <Sidebar />

        {/* Scrollable centre column */}
        <div className="ml-64 mr-60 flex-1 min-h-screen px-4 py-1">
          <div className="max-w-xl mx-auto">
            {children}
          </div>
        </div>

        {/* Fixed right panel */}
        <RightSide />

      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden min-h-screen w-full overflow-x-hidden">
        <div className="pb-20 w-full">
          {children}
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default MainLayout;