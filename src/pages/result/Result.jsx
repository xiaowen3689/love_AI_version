import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Result.module.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [matchResult, setMatchResult] = useState({
    score: 0,
    analysis: '',
    description: ''
  });

  useEffect(() => {
    if (!location.state?.formData) {
      navigate('/');
      return;
    }

    const { formData } = location.state;
    const result = calculateMatch(formData);
    setMatchResult(result);
  }, [location.state, navigate]);

  const calculateMatch = (data) => {
    const { person1, person2 } = data;
    let score = 0;
    let factors = [];

    // 计算性格匹配度
    if (person1.personality === person2.personality) {
      score += 20;
      factors.push('性格相似');
    } else if (
      (person1.personality === 'outgoing' && person2.personality === 'steady') ||
      (person1.personality === 'steady' && person2.personality === 'outgoing')
    ) {
      score += 25;
      factors.push('性格互补');
    }

    // 计算生活态度匹配度
    if (person1.future === person2.future) {
      score += 20;
      factors.push('对未来规划一致');
    }
    if (person1.money === person2.money) {
      score += 20;
      factors.push('理财观念相同');
    }
    if (person1.schedule === person2.schedule) {
      score += 15;
      factors.push('作息习惯相同');
    }
    if (person1.social === person2.social) {
      score += 15;
      factors.push('社交偏好一致');
    }

    // 生成分析文字
    const analysis = factors.length > 0 
      ? `你们在${factors.join('、')}等方面都很匹配`
      : '你们有不同的性格和生活方式，可以相互学习';

    // 生成结果描述
    const description = getDescription(score);

    return {
      score,
      analysis,
      description
    };
  };

  const getDescription = (score) => {
    if (score >= 80) return '你们是天生一对！';
    if (score >= 60) return '你们很般配！';
    if (score >= 40) return '你们可以多了解对方！';
    return '珍惜相遇，继续了解！';
  };

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1>测试结果</h1>
      
      <div className={styles.score}>
        <div className={styles.number}>{matchResult.score}%</div>
        <div className={styles.label}>契合度</div>
      </div>

      <div className={styles.analysis}>
        {matchResult.analysis}
      </div>

      <div className={styles.description}>
        {matchResult.description}
      </div>

      <button 
        onClick={handleRetry}
        className={styles.retryButton}
      >
        再测一次
      </button>
    </div>
  );
}

export default Result; 