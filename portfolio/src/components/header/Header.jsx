import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const lists = ["Home", "Projects", "About", "Contact"];

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <header className="flex">
        <button
          className="menu icon-menu"
          onClick={() => {
            setShowModal(true);
          }}
        />
        <div />
        <nav>
          <ul className="flex">
            {lists.map((list) => {
              return (
                <li key={list}>
                  <Link to={`/${list.toLowerCase()}`}>{list}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="mode"
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );

            setTheme(localStorage.getItem("currentMode"));
          }}
        >
          {theme === "dark" ? (
            <span style={{ color: "orange" }} className="icon-sun"></span>
          ) : (
            <span className="icon-moon-o"></span>
          )}
        </button>
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </header>
      {/* <div className="devider"></div> */}
    </>
  );
};

export default Header;
