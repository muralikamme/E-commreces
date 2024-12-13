import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Usecart } from '../contex/Usecontex'; // Access context

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = Usecart();
  navigay=useNavigate()

  return (
    <Route
      {...rest}
      render={() =>
        currentUser ? (
          element
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
