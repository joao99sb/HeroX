import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container } from './styles';
import { api } from '../../services/api';
import { useToast } from '../../hooks/Toast';
import { useAuth } from '../../hooks/Auth';
import Input from '../../components/Inputs';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import { getValidationErrors } from '../../utils/getValidationErros';

export const NewIncident: React.FC = () => {
  const [value, setValue] = useState('');
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { signOut, token } = useAuth();
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
      .catch((err) => errorFunction(err));
  }, [token, addToast, signOut]);

  function valueFormat(e: React.ChangeEvent<HTMLInputElement>): void {
    let money: string = e.target.value;
    if (/,/.test(money)) {
      money = money.replace(',', '.');
    }

    setValue(money);
  }

  const handleNewIncident = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('title is required'),
          description: Yup.string().required('description is required'),
          value: Yup.string().required('value is required'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const checkValue = /^\d{1,}\.\d{2}$/;

        if (!checkValue.test(value)) {
          throw new Error('Error in value format');
        }

        api.post('/incidents', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        history.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Error',
          description: err.message,
          type: 'error',
        });
      }
    },
    [addToast, history, value, token],
  );

  return (
    <Container>
      <div className="content">
        <section>
          <h1>Register new case</h1>
          <p>Describe the case in detail to find a hero to solve</p>
          <Link to="/dashboard" className="link">
            <FiArrowLeft />
            back to home
          </Link>
        </section>
        <Form onSubmit={handleNewIncident} ref={formRef}>
          <Input name="title" type="text" placeholder="Title of case" />

          <TextArea name="description" placeholder="Description" />

          <Input
            name="value"
            id="value"
            type="text"
            onChange={valueFormat}
            value={value}
            placeholder="Value of case"
          />

          <Button className="button" type="submit">
            register
          </Button>
        </Form>
      </div>
    </Container>
  );
};
