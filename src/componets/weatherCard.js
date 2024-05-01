import React from 'react';
import '../componets/weatherCard.css'

// Componente reutilizável para um card de clima
const WeatherCard = ({ dayName, image, temperature }) => {
  return (
    <div className='card1'>
      <div className="background"></div> {/* Plano de fundo */}
      <div className="content"> {/* Conteúdo do card */}
        <h2>{dayName}</h2>
        <img className='imageWeather' src={image} alt={dayName} />
        <h2>{temperature}°C</h2>
      </div>
    </div>
  );
};

export default WeatherCard;
