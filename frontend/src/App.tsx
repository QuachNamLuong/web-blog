import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import styles from './App.module.css';
import BlogList from './components/blog-list/blog-list';


const App: React.FC = () => {
  return (
    <div className="container">
      <Header />

      {/* Blog List */}
      <main className="main-content">
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>Hành trình Code & Công nghệ</div>
            <h1 className={styles.title}>
              Khám phá Thế giới <br /> <span>Lập trình Hiện đại</span>
            </h1>
            <p className={styles.subtitle}>
              Học hỏi, chia sẻ kiến thức và cập nhật những xu hướng Frontend,
              Backend và AI mới nhất mỗi ngày từ cộng đồng Dev yêu nghề.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>Khám phá bài viết</button>
              <button className={styles.btnSecondary}>Tìm hiểu về tôi →</button>
            </div>
          </div>
        </section>

        <h2 className="section-title">Bài viết mới nhất</h2>
        <BlogList />
      </main>

      <Footer />
    </div>
  );
};

export default App;
