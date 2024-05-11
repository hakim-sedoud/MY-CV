import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: 900,
      margin: '50px auto',
      padding: '30px',
      background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
      borderRadius: '15px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, background 0.5s',
      '&:hover': {
        transform: 'scale(1.02)'
      },
      '@media (max-width: 768px)': {
        maxWidth: '700px',
        padding: '25px'
      },
      '@media (max-width: 480px)': {
        maxWidth: '90%',
        padding: '20px'
      }
    }}>
      <Typography variant="h1" sx={{
        fontSize: '2.5rem',
        marginBottom: '30px',
        color: '#2C3E50',
        borderBottom: '3px solid #34495E',
        paddingBottom: '10px',
        display: 'inline-block',
        animation: 'slideIn 1s forwards'
      }}>
        {t('title')}
      </Typography>

      <Box className="experience-list">
        {[4, 3, 2, 1].map(index => (
          <ExperienceItem
            key={index}
            index={index}
            title={t(`job${index}`)}
            description={t(`job${index}Desc`)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
