import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export function HomePage(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    history.push('/login');
  }, [history]);

  return (
    <>
      <Typography variant="h1" align="center">
        Carregando...
      </Typography>
    </>
  );
}
