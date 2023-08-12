import "../style/personalInfo.css"

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <h1>Informations Personnelles</h1>
      <p>Nom : HAKIM SEDOUD</p>
      <p>Email : <a className="email-link" href="mailto:sedoud.hakim@gmail.com">sedoud.hakim@gmail.com</a></p>
      <p>Téléphone : 07 78 24 11 13</p>
      <p>Permis : B</p>
      {/* Ajoutez d'autres informations ici... */}
    </div>
  );
}

export default PersonalInfo;
