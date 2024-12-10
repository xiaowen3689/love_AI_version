import { useNavigate } from 'react-router-dom';
import styles from './StartButton.module.css';

function StartButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test');
  };

  return (
    <button 
      className={styles.startButton}
      onClick={handleClick}
    >
      开始测试
    </button>
  );
}

export default StartButton; 