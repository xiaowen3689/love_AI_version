import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/test');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Love Match</h1>
      <p className={styles.subtitle}>AI智能情侣契合度测试</p>
      
      <button 
        className={styles.startButton}
        onClick={handleStart}
      >
        开始测试
      </button>

      <div className={styles.instructions}>
        <h2>使用说明</h2>
        <ol>
          <li>点击"开始测试"按钮</li>
          <li>填写双方的基本信息</li>
          <li>回答简单的测试问题</li>
          <li>获取AI分析结果</li>
        </ol>
      </div>
    </div>
  );
}

export default Home; 