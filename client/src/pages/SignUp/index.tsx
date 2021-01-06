import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Container, StateField } from './styles';
import { Select } from '../../components/Select';
import Imput from '../../components/Inputs';
import Button from '../../components/Button';
import { getValidationErrors } from '../../utils/getValidationErros';
import { api } from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface IBGEUFResponse {
  sigla: string;
  nome: string;
}

interface IBGECityResponse {
  nome: string;
}
interface ObjectSelect {
  label: string;
  value: string;
}

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [cities, setCities] = useState<ObjectSelect[]>([]);
  const [ufs, setUfs] = useState<ObjectSelect[]>([]);
  const [selectedCity, setSelectedCity] = useState<ObjectSelect>(
    {} as ObjectSelect,
  );
  const [selectedUf, setSelectedUf] = useState<ObjectSelect>(
    {} as ObjectSelect,
  );
  const [UF, setUf] = useState('0');
  const [city, setCity] = useState('0');

  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    const options: ObjectSelect[] = [];
    api
      .get<IBGEUFResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
      )
      .then((response) => {
        response.data.forEach((uf) => {
          const value = {
            value: uf.sigla,
            label: uf.nome,
          };

          options.push(value);
        });
      });
    setUfs(options);
  }, []);

  useEffect(() => {
    if (!selectedUf.value) {
      return;
    }
    setUf(selectedUf.value);
    const options: ObjectSelect[] = [];

    api
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.value}/municipios`,
      )
      .then((response) => {
        response.data.forEach((citys) => {
          const value = {
            value: citys.nome,
            label: citys.nome,
          };
          options.push(value);
        });

        setCities(options);
      });
  }, [selectedUf, UF]);
  useEffect(() => {
    setCity(selectedCity.value);
  }, [city, selectedCity]);

  const hundleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('name is required'),
          email: Yup.string().required('email is required').email(),
          password: Yup.string().min(
            6,
            'password must be of minimum 6 characters',
          ),

          whatsapp: Yup.number().required(),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        if (!(city && UF)) {
          throw new Error('invalid City/State');
        }
        const info = { ...data, uf: UF, city };
        await api.post('ngo', info);
        addToast({
          title: 'Congratulations',
          type: 'success',
          description: 'Welcome, new hero',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Error',
          description: 'error when registering a new hero',
          type: 'error',
        });
      }
    },
    [UF, city, addToast, history],
  );

  return (
    <>
      <Container>
        <Form onSubmit={hundleSubmit} ref={formRef}>
          <h1> Register your NGO </h1>
          <Imput icon={FiUser} name="name" placeholder="Name" />
          <Imput icon={FiMail} name="email" placeholder="E-mail" />
          <Imput
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Imput icon={FaWhatsapp} name="whatsapp" placeholder="Whatsapp" />

          <StateField>
            <Select name="UF" data={ufs} handle={setSelectedUf} />
            <Select name="City" data={cities} handle={setSelectedCity} />
          </StateField>

          <Button type="submit">Sign Up</Button>
        </Form>

        <Link to="/login">
          <FiArrowLeft />
          Back to Log in
        </Link>
      </Container>
    </>
  );
};
