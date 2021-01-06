import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../hooks/Auth';
import { Container } from './styles';
import { api } from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface Incidents {
  id: number;
  title: string;
  description: string;
  value: string;
}

export const Dashboard: React.FC = () => {
  const { signOut, ngo, token } = useAuth();
  const [incidents, setIncidents] = useState<Incidents[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    const errorFunction = (err: Error): void => {
      addToast({
        title: 'error',
        type: 'error',
        description: err.message,
      });
      if (err.message === 'Request failed with status code 401') {
        signOut();
      }
    };

    api
      .get('incidents', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setIncidents(res.data))
      .catch((err) => errorFunction(err));
  }, [token, addToast, signOut]);

  async function handleDeleteIncident(id: number): Promise<void> {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIncidents(incidents.filter((p) => p.id !== id));
    } catch (err) {
      addToast({
        title: 'Error',
        type: 'error',
        description: err.message,
      });
    }
  }
  return (
    <Container>
      <header>
        <span>
          Welcome, <strong>{ngo.name}</strong>{' '}
        </span>
        <Link to="/dashboard/new_incident" className="button">
          Register a new incident
        </Link>
        <button type="button" onClick={signOut}>
          <FiPower size={18} color="e02041" />
        </button>
      </header>

      <h1>Registered incidents</h1>
      <ul>
        {incidents.map((i) => (
          <li key={i.id}>
            <strong>INCIDENT:</strong>
            <p>{i.title}</p>

            <strong>DESCRIPTION</strong>
            <p>{i.description}</p>

            <strong>VALUE:</strong>
            <p>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(parseFloat(i.value))}
            </p>

            <button type="button" onClick={() => handleDeleteIncident(i.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
