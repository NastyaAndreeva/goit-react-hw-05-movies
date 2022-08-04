import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import {
  SearchBarInput,
  SearchBarForm,
  SearchBarButton,
  SearchBarheader,
  SearchBarButtonLabel,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit, value }) => {
  const handleSubmit = ({ searchQuery }) => {
    // I decided to leave this code as I prefer toast to ErrorMessage. I hope it is not a critical mistake.
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter search query.');
    }
    onSubmit(searchQuery);
  };

  return (
    <SearchBarheader>
      <Formik initialValues={{ searchQuery: value }} onSubmit={handleSubmit}>
        <SearchBarForm>
          <SearchBarInput type="text" name="searchQuery" />
          <SearchBarButton type="submit">
            <SearchBarButtonLabel />
            <ImSearch />
          </SearchBarButton>
        </SearchBarForm>
      </Formik>
    </SearchBarheader>
  );
};
