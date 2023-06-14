import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlink";
import Logo from "./Logo";
export const SmallSidebar = () => {

  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
    <Navlinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;