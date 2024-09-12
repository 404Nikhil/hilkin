import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import { expressionPosts } from '../data/expressionPosts';

const ExpressionPostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const md = await import(`../../mds/expression/${id}.md?raw`);
        setContent(md.default);
        setFadeIn(true);

        const post = expressionPosts.find(post => post.id === id);
        if (post) {
          document.title = `${post.title}`;
        } else {
          document.title = 'Nikhil • post not found';
        }
      } catch (error) {
        setContent('# Post not found');
        setFadeIn(true);
        document.title = 'Nikhil • post not found';
      }
    };

    loadContent();
  }, [id]);

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
      {content && (
        <div className="poem-container">
          <Layout content={content} />
        </div>
      )}
    </div>
  );
};

export default ExpressionPostPage;
