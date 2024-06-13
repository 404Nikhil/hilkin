import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function PBlogPage() {
  return (
    <div className="text-3xl font-bold flex flex-col justify-center items-center lg:p-8">
      <h1>Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="my-8">
            <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
            <p className="text-sm text-stone-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
