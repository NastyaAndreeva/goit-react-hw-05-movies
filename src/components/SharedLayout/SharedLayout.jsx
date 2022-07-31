import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Appbar } from './AppBar';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
