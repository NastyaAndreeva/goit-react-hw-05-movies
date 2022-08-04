import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieReviews } from 'api/fetchMovie';
import { ReviewsList } from 'components/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const movieId = Number(location.state.id);

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await getMovieReviews(movieId);
      setReviews(results);
    };
    getReviews();
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
