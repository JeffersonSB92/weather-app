import './App.css';
import chuva from './assets/chuva.gif';
import sol from './assets/diaLimpo.gif';
import solNuvens from './assets/solEntreNuvens.gif';
import noite from './assets/noiteLimpa.gif';
import nublado from './assets/nublado.gif';
import RealtimeClock from './componets/realtime';
import WeatherCard from './componets/weatherCard';

function App() {

  return (
    <div className="App">
      <header className="App-body">
        <div className='titulo'>
        <h2>Passo Fundo</h2>
        <RealtimeClock />
        <form action='www.google.com' id='inputText'>
        <input type='text' />
        </form>
        <button type='sumit' form='inputText'>Enviar</button>
        </div>
        <div className='Card-container'>
           
          <WeatherCard 
            dayName= "Segunda-feira"
            image= {sol}
            temperature="23"
          />         
          {/* <WeatherCard 
            dayName= "Terça-feira"
            image= {solNuvens}
            temperature="18"
          />         
          <WeatherCard 
            dayName= "Quarta-feira"
            image= {nublado}
            temperature="16"
          />         
          <WeatherCard 
            dayName= "Quinta-feira"
            image= {chuva}
            temperature="12"
          />         
          <WeatherCard 
            dayName= "Sexta-feira"
            image= {noite}
            temperature="14"
          />          */}
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
