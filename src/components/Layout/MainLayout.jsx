import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
