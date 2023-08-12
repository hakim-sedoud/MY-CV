import { useState, useEffect } from 'react';
import "../style/home.css"

function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      setGreeting('Bonne matinée, bienvenue sur mon CV!');
    } else if (hour < 18) {
      setGreeting('Bon après-midi, bienvenue sur mon CV!');
    } else {
      setGreeting('Bonsoir, bienvenue sur mon CV!');
    }
  }, []); 

  return (
    <div className="home-container">
        <h1>{greeting}</h1>
        <p>Entamant une reconversion professionnelle, je me suis rigoureusement formé aux langages JavaScript en tant que développeur full stack, m'offrant ainsi une expertise fraîche et une approche innovante.</p>
        <p>Après avoir exploré mon CV, je vous invite à consulter le dernier onglet où vous trouverez toutes les informations pour me contacter.</p>
        <p>Animé d'une forte ambition, j'espère avoir l'opportunité de débuter cette nouvelle aventure à vos côtés.</p>
    </div>
);
}

export default Home;
