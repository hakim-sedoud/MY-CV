import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../style/projects.css"; // Vous devrez créer ce fichier CSS

function Projects() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  const [projects, setProjects] = useState([
    { name: t('marvel-FrontEnd'), link: 'https://github.com/hakim-sedoud/marvel-front.git' },
    { name: t('marvel-BackEnd'), link: 'https://github.com/hakim-sedoud/marvel-back.git' },
    { name: t('Deliveroo-FrontEnd'), link: 'https://github.com/hakim-sedoud/Deliveroo-Front.git' },
    { name: t('Deliveroo-BackEnd'), link: 'https://github.com/hakim-sedoud/Deliveroo-Back.git' },
    { name: t('Vinted-FrontEnd'), link: 'https://github.com/hakim-sedoud/Vinted-front.git' },
    { name: t('Vinted-BackEnd'), link: 'https://github.com/hakim-sedoud/vinted.git' },


    // Ajoutez d'autres projets comme vous le souhaitez
  ]);

  // useEffect(() => {
  //   if (i18n.language !== language) {
  //       setLanguage(i18n.language);
  //       setProjects([
  //           { name: t('project1_name'), link: 'https://github.com/votreNomUtilisateur/projet1' },
  //           { name: t('project2_name'), link: 'https://github.com/votreNomUtilisateur/projet2' },
  //           // Mettez à jour les autres projets de la même manière
  //       ]);
  //   }
  // }, [i18n.language, t]);

  return (
    <div className="projects-container">
      <h1>{t('my_projects')}</h1>

      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;