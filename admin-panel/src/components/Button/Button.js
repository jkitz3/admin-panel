import "./Button.module.css";

function Button() {
  return (
    <div className="block ui-kit__block ui-kit__block_button-block">
      <div className="block__title">Button</div>
      <div className="block__content block__content_button-block">
        <div className="button-block block__button-block">
          <div className="button-block__content">
            <div className="button-block__wrapper">
              <button className="button button_theme_blue button_size_default">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_blue button_size_default">
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_blue button_size_default button_icon_only">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
              </button>
            </div>
            <div className="button-block__wrapper">
              <button className="button button_theme_blue button_size_small">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_blue button_size_small">
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_blue button_size_small button_icon_only">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="button-block block__button-block">
          <div className="button-block__content">
            <div className="button-block__wrapper">
              <button className="button button_theme_link button_size_default">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_link button_size_default">
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_link button_size_default button_icon_only">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
              </button>
            </div>
            <div className="button-block__wrapper">
              <button className="button button_theme_link button_size_small">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_link button_size_small">
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_link button_size_small button_icon_only">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="button-block block__button-block">
          <div className="button-block__content">
            <div className="button-block__wrapper">
              <button className="button button_theme_text button_size_default">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_text button_size_default">
                <span className="button__text">Text here</span>
              </button>
              <button className="button button_theme_text button_size_default button_icon_only">
                <svg
                  className="icon"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" stroke="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
