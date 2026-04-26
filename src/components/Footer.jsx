const LOGO_URL = "https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={LOGO_URL} alt="Lama Blog" />
      <span>
        Made with ♥ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
