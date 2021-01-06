import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Imput from '../../components/Inputs';
import Button from '../../components/Button';
import { getValidationErrors } from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface ISingInData {
  email: string;
  password: string;
}

export const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const hundleSubmit = useCallback(
    async (data: ISingInData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('email required').email('invalid email'),
          password: Yup.string().min(
            6,
            'password must be of minimum 6 characters length error ',
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn(data);

        addToast({
          type: 'success',
          title: 'welcome',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Authentication error',
          description: 'incorrect username or password, please try again',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Link to="/" className="backHome">
        <FiArrowLeft />
        Back to home
      </Link>

      <Form onSubmit={hundleSubmit} ref={formRef}>
        <h1> Wellcome back! </h1>
        <Imput icon={FiMail} placeholder="E-mail" name="email" />
        <Imput
          icon={FiLock}
          type="password"
          name="password"
          placeholder="Senha"
        />

        <Button type="submit">Log in</Button>
      </Form>

      <Link to="signup">
        <FiLogIn />
        Sign Up
      </Link>
    </Container>
  );
};
