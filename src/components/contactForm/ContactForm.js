import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label><br />
      <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} /><br />
      <label htmlFor='phone'>Phone Number</label>
      <input type='text' id='phone' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9/]*$' /><br />
      <label htmlFor='email'>Email Address</label>
      <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} /><br />
      <input type='submit' value='➕ Add Contact' />
    </form>
    </>
  );
};

