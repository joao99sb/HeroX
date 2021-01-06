import React from 'react';
import { RouteProps, Route as DOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface IRoute extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const Route: React.FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { ngo } = useAuth();

  return (
    <DOMRoute
      {...props}
      render={() => {
        return isPrivate === !!ngo ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/dashboard' }} />
        );
      }}
    />
  );
};
