import { useEffect, useState } from "react";
import "./styles/reset.css";
import s from "./App.module.css";
import contactsArr from "./data/contacts.json";
import { ContactForm, SearchBox, ContactList } from "components";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", contactsArr);
  const [searchQuery, setSearchQuery] = useState("");

  const createContact = (name, number) => {
    console.log(name, number);
    const contactObj = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevState) => [...prevState, contactObj]);
  };

  const onDelete = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const onSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      {contacts.length > 0 && <SearchBox onSearch={onSearch} />}
      {contacts.length > 0 && (
        <ContactList contacts={searchContacts} onDelete={onDelete} />
      )}
      {contacts.length === 0 && <div>There is no contacts</div>}
      {contacts.length !== 0 && searchContacts.length === 0 && (
        <div>
          Not find todo width <span className={s.empty}>{searchQuery}</span>
        </div>
      )}
    </div>
  );
}

export default App;
