import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Accueil": "Home",
            "Expérience": "Experience",
            "Formation": "Education",
            "Compétence": "Skills",
            "Informations personnelles": "Personal Info",
            "morningGreeting": "Good morning, welcome to my CV!",
            "afternoonGreeting": "Good afternoon, welcome to my CV!",
            "eveningGreeting": "Good evening, welcome to my CV!",
            "intro1": "Welcome to my professional profile! I am a JavaScript developer specializing in full stack development, with a solid foundation in modern technologies and practical experience gained through dynamic and diverse projects.",
            "intro2": "My journey has equipped me with a deep understanding of front-end frameworks such as React, as well as back-end technologies like Node.js and Express, enabling me to build robust and maintainable applications.",
            "intro3": "I invite you to browse my site to learn more about my projects and skills. Feel free to contact me to discuss how I can bring value to your team.",
            "title": "Experience",
            "beforeConversion": "Before retraining",
            "afterConversion": "After retraining?",
            "noExperienceText": "Unfortunately, I don't have any experience as a developer yet, but I hope this CV will highlight my skills.",
            "job4": "JAVASCRIPT DEVELOPER • FRENCH DIRECTORATE GENERAL FOR COMPETITION, CONSUMER AFFAIRS, AND FRAUD CONTROL (DGCCRF) • 2023",
            "job4Desc": 
                `<ul>
                <li>&bull; Significant enhancement of user experience, applying cutting-edge development practices to create intuitive and responsive interfaces that captivate and retain user attention.</li>
                <li>&bull; Refactoring and modernization of the codebase, ensuring platform integrity and scalability to support future innovations and improve application lifecycle management.</li>
                <li>&bull; Effective collaboration through a ticketing system and the GitHub platform, optimizing work processes and team communication.</li>
                </ul>`,
            "job3": "PROJECT MANAGER • ALTITUDE INFRASTRUCTURE • 2019-2023",
            "job3Desc": 
                `<ul>
                <li>&bull; Management and oversight of burying and diversion operations, successfully orchestrating projects through advanced management tools to ensure smooth execution and compliance with expectations.</li>
                <li>&bull; Leadership and direction of critical infrastructure projects, ensuring adherence to safety standards and regulatory requirements.</li>
                </ul>`,
            "job2": "MAINTENANCE AND AUDIT COORDINATOR • COVAGE NETWORK • 2016-2019",
            "job2Desc": 
                `<ul>
                <li>&bull; Supervision of maintenance activities for fiber optic networks, ensuring continuity and expansion of infrastructure with a strong focus on quality and durability.</li>
                <li>&bull; Optimized inventory management and coordination with suppliers to maintain operational efficiency and minimize costs.</li>
                <li>&bull; Responsibility for compliance monitoring, ensuring that all quality standards are rigorously maintained and proactively improved.</li>
                </ul>`,
            "job1": "SAV SUPERVISOR • FREE INFRASTRUCTURE • 2013-2016",
            "job1Desc": 
                `<ul>
                <li>&bull; Management of a SAV team, creating a motivating and high-performance work dynamic, and ensuring ongoing training and professional development of team members.</li>
                <li>&bull; Optimization of supply processes and contract management, ensuring efficient daily operations.</li>
                <li>&bull; Technical assistance and support to technicians, providing expert solutions to technical challenges, thus enhancing service quality.</li>
                </ul>`,
            "formationTitle": "Education",
            "formation1": "Full-Stack JavaScript Developer Training • 2023 • Le Reacteur",
            "formation2": "CSS Animations Training • 2022 • OpenClassrooms",
            "formation3": "HTML & CSS Training • 2021 • OpenClassrooms",
            "formation4": "Vocational Baccalaureate in Computer and Network Science • 2009 • Voillaume Polyvalent High School",
            "skills": "Skills",
            "frontEndSkills": "Throughout my academic and professional journey, I have acquired and perfected essential technical skills, particularly in the areas of front-end and back-end development. In front-end, I specialized in optimizing user experience through advanced mastery of HTML5, CSS, and JavaScript, integrating innovative frameworks such as React and React Native for responsive web and mobile applications. I also adopted Tailwind CSS for its flexibility in responsive design, allowing me to build aesthetically pleasing interfaces with increased efficiency.",
            "typeScriptSkills": "Complementing these skills with TypeScript, I reinforced the safety and robustness of my projects by incorporating static typing, which facilitates error management and code maintenance. In back-end, my expertise extends to designing and implementing server solutions with Node.js and Express, as well as managing databases with MongoDB, ensuring optimal performance and enhanced security. The use of Postman during API development has improved my workflow by allowing efficient testing and validation of requests.",
            "materialUISkills": "Adopting Material-UI has transformed how I approach user interface design in my React projects, offering a consistent suite of ready-to-use components that accelerate development while maintaining high aesthetic and functional quality. This technological versatility allows me to effectively contribute to all aspects of software development, from initial design to production, ensuring comprehensive and integrated solutions.",
            "all": "All",
            "frontend": "Front-end",
            "backend": "Back-end",
            "personalInfo": "Personal Information",
            "name": "Name",
            "email": "Email",
            "phone": "Phone",
            "license": "Driving License",
            "yes": "yes",
            "my_projects": "My Projects",
            "project1_name": "Name of Project 1",
            "project2_name": "Name of Project 2" ,            

        }
    },
    fr: {
        translation: {
            "Accueil": "Accueil",
            "Expérience": "Expérience",
            "Formation": "Formation",
            "Compétence": "Compétence",
            "Informations personnelles": "Informations personnelles",
            "morningGreeting": "Bonne matinée, bienvenue sur mon CV!",
            "afternoonGreeting": "Bon après-midi, bienvenue sur mon CV!",
            "eveningGreeting": "Bonsoir, bienvenue sur mon CV!",
            "intro1": "Bienvenue sur mon profil professionnel ! Je suis un développeur JavaScript spécialisé dans le développement full stack, avec une solide formation en technologies modernes et une expérience pratique acquise au cours de projets dynamiques et variés.",
            "intro2": "Mon parcours m'a équipé d'une compréhension approfondie des frameworks front-end tels que React, ainsi que des technologies back-end comme Node.js et Express, me permettant de construire des applications robustes et maintenables.",
            "intro3": "Je vous invite à parcourir mon site pour en savoir plus sur mes projets et mes compétences. N'hésitez pas à me contacter pour discuter de la façon dont je peux apporter de la valeur à votre équipe.",
            "title": "Expérience",
            "beforeConversion": "Avant la reconversion",
            "afterConversion": "Après reconversion ?",
            "noExperienceText": "Je n'ai malheureusement pas encore d'expérience en tant que développeur, mais j'espère que ce CV mettra en valeur mes compétences.",
            "job4": "DÉVELOPPEUR JAVASCRIPT • DIRECTION GÉNÉRALE DE LA CONCURRENCE, DE LA CONSOMMATION ET DE LA RÉPRESSION DES FRAUDES (DGCCRF) • 2023",
            "job4Desc": 
                `<ul>
                <li>&bull; Amélioration significative de l'expérience utilisateur, en appliquant des pratiques de développement avant-gardistes pour créer des interfaces intuitives et réactives qui captivent et retiennent l'attention des utilisateurs.</li>
                <li>&bull; Refactoring et modernisation du code, garantissant l'intégrité et l'évolutivité de la plateforme pour soutenir les innovations futures et améliorer la gestion du cycle de vie des applications.</li>
                <li>&bull; Collaboration efficace via un système de tickets et la plateforme GitHub, optimisant les processus de travail et la communication au sein de l'équipe.</li>
                </ul>`,
            "job3": "CHARGE DE PROJET • ALTITUDE INFRASTRUCTURE • 2019-2023",
            "job3Desc": 
                `<ul>
                <li>&bull; Gestion et pilotage des opérations d’enfouissement et de dévoiement, orchestrant avec succès les projets à travers des outils de gestion avancés pour assurer leur exécution fluide et conforme aux attentes.</li>
                <li>&bull; Leadership et direction de projets d'infrastructures critiques, veillant à la conformité avec les normes de sécurité et les exigences réglementaires.</li>
                </ul>`,
            "job2": "COORDINATEUR MAINTENANCE ET AUDIT • COVAGE NETWORK • 2016-2019",
            "job2Desc": 
                `<ul>
                <li>&bull; Supervision des activités de maintenance des réseaux fibre optique, en assurant la continuité et l'expansion des infrastructures avec une grande attention portée à la qualité et à la durabilité.</li>
                <li>&bull; Gestion optimisée des stocks et coordination avec les fournisseurs pour maintenir l'efficacité opérationnelle et minimiser les coûts.</li>
                <li>&bull; Responsabilité du suivi de conformité, en veillant à ce que tous les standards de qualité soient rigoureusement respectés et améliorés de manière proactive.</li>
                </ul>`,
            "job1": "SUPERVISEUR SAV • FREE INFRASTRUCTURE • 2013-2016",
            "job1Desc": 
                `<ul>
                <li>&bull; Management d'une équipe de techniciens SAV, en instaurant une dynamique de travail motivante et performante, et en assurant la formation et le développement professionnel continu des membres de l'équipe.</li>
                <li>&bull; Optimisation des processus d'approvisionnement et de gestion des contrats de travaux, en garantissant une exécution efficace des opérations quotidiennes.</li>
                <li>&bull; Assistance technique et support aux techniciens, en fournissant des solutions expertes pour les défis techniques, contribuant ainsi à l'amélioration de la qualité du service.</li>
                </ul>`,
            "formationTitle": "Formation",
            "formation1": "Formation Développeur JavaScript Full-Stack • 2023 • Le Reacteur",
            "formation2": "Formation Animations CSS • 2022 • OpenClassrooms",
            "formation3": "Formation HTML & CSS • 2021 • OpenClassrooms",
            "formation4": "Bac Pro Informatique et Reseaux • 2009 • Lycée Polyvalent Voillaume",
            "skills": "Compétences",
            "frontEndSkills": "Tout au long de mon parcours académique et professionnel, j'ai acquis et perfectionné des compétences techniques essentielles, notamment dans les domaines du développement front-end et back-end. En front-end, je me suis spécialisé dans l'optimisation de l'expérience utilisateur grâce à une maîtrise avancée de HTML5, CSS, et JavaScript, en intégrant des frameworks innovants tels que React et React Native pour des applications web et mobiles réactives. J'ai également adopté Tailwind CSS pour sa flexibilité dans le design responsive, me permettant de construire des interfaces esthétiquement plaisantes avec une efficacité accrue.",
            "typeScriptSkills": "Complétant ces compétences avec TypeScript, j'ai renforcé la sûreté et la robustesse de mes projets en intégrant le typage statique, ce qui facilite la gestion d'erreurs et la maintenance du code. En back-end, mon expertise s'étend à la conception et à l'implémentation de solutions serveur avec Node.js et Express, ainsi qu'à la gestion de bases de données avec MongoDB, garantissant des performances optimales et une sécurité renforcée. L'utilisation de Postman lors du développement API a amélioré mon flux de travail en permettant des tests et des validations efficaces des requêtes.",
            "materialUISkills": "L'adoption de Material-UI a transformé la manière dont j'aborde le design des interfaces utilisateur dans mes projets React, offrant une suite cohérente de composants prêts à l'emploi qui accélèrent le développement tout en maintenant une haute qualité esthétique et fonctionnelle. Cette polyvalence technologique me permet de contribuer efficacement à tous les aspects du développement de logiciels, de la conception initiale jusqu'à la production, assurant ainsi des solutions complètes et intégrées.",
            "all": "Toutes",
            "frontend": "Front-end",
            "backend": "Back-end",
            "personalInfo": "Informations Personnelles",
            "name": "Nom",
            "email": "Email",
            "phone": "Téléphone",
            "license": "Permis de conduire",
            "yes": "oui",
            "my_projects": "Mes Projets",
            "project1_name": "Nom du Projet 1",
            "project2_name": "Nom du Projet 2"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr", 
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
