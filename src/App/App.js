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



  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        {/* Form will go here in Iteration 2 */}
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