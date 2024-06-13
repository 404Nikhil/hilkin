import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../index.css';

const BlogPage = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    document.title = 'hilkin • blog';
    setFadeIn(true);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="text-2xl text-white font-bold flex flex-col justify-center items-center p-8">
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
              <p className="text-sm text-white">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
