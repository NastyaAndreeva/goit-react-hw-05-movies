import { ReviewsListStyled } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListStyled>
      {reviews.slice(0, 19).map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>

          <p>{content}</p>
        </li>
      ))}
    </ReviewsListStyled>
  );
};
