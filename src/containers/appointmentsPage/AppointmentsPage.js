import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
// import { Tile } from "../../components/tile/Tile";

export const AppointmentsPage = (props) => {
  // appointments={appointments}
  // addAppointment={handleAddAppointment}
  // contacts={contacts}
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !contact || !date || !time) {
      return;
    }
    console.log(`Contact is ${contact}`)
    props.addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={props.appointments} />
      </section>
    </div>
  );
};
