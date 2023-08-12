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
            "intro1": "Undergoing a career change, I rigorously trained in JavaScript languages as a full stack developer, thus offering me a fresh expertise and an innovative approach.",
            "intro2": "After browsing my CV, I invite you to check the last tab where you will find all the information to contact me.",
            "intro3": "Driven by strong ambition, I hope to have the opportunity to start this new adventure with you.",
            "title": "Experience",
            "beforeConversion": "Before retraining",
            "afterConversion": "After retraining?",
            "noExperienceText": "Unfortunately, I don't have any experience as a developer yet, but I hope this CV will highlight my skills.",
            "job1": "PROJECT MANAGER • ALTITUDE INFRASTRUCTURE• JUNE 2022",
            "job1Desc": "- Pilot projects for burial and rerouting operations in the CALVADOS (14) department",
            "job2": "MAINTENANCE AND AUDIT COORDINATOR • COVAGE NETWORK • 2016-2019",
            "job2Desc": `- Supervise and plan maintenance, expansion, and burial of optical fiber networks.
                         - Optimize inventory and coordinate with providers.
                         - Handle non-compliance reports and monitor compliance at the national level.`,
            "job3": "SAV SUPERVISOR • FREE INFRASTRUCTURE • 2013-2016",
            "job3Desc": `- Manage a SAV team of 13 technicians.
                         - Schedule planning.
                         - Handle provisioning.
                         - Company pilot.
                         - Provide technician support.`,
            "formationTitle": "Education",
            "formation1": "Full-Stack JavaScript Developer Training • 2023 • Le Reacteur",
            "formation2": "CSS Animations Training • 2022 • OpenClassrooms",
            "formation3": "HTML & CSS Training • 2021 • OpenClassrooms",
            "formation4": "Bac Pro • 2009 • Lycée Polyvalent Voillaume",
            "skills": "Skills",
            "all": "All",
            "frontend": "Front-end",
            "backend": "Back-end",
            "personalInfo": "Personal Information",
            "name": "Name",
            "email": "Email",
            "phone": "Phone",
            "license": "Driving License",
            "yes": "yes"             

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
            "intro1": "Entamant une reconversion professionnelle, je me suis rigoureusement formé aux langages JavaScript en tant que développeur full stack, m'offrant ainsi une expertise fraîche et une approche innovante.",
            "intro2": "Après avoir exploré mon CV, je vous invite à consulter le dernier onglet où vous trouverez toutes les informations pour me contacter.",
            "intro3": "Animé d'une forte ambition, j'espère avoir l'opportunité de débuter cette nouvelle aventure à vos côtés.",
            "title": "Expérience",
            "beforeConversion": "Avant la reconversion",
            "afterConversion": "Après reconversion ?",
            "noExperienceText": "Je n'ai malheureusement pas encore d'expérience en tant que développeur, mais j'espère que ce CV mettra en valeur mes compétences.",
            "job1": "CHARGE DE PROJET • ALTITUDE INFRASTRUCTURE• JUIN 2022",
            "job1Desc": "- Piloter les opérations d’enfouissements et dévoiements sur le département du CALVADOS (14)",
            "job2": "COORDINATEUR MAINTENANCE ET AUDIT • COVAGE NETWORK • 2016-2019",
            "job2Desc": `- Supervision et Planification des activités de maintenance, d’extensions, et d’enfouissements des réseaux fibre optique.
                         - Optimisation des stocks et coordination des prestataires.
                         - Gestion des rapports de malfaçons et suivi de la mise en conformité au niveau national.`,
            "job3": "SUPERVISEUR SAV • FREE INFRASTRUCTURE • 2013-2016",
            "job3Desc": `- Gestion d’une équipe de SAV de 13 techniciens.
                         - Mise en place des plannings.
                         - Gestion des approvisionnements.
                         - Pilotage d'entreprise de travaux.
                         - Effectuer le support des techniciens.`,
            "formationTitle": "Formation",
            "formation1": "Formation Développeur JavaScript Full-Stack • 2023 • Le Reacteur",
            "formation2": "Formation Animations CSS • 2022 • OpenClassrooms",
            "formation3": "Formation HTML & CSS • 2021 • OpenClassrooms",
            "formation4": "Bac Pro • 2009 • Lycée Polyvalent Voillaume",
            "skills": "Compétences",
            "all": "Toutes",
            "frontend": "Front-end",
            "backend": "Back-end",
            "personalInfo": "Informations Personnelles",
            "name": "Nom",
            "email": "Email",
            "phone": "Téléphone",
            "license": "Permis de conduire",
            "yes": "oui"
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
