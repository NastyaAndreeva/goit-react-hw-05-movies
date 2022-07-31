import catImg from './404.jpg';
import { Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <Title>The page was not found</Title>

      <div>
        <img src={catImg} alt="not found" />
      </div>
    </>
  );
};

export default NotFoundPage;
