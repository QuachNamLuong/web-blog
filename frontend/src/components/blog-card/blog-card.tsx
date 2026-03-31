import styles from "./blog-card.module.css";

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function BlogCard({ category, title, excerpt, date, author, image }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.date}>{date}</span>
        </div>
        
        <h3 className={styles.title}>
          <a href="#">{title}</a>
        </h3>
        
        <p className={styles.excerpt}>{excerpt}</p>
        
        <div className={styles.footer}>
          <a href="#" className={styles.readMore}>
            Đọc thêm 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}