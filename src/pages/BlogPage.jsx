// BlogPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "../index.css";

export default function BlogPage() {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="text-3xl font-bold flex flex-col justify-center items-center p-8">
      <h1>Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="my-8">
            <Link
              to={`/blog/post/${post.id}`}
              onClick={(e) => handleClick(e, `/blog/post/${post.id}`)}
            >
              {post.title}
            </Link>
            <p className="text-sm text-stone-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
