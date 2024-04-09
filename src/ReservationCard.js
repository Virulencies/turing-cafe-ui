import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
      <h2>{reservation.name}</h2>
      <p>Date: {reservation.date}</p>
      <p>Time: {reservation.time}</p>
      <p>Number of guests: {reservation.numberOfGuests}</p>
      <button>Cancel</button>
    </div>
  );
}

export default ReservationCard;