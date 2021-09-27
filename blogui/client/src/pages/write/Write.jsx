import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");

  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      time,
      price,
      location,
      desc,

    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"

            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            placeholder="When this beat start ?"
            type="text"
            value={time}
            className="writeInput "
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            placeholder="Which Price at Beging..."
            type="text"
            value={price}
            className="writeInput "
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            placeholder="Location..."
            type="text"
            value={location}
            className="writeInput "
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            value={desc}
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
