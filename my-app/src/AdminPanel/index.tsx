import './admin.css'
import { insertAgendaData } from '../database/agendaInsertDB.tsx';
import { useState } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router';

function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    

    try {
      const result = await insertAgendaData(formData);
      console.log('Success:', result);
      setMessage('Evenement succesvol toegevoegd! over 2 sec ben je terug op agenda pagina.');
      form.reset();
      setTimeout(() => {
        console.log('Redirecting to /agenda');  
        navigate('/agenda');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Er is een fout opgetreden.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="Container">
      <div className="contentContainer">
        <div className="buttonBox">
          <div className="formContainer">
            <form onSubmit={handleSubmit} className='agendaForm'>
            
              <label htmlFor="evenement">Evenement:</label>
              <input type="text" id="evenement" name="evenement" required />
              <br /> <br />
              
              <label htmlFor="datum">Datum:</label>
              <input type="date" id="datum" name="datum" required />
              <br /> <br />
              
              <label htmlFor="tijd">Tijd:</label>
              <input type="time" step={60} id="tijd" name="tijd" required />
              <br /> <br />
              
              <label htmlFor="info">Info:</label>
              <br />
              <textarea id="info" name="info" required></textarea>
              <br /> <br />

              <label htmlFor="logo">Logo (.png/.jpeg only):</label>
              <input type="file" id="logo" name="logo" accept=".png,.jpeg,.jpg" required />
              <br /> <br />
              
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Uploaden...' : 'Submit'}
              </button>

              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin