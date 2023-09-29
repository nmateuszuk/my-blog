import React from "react";
import "./write.css";
import { useState } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify({
      title: title,
      body: body,
      imageLink: imageLink,
    }));
    try {
      let res = await fetch("/api/post/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          imageLink: imageLink,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setBody("");
        setImageLink("");
        setMessage("Post created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div className="writeFormGroup">
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            type="text"
            value={title}
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput writeText"
            type="text"
            value={body}
            placeholder="Tell your story..."
            autoFocus={true}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <input
            className="writeImageLink writeImageLink"
            type="text"
            value={imageLink}
            placeholder="Post image link"
            onChange={(e) => setImageLink(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
