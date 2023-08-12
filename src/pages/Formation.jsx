import "../style/formation.css";
import { useTranslation } from 'react-i18next';

function Formation() {
  const { t } = useTranslation();

  return (
    <div className="formation-container">
      <h1>{t('formationTitle')}</h1>
      <p>{t('formation1')}</p>
      <p>{t('formation2')}</p>
      <p>{t('formation3')}</p>
      <p>{t('formation4')}</p>  
    </div>
  );
}

export default Formation;
