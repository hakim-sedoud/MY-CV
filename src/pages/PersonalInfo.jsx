import { useTranslation } from 'react-i18next';
import "../style/personalInfo.css"

function PersonalInfo() {
  const { t } = useTranslation();

  return (
    <div className="personal-info-container">
      <h1>{t('personalInfo')}</h1>
      <p>{t('name')} : HAKIM SEDOUD</p>
      <p>{t('email')} : <a className="email-link" href="mailto:sedoud.hakim@gmail.com">sedoud.hakim@gmail.com</a></p>
      <p>{t('phone')} : 07 78 24 11 13</p>
      <p>{t('license')} : {t('yes')}</p>
    </div>
  );
}

export default PersonalInfo;
