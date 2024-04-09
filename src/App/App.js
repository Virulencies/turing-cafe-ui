import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import ReservationCard from '../ReservationCard';

function App() {

  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations') // endpoint
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

//form submission handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, //spread/rest here
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReservations([...reservations, formData]);//s/r
    setFormData({
      name: '',
      date: '',
      time: '',
      number: '',
    });
  };



  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date (mm/dd)"
          />
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            placeholder="Time"
          />
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Number of Guests"
          />
          <button type="submit">Make Reservation</button>
        </form>
      </div>
      <div className='resy-container'>
        {reservations.map((reservation, index) => (
          <ReservationCard key={index} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}

export default App; 