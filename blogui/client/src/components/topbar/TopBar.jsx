import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import axios from "axios";

export default function TopBar() {
  const [isSeller, setIsSeller] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/users/${user._id}`);
        console.log(res);
        res.data.role === "seller" ? setIsSeller(true) : setIsSeller(false);
        res.data.role === "admin" ? setAdmin(true) : setAdmin(false);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [isSeller, user]);

  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="proName">Online Auction System</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>

          {isSeller && (
            <li className="topListItem">
              <Link className="link" to="/write">
                POST
              </Link>
            </li>
          )}
          {user && (
            <li className="topListItem">
              <Link className="link" to="/join">
                JOIN
              </Link>
            </li>
          )}

          {admin ? (
            <li className="topListItem">
              <Link className="link" to="/winner">
                POST WINNER
              </Link>
            </li>
          ) : (
            <li className="topListItem">
              <Link className="link" to="/winner">
                WINNERS
              </Link>
            </li>
          )}

          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
