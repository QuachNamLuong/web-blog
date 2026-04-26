import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm('Delete this post?')) return;
    axios.delete(`/api/posts/${id}`)
      .then(() => navigate('/'))
      .catch(() => alert('Delete failed'));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="actions">
        <Link to={`/edit/${post.id}`} className="button">Edit</Link>
        <button onClick={handleDelete} className="button delete">Delete</button>
        <Link to="/" className="button">Back to List</Link>
      </div>
    </div>
  );
}

export default PostDetail;
