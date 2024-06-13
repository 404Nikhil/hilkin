import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "../index.css";

export default function BlogPage() {
  const [fade, setFade] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    setFade("fade-out");

    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        navigate(path);
        setVisible(true);
        setFade("fade-in");
      }, 250); 
    }, 250); 
  };

  useEffect(() => {
    if (!visible) {
      setFade("fade-in");
    }
  }, [visible]);

  return (
    <div className={`text-3xl font-bold flex flex-col justify-center items-center lg:p-8 ${fade}`}>
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
