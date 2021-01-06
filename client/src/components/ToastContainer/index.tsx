import React from 'react';
import { useTransition } from 'react-spring';
import { Toast } from './Toast';
import { Container } from './styles';
import { IToastMessages } from '../../hooks/Toast';

interface IToastContainerProps {
  messages: IToastMessages[];
}

export const ToastContainer: React.FC<IToastContainerProps> = ({
  messages,
}) => {
  const messagesAnimation = useTransition(messages, (message) => message.id, {
    from: { transform: 'translate3d(0,-180%,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0%,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-180%,0)', opacity: 0 },
  });

  return (
    <Container>
      {messagesAnimation.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};
