import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className="post-list">
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
            <p className="post-excerpt">{post.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
