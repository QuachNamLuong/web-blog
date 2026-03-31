import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>My Blog</h1>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Bài viết</a></li>
          <li><a href="#">Về tôi</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
        <div className={styles.authButtons}>
          <button className={styles.btnLogin}>Đăng nhập</button>
          <button className={styles.btnRegister}>Đăng ký</button>
        </div>
      </nav>
    </header>
  );
}