import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Card } from './styles';

interface IResponseState {
  info: {
    title: string;
    description: string;
    value: string;
    ngo: {
      city: string;
      email: string;
      id: string;
      name: string;
      uf: string;
      whatsapp: string;
    };
  };
}

export const Incident: React.FC = () => {
  const [items, setItems] = useState(1);

  const params = useLocation<IResponseState>();
  const { info } = params.state;

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft />
        Back To Home Page
      </Link>
      <Form>
        <Card>
          <h1>{info.title}</h1>
          <div className="first">
            <p>Ngo:&nbsp; {info.ngo.name}</p>
            <p>Value:&nbsp; {info.value}</p>
          </div>
          <div className="description">
            <h2>Description:</h2>
            <hr
              style={{
                height: '1px',
                border: 'none',
                color: '#333',
                background: '#333',
                marginBottom: '10px',
              }}
            />
            <p>{info.description}</p>
            <hr
              style={{
                height: '1px',
                border: 'none',
                color: '#333',
                background: '#333',
                marginTop: '10px',
              }}
            />
          </div>
          <div className="informations">
            <p>Whatsapp:&nbsp; {info.ngo.whatsapp}</p>
            <p>Email:&nbsp; {info.ngo.email}</p>
          </div>
        </Card>
      </Form>
    </Container>
  );
};
