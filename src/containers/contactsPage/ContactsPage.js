import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [names, setNames] = useState([]); // used to determine duplicates
  const [nameDup, setNameDup] = useState(false);

  // Load contact names each time contacts changes
  useEffect(() => {
    const newNames = props.contacts.map((contact) => contact.name);
    setNames(newNames);
  }, [props.contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!nameDup) {
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert(`${name} already exists`);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (names.includes(name)) {
      setNameDup(true);
      alert("name already exists"); // do this for now, remove later
    }
  }, [name, names]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
