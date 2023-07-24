import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import logo from '../images/logo.png';
import copy_dark from '../svg/copy-dark.svg';
import copy_light from '../svg/copy-light.svg';
import change_dark from '../svg/change-dark.svg';
import change_light from '../svg/change-light.svg';
import google_dark from '../svg/google-dark.svg';
import google_light from '../svg/google-light.svg';

const RandomSentences = [
    "In the realm of reality, dreams become tangible when our unwavering determination and relentless efforts weave the fabric of success.",
    "Try not to become a man of success, but rather try to become a man of value",
    "Dreams unfurl their wings and take flight when fueled by passion and nurtured by perseverance.",
    "The path to making dreams come true is paved with purpose, resilience, and unwavering belief in oneself.",
    "As the sun rises on the horizon of hope, dreams awaken from slumber and begin their journey to reality.",
    "In the symphony of life, dreams are the melodies that resonate when we dare to play them with courage.",
    "Dreams become vivid brushstrokes on the canvas of existence, painting a masterpiece when guided by ambition.",
    "When dreams intertwine with dedication, they blossom into the flowers of achievement.",
    "As the architect of our own destiny, dreams are the blueprints from which we build a future of possibilities.",
    "The universe conspires to fulfill dreams that are etched with purpose and eternally etched in our hearts.",
    "Every step taken towards a dream, no matter how small, is a stride closer to its realization.",
    "Dreams are the compass that guides us through uncharted waters, leading us to the shores of accomplishment.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "The secret to achieving your dreams is to break them down into smaller, more manageable goals.",
    "The difference between a dream and a reality is action.",
    "The world is your oyster, so go out there and make your dreams a reality."
];

const HomePage = () => {
  const [randomSentence, setRandomSentence] = useState(() => {
    const randomIndex = Math.floor(Math.random() * RandomSentences.length);
    return RandomSentences[randomIndex];
  });

  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
  const { theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    const closeContextMenu = () => {
      setContextMenuOpen(false);
    };
    
    document.addEventListener('click', closeContextMenu);
  
    return () => {
      document.removeEventListener('click', closeContextMenu);
    };
  }, []);  

  const copyMainlyExample = async () => {
    const textToCopy = `@inc "console"
  take @inc "console" name console
  console.print("Hello, World!")`;
  
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('Code copied to clipboard!');
    } catch (err) {
      alert('Failed to copy text');
    }
  };  

  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(randomSentence);
      alert('Quote copied to clipboard!');
    } catch (err) {
      alert('Failed to copy quote');
    }
  }

  const ContextMenu = ({ top, left, copyQuote, closeMenu }) => (
    <div style={{ position: 'fixed', top, left }} className="context-menu">
      <button onClick={copyQuote}>{theme === 'light' ? <img height={13} draggable={false} alt="" src={copy_dark} /> : <img draggable={false} height={13} alt="" src={copy_light} />} Copy</button>
      <hr />
      <button onClick={changeSentence}>{theme === 'light' ? <img height={13} draggable={false} alt="" src={change_dark} /> : <img draggable={false} height={13} alt="" src={change_light} />} Change sentence</button>
      <hr />
      <button onClick={() => window.open('http://www.google.com/search?q=' + encodeURIComponent(randomSentence), '_blank')}>{theme === 'light' ? <img height={17} draggable={false} alt="" src={google_dark} /> : <img draggable={false} height={17} alt="" src={google_light} />}Google It</button>
    </div>
  );  

  const openContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ top: e.pageY, left: e.pageX });
    setContextMenuOpen(true);
  };  

  const changeSentence = () => {
    const randomIndex = Math.floor(Math.random() * RandomSentences.length);
    setRandomSentence(RandomSentences[randomIndex]);
  };

  return (
    <div className="home-page">
      {contextMenuOpen && 
        <ContextMenu 
          top={contextMenuPosition.top} 
          left={contextMenuPosition.left} 
          copyQuote={copyQuote} 
          closeMenu={() => setContextMenuOpen(false)}
      />}
      <div className="home-page-content">
        <h1 className="home-page-title">Welcome to Louiml</h1>
        <p className="home-page-subtitle">Innovation for Tomorrow, Today with Louiml</p>
        <h2 className="home-page-reminder">Always remember</h2>
        <p className="home-page-quote" onClick={copyQuote} onContextMenu={openContextMenu}>{randomSentence}</p>
      </div>
      <div className='home-page-description'>
        <h1 className='home-page-title'>Coming Soon...</h1>
        <h3 className='home-page-subtitle'>Mainly (A programming language)</h3>
        <pre className='home-page-mainly-syntax'>
            <span className='home-page-mainly-title'>main.mly</span>
            <button className='home-page-mainly-button' onClick={copyMainlyExample}>{theme === 'light' ? <img height={13} draggable={false} alt="Copy" src={copy_dark} /> : <img draggable={false} height={13} alt="Copy" src={copy_light} />}</button>
            <hr />
            <br />
            <span><span style={{color: '#63dee2'}}>@inc</span> <span style={{color: '#7eb184'}}>"console"</span></span>
            <br />
            <span><span style={{color: '#b095b3'}}>take</span> <span style={{color: '#63dee2'}}>@inc</span> <span style={{color: '#7eb184'}}>"console"</span> <span style={{color: '#b095b3'}}>name</span> <span style={{color: '#faca6b'}}>console</span></span>
            <br />
            <br />
            <span><span style={{color: '#faca6b'}}>console</span>.<span style={{color: '#6da09b'}}>print</span><span style={{color: '#8bc5bd'}}>(</span><span style={{color: '#7eb184'}}>"Hello, World!"</span><span style={{color: '#8bc5bd'}}>)</span></span>
        </pre>
      </div>
      <img className="logoImage" draggable={false} src={logo} alt="Logo" />
    </div>
  );
};

export default HomePage;
