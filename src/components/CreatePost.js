// CreatePost.js
import React, { useState } from "react";

const CreatePost = () => {
  // State to manage form input values
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the post data to your backend or perform any other action
    console.log("New Post Data:", { title, content });
    // Reset form fields after submission
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
