import { TiUser, TiPhone } from "react-icons/ti";
import s from "./Contact.module.css";

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
      <div>
        <span>
          <TiUser />
          {name}
        </span>
        <span>
          <TiPhone />
          {number}
        </span>
      </div>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
