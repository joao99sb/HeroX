import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { ToastContainer } from '../components/ToastContainer';

interface IToastContextData {
  addToast(messages: Omit<IToastMessages, 'id'>): void;
  removeToast(id: string): void;
}
export interface IToastMessages {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessages[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessages, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((states) => [...states, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages((states) => states.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider ');
  }

  return context;
}
