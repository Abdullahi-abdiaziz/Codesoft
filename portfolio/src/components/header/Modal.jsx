import { Link } from "react-router-dom";
const Modal = ({ setShowModal }) => {
  const lists = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="fixed">
      <ul className="modal">
        <li>
          <button
            className="icon-close"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </li>
        {lists.map((list) => {
          return (
            <li key={list}>
              <Link
                to={`/${list.toLowerCase()}`}
                onClick={() => {
                  setShowModal(false);
                }}
              >
                {list}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
