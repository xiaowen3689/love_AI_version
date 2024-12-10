import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Love Match</h1>
      <p className={styles.subtitle}>AI智能情侣契合度测试</p>
    </header>
  );
}

export default Header; 