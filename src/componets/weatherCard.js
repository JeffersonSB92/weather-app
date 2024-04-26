import React from 'react';

// Componente reutilizável para um card de clima
const WeatherCard = ({ dayName, image, temperature }) => {
  return (
    <div className='card1'>
      <div className="background"></div> {/* Plano de fundo */}
      <div className="content"> {/* Conteúdo do card */}
        <h3>{dayName}</h3>
        <br />
        <img src={image} alt={dayName} />
        <br />
        <h1>{temperature}°C</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
