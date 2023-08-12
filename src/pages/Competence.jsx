import { useState } from 'react';
import "../style/competence.css"

function Competence() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const allSkills = [
    { category: 'Front-end', skills: ['HTML5','CSS','JavaScript','React','React Native'] },
    { category: 'Back-end', skills: ['Node.js', 'Express', 'MongoDB', 'Postman'] },
    // ... autres compétences
  ];

  const filteredSkills = selectedCategory === 'Toutes'
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="competence-container">
      <h1>Compétences</h1>
      
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="Toutes">Toutes</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
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
