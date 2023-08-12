import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../style/competence.css"

function Competence() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [selectedCategory, setSelectedCategory] = useState(t('all'));
  
  const [allSkills, setAllSkills] = useState([
    { category: t('frontend'), skills: ['HTML5','CSS','JavaScript','React','React Native'] },
    { category: t('backend'), skills: ['Node.js', 'Express', 'MongoDB', 'Postman'] },
  ]);

  useEffect(() => {
    if (i18n.language !== language) {
        setLanguage(i18n.language);
        setSelectedCategory(t('all'));
        setAllSkills([
            { category: t('frontend'), skills: ['HTML5','CSS','JavaScript','React','React Native'] },
            { category: t('backend'), skills: ['Node.js', 'Express', 'MongoDB', 'Postman'] },
        ]);
    }
  }, [i18n.language, t]);

  const filteredSkills = selectedCategory === t('all')
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="competence-container">
      <h1>{t('skills')}</h1>
      
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value={t('all')}>{t('all')}</option>
        <option value={t('frontend')}>{t('frontend')}</option>
        <option value={t('backend')}>{t('backend')}</option>
      </select>

      <ul>
        {filteredSkills.map(item => (
          <li key={item.category}>
            <strong>{item.category} :</strong>
            <ul>
              {item.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competence;
