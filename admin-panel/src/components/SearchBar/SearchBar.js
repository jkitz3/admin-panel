import "./SearchBar.module.css";

function SearchBar(props) {
  const {} = props;
  return (
    <div className="block ui-kit__block ui-kit__block_searchbar">
      <div className="block__title">Searchbar</div>
      <div className="block__content">
        <div className="searchbar block__searchbar">
          <div className="searchbar__content">
            <div className="searchbar__icon"></div>
            <input
              className="input searchbar__input"
              placeholder="Номер заказа или ФИО"
              type="text"
              value=""
            />
          </div>
        </div>
        <div className="searchbar block__searchbar">
          <div className="searchbar__content">
            <div className="searchbar__icon"></div>
            <input
              className="input searchbar__input"
              placeholder="Номер заказа или ФИО"
              type="text"
              value="50744"
            />
            <button className="button searchbar__button button_x-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
