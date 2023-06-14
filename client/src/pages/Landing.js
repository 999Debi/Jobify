
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}

      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>Tracking</span> app
            </h1>
            <p>
              it was always the Monday mornings. It never seemed to happen on
              Tuesday morning, Wednesday morning, or any other morning during
              the week. But it happened every Monday morning like clockwork. He
              mentally prepared himself to once again deal with what was about
              to happen, but this time he also placed a knife in his pocket just
              in case.
            </p>
            {/* <button className="btn btn-hero">
Login/Register
          </button> */}
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="Job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
  }


export default Landing
  