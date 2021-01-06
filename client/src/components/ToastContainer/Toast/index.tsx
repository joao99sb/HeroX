import React, { useEffect } from 'react';
import {
  FiAlertOctagon,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { Container } from './styles';
import { IToastMessages, useToast } from '../../../hooks/Toast';

interface IToastProps {
  message: IToastMessages;
  style: any;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertOctagon size={24} />,
  success: <FiCheckCircle size={24} />,
};

export const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);

      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong> {message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};
