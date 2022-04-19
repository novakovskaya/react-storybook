import { useState } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Toggle from '../Toggle';
import styles from './AppBar.module.css';

const AppBar = ({ navItems, logoImage, minimized = false }) => {
  const [isMinimized, setIsMinimized] = useState(minimized);
  const toggle = () => setIsMinimized(state => !state);

  return (
    <div
      className={`${styles.container} ${isMinimized ? styles.minimized : ''}`}
    >
      <div className={styles.logoThumb}>
        <Logo imageUrl={logoImage} />
      </div>
      <div className={styles.content}>
        <Toggle reversed={isMinimized} onClick={toggle} />
        <Navigation items={navItems} />
      </div>
    </div>
  );
};

export default AppBar;
