import './App.css';
import React, { useState } from 'react';
import sol from './assets/sun.png';
import solNuvens from './assets/cloudy.png';
import chuva from './assets/storm.png';
import RealtimeClock from './componets/realtime';
import WeatherCard from './componets/weatherCard';
import { sendRequest } from './componets/consulta';

function App() {

  const [weatherData, setWeatherData] = useState(null);  // Estado para armazenar dados do clima
  const [city, setCity] = useState('');  // Estado para armazenar a cidade digitada
  const [error, setError] = useState(null);  // Estado para armazenar erros

  // Manipulador para o clique do botão "Enviar"
  const handleSend = async () => {
    try {
      const data = await sendRequest(city);  // Chama a função para obter dados do clima
      setWeatherData(data);  // Atualiza o estado com a resposta da requisição
      setError(null);  // Limpa o erro se a requisição foi bem-sucedida
    } catch (err) {
      setError(err.message);  // Define o estado do erro se algo deu errado
    }
  };

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

  return (
    <header className="App">

        <div className='titulo'>
          <h1>Clima em {city || 'Passo Fundo'}</h1>
          <RealtimeClock />
          <input type='text' 
          className='inputText' 
          value={city} 
          onChange={(e) => setCity(e.target.value)} />
          <button 
          className='sendButton'
          onClick={handleSend}
          >
            Enviar
          </button>
        </div>
        {error && <div className='error-message'>Erro: {error}</div>}
        {weatherData &&(
          <WeatherCard 
            dayName= {weatherData.dayName}
            image= {getWeatherIcon(weatherData.current.condition.text)}
            temperature={weatherData.current.temp_c.toString()}
          />    
        )}
      </header>
  );
}

export default App;
