import "./Dropdown.module.css";

function Dropdown(props) {
  const { value, isDropdownOpen = false } = props;

  return (
    <div className="block ui-kit__block ui-kit__block_dropdown">
      <div className="block__title">Dropdown</div>
      <div className="block__content">
        <div className="dropdown block__dropdown">
          <div className="dropdown__content">
            <div className="dropdown-block dropdown__wrapper">
              <div className="checkbox-dropdown dropdown-block__checkbox">
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="checkbox_new"
                      />
                      <label className="checkbox__container" for="checkbox_new">
                        Новый
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="checkbox_calc"
                      />
                      <label
                        className="checkbox__container"
                        for="checkbox_calc"
                      >
                        Рассчет
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        checked="checked"
                        id="checkbox_approved"
                      />
                      <label
                        className="checkbox__container"
                        for="checkbox_approved"
                      >
                        Подтвержден
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="checkbox_delayed"
                      />
                      <label
                        className="checkbox__container"
                        for="checkbox_delayed"
                      >
                        Отложен
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="checkbox_completed"
                      />
                      <label
                        className="checkbox__container"
                        for="checkbox_completed"
                      >
                        Выполнен
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkbox-dropdown__item">
                  <div className="checkbox checkbox-dropdown__checkbox">
                    <div className="checkbox__content">
                      <input
                        className="checkbox__input"
                        type="checkbox"
                        id="checkbox_canceled"
                      />
                      <label
                        className="checkbox__container"
                        for="checkbox_canceled"
                      >
                        Отменен
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="radio-dropdown dropdown-block__radio">
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        id="radio_new"
                      />
                      <label className="radio__container" for="radio_new">
                        Новый
                      </label>
                    </div>
                  </div>
                </div>
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        id="radio_calc"
                      />
                      <label className="radio__container" for="radio_calc">
                        Рассчет
                      </label>
                    </div>
                  </div>
                </div>
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        checked="checked"
                        id="radio_approved"
                      />
                      <label className="radio__container" for="radio_approved">
                        Подтвержден
                      </label>
                    </div>
                  </div>
                </div>
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        id="radio_delayed"
                      />
                      <label className="radio__container" for="radio_delayed">
                        Отложен
                      </label>
                    </div>
                  </div>
                </div>
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        id="radio_completed"
                      />
                      <label className="radio__container" for="radio_completed">
                        Выполнен
                      </label>
                    </div>
                  </div>
                </div>
                <div className="radio-dropdown__item">
                  <div className="radio radio-dropdown__radio">
                    <div className="radio__content">
                      <input
                        className="radio__input"
                        name="radio-dropdown"
                        type="radio"
                        id="radio_canceled"
                      />
                      <label className="radio__container" for="radio_canceled">
                        Отменен
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-block dropdown__wrapper">
              <div className="select-page form-block__select-page">
                <span className="select-page__title">Номер страницы</span>
                <input
                  className="input select-page__input"
                  placeholder="Введите номер"
                  type="text"
                  id=""
                  value={props.value}
                />
              </div>
              <div className="delete-record form-block__delete-record">
                <span className="delete-record__title">Удалить n записей?</span>
                <button className="button button_full-width delete-record__button button_theme_link button_size_small">
                  <span className="button__text">Удалить</span>
                </button>
                <button className="button button_full-width delete-record__button button_theme_blue button_size_small">
                  <span className="button__text">Отмена</span>
                </button>
              </div>
              <div className="select-theme form-block__select-theme">
                <span className="select-theme__title">Выберите тему</span>
                <button className="button button_full-width select-theme__button button_theme_link button_size_small">
                  <svg
                    className="icon select-theme__icon select-theme__icon_unpushed"
                    viewBox="0 0 16 16"
                    fill="#459DF5"
                    strok="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="4" stroke="none" />
                    <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                    <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                    <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                    <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                    <path
                      d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                      stroke="none"
                    />
                    <path
                      d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z"
                      stroke="none"
                    />
                    <path
                      d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                      stroke="none"
                    />
                    <path
                      d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                      stroke="none"
                    />
                  </svg>
                  <span className="button__text">Светлая</span>
                </button>
                <button className="button button_full-width select-theme__button button_theme_blue button_size_small">
                  <svg
                    className="icon select-theme__icon select-theme__icon_pushed"
                    viewBox="0 0 16 16"
                    fill="#8055FF"
                    stroke="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      stroke="none"
                    />
                  </svg>
                  <span className="button__text">Темная</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
