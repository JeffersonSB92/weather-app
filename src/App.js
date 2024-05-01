import './App.css';
import React, { useState } from 'react';
import sol from './assets/sun.png';
import solNuvens from './assets/cloudy.png';
import chuva from './assets/storm.png';
import WeatherCard from './componets/weatherCard';
import { sendRequest } from './componets/consulta';

function App() {

  const [weatherData, setWeatherData] = useState(null);  // Estado para armazenar dados do clima
  const [city, setCity] = useState('');  // Estado para armazenar a cidade digitada
  const [error, setError] = useState(null);  // Estado para armazenar erros
  const [title, setTitle] = useState('Digite sua cidade');
  const [days, setDays] = useState('1');

  // Manipulador para o clique do botão "Enviar"
  const handleSend = async () => {
    try {
      const data = await sendRequest(city, days);  // Chama a função para obter dados do clima
      setWeatherData(data);  // Atualiza o estado com a resposta da requisição
      setError(null); // Limpa o erro se a requisição foi bem-sucedida
      setTitle(`Clima em ${city}`); 
      setCity(''); 
    } catch (err) {
      setError(err.message);  // Define o estado do erro se algo deu errado
    }
  };

  const handleClick = (newDays) => {
    setDays(newDays);

  }
  
  // Retorna a imagem com base na condição climática
  const getWeatherIcon = (condition) => {
    if (condition.includes("cloud")) {
      return solNuvens;
    } else if (condition.includes("rain") || condition.includes("storm")) {
      return chuva;
    } else {
      return sol;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
      handleSend(); // Chama a função de envio
    }
  };


  return (
    <header className="App">

        <div className='titulo'>
          <h1>{title}</h1>
          <input type='text' 
          className='inputText' 
          value={city}
          placeholder=' Digite a cidade e pressione ENTER ...'
          onChange={(e) => setCity(e.target.value)} 
          onKeyDown={handleKeyDown}/>
          <div className='button-group'>
          <button className='button-1' onClick={() => handleClick(1)}>1 Dia</button>
          <button className='button-2' onClick={() => handleClick(3)}>3 Dias</button>
          <button className='button-3' onClick={() => handleClick(5)}>5 Dias</button>  
          </div>          
        </div>
        {error && <div className='error-message'>Erro: {error}</div>}
        {weatherData &&(
          <WeatherCard 
            dayName= {weatherData.dayName}
            image= {getWeatherIcon(weatherData.forecast.forecastday[0].day.condition.text)}
            minTemp={weatherData.forecast.forecastday[0].day.mintemp_c.toString()}
            maxTemp={weatherData.forecast.forecastday[0].day.maxtemp_c.toString()}
          />    
        )}
      </header>
  );
}

export default App;
