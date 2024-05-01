import React from 'react';
import '../componets/weatherCard.css'

// Componente reutilizável para um card de clima
const WeatherCard = ({ dayName, image, minTemp, maxTemp }) => {
  return (
    <div className='card1'>
      <div className="background"></div> {/* Plano de fundo */}
      <div className="content"> {/* Conteúdo do card */}
        <h1>{dayName}</h1>
        <img className='imageWeather' src={image} alt={dayName} />
        <div className='min-max-temp'>
          <div>
          <h3>Mínima</h3>
          <h3>{minTemp}°C</h3>
          </div>
          <div>
          <h3>Máxima</h3>
          <h3>{maxTemp}°C</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
