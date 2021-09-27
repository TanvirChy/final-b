import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import "./chatsection.css";

const Join = () => {
  const { user } = useContext(Context);
  const [name, setName] = useState(user.username);
  const [room, setRoom] = useState("");

  return (
    <div className="chatWraper">
      <div className="join">
        <div className="join-form">
          <input
            placeholder="name"
            value={user.username}
            onChange={(e) => setName(e.target.value)}
          />
          <input placeholder="room" onChange={(e) => setRoom(e.target.value)} />
          <Link to={`/chat?name=${name}&room=${room}`}>Join</Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
