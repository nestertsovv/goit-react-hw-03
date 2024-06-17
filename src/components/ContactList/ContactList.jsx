import { Contact } from "components";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
