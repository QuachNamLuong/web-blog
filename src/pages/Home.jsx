import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// Đưa ra ngoài component để không tạo lại mỗi lần render
const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

// Dummy data dùng khi dev / API chưa có dữ liệu
const dummyPosts = [
  {
    id: 1,
    title: "The Beauty of Modern Art",
    desc: "Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.",
    img: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "art",
  },
  {
    id: 2,
    title: "Scientific Discoveries of 2024",
    desc: "Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.",
    img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "science",
  },
  {
    id: 3,
    title: "The Future of Technology",
    desc: "Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.",
    img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "technology",
  },
  {
    id: 4,
    title: "Cinema and Its Impact",
    desc: "Cinema is a medium of storytelling that uses moving images and sound to create immersive experiences for audiences.",
    img: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "cinema",
  },
  {
    id: 5,
    title: "Design Principles for 2024",
    desc: "Design is the creation of a plan or convention for the construction of an object or a system.",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "design",
  },
  {
    id: 6,
    title: "The Art of Modern Cooking",
    desc: "Food is any substance consumed to provide nutritional support for an organism.",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cat: "food",
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = useLocation().search;

  // Lấy category từ URL, chỉ tính lại khi search đổi
  const currentCat = useMemo(
    () => new URLSearchParams(search).get("cat"),
    [search]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`/api/posts${search}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
        setError(err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  // Fallback về dummy data CHỈ khi có lỗi (không phải khi API trả mảng rỗng hợp lệ)
  const displayPosts = error
    ? currentCat
      ? dummyPosts.filter((p) => p.cat === currentCat)
      : dummyPosts
    : posts;

  if (loading) return <div className="home">Loading...</div>;

  return (
    <div className="home">
      <div className="posts">
        {displayPosts.length === 0 ? (
          <p>Không có bài viết nào.</p>
        ) : (
          displayPosts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img
                  src={
                    post.img?.startsWith("http")
                      ? post.img
                      : `/upload/${post.img}`
                  }
                  alt={post.title}
                />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <Link to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;