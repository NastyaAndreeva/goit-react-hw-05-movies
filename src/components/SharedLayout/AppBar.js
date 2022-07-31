import { Header, Link } from './SharedLayout.styled';

export const Appbar = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};
