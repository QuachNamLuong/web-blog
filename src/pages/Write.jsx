import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/upload", formData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!title.trim() || !value.trim() || !cat) {
      alert("Vui lòng nhập đầy đủ tiêu đề, nội dung và chọn category.");
      return;
    }

    setLoading(true);
    try {
      let imgUrl = state?.img || "";
      if (file) imgUrl = await upload();

      if (state) {
        await axios.put(
          `/api/posts/${state.id}`,
          { title, desc: value, cat, img: imgUrl },
          { withCredentials: true },
        );
      } else {
        await axios.post(
          `/api/posts/`,
          {
            title,
            desc: value,
            cat,
            img: imgUrl,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          { withCredentials: true },
        );
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ];

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            {file ? file.name : "Upload Image"}
          </label>
          <div className="buttons">
            <button type="button" disabled={loading}>
              Save as a draft
            </button>
            <button type="button" onClick={handleClick} disabled={loading}>
              {loading ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          {categories.map((c) => (
            <div className="cat" key={c}>
              <input
                type="radio"
                checked={cat === c}
                name="cat"
                value={c}
                id={c}
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Write;
