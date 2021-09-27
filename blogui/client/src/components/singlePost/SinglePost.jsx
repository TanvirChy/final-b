import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const locationr = useLocation();
  const path = locationr.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");

  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      // console.log(res)
      setPost(res.data);
      setTitle(res.data.title);
      setTime(res.data.time);
      setPrice(res.data.price);
      setLocation(res.data.location)
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
         username: user.username, title,time,price,location ,desc 
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Auhor:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}{" "}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={time}
            className="singlePostDescInput"
            onChange={(e) => setTime(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{time}</p>
        )}
        {updateMode ? (
          <textarea
            value={price}
            className="singlePostDescInput"
            onChange={(e) => setPrice(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{price}</p>
        )}
        {updateMode ? (
          <textarea
            value={location}
            className="singlePostDescInput"
            onChange={(e) => setLocation(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{location}</p>
        )}
        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
        )}
        
      </div>
    </div>
  );
}
