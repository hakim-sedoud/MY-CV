import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, List, ListItem, Link } from '@mui/material';

interface Project {
  name: string;
  link: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    { name: 'Marvel Front-End', link: 'https://github.com/hakim-sedoud/marvel-front.git' },
    { name: 'Marvel Back-End', link: 'https://github.com/hakim-sedoud/marvel-back.git' },
    { name: 'Deliveroo Front-End', link: 'https://github.com/hakim-sedoud/Deliveroo-Front.git' },
    { name: 'Deliveroo Back-End', link: 'https://github.com/hakim-sedoud/Deliveroo-Back.git' },
    { name: 'Vinted Front-End', link: 'https://github.com/hakim-sedoud/Vinted-front.git' },
    { name: 'Vinted Back-End', link: 'https://github.com/hakim-sedoud/vinted.git' }
  ];

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
      ':hover': {
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
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
        marginBottom: '30px',
        color: '#2C3E50',
        borderBottom: '3px solid #E74C3C',
        paddingBottom: '10px',
        display: 'inline-block',
        animation: 'slideIn 1s forwards'
      }}>
        {t('my_projects')}
      </Typography>
      <List sx={{ padding: 0 }}>
        {projects.map((project, index) => (
          <ListItem key={index} sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
            color: '#34495E',
            margin: '20px 0',
            transition: 'color 0.3s ease, transform 0.3s ease',
            ':hover': {
              color: '#E74C3C',
              transform: 'scale(1.03)'
            }
          }}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none" sx={{
              color: 'inherit',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#E74C3C'
              }
            }}>
              {project.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Projects;
