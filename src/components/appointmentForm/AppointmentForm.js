import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
          <label htmlFor="title">Appointment Title</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="contact">Contact</label>
          <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            min={getTodayString()}
          />
          <br />
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <br />
          <input type="submit" value="➕ Add Appointment" />
        </form>
    </>
  );
};
