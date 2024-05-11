import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home(): JSX.Element {
  const { t } = useTranslation();
  const [greeting, setGreeting] = useState<string>('');

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
    <Container 
      sx={{
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        transition: 'background 0.5s',
      }}
    >
      <Typography 
        variant="h2" 
        sx={{
          fontSize: { xs: '4vw', sm: '4vw', md: '4vw' },
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#2C3E50',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
          opacity: 0,
          transform: 'translateY(-30px)',
          animation: 'slideIn 1s forwards 0.5s',
          '@keyframes slideIn': {
            to: {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}
      >
        {greeting}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{
          fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.25rem' },
          textAlign: 'justify',
          lineHeight: 1.6,
          maxWidth: { xs: '95%', sm: '90%', md: '80%' },
          margin: '1rem auto',
          color: '#34495E',
        }}
      >
        {t('intro1')}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem', textAlign: 'justify', lineHeight: 1.6, maxWidth: '80%', margin: '1rem auto', color: '#34495E' }}>
        {t('intro2')}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem', textAlign: 'justify', lineHeight: 1.6, maxWidth: '80%', margin: '1rem auto', color: '#34495E' }}>
        {t('intro3')}
      </Typography>
    </Container>
  );
}

export default Home;
