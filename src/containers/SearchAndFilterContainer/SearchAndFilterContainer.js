import {
  FilterSection,
  SearchSection,
} from "../../features/adminPanel/components";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchValue,
  clearSearchValue,
  searchByPressEnter,
  setFilterVisibility,
} from "../../actionCreators";
import { getFilterValue } from "../../selectors";
import { ENTER } from "../../constants/keyCodes";

export const SearchAndFilterContainer = () => {
  const { searchFor, isFilterVisible } = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleSearch = ({ target: { name, value } }) => {
    dispatch(setSearchValue({ name, value }));
  };

  const handleReset =
    (name) =>
    ({ target: { value } }) => {
      dispatch(clearSearchValue({ name, value }));
    };

  const handleKeyDown = ({ keyCode, target: { name, value } }) => {
    if (keyCode === ENTER) {
      dispatch(searchByPressEnter({ name, value }));
    }
  };

  const handleFilterVisibility =
    (name) =>
    ({ target: { value } }) => {
      dispatch(setFilterVisibility({ name, value }));
    };

  return (
    <>
      <SearchSection
        value={searchFor || ""}
        name="searchFor"
        onChange={handleSearch}
        onReset={handleReset("searchFor")}
        onKeyDown={handleKeyDown}
        toggleFilter={handleFilterVisibility("isFilterVisible")}
      ></SearchSection>
      {isFilterVisible && <FilterSection />}
    </>
  );
};
