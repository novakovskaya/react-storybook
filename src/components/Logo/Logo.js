import styles from './Logo.module.css';

const Logo = ({ imageUrl, alt = '' }) => {
  return <img className={styles.logo} src={imageUrl} alt={alt} />;
};

export default Logo;
