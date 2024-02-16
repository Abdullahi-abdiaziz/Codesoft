import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="devider"></div>
      <footer id="footer" className="flex">
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>

        <p>@ 2023 All rights Reversed</p>
      </footer>
    </>
  );
};

export default Footer;
