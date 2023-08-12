import "../style/experience.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const [activeDescription, setActiveDescription] = useState(null);
  const [showEyes, setShowEyes] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleToggle = (index) => {
    if (activeDescription === index) {
      setActiveDescription(null);
    } else {
      setActiveDescription(index);
    }
  }

  const handleShowEyesToggle = () => {
    setShowEyes(!showEyes);
    if (!showEyes) {
      setTimeout(() => {
        setShowText(true);
      }, 2000);
    } else {
      setShowText(false);
    }
  }

  return (
    <div className="experience-container">
      <div>
        <h1>{t('title')}</h1>
        <button className="btn" onClick={handleShowEyesToggle}>
          {showEyes ? t('beforeConversion') : t('afterConversion')}
        </button>
      </div>

      {showEyes ? (
        <>
          <div className="eyes-section">
            <div className="eyes-container">
              <div className="oeil"><div className="pupille"></div></div>
              <div className="oeil"><div className="pupille"></div></div>
            </div>
          </div>
          {showText && <p className="text-after-animation">{t('noExperienceText')}</p>}
        </>
      ) : (
        <div className="experience-list">
          <div onClick={() => handleToggle(1)} className="experience-item">
            <p>{t('job1')} {activeDescription === 1 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 1 && <div className="description">
              {t('job1Desc')}
            </div>}
          </div>

          <div onClick={() => handleToggle(2)} className="experience-item">
            <p>{t('job2')} {activeDescription === 2 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 2 && <div className="description">
              {t('job2Desc')}
            </div>}
          </div>

          <div onClick={() => handleToggle(3)} className="experience-item">
            <p>{t('job3')} {activeDescription === 3 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 3 && <div className="description">
              {t('job3Desc')}
            </div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
