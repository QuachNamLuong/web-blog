import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // Dummy data for sidebar
  const dummyPosts = [
    {
      id: 1,
      title: "The Beauty of Modern Art",
      desc: "Art is a diverse range of human activity...",
      img: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cat: "art"
    },
    {
      id: 2,
      title: "Scientific Discoveries of 2024",
      desc: "Science is a systematic enterprise...",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cat: "science"
    },
    {
      id: 3,
      title: "The Future of Technology",
      desc: "Technology is the application...",
      img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cat: "technology"
    },
  ];

  const displayPosts = posts.length > 0 
    ? posts 
    : dummyPosts.filter(p => p.cat === cat || !cat);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {displayPosts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img.includes("https://") ? post.img : `../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className="link" to={`/post/${post.id}`}>
             <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
