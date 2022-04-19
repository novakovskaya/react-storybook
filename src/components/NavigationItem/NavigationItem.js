import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ to, text, icon }) => {
  return (
    <li>
      <NavLink to={to} className={styles.item} activeClassName={styles.active}>
        {icon} {text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
