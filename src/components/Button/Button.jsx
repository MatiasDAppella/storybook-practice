import PropTypes from 'prop-types';

import "./Button.css";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({ children, type, onClick }) => {
  return <button onClick={onClick} className={getStyles(type)}>{children}</button>
};

Button.PropTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"])
}

export default Button;