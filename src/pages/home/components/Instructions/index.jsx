import styles from './Instructions.module.css';

function Instructions() {
  return (
    <div className={styles.instructions}>
      <h2>使用说明</h2>
      <ol className={styles.steps}>
        <li>点击"开始测试"按钮</li>
        <li>填写双方的基本信息</li>
        <li>回答简单的测试问题</li>
        <li>获取AI分析结果</li>
      </ol>
    </div>
  );
}

export default Instructions; 