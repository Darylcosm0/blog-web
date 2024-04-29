import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Placeholder content for blog posts
  const blogPosts = [
    { id: 1, title: 'Placeholder Title 1', date: 'April 1, 2024', excerpt: 'Placeholder excerpt for the first blog post.' },
    { id: 2, title: 'Placeholder Title 2', date: 'April 5, 2024', excerpt: 'Placeholder excerpt for the second blog post.' },
    { id: 3, title: 'Placeholder Title 3', date: 'April 10, 2024', excerpt: 'Placeholder excerpt for the third blog post.' },
  ];

  return (
    <div className="container">
      <h1>Welcome to Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link to={`/posts/${post.id}`} className="read-more">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
