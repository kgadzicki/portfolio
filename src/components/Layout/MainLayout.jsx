import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
