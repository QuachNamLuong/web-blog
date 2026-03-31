
import BlogCard from '../blog-card/blog-card';
import styles from "./blog-list.module.css";

// Dữ liệu mẫu (Sau này bạn sẽ fetch từ API)
const DUMMY_POSTS = [
  {
    id: 1,
    category: "React",
    title: "Cách tối ưu Performance trong React 19",
    excerpt: "Những thay đổi quan trọng giúp ứng dụng của bạn chạy mượt mà hơn mà không cần dùng nhiều useMemo...",
    date: "25/03/2026",
    author: "Hoang Quach",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: 2,
    category: "TypeScript",
    title: "Mastering TypeScript Generics",
    excerpt: "Hiểu sâu về Generics để viết code linh hoạt và an toàn hơn trong các dự án lớn.",
    date: "22/03/2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
  },
  {
    id: 3,
    category: "CSS",
    title: "Grid vs Flexbox: Khi nào nên dùng cái nào?",
    excerpt: "So sánh chi tiết hai công nghệ dàn trang mạnh mẽ nhất của CSS hiện đại.",
    date: "20/03/2026",
    author: "Design Team",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80"
  },
  {
    id: 4,
    category: "Tools",
    title: "Tại sao Vite lại thống trị giới Frontend?",
    excerpt: "Tốc độ build cực nhanh và trải nghiệm lập trình tuyệt vời là lý do Vite đánh bại Webpack.",
    date: "18/03/2026",
    author: "Gemini",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80"
  }
];

export default function BlogList() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Bài viết mới nhất</h2>
          <p className={styles.subtitle}>Cập nhật kiến thức lập trình mỗi ngày cùng chúng tôi.</p>
        </div>

        <div className={styles.grid}>
          {DUMMY_POSTS.map((post) => (
            <BlogCard 
              key={post.id}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              image={post.image}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.btnLoadMore}>Xem thêm bài viết</button>
        </div>
      </div>
    </section>
  );
}