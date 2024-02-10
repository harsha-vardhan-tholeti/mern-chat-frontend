import logo from "../assets/logo.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
import userImg from "../assets/user-img.avif";
import Button from "./Button";
import OutlinedButton from "./OutlinedButton";
import { Link, NavLink, useLocation } from "react-router-dom";

const user = "";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex justify-between px-8 py-4  rounded-b-lg">
      <NavLink to="/" className="flex justify-center items-center">
        <img src={logo} alt="logo" />
      </NavLink>
      {path !== "/login" && path !== "/sign-up" && (
        <div className="flex justify-center items-center">
          {user && (
            <>
              <IoIosNotificationsOutline className="h-8 w-8 mr-4" />
              <img
                src={userImg}
                alt="user"
                className="h-12 w-12 rounded-full"
              />
            </>
          )}
          {!user && (
            <div className="flex justify-center items-center">
              <Link to="/login">
                <Button text="Login" />
              </Link>
              <Link to="/sign-up">
                <OutlinedButton text="Join" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
