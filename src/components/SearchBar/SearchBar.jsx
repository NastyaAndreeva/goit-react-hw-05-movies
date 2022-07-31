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

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please, enter search query.');
    }
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <SearchBarheader>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
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
