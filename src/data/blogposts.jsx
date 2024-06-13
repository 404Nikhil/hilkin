// BlogPost.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import "../index.css";

export default function BlogPost() {
  const { id } = useParams();
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    return () => setFade("fade-out");
  }, []);

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={`text-2xl flex flex-col justify-center items-center p-8 ${fade}`}>
      <h2 className="font-bold">{post.title}</h2>
      <p className="text-stone-400">{post.date}</p>
      <div className="mt-4">{post.content}</div>
    </div>
  );
}
