import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Test.module.css';

function Test() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    person1: {
      age: '',
      personality: '',
      future: '',
      money: '',
      schedule: '',
      social: ''
    },
    person2: {
      age: '',
      personality: '',
      future: '',
      money: '',
      schedule: '',
      social: ''
    }
  });

  const handleInputChange = (person, field, value) => {
    setFormData(prev => ({
      ...prev,
      [person]: {
        ...prev[person],
        [field]: value
      }
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    navigate('/result', { state: { formData } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        步骤 {step}/2
      </div>
      
      {step === 1 && (
        <div className={styles.step}>
          <h2>第一位测试者</h2>
          <div className={styles.form}>
            <label>
              年龄:
              <input
                type="number"
                value={formData.person1.age}
                onChange={(e) => handleInputChange('person1', 'age', e.target.value)}
                min="18"
                max="100"
              />
            </label>
            <label>
              性格特点:
              <select
                value={formData.person1.personality}
                onChange={(e) => handleInputChange('person1', 'personality', e.target.value)}
              >
                <option value="">请选择</option>
                <option value="outgoing">外向开朗</option>
                <option value="steady">稳重踏实</option>
                <option value="careful">谨慎细心</option>
                <option value="creative">创新灵活</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h2>第二位测试者</h2>
          <div className={styles.form}>
            <label>
              年龄:
              <input
                type="number"
                value={formData.person2.age}
                onChange={(e) => handleInputChange('person2', 'age', e.target.value)}
                min="18"
                max="100"
              />
            </label>
            <label>
              性格特点:
              <select
                value={formData.person2.personality}
                onChange={(e) => handleInputChange('person2', 'personality', e.target.value)}
              >
                <option value="">请选择</option>
                <option value="outgoing">外向开朗</option>
                <option value="steady">稳重踏实</option>
                <option value="careful">谨慎细心</option>
                <option value="creative">创新灵活</option>
              </select>
            </label>
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button onClick={handleBack}>
          {step === 1 ? '返回首页' : '上一步'}
        </button>
        <button 
          onClick={step === 2 ? handleSubmit : handleNext} 
          className={styles.primary}
        >
          {step === 2 ? '查看结果' : '下一步'}
        </button>
      </div>
    </div>
  );
}

export default Test; 