import "./CheckboxRadio.module.css";

function CheckboxRadio(props) {
  const {} = props;
  return (
    <>
      <div className="block ui-kit__block ui-kit__block_checkbox-radio">
        <div className="block__title">Checkbox</div>
        <div className="block__content block__content_checkbox-radio">
          <div className="checkbox block__checkbox">
            <div className="checkbox__content">
              <input
                className="checkbox__input"
                type="checkbox"
                checked="checked"
                id="checkbox_1"
              />
              <label className="checkbox__container" for="checkbox_1"></label>
            </div>
          </div>
          <div className="checkbox block__checkbox">
            <div className="checkbox__content">
              <input
                className="checkbox__input"
                type="checkbox"
                id="checkbox_2"
              />
              <label className="checkbox__container" for="checkbox_2"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="block ui-kit__block ui-kit__block_checkbox-radio">
        <div className="block__title">Radio</div>
        <div className="block__content block__content_checkbox-radio">
          <div className="radio block__radio">
            <div className="radio__content">
              <input
                className="radio__input"
                name="radio-name"
                type="radio"
                id="radio_1"
              />
              <label className="radio__container" for="radio_1"></label>
            </div>
          </div>
          <div className="radio block__radio">
            <div className="radio__content">
              <input
                className="radio__input"
                name="radio-name"
                type="radio"
                checked="checked"
                id="radio_2"
              />
              <label className="radio__container" for="radio_2"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckboxRadio;
