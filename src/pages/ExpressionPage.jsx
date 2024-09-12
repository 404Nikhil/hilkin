import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { expressionPosts } from '../data/expressionPosts';

const ExpressionPage = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    document.title = 'Nikhil • notes';
    setFadeIn(true);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
<div className="text-2xl text-[#5D7DA5] font-bold flex flex-col justify-center items-center p-8">
  <h1>Notes</h1>
  <ul className="lg:w-1/2 w-full">
    {expressionPosts.map((post) => (
      <li key={post.id} className="my-8 flex items-center justify-between w-full">
        <div className="flex items-center">
          <span className="text-sm text-[#d4d4d4] mr-4">{post.date}</span>
          <Link
            to={`/expression/post/${post.id}`}
            onClick={(e) => handleClick(e, `/expression/post/${post.id}`)}
            className='text-[#5D7DA5] text-[18px] flex-grow'
          >
            {post.title}
          </Link>
        </div>
        <span className="ml-4 hidden sm:block text-[16px] text-[#d4d4d4]">{post.status}</span>
      </li>
    ))}
  </ul>
</div>


    </div>
  );
};

export default ExpressionPage;
