import "../style/experience.css";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Experience() {
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
      }, 2000);  // On attend 2s (durée de l'animation des yeux) avant d'afficher le texte
    } else {
      setShowText(false);
    }
  }

  return (
    <div className="experience-container">
      <div>
        <h1>Expérience</h1>
        <button className="btn" onClick={handleShowEyesToggle}>
          {showEyes ? "Avant la reconversion" : "Après reconversion ?"}
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
       {showText && <p className="text-after-animation">Je n'ai malheureusement pas encore d'expérience en tant que développeur, mais j'espère que ce CV mettra en valeur mes compétences.</p>}

        </>

      ) : (
        <div className="experience-list">
          <div onClick={() => handleToggle(1)} className="experience-item">
            <p>CHARGE DE PROJET • ALTITUDE INFRASTRUCTURE• JUIN 2022 {activeDescription === 1 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 1 && <div className="description">
              - Piloter les opérations d’enfouissements et dévoiements sur le département du CALVADOS (14) <br />
            </div>}
          </div>

          <div onClick={() => handleToggle(2)} className="experience-item">
            <p>COORDINATEUR MAINTENANCE ET AUDIT • COVAGE NETWORK • 2016-2019 {activeDescription === 2 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 2 && <div className="description">
              - Supervision et Planification des activités de maintenance, d’extensions, et d’enfouissements des réseaux fibre optique. <br />
              - Optimisation des stocks et coordination des prestataires. <br />
              - Gestion des rapports de malfaçons et suivi de la mise en conformité au niveau national. <br />
            </div>}
          </div>

          <div onClick={() => handleToggle(3)} className="experience-item">
            <p>SUPERVISEUR SAV • FREE INFRASTRUCTURE • 2013-2016 {activeDescription === 3 ? <FaChevronUp /> : <FaChevronDown />}</p>
            {activeDescription === 3 && <div className="description">
              - Gestion d’une équipe de SAV de 13 techniciens <br />
              - Mise en place des plannings <br />
              - Gestion des approvisionnements <br />
              - Pilotage d'entreprise de travaux <br />
              - Effectuer le support des techniciens <br />
            </div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
