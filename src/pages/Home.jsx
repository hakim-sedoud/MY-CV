import { useState, useEffect } from 'react';
import "../style/home.css";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting(t('morningGreeting'));
    } else if (hour < 18) {
      setGreeting(t('afternoonGreeting'));
    } else {
      setGreeting(t('eveningGreeting'));
    }
  }, [t]);

  return (
    <div className="home-container">
        <h1>{greeting}</h1>
        <p>{t('intro1')}</p>
        <p>{t('intro2')}</p>
        <p>{t('intro3')}</p>
    </div>
  );
}

export default Home;
