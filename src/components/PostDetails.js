// src/components/PostDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
