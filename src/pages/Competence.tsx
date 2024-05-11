import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const Competence: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '50px auto',
      padding: '30px',
      background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
      borderRadius: '15px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, background 0.5s',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      '@media (max-width: 768px)': {
        maxWidth: '700px',
        padding: '25px',
      },
      '@media (max-width: 480px)': {
        maxWidth: '90%',
        padding: '20px',
      }
    }}>
      <Typography variant="h1" sx={{
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
        marginBottom: '30px',
        marginRight: '60px',
        color: '#2C3E50',
        borderBottom: '3px solid #34495E',
        paddingBottom: '10px',
        display: 'inline-block',
        animation: 'slideIn 1s forwards',
        '@keyframes slideIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }}>
        {t('skills')}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{t('frontEndSkills')}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{t('typeScriptSkills')}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{t('materialUISkills')}</Typography>
    </Box>
  );
};

export default Competence;
