import React from "react";
import { useTranslation } from 'react-i18next';
import { Box, Typography, Theme, SxProps } from '@mui/material';

const Formation: React.FC = () => {
  const { t } = useTranslation();

  // Styles communs pour les paragraphes
  const paragraphStyles: SxProps<Theme> = {
    fontSize: '1.3rem',
    margin: '20px',
    color: '#34495E',
    paddingLeft: '20px',
    position: 'relative',
    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#E74C3C',
      fontSize: '2rem'
    },
    '&:hover': {
      paddingLeft: '30px'
    },
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
      margin: '15px'
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem',
      margin: '15px'
    }
  };

  const containerStyles: SxProps<Theme> = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
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
  };

  const titleStyles: SxProps<Theme> = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#2C3E50',
    borderBottom: '3px solid #34495E',
    paddingBottom: '10px',
    display: 'inline-block',
    animation: 'slideIn 1s forwards',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
      marginBottom: '25px'
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
      marginBottom: '20px'
    }
  };

  return (
    <Box className="formation-container" sx={containerStyles}>
      <Typography variant="h1" sx={titleStyles}>
        {t('formationTitle')}
      </Typography>
      {['formation1', 'formation2', 'formation3', 'formation4'].map((key, index) => (
        <Typography key={index} variant="body1" sx={paragraphStyles}>
          {t(key)}
        </Typography>
      ))}
    </Box>
  );
};

export default Formation;
