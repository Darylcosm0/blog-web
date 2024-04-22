import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Both title and content are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate post creation
      await createPost({ title, content });

      setSuccess(true);
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to create post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate successful post creation
        resolve();
      }, 1000);
    });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Post created successfully!</div>}
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
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
