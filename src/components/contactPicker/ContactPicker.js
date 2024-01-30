import React from "react";

export const ContactPicker = (props) => {
  // contacts={contacts} contact={contact} setContact={setContact}
  return (
    <>
    <select name='contact' onChange={(e) => {props.setContact(e.target.value); console.log(`LOOK AT ME: ${e.target.value}`)}}>
      <option value="">Select a contact</option>
      {props.contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>
      })}
    </select>
    </>
  );
};
