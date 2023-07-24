import React from 'react';
import psyai from '../images/psyai.png';
import TouishTranslator from '../images/TouishTranslator.png';
import LMLMusic from '../images/LMLMusic.png';
import Mainly from '../images/Mainly.png';
import Elements from '../images/Elements.png';

const ServicesPage = () => {

  const PsyAIRoute = () => {
    window.open('https://chat.louiml.net', '_blank');
  };

  const TouishTranslatorRoute = () => {
    window.open('https://louiml.github.io/TouishTranslator/', '_blank');
  };

  return (
    <div className="services-page">
      <h1 className='services-title-page'>Our Services</h1>
      <div className='services-ai-page'>
        <h3 className='services-service-title-page'>PsyAI</h3>
        <img alt='' draggable={false} height={150} src={psyai} />
        <hr />
        <button onClick={PsyAIRoute} className='services-button-ai-page'>Check Out!</button>
      </div>
      <div className='services-ai-page'>
        <h3 className='services-service-title-page'>Touish Translator</h3>
        <img alt='' draggable={false} height={150} src={TouishTranslator} />
        <hr />
        <button onClick={TouishTranslatorRoute} className='services-button-ai-page'>Check Out!</button>
      </div>
      <div className='services-ai-page'>
        <h3 className='services-service-title-page'>LML Music</h3>
        <img alt='' draggable={false} height={150} src={LMLMusic} />
        <hr />
        <button className='services-disable-button-ai-page'>Check Out!</button>
      </div>
      <div className='services-ai-page'>
        <h3 className='services-service-title-page'>Mainly</h3>
        <img alt='' draggable={false} height={150} src={Mainly} />
        <hr />
        <button className='services-disable-button-ai-page'>Check Out!</button>
      </div>
      <div className='services-ai-page'>
        <h3 className='services-service-title-page'>Elements</h3>
        <img alt='' draggable={false} height={150} src={Elements} />
        <hr />
        <button className='services-disable-button-ai-page'>Check Out!</button>
      </div>
    </div>
  );
};

export default ServicesPage;
