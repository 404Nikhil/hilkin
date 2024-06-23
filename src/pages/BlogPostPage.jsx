import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const md = await import(`../../mds/blog/${id}.md?raw`);
        setContent(md.default);
        setFadeIn(true);

        const post = blogPosts.find(post => post.id === id);
        if (post) {
          document.title = `${post.title}`; 
        } else {
          document.title = 'hilkin • post not found';
        }
      } catch (error) {
        setContent('# Post not found');
        setFadeIn(true);
        document.title = 'hilkin • post not found'; 
      }
    };

    loadContent();
  }, [id]);

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
      {content && <Layout content={content} />}
    </div>
  );
};

export default BlogPostPage;
