import PropTypes from 'prop-types';
import Button from '../Button';

import './Header.css';

const getStyles = (...args) => ["header", ...args].filter(Boolean).join(" ");

const Header = ({ navigation, type }) => {
  return <header className={getStyles(type)}>
    <nav>
      {navigation.map(e => <Button type="tertiary">{e.content}</Button>)}
    </nav>
  </header>
};

Header.PropTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }))
};

export default Header;