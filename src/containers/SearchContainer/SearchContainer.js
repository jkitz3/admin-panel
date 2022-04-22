import { SearchSection } from "../../features/adminPanel/components";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchValue,
  clearSearchValue,
  searchByPressEnter,
} from "../../actionCreators";
import { getSearchValue } from "../../selectors";
import { ENTER } from "../../constants/keyCodes";

export const SearchContainer = () => {
  const searchValue = useSelector(getSearchValue);
  const dispatch = useDispatch();

  const handleSearch = ({ target: { value } }) => {
    dispatch(setSearchValue(value));
  };

  const handleReset = () => {
    dispatch(clearSearchValue());
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ENTER) {
      dispatch(searchByPressEnter(searchValue));
    }
  };

  return (
    <SearchSection
      value={searchValue}
      onChange={handleSearch}
      onReset={handleReset}
      onKeyDown={handleKeyDown}
    ></SearchSection>
  );
};
