import "./Input.module.css";

function Input(props) {
  const {
    value,
    isInputBlank = true,
    isInputCorrect = true,
    isInputDisabled = false,
  } = props;

  return (
    <div className="block ui-kit__block ui-kit__block_input">
      <div className="block__title">Input</div>
      <div className="block__content">
        <div className="order-date block__order-date">
          <label className="order-date__title" for="orderDateBlank">
            Дата и время заказа
          </label>
          <div className="order-date__content">
            <input
              className="input order-date__input"
              placeholder="Введите"
              type="text"
              id="orderDateBlank"
              value={props.value}
            />
          </div>
        </div>
        <div className="order-date block__order-date">
          <label className="order-date__title" for="orderDateIncorrect">
            Дата и время заказа
          </label>
          <div className="order-date__content">
            <input
              className="input order-date__input order-date__input_incorrect"
              placeholder="Введите"
              type="text"
              id="orderDateIncorrect"
              value="06.12.2021"
            />
            <button className="button order-date__button button_x-button"></button>
          </div>
        </div>
        <div className="order-date block__order-date">
          <p className="order-date__title">Дата и время заказа</p>
          <div className="order-date__content">
            <input
              className="input order-date__input order-date__input_disabled"
              placeholder="Введите"
              type="text"
              value="06.12.2021"
            />
            <div className="order-date__icon order-date__icon_disabled"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
