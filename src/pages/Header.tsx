import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import i18n from "../config/i18n";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);
    }

    const navigationLinks = (
        <>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/" onClick={() => setMenuOpen(false)}>{t('Accueil')}</Button>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/experience" onClick={() => setMenuOpen(false)}>{t('Expérience')}</Button>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/formation" onClick={() => setMenuOpen(false)}>{t('Formation')}</Button>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/competence" onClick={() => setMenuOpen(false)}>{t('Compétence')}</Button>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/projects" onClick={() => setMenuOpen(false)}>{t('Projets')}</Button>
            <Button sx={navButtonSx} color="inherit" component={RouterLink} to="/info" onClick={() => setMenuOpen(false)}>{t('Informations personnelles')}</Button>        </>
    );

    return (
        <AppBar position="static" sx={mainHeaderSx}>
            <Toolbar>
                {isMobile && (
                    <IconButton sx={navButtonSx} edge="start" color="inherit" aria-label="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <MenuIcon />
                        <Typography variant="button" sx={{ ml: 2 }}>Menu</Typography>
                    </IconButton>
                )}
                <Drawer
                    anchor="left"
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    sx={drawerStyleSx}
                >
                    <Box
                        role="presentation"
                        onClick={() => setMenuOpen(false)}
                        onKeyDown={() => setMenuOpen(false)}
                        sx={{ height: '100vh', display: 'flex', flexDirection: 'column', pt: 2, alignItems: 'center', backgroundColor: '#2C3E50', color: 'white', gap: 2 }}
                    >
                        {navigationLinks}
                    </Box>
                </Drawer>
                <Box sx={navigationSx(isMobile)}>
                    {!isMobile && navigationLinks}
                </Box>
                <Box className="language-buttons">
                    <Button sx={languageButtonSx} onClick={() => changeLanguage('en')}>EN</Button>
                    <Button sx={languageButtonSx} onClick={() => changeLanguage('fr')}>FR</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const mainHeaderSx = {
    backgroundColor: '#2C3E50',
    padding: '10px 0',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    height: '100px'
};

const navButtonSx = {
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: 'white',
        color: '#333'
    },
    mt: 1,
    mb: 1
};

const drawerStyleSx = {
    '& .MuiDrawer-paper': { 
        marginTop: '100px', 
        width: '290px' 
    }
};

const navigationSx = (isMobile: boolean) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    overflow: 'hidden',
    height: 'auto',
    transition: 'height 0.3s ease'
});

const languageButtonSx = {
    padding: '5px 10px',
    fontSize: '12px',
    border: '2px solid #333',
    backgroundColor: 'white',
    borderRadius: '15px',
    cursor: 'pointer',
    color: '#333',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: '#333',
        color: 'white'
    },
    '&:focus': {
        outline: 'none',
        boxShadow: '0 0 5px #666'
    }
};

export default Header;
