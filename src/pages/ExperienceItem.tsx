import React from 'react';
import { Box, Typography } from '@mui/material';

interface ExperienceItemProps {
  index: number;
  title: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = React.memo(({ index, title, description }) => (
  <Box sx={{
    '& p': {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '1.3rem',
      color: '#34495E',
      margin: '20px',
      position: 'relative',
      paddingLeft: '20px',
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
      }
    }
  }}>
    <Typography component="p">
      {title}
    </Typography>
    <Box className="description" dangerouslySetInnerHTML={{ __html: description }} sx={{
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
      padding: '5px 15px',
      color: '#34495E',
      marginTop: '10px',
      borderLeft: '3px solid #E74C3C',
      fontSize: '20px',
      animation: 'slideDown 0.5s forwards'
    }} />
  </Box>
));

export default ExperienceItem;
