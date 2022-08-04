import { Header } from './Header';
import { Link } from './Link';

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
