import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h2>My Blog</h2>
            <p>Chia sẻ kiến thức và đam mê lập trình mỗi ngày.</p>
          </div>
          
          <div className={styles.links}>
            <h3>Khám phá</h3>
            <ul>
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Bài viết</a></li>
              <li><a href="#">Về tôi</a></li>
            </ul>
          </div>
          
          <div className={styles.social}>
            <h3>Kết nối</h3>
            <div className={styles.socialIcons}>
              <a href="#">Facebook</a>
              <a href="#">Github</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  );
}