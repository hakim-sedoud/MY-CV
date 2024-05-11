import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

const PersonalInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box 
      className="personal-info-container"
      sx={{
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
          padding: '25px',
        },
        '@media (max-width: 480px)': {
          maxWidth: '90%',
          padding: '20px',
        }
      }}
    >
      <Typography 
        variant="h1"
        sx={{
          marginBottom: '30px',
          color: '#2C3E50',
          borderBottom: '3px solid #34495E',
          paddingBottom: '10px',
          display: 'inline-block',
          animation: 'slideIn 1s forwards',
          fontSize: {
            xs: '1.8rem', // for mobile
            sm: '2.2rem', // for tablets
            md: '2.5rem'  // for desktops and larger
          }
        }}
      >
        {t('personalInfo')}
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <AccountCircleIcon color="action" />
        <Typography variant="body1" sx={typographySx}> HAKIM SEDOUD</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <EmailIcon color="action" />
        <Typography variant="body1" sx={typographySx}> 
          <Link href="mailto:sedoud.hakim@gmail.com" sx={linkSx}>
            sedoud.hakim@gmail.com
          </Link>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <PhoneIcon color="action" />
        <Typography variant="body1" sx={typographySx}>+33 6 95 77 94 51</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <DriveEtaIcon color="action" />
        <Typography variant="body1" sx={typographySx}> {t('yes')}</Typography>
      </Box>
    </Box>
  );
};

const typographySx = {
  fontSize: '1.3rem',
  margin: '20px',
  color: '#34495E',
  paddingLeft: '20px',
  position: 'relative',
  transition: 'padding-left 0.3s ease',
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
    marginBottom: '15px'
  },
  '@media (max-width: 480px)': {
    fontSize: '1rem',
    marginBottom: '15px'
  }
};

const linkSx = {
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
};

export default PersonalInfo;
