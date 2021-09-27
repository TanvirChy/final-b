import axios from "axios";
import React, { useState } from "react";

const WinnerForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWinner = {
      name,
      desc,
      email
    };
    try {
      await axios.post("/winners", newWinner);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name:"
              value={name}
              autoFocus={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter Enter:"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Enter:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WinnerForm;
