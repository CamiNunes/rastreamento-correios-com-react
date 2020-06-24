import React, { useState } from 'react';
import TrackingEvents from './components/TrackingEvents';

const [events, setEvents] = useState([]);

function App() {
  const submitHandler = (event) =>{
    event.preventDefault();

    //pegar dados do formulário

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
      .then(console.log)
      .catch(console.error);

      /*.then(response => response.json())
      .then(data => {
        const events = data.events || [];
        setEvents(events);
      })
      .catch(console.error);*/
  };

  return (
    <div className="container mt-5">
      <h1>Integração com os Correios</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>      
        <button type="submit" className="btn btn-success">Consultar</button>
      </form>
      
    </div>
  );
}

export default App;
